import { getClientSideURL } from '@/utilities/getURL'

/**
 * Processes media resource URL to ensure proper formatting for Next.js Image optimization
 * @param url The original URL from the resource
 * @param cacheTag Optional cache tag to append to the URL
 * @returns Properly formatted URL with cache tag if provided
 */
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''

  if (cacheTag && cacheTag !== '') {
    cacheTag = encodeURIComponent(cacheTag)
  }

  // Check if URL already has http/https protocol (absolute URL)
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return cacheTag ? `${url}?${cacheTag}` : url
  }

  // Convert Payload media URLs to use the API endpoint
  // Payload stores media URLs as /media/filename but serves them via /api/media/file/filename
  let processedUrl = url
  if (url.startsWith('/media/')) {
    const filename = url.replace('/media/', '')
    processedUrl = `/api/media/file/${filename}`
  }

  // Prepend the base URL to create an absolute URL
  // Next.js Image optimization requires absolute URLs for remote images
  const baseUrl = getClientSideURL()
  return cacheTag ? `${baseUrl}${processedUrl}?${cacheTag}` : `${baseUrl}${processedUrl}`
}
