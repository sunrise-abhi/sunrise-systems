import { getPayload } from 'payload'
import config from './src/payload.config.js'

const initScarcity = async () => {
  try {
    const payload = await getPayload({ config })
    
    console.log('Checking for existing scarcity global...')
    
    const existing = await payload.findGlobal({
      slug: 'scarcity',
    })
    
    if (existing) {
      console.log('Scarcity global already exists:', existing)
    } else {
      console.log('Creating scarcity global...')
      await payload.updateGlobal({
        slug: 'scarcity',
        data: {
          enabled: false,
          totalSlots: 10,
          remainingSlots: 3,
          bannerText: '',
          ctaTagText: '',
        },
      })
      console.log('Scarcity global created successfully!')
    }
    
    process.exit(0)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

initScarcity()
