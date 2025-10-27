import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { homeSunriseSeed } from './home-sunrise'
import { aboutPageSeed } from './page-about'
import { servicesPageSeed } from './page-services'
import { caseStudiesPageSeed } from './page-case-studies'
import { dbiaPageSeed } from './page-dbia'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'
import { servicesSeedData } from './services-seed'
import { caseStudiesSeedData } from './case-studies-seed'

const collections: CollectionSlug[] = [
  'categories',
  'media',
  'pages',
  'posts',
  'services',
  'case-studies',
  'forms',
  'form-submissions',
  'search',
]

const globals: GlobalSlug[] = ['header', 'footer']

const categories = ['Technology', 'News', 'Finance', 'Design', 'Software', 'Engineering']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // we need to clear the media directory before seeding
  // as well as the collections and globals
  // this is because while `yarn seed` drops the database
  // the custom `/api/seed` endpoint does not
  payload.logger.info(`— Clearing collections and globals...`)

  // clear the database
  await Promise.all(
    globals.map((global) =>
      payload.updateGlobal({
        slug: global,
        data: {
          navItems: [],
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )

  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
  ])

  const [demoAuthor, image1Doc, image2Doc, image3Doc, _imageHomeDoc] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category,
        },
      }),
    ),
  ])

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding case studies...`)

  const caseStudiesCreated = await Promise.all(
    caseStudiesSeedData.map((caseStudy) =>
      payload.create({
        collection: 'case-studies',
        depth: 0,
        context: {
          disableRevalidate: true,
        },
        data: caseStudy,
      }),
    ),
  )

  const caseStudyIds = {
    delta: caseStudiesCreated.find(c => c.slug === 'delta')?.id || '',
    breakthrough: caseStudiesCreated.find(c => c.slug === 'breakthrough-lighting')?.id || '',
    kings: caseStudiesCreated.find(c => c.slug === 'kings-drywall')?.id || '',
    efi: caseStudiesCreated.find(c => c.slug === 'efi')?.id || '',
  }

  payload.logger.info(`— Seeding services...`)

  const servicesCreated = await Promise.all(
    servicesSeedData(caseStudyIds).map((service) =>
      payload.create({
        collection: 'services',
        depth: 0,
        context: {
          disableRevalidate: true,
        },
        data: service,
      }),
    ),
  )

  const serviceIds = {
    sales: servicesCreated.find(s => s.slug === 'sales')?.id || '',
    marketing: servicesCreated.find(s => s.slug === 'marketing')?.id || '',
    software: servicesCreated.find(s => s.slug === 'software')?.id || '',
  }

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  const [_homePage, aboutPage, servicesPage, caseStudiesPage, dbiaPage, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      data: homeSunriseSeed(caseStudyIds),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: aboutPageSeed,
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: servicesPageSeed(serviceIds),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: caseStudiesPageSeed(caseStudyIds),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: dbiaPageSeed(caseStudyIds),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageData(),
    }),
  ])

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'reference',
              label: 'Services',
              reference: {
                relationTo: 'pages',
                value: servicesPage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Case Studies',
              reference: {
                relationTo: 'pages',
                value: caseStudiesPage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'About',
              reference: {
                relationTo: 'pages',
                value: aboutPage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'TRY IT RISK-FREE',
              appearance: 'default',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'reference',
              label: 'Services',
              reference: {
                relationTo: 'pages',
                value: servicesPage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Case Studies',
              reference: {
                relationTo: 'pages',
                value: caseStudiesPage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'About',
              reference: {
                relationTo: 'pages',
                value: aboutPage.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Try it risk-free',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
