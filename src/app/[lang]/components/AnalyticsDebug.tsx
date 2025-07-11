"use client"

import { useEffect, useState } from 'react'

export default function AnalyticsDebug() {
  const [analyticsStatus, setAnalyticsStatus] = useState<string>('Checking...')
  const [measurementId, setMeasurementId] = useState<string>('')

  useEffect(() => {
    const checkAnalytics = () => {
      const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
      setMeasurementId(gaId || 'Not configured')

      if (!gaId) {
        setAnalyticsStatus('❌ Measurement ID not configured')
        return
      }

      if (typeof window !== 'undefined') {
        if (typeof window.gtag === 'function') {
          setAnalyticsStatus('✅ Google Analytics loaded')
        } else {
          setAnalyticsStatus('⚠️ Google Analytics not loaded yet')
        }
      } else {
        setAnalyticsStatus('⏳ Server side rendering')
      }
    }

    checkAnalytics()
    
    // 少し遅れて再チェック
    const timer = setTimeout(checkAnalytics, 2000)
    return () => clearTimeout(timer)
  }, [])

  // 開発環境でのみ表示
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-sm z-50 max-w-xs">
      <h3 className="font-bold mb-2">Analytics Debug</h3>
      <p><strong>ID:</strong> {measurementId}</p>
      <p><strong>Status:</strong> {analyticsStatus}</p>
      <p><strong>Environment:</strong> {process.env.NODE_ENV}</p>
      <button 
        onClick={() => {
          if (window.gtag) {
            window.gtag('event', 'debug_test', {
              event_category: 'debug',
              event_label: 'manual_test'
            })
            alert('Test event sent to Google Analytics')
          } else {
            alert('Google Analytics not loaded')
          }
        }}
        className="mt-2 bg-blue-500 px-2 py-1 rounded text-xs"
      >
        Send Test Event
      </button>
    </div>
  )
} 