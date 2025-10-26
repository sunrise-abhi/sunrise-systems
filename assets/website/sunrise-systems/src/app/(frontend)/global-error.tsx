'use client'

import React from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="container py-28">
          <div className="prose max-w-none">
            <h1 style={{ marginBottom: 0 }}>Something went wrong</h1>
            <p className="mb-4">An error occurred while loading this page.</p>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center h-10 px-3 py-3 rounded-[5px] text-base text-foreground hover:text-primary"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

