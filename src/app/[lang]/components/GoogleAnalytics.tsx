"use client"

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Google Analytics イベント送信用のヘルパー関数
export const gtag = (event: string, action: string, params: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(event, action, params)
  }
}

// 型定義
declare global {
  interface Window {
    gtag: (event: string, action: string, params: any) => void
    dataLayer: any[]
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      console.log('GA_MEASUREMENT_ID not found')
      return
    }
    
    const url = pathname + searchParams.toString()
    
    // ページビューの送信（configはScript内で既に実行済み）
    if (typeof window.gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: url,
        page_title: document.title,
      })
    }
  }, [pathname, searchParams])

  // Google Analyticsを読み込む（開発環境でも動作確認可能）
  if (!GA_MEASUREMENT_ID) {
    console.log('Google Analytics: Measurement ID not configured')
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          console.log('Google Analytics loaded successfully')
        }}
        onError={() => {
          console.error('Failed to load Google Analytics')
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              page_title: document.title,
              debug_mode: ${process.env.NODE_ENV === 'development' ? 'true' : 'false'}
            });
            console.log('Google Analytics initialized with ID: ${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  )
}