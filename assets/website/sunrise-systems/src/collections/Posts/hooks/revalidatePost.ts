import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import type { Post } from '../../../payload-types'

const revalidateViaAPI = async (path?: string, tag?: string) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const secret = process.env.REVALIDATION_SECRET
  
  if (!secret) {
    console.error('[revalidatePost] REVALIDATION_SECRET not set')
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
      console.error('[revalidatePost] Revalidation failed:', response.status, text)
    } else {
      console.log('[revalidatePost] Revalidation successful:', { path, tag })
    }
  } catch (error) {
    console.error('[revalidatePost] Error calling revalidation API:', error)
  }
}

export const revalidatePost: CollectionAfterChangeHook<Post> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/posts/${doc.slug}`

      payload.logger.info(`Revalidating post at path: ${path}`)

      await revalidateViaAPI(path)
      await revalidateViaAPI(undefined, 'posts-sitemap')
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/posts/${previousDoc.slug}`

      payload.logger.info(`Revalidating old post at path: ${oldPath}`)

      await revalidateViaAPI(oldPath)
      await revalidateViaAPI(undefined, 'posts-sitemap')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = async ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/posts/${doc?.slug}`

    await revalidateViaAPI(path)
    await revalidateViaAPI(undefined, 'posts-sitemap')
  }

  return doc
}
