import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import type { Page } from '../../../payload-types'

const revalidateViaAPI = async (path?: string, tag?: string) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const secret = process.env.REVALIDATION_SECRET
  
  if (!secret) {
    console.error('[revalidatePage] REVALIDATION_SECRET not set')
    return
  }

  try {
    const response = await fetch(`${serverUrl}/api/revalidate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-revalidate-secret': secret,
      },
      body: JSON.stringify({ path, tag }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('[revalidatePage] Revalidation failed:', response.status, text)
    } else {
      console.log('[revalidatePage] Revalidation successful:', { path, tag })
    }
  } catch (error) {
    console.error('[revalidatePage] Error calling revalidation API:', error)
  }
}

export const revalidatePage: CollectionAfterChangeHook<Page> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`

      payload.logger.info(`Revalidating page at path: ${path}`)

      await revalidateViaAPI(path)
      await revalidateViaAPI(undefined, 'pages-sitemap')
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`

      payload.logger.info(`Revalidating old page at path: ${oldPath}`)

      await revalidateViaAPI(oldPath)
      await revalidateViaAPI(undefined, 'pages-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = async ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`
    await revalidateViaAPI(path)
    await revalidateViaAPI(undefined, 'pages-sitemap')
  }

  return doc
}
