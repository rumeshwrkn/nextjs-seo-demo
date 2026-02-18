import type { Metadata } from 'next'

// BAD: Generic, non-descriptive metadata
export const metadata: Metadata = {
  // Generic title - no keywords
  title: 'Home | TechFlow',
  
  // Missing description entirely (commented out)
  // description: '...',
  
  // Missing Open Graph
  // openGraph: { ... },
  
  // Missing Twitter cards
  // twitter: { ... },
  
  // Missing canonical
  // alternates: { canonical: '...' },
  
  // No robots directive
  // robots: { ... },
  robots: 'nofollow, noindex'
}

export default function BadSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* No structured data (JSON-LD) */}
      {/* No skip navigation */}
      {/* No resource hints */}
      {children}
    </>
  )
}
