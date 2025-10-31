import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

// Use NEXT_PUBLIC_SERVER_URL from environment, with fallbacks
const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined)
  || process.env.__NEXT_PRIVATE_ORIGIN
  || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      // Allow images from the custom domain
      {
        protocol: 'https',
        hostname: 'sunrisesystems.co',
      },
      // Allow images from the Railway domain (for Payload-served media)
      {
        protocol: 'https',
        hostname: new URL(NEXT_PUBLIC_SERVER_URL).hostname,
      },
      {
        protocol: 'http',
        hostname: new URL(NEXT_PUBLIC_SERVER_URL).hostname,
      },
      // Also allow localhost for development
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
