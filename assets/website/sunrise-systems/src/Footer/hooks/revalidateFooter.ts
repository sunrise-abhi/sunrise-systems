import type { GlobalAfterChangeHook } from 'payload'

const revalidateViaAPI = async (tag: string) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const secret = process.env.REVALIDATION_SECRET
  
  if (!secret) {
    console.error('[revalidateFooter] REVALIDATION_SECRET not set')
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
      console.error('[revalidateFooter] Revalidation failed:', response.status, text)
    } else {
      console.log('[revalidateFooter] Revalidation successful:', { tag })
    }
  } catch (error) {
    console.error('[revalidateFooter] Error calling revalidation API:', error)
  }
}

export const revalidateFooter: GlobalAfterChangeHook = async ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating footer`)

    await revalidateViaAPI('global_footer')
  }

  return doc
}
