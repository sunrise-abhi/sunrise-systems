#!/usr/bin/env node

/**
 * Image Analysis Script
 * 
 * Analyzes images in the public/media directory to identify optimization opportunities
 * 
 * Usage: node scripts/analyze-images.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mediaDir = path.resolve(__dirname, '../public/media')

function getFileSize(filePath) {
  const stats = fs.statSync(filePath)
  return stats.size
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}

function analyzeImages() {
  if (!fs.existsSync(mediaDir)) {
    console.error(`❌ Media directory not found: ${mediaDir}`)
    return
  }

  const files = fs.readdirSync(mediaDir)
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase()
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'].includes(ext)
  })

  console.log('\n📊 Image Analysis Report\n')
  console.log('━'.repeat(80))
  
  const stats = {
    total: imageFiles.length,
    formats: {},
    sizes: {
      small: 0,    // < 100KB
      medium: 0,   // 100KB - 500KB
      large: 0,    // 500KB - 1MB
      xlarge: 0,   // > 1MB
    },
    totalSize: 0,
    largestFiles: [],
    nonWebP: [],
  }

  imageFiles.forEach(file => {
    const filePath = path.join(mediaDir, file)
    const size = getFileSize(filePath)
    const ext = path.extname(file).toLowerCase()

    // Format stats
    stats.formats[ext] = (stats.formats[ext] || 0) + 1
    stats.totalSize += size

    // Size categorization
    const sizeKB = size / 1024
    if (sizeKB < 100) stats.sizes.small++
    else if (sizeKB < 500) stats.sizes.medium++
    else if (sizeKB < 1024) stats.sizes.large++
    else stats.sizes.xlarge++

    // Track largest files
    stats.largestFiles.push({ file, size })

    // Track non-WebP images
    if (ext !== '.webp' && ext !== '.avif') {
      stats.nonWebP.push({ file, size, ext })
    }
  })

  // Sort largest files
  stats.largestFiles.sort((a, b) => b.size - a.size)
  stats.largestFiles = stats.largestFiles.slice(0, 10)

  // Print results
  console.log(`\n📁 Total Images: ${stats.total}`)
  console.log(`💾 Total Size: ${formatBytes(stats.totalSize)}`)
  console.log(`📊 Average Size: ${formatBytes(stats.totalSize / stats.total)}\n`)

  console.log('🎨 Format Distribution:')
  console.log('━'.repeat(80))
  Object.entries(stats.formats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([ext, count]) => {
      const percentage = ((count / stats.total) * 100).toFixed(1)
      console.log(`  ${ext.padEnd(10)} ${count.toString().padStart(4)} files (${percentage}%)`)
    })

  console.log('\n📏 Size Distribution:')
  console.log('━'.repeat(80))
  console.log(`  < 100KB     ${stats.sizes.small.toString().padStart(4)} files`)
  console.log(`  100-500KB   ${stats.sizes.medium.toString().padStart(4)} files`)
  console.log(`  500KB-1MB   ${stats.sizes.large.toString().padStart(4)} files`)
  console.log(`  > 1MB       ${stats.sizes.xlarge.toString().padStart(4)} files`)

  console.log('\n🔝 Top 10 Largest Files:')
  console.log('━'.repeat(80))
  stats.largestFiles.forEach((item, index) => {
    console.log(`  ${(index + 1).toString().padStart(2)}. ${item.file.substring(0, 50).padEnd(52)} ${formatBytes(item.size).padStart(12)}`)
  })

  if (stats.nonWebP.length > 0) {
    console.log('\n⚠️  Non-WebP/AVIF Images (Optimization Opportunities):')
    console.log('━'.repeat(80))
    
    const nonWebPStats = stats.nonWebP.slice(0, 20)
    const totalNonWebPSize = stats.nonWebP.reduce((sum, item) => sum + item.size, 0)
    const potentialSavings = totalNonWebPSize * 0.4 // Conservative 40% savings estimate
    
    console.log(`  Total: ${stats.nonWebP.length} files (${formatBytes(totalNonWebPSize)})`)
    console.log(`  💡 Potential savings with WebP: ~${formatBytes(potentialSavings)}\n`)
    
    console.log('  Top 20 candidates for conversion:')
    nonWebPStats.forEach((item, index) => {
      const savings = formatBytes(item.size * 0.4)
      console.log(`    ${(index + 1).toString().padStart(2)}. ${item.file.substring(0, 40).padEnd(42)} ${formatBytes(item.size).padStart(10)} → Save ~${savings}`)
    })
  }

  console.log('\n✨ Recommendations:')
  console.log('━'.repeat(80))
  
  const recommendations = []
  
  if (stats.nonWebP.length > 0) {
    recommendations.push(`🔄 Convert ${stats.nonWebP.length} non-WebP images to WebP format`)
    recommendations.push(`   Potential savings: ~${formatBytes(stats.nonWebP.reduce((sum, item) => sum + item.size, 0) * 0.4)}`)
  }
  
  if (stats.sizes.xlarge > 10) {
    recommendations.push(`📏 Review ${stats.sizes.xlarge} images larger than 1MB`)
    recommendations.push(`   Consider reducing resolution or quality`)
  }
  
  if (stats.formats['.png'] > stats.total * 0.3) {
    recommendations.push(`🖼️  High PNG usage detected (${stats.formats['.png']} files)`)
    recommendations.push(`   Convert to WebP unless transparency is required`)
  }
  
  if (recommendations.length === 0) {
    recommendations.push('✅ Your images are well optimized!')
  }
  
  recommendations.forEach((rec, index) => {
    console.log(`  ${index + 1}. ${rec}`)
  })

  console.log('\n💡 Next Steps:')
  console.log('━'.repeat(80))
  console.log('  1. Deploy the code changes (quality, formats, etc.)')
  console.log('  2. Re-upload large images through Payload CMS for automatic WebP conversion')
  console.log('  3. Test with: npx lighthouse https://your-site.com --view')
  console.log('  4. Monitor Core Web Vitals in production')
  console.log('\n')
}

// Run analysis
try {
  analyzeImages()
} catch (error) {
  console.error('❌ Error analyzing images:', error.message)
  process.exit(1)
}

