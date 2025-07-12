import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Navigation from './[lang]/components/Navigation'
import Footer from './[lang]/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'masaya official site',
  description: 'AI活用サポーター・クリエイター',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}