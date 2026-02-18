import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/ui/Hero'
import { Features } from '@/components/ui/Features'
import { Testimonials } from '@/components/ui/Testimonials'
import { FAQ, faqs } from '@/components/ui/FAQ'
import { CTA, Footer } from '@/components/ui/CTAFooter'
import { FAQSchema, BreadcrumbSchema } from '@/components/seo/schemas'
import Link from 'next/link'

export default function GoodSEOPage() {
  return (
    <>
      {/* FAQ Schema for rich results */}
      <FAQSchema faqs={faqs} />
      
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://nextjs-seo-demo.vercel.app/good' }
        ]} 
      />
      
      {/* Badge to identify this is the good version */}
      {/* <div className="bg-green-100 text-green-800 text-center py-2 text-sm font-medium">
        GOOD SEO Example - <Link href="/" className="underline">Back to Home</Link> | <Link href="/bad" className="underline">View Bad SEO</Link>
      </div> */}
      
      <Header variant="good" />
      
      {/* Breadcrumb navigation (visible) */}
      {/* <nav className="max-w-6xl mx-auto px-5 py-3 text-sm text-gray-500" aria-label="Breadcrumb">
        <Link href="/good" className="text-primary hover:underline">Home</Link>
      </nav> */}
      
      <main id="main-content">
        {/* ID for skip navigation target */}
        <Hero variant="good" />
        <Features variant="good" />
        <Testimonials variant="good" />
        <FAQ variant="good" />
        <CTA variant="good" />
      </main>
      
      <Footer variant="good" />
      
      {/* Analytics would go here (async loading) */}
    </>
  )
}

/*
==========================================
SEO BEST PRACTICES IN THIS PAGE
==========================================

1. METADATA (in layout.tsx):
   Descriptive title with keywords
   Compelling meta description with CTA
   Open Graph tags for social sharing
   Twitter Card tags
   Canonical URL
   Robots directives

2. STRUCTURED DATA:
   Organization schema with @id references
   SoftwareApplication schema with pricing
   WebSite schema with SearchAction
   FAQPage schema matching content
   BreadcrumbList schema

3. HEADINGS:
   Single H1 with keywords
   Proper hierarchy: H1 → H2 → H3

4. CONTENT:
   Substantial, valuable feature descriptions
   Descriptive link text
   Server-rendered testimonials (crawlable)

5. IMAGES:
   Descriptive alt text
   Width/height specified (prevents CLS)
   Using Next.js Image component
   Priority loading for above-fold

6. ACCESSIBILITY:
   Skip navigation link
   ARIA labels and roles
   Semantic HTML structure

7. TECHNICAL:
   Sitemap link in footer
   Internal linking strategy
   Clean URL structure

==========================================
*/
