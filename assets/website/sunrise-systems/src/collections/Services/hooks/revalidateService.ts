import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import type { Service } from '../../../payload-types'

const revalidateViaAPI = async (path?: string, tag?: string) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const secret = process.env.REVALIDATION_SECRET
  
  if (!secret) {
    console.error('[revalidateService] REVALIDATION_SECRET not set')
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
      console.error('[revalidateService] Revalidation failed:', response.status, text)
    } else {
      console.log('[revalidateService] Revalidation successful:', { path, tag })
    }
  } catch (error) {
    console.error('[revalidateService] Error calling revalidation API:', error)
  }
}

export const revalidateService: CollectionAfterChangeHook<Service> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/services/${doc.slug}`

      payload.logger.info(`Revalidating service at path: ${path}`)

      await revalidateViaAPI(path)
      await revalidateViaAPI('/services') // Also revalidate the services index page
    }

    // If the service was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/services/${previousDoc.slug}`

      payload.logger.info(`Revalidating old service at path: ${oldPath}`)

      await revalidateViaAPI(oldPath)
      await revalidateViaAPI('/services')
    }
  }
  return doc
}

export const revalidateServiceDelete: CollectionAfterDeleteHook<Service> = async ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/services/${doc?.slug}`
    await revalidateViaAPI(path)
    await revalidateViaAPI('/services')
  }

  return doc
}

