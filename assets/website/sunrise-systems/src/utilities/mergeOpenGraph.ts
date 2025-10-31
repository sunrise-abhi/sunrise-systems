import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Business development for commercial contractors. We help you achieve predictable growth with proven sales, marketing, and software strategies.',
  images: [
    {
      url: `${getServerSideURL()}/og-image.webp`,
    },
  ],
  siteName: 'Sunrise Systems',
  title: 'Sunrise Systems',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
