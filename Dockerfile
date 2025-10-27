# Dockerfile for Railway deployment from repository root
# App is located in: assets/website/sunrise-systems/

FROM node:22.17.0-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files from subdirectory
COPY assets/website/sunrise-systems/package.json assets/website/sunrise-systems/pnpm-lock.yaml* ./

# Install dependencies
RUN \
  if [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "pnpm-lock.yaml not found." && exit 1; \
  fi

# Build the source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY assets/website/sunrise-systems/ ./

# Build-time environment variables
ARG DATABASE_URI
ARG PAYLOAD_SECRET
ARG NEXT_PUBLIC_SERVER_URL
ARG CRON_SECRET

ENV DATABASE_URI=$DATABASE_URI
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV CRON_SECRET=$CRON_SECRET

# Build Next.js app
RUN corepack enable pnpm && pnpm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Create entrypoint script to handle volume permissions
RUN echo '#!/bin/sh' > /entrypoint.sh && \
    echo 'set -e' >> /entrypoint.sh && \
    echo '# Remove lost+found directory if it exists (created by Railway volume)' >> /entrypoint.sh && \
    echo 'if [ -d /app/public/media/lost+found ]; then' >> /entrypoint.sh && \
    echo '  rm -rf /app/public/media/lost+found 2>/dev/null || true' >> /entrypoint.sh && \
    echo 'fi' >> /entrypoint.sh && \
    echo '# Ensure media directory exists and has correct permissions' >> /entrypoint.sh && \
    echo 'mkdir -p /app/public/media' >> /entrypoint.sh && \
    echo 'chown -R nextjs:nodejs /app/public/media 2>/dev/null || true' >> /entrypoint.sh && \
    echo '# Switch to nextjs user and start the app' >> /entrypoint.sh && \
    echo 'exec su-exec nextjs:nodejs sh -c "HOSTNAME=0.0.0.0 node server.js"' >> /entrypoint.sh && \
    chmod +x /entrypoint.sh

# Install su-exec for dropping privileges
RUN apk add --no-cache su-exec

EXPOSE 3000

ENV PORT=3000

# Run as root initially to handle volume permissions, then drop to nextjs user
ENTRYPOINT ["/entrypoint.sh"]

