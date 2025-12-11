import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { DM_Sans, Inter, IBM_Plex_Mono } from 'next/font/google'
import React from 'react'
import Script from 'next/script'

const dmSans = DM_Sans({
  weight: '600',
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-inter',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
})

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { GridDebug } from '@/components/layout/GridDebug'
import { BaselineDebug } from '@/components/layout/BaselineDebug'
import { SmoothScroll } from '@/components/SmoothScroll'
import { ScarcityBanner } from '@/components/ScarcityTag/ScarcityBanner'
import { getScarcityData } from '@/components/ScarcityTag/getScarcityData'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  const scarcityData = await getScarcityData()

  return (
    <html className={cn(dmSans.variable, inter.variable, ibmPlexMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Q8B741Y3QM'}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-Q8B741Y3QM'}');
          `}
        </Script>

        {/* Reveal B2B Tracking */}
        <Script id="rb2b-script" strategy="afterInteractive">
          {`
            !function(key) {
              if (window.reb2b) return;
              window.reb2b = {loaded: true};
              var s = document.createElement("script");
              s.async = true;
              s.src = "https://b2bjsstore.s3.us-west-2.amazonaws.com/b/" + key + "/" + key + ".js.gz";
              document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);
            }("Z6PVLHPP506R");
          `}
        </Script>
      </head>
      <body>
        <SmoothScroll />
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <ScarcityBanner scarcityData={scarcityData} />
          <Header />
          {children}
          <Footer />
          {process.env.NODE_ENV === 'development' && (
            <>
              <GridDebug />
              <BaselineDebug />
            </>
          )}
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@sunrisesystems',
  },
}
