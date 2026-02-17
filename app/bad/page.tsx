import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/ui/Hero'
import { Features } from '@/components/ui/Features'
import { Testimonials } from '@/components/ui/Testimonials'
import { FAQ } from '@/components/ui/FAQ'
import { CTA, Footer } from '@/components/ui/CTAFooter'
import Link from 'next/link'

export default function BadSEOPage() {
  return (
    <>
      {/* No breadcrumb navigation */}
      
      {/* Badge to identify this is the bad version */}
      <div className="bg-red-500 text-white text-center py-2 text-sm">
        BAD SEO Example - <Link href="/" className="underline">Back to Home</Link> | <Link href="/good" className="underline">View Good SEO</Link>
      </div>
      
      <Header variant="bad" />
      
      <main>
        {/* No id for skip navigation target */}
        <Hero variant="bad" />
        <Features variant="bad" />
        <Testimonials variant="bad" />
        <FAQ variant="bad" />
        <CTA variant="bad" />
      </main>
      
      <Footer variant="bad" />
      
      {/* No analytics (would normally be here) */}
    </>
  )
}

/*
==========================================
SEO ISSUES IN THIS PAGE
==========================================

1. METADATA:
   Generic title: "Home | TechFlow"
   Missing meta description
   Missing Open Graph tags
   Missing Twitter Card tags
   Missing canonical URL

2. STRUCTURED DATA:
   No JSON-LD schemas at all
   No Organization schema
   No SoftwareApplication schema
   No FAQ schema
   No Breadcrumb schema

3. HEADINGS:
   Multiple H1 tags (in Hero)
   Skipped heading levels (H1 → H4 → H5)

4. CONTENT:
   Thin, vague feature descriptions
   Non-descriptive link text ("Click here", "Learn more")
   Testimonials loaded via JavaScript (not crawlable)

5. IMAGES:
   Missing alt text
   Missing width/height (causes CLS)
   Using <img> instead of Next.js Image

6. ACCESSIBILITY:
   No skip navigation
   No ARIA labels
   No semantic roles

7. TECHNICAL:
   No sitemap link in footer
   No resource hints (preconnect, prefetch)
   Hash links (#) instead of real URLs

==========================================
*/
