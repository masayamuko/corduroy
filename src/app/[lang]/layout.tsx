import './globals.css'
import { Metadata } from 'next'
import { generateSEOMetadata } from '@/components/SEOHead'
import { Lang } from '@/types'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  return generateSEOMetadata({
    lang: lang as Lang,
    path: ''
  });
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
