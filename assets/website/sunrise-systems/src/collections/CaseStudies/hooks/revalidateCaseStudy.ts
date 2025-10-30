import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import type { CaseStudy } from '../../../payload-types'

const revalidateViaAPI = async (path?: string, tag?: string) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const secret = process.env.REVALIDATION_SECRET
  
  if (!secret) {
    console.error('[revalidateCaseStudy] REVALIDATION_SECRET not set')
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
      console.error('[revalidateCaseStudy] Revalidation failed:', response.status, text)
    } else {
      console.log('[revalidateCaseStudy] Revalidation successful:', { path, tag })
    }
  } catch (error) {
    console.error('[revalidateCaseStudy] Error calling revalidation API:', error)
  }
}

export const revalidateCaseStudy: CollectionAfterChangeHook<CaseStudy> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/case-studies/${doc.slug}`

      payload.logger.info(`Revalidating case study at path: ${path}`)

      await revalidateViaAPI(path)
      await revalidateViaAPI('/case-studies') // Also revalidate the case studies index page
    }

    // If the case study was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/case-studies/${previousDoc.slug}`

      payload.logger.info(`Revalidating old case study at path: ${oldPath}`)

      await revalidateViaAPI(oldPath)
      await revalidateViaAPI('/case-studies')
    }
  }
  return doc
}

export const revalidateCaseStudyDelete: CollectionAfterDeleteHook<CaseStudy> = async ({ doc, req: { context } }) => {
  if (!context.disableRevalidate) {
    const path = `/case-studies/${doc?.slug}`
    await revalidateViaAPI(path)
    await revalidateViaAPI('/case-studies')
  }

  return doc
}

