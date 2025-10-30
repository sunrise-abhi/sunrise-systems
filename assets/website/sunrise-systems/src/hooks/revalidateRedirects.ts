import type { CollectionAfterChangeHook } from 'payload'

const revalidateViaAPI = async (tag: string) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const secret = process.env.REVALIDATION_SECRET
  
  if (!secret) {
    console.error('[revalidateRedirects] REVALIDATION_SECRET not set')
    return
  }

  try {
    const response = await fetch(`${serverUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-revalidate-secret': secret,
      },
      body: JSON.stringify({ tag }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('[revalidateRedirects] Revalidation failed:', response.status, text)
    } else {
      console.log('[revalidateRedirects] Revalidation successful:', { tag })
    }
  } catch (error) {
    console.error('[revalidateRedirects] Error calling revalidation API:', error)
  }
}

export const revalidateRedirects: CollectionAfterChangeHook = async ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating redirects`)

  await revalidateViaAPI('redirects')

  return doc
}
