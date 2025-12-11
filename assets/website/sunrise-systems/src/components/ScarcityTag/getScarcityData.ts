import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Scarcity } from '@/payload-types'

export async function getScarcityData(): Promise<Scarcity | null> {
  try {
    const scarcity = await getCachedGlobal('scarcity', 0)()
    return scarcity as Scarcity
  } catch (error) {
    console.error('Error fetching scarcity data:', error)
    return null
  }
}
