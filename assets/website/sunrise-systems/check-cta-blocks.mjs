import { getPayload } from 'payload'
import config from './src/payload.config.js'

const checkCTABlocks = async () => {
  try {
    const payload = await getPayload({ config })
    
    console.log('Fetching all pages...\n')
    
    const pages = await payload.find({
      collection: 'pages',
      depth: 0,
    })
    
    console.log(`Found ${pages.docs.length} pages\n`)
    
    for (const page of pages.docs) {
      if (page.layout && Array.isArray(page.layout)) {
        const ctaBlocks = page.layout.filter(block => block.blockType === 'cta')
        
        if (ctaBlocks.length > 0) {
          console.log(`\n📄 Page: "${page.title || page.id}"`)
          console.log(`   Slug: /${page.slug || ''}`)
          console.log(`   CTA Blocks: ${ctaBlocks.length}`)
          
          ctaBlocks.forEach((block, index) => {
            console.log(`\n   CTA Block #${index + 1}:`)
            console.log(`   - Headline: "${block.headline || 'N/A'}"`)
            console.log(`   - showScarcity: ${block.showScarcity ?? 'undefined'}`)
            console.log(`   - backgroundColor: ${block.backgroundColor || 'N/A'}`)
            console.log(`   - blockId: ${block.blockId || 'N/A'}`)
          })
        }
      }
    }
    
    console.log('\n✅ Done!\n')
    process.exit(0)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

checkCTABlocks()





