#!/usr/bin/env node

/**
 * Upload local media files to production Railway deployment
 * 
 * Usage:
 *   1. Set environment variables:
 *      PROD_URL=https://sunrise-systems-production.up.railway.app
 *      PROD_EMAIL=your-admin-email
 *      PROD_PASSWORD=your-admin-password
 * 
 *   2. Run: node scripts/upload-media-to-production.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import FormData from 'form-data'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PROD_URL = process.env.PROD_URL || 'https://sunrise-systems-production.up.railway.app'
const PROD_EMAIL = process.env.PROD_EMAIL
const PROD_PASSWORD = process.env.PROD_PASSWORD

if (!PROD_EMAIL || !PROD_PASSWORD) {
  console.error('❌ Error: PROD_EMAIL and PROD_PASSWORD environment variables required')
  console.error('Usage: PROD_EMAIL=admin@example.com PROD_PASSWORD=yourpass node scripts/upload-media-to-production.mjs')
  process.exit(1)
}

const localMediaDir = path.resolve(__dirname, '../public/media')

async function login() {
  console.log('🔐 Logging in to production...')
  
  const response = await fetch(`${PROD_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: PROD_EMAIL,
      password: PROD_PASSWORD,
    }),
  })

  if (!response.ok) {
    throw new Error(`Login failed: ${response.statusText}`)
  }

  const data = await response.json()
  console.log('✅ Logged in successfully')
  return data.token
}

async function uploadFile(filePath, token) {
  const fileName = path.basename(filePath)
  const form = new FormData()
  
  form.append('file', fs.createReadStream(filePath), fileName)

  const response = await fetch(`${PROD_URL}/api/media`, {
    method: 'POST',
    headers: {
      'Authorization': `JWT ${token}`,
      ...form.getHeaders(),
    },
    body: form,
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Upload failed for ${fileName}: ${error}`)
  }

  return await response.json()
}

async function uploadAllMedia(token) {
  if (!fs.existsSync(localMediaDir)) {
    console.error(`❌ Local media directory not found: ${localMediaDir}`)
    return
  }

  const files = fs.readdirSync(localMediaDir)
    .filter(file => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))

  console.log(`\n📁 Found ${files.length} media files to upload\n`)

  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (const file of files) {
    try {
      console.log(`📤 Uploading: ${file}`)
      await uploadFile(path.join(localMediaDir, file), token)
      console.log(`✅ Uploaded: ${file}`)
      uploaded++
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log(`⏭️  Skipped (exists): ${file}`)
        skipped++
      } else {
        console.error(`❌ Failed: ${file} - ${error.message}`)
        failed++
      }
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`   ✅ Uploaded: ${uploaded}`)
  console.log(`   ⏭️  Skipped: ${skipped}`)
  console.log(`   ❌ Failed: ${failed}`)
  console.log(`   📁 Total: ${files.length}`)
}

async function main() {
  try {
    const token = await login()
    await uploadAllMedia(token)
    console.log('\n✨ Media sync complete!')
  } catch (error) {
    console.error('\n❌ Error:', error.message)
    process.exit(1)
  }
}

main()

