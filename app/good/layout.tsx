import type { Metadata } from 'next'
import { 
  OrganizationSchema, 
  SoftwareSchema, 
  WebSiteSchema 
} from '@/components/seo/schemas'

// GOOD: Comprehensive, keyword-rich metadata
export const metadata: Metadata = {
  // Descriptive title with keywords
  title: {
    template: '%s | TechFlow',
    default: 'TechFlow | Cloud Project Management Software for Teams',
  },
  
  // Compelling meta description with CTA
  description: 'TechFlow is cloud-based project management software that helps teams manage tasks, track projects, and collaborate effectively. Start your 30-day free trial.',
  
  // Keywords (less important now, but still useful)
  keywords: ['project management', 'task management', 'team collaboration', 'workflow automation', 'kanban', 'gantt chart'],
  
  // Authors
  authors: [{ name: 'TechFlow Team' }],
  
  // Canonical URL
  metadataBase: new URL('https://nextjs-seo-demo.vercel.app/good'),
  alternates: {
    canonical: 'https://nextjs-seo-demo.vercel.app/good',
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TechFlow',
    title: 'TechFlow | Cloud Project Management Software for Teams',
    description: 'Manage tasks, track projects, and collaborate effectively. Start your 30-day free trial.',
    url: 'https://nextjs-seo-demo.vercel.app/',
    images: [
      {
        url: 'images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechFlow - Project Management Software',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@techflow',
    creator: '@techflow',
    title: 'TechFlow | Cloud Project Management Software',
    description: 'Manage tasks, track projects, collaborate effectively. 30-day free trial.',
    images: ['images/og-image.png'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
  },
  
  // Icons
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function GoodSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data - Organization, Software, WebSite schemas */}
      <OrganizationSchema />
      <SoftwareSchema />
      <WebSiteSchema />
      
      {/* Skip navigation for accessibility */}
      <a 
        href="#main-content" 
        className="skip-nav bg-primary text-white px-4 py-2 focus:outline-none"
      >
        Skip to main content
      </a>
      
      {children}
    </>
  )
}
