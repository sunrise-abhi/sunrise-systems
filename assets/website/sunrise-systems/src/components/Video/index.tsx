'use client'

import React from 'react'
import type { Media as MediaType } from '@/payload-types'

interface VideoProps {
  media?: MediaType | string | null
  videoUrl?: string | null
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

/**
 * Extracts video ID and platform from YouTube or Vimeo URL
 */
function parseVideoUrl(url: string): { platform: 'youtube' | 'vimeo' | null; videoId: string | null } {
  // YouTube patterns
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const youtubeMatch = url.match(youtubeRegex)
  if (youtubeMatch) {
    return { platform: 'youtube', videoId: youtubeMatch[1] }
  }

  // Vimeo patterns
  const vimeoRegex = /(?:vimeo\.com\/)(\d+)/
  const vimeoMatch = url.match(vimeoRegex)
  if (vimeoMatch) {
    return { platform: 'vimeo', videoId: vimeoMatch[1] }
  }

  return { platform: null, videoId: null }
}

export const Video: React.FC<VideoProps> = ({
  media,
  videoUrl,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
}) => {
  // Priority 1: External video URL (YouTube/Vimeo)
  if (videoUrl) {
    const { platform, videoId } = parseVideoUrl(videoUrl)

    if (platform === 'youtube' && videoId) {
      const autoplayParam = autoPlay ? '&autoplay=1&mute=1' : ''
      const loopParam = loop ? `&loop=1&playlist=${videoId}` : ''
      
      return (
        <div className={`relative w-full h-full ${className}`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1${autoplayParam}${loopParam}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title="YouTube video"
          />
        </div>
      )
    }

    if (platform === 'vimeo' && videoId) {
      const autoplayParam = autoPlay ? '&autoplay=1&muted=1' : ''
      const loopParam = loop ? '&loop=1' : ''
      
      return (
        <div className={`relative w-full h-full ${className}`}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0${autoplayParam}${loopParam}`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title="Vimeo video"
          />
        </div>
      )
    }
  }

  // Priority 2: Uploaded video file
  if (media && typeof media === 'object' && media.mimeType?.startsWith('video/')) {
    return (
      <video
        src={media.url || ''}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        className={`w-full h-full object-cover ${className}`}
      >
        Your browser does not support the video tag.
      </video>
    )
  }

  // No video to display
  return null
}

