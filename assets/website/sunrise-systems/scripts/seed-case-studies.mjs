import { getPayload } from 'payload'
import config from '../dist/payload.config.js'

async function seedCaseStudies() {
  try {
    console.log('🌱 Starting case studies seed...\n')
    
    const payload = await getPayload({ config })

    // Import the case study data
    const { caseStudyDeltaRewrite } = await import('../dist/endpoints/seed/case-study-delta-rewrite.js')
    const { caseStudyBreakthroughRewrite } = await import('../dist/endpoints/seed/case-study-breakthrough-rewrite.js')
    const { caseStudyKingsRewrite } = await import('../dist/endpoints/seed/case-study-kings-rewrite.js')
    const { caseStudyEFIRewrite } = await import('../dist/endpoints/seed/case-study-efi-rewrite.js')

    const caseStudiesData = [
      caseStudyDeltaRewrite,
      caseStudyBreakthroughRewrite,
      caseStudyKingsRewrite,
      caseStudyEFIRewrite,
    ]

    console.log('Creating case studies...\n')

    for (const caseStudy of caseStudiesData) {
      console.log(`  + Creating: ${caseStudy.clientName}`)
      await payload.create({
        collection: 'case-studies',
        data: caseStudy,
      })
    }

    console.log('\n✅ Case studies created successfully!')
    console.log('\nNew case studies:')
    console.log('  - Delta Family Companies (slug: delta-updated)')
    console.log('  - Breakthrough Lighting (slug: breakthrough-lighting-updated)')
    console.log('  - Kings Drywall (slug: kings-drywall-updated)')
    console.log('  - EFI Construction (slug: efi-updated)')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding case studies:', error)
    process.exit(1)
  }
}

seedCaseStudies()

