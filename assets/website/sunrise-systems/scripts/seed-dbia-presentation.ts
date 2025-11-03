import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

async function seedDBIAPresentation() {
  try {
    console.log('🌱 Starting DBIA 2025 presentation page seed...\n')
    
    const payload = await getPayload({ config })

    // Import the page data  
    const { pageDBIA2025Presentation } = await import('@/endpoints/seed/page-dbia-2025-presentation')

    console.log('Creating Design Build Expo 2025 presentation page...\n')

    // Check if page already exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'design-build-expo-2025',
        },
      },
    })

    if (existing.docs.length > 0) {
      console.log('⚠️  Page with slug "design-build-expo-2025" already exists.')
      console.log('   Deleting existing page and creating a new one...\n')
      
      await payload.delete({
        collection: 'pages',
        id: existing.docs[0].id,
      })
    }

    const page = await payload.create({
      collection: 'pages',
      data: pageDBIA2025Presentation(),
    })

    console.log('✅ Presentation page created successfully!\n')
    console.log('Page details:')
    console.log(`  - Title: ${page.title}`)
    console.log(`  - Slug: ${page.slug}`)
    console.log(`  - URL: /${page.slug}`)
    console.log(`  - Sections: 10 slides`)
    console.log(`  - Status: ${page._status}`)
    console.log('\nYou can now view the presentation at:')
    console.log(`  http://localhost:3000/${page.slug} (in development)`)
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding DBIA presentation page:', error)
    process.exit(1)
  }
}

seedDBIAPresentation()
