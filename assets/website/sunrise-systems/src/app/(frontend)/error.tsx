'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container py-28">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>Something went wrong</h1>
        <p className="mb-4">An error occurred while loading this page.</p>
        <Button onClick={reset} variant="default">
          Try again
        </Button>
      </div>
    </div>
  )
}

