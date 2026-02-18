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
                    { name: 'Home', url: 'https://nextjs-seo-demo.vercel.app/site2/test-link' }
                ]}
            />

            {/* Badge to identify this is the good version */}
            {/* <div className="bg-green-100 text-green-800 text-center py-2 text-sm font-medium">
        GOOD SEO Example - <Link href="/" className="underline">Back to Home</Link> | <Link href="/bad" className="underline">View Bad SEO</Link>
      </div> */}

            <Header variant="good" />

            {/* Breadcrumb navigation (visible) */}
            <nav
                className="max-w-6xl mx-auto px-5 py-3 text-sm text-gray-500 flex items-center"
                aria-label="Breadcrumb"
            >
                <Link href="/site2" className="text-primary hover:underline">Home</Link>
                <span className='mx-1 inline-flex items-center h-4'>
                    /
                </span>
                <span className="text-primary">Test Link</span>
            </nav>
            <main id="main-content">
                {/* ID for skip navigation target */}
                <Hero variant="good" />

            </main>

            <Footer variant="good" />

            {/* Analytics would go here (async loading) */}
        </>
    )
}
