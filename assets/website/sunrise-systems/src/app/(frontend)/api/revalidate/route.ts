import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Verify the request is coming from Payload
    const secret = request.headers.get('x-revalidate-secret')
    
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    const body = await request.json()
    const { path, tag } = body

    // Revalidate by path if provided
    if (path) {
      console.log(`[Revalidate API] Revalidating path: ${path}`)
      revalidatePath(path)
    }

    // Revalidate by tag if provided
    if (tag) {
      console.log(`[Revalidate API] Revalidating tag: ${tag}`)
      revalidateTag(tag)
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    console.error('[Revalidate API] Error:', err)
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    )
  }
}

