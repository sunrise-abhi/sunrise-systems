'use client'

import React from 'react'

export default function PayloadError({
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
    <div style={{ padding: '2rem' }}>
      <h2>Something went wrong in the admin panel</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

