import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'

import type { CaseStudy } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const caseStudies = await payload.find({
    collection: 'case-studies',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = caseStudies.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

export default async function CaseStudy({
  params: paramsPromise,
}: {
  params: Promise<{ slug?: string }>
}) {
  const { slug = '' } = await paramsPromise
  const url = '/case-studies/' + slug
  const caseStudy = await queryCaseStudyBySlug({ slug })

  if (!caseStudy) {
    return <PayloadRedirects url={url} />
  }

  return (
    <article className="pb-24">
      <PageClient />

      {/* Render blocks from case study content */}
      <RenderBlocks blocks={caseStudy?.content || []} />
    </article>
  )
}

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug?: string }>
}): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const caseStudy = await queryCaseStudyBySlug({ slug })

  return generateMeta({ doc: caseStudy })
}

const queryCaseStudyBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'case-studies',
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

