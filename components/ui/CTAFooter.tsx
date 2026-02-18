import Link from 'next/link'

type CTAProps = {
  variant: 'good' | 'bad'
}

export function CTA({ variant }: CTAProps) {

  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-5">
        {variant === 'bad' ? (
          // Wrong heading level
          <h4 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h4>
        ) : (
          // Proper H2
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        )}
        <p className="text-xl opacity-90 mb-8">Start your 30-day free trial today. No credit card required.</p>
        <a
          href={variant === 'bad' ? '#' : '/good/test-link'}
          style={variant === 'bad' ? { animation: 'pulse-cta 1.5s ease-in-out infinite' } : {}}
          className="inline-block bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  )
}

type FooterProps = {
  variant: 'good' | 'bad'
}

export function Footer({ variant }: FooterProps) {
  const good_url_alias = process.env.NEXT_PUBLIC_GOOD_LINK_ALIAS;

  if (variant === 'bad') {
    return (
      // No role="contentinfo"
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">TechFlow</div>
              <p className="text-gray-400 leading-relaxed">
                TechFlow Inc.<br />
                123 Tech Street, Suite 100<br />
                San Francisco, CA 94102
              </p>
            </div>

            {/* Non-descriptive link text */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Link 1</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 2</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 3</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Link 4</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Page A</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Page B</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Page C</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Page D</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2026 TechFlow Inc. All rights reserved.</p>
            {/* No sitemap link */}
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    // Semantic footer with role
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">TechFlow</div>
            <p className="text-gray-400 leading-relaxed">
              TechFlow Inc.<br />
              123 Tech Street, Suite 100<br />
              San Francisco, CA 94102<br />
              <a href="tel:+18001234567" className="hover:text-white">1-800-123-4567</a>
            </p>
          </div>

          {/* Descriptive link text */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-5">Product</h2>
            <ul className="space-y-3">
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Features Overview</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Pricing Plans</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Integrations</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Product Updates</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-5">Resources</h2>
            <ul className="space-y-3">
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Case Studies</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Help Center</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">API Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-5">Company</h2>
            <ul className="space-y-3">
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href={`/${good_url_alias}/test-link`} className="text-gray-400 hover:text-white">Press Kit</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2026 TechFlow Inc. All rights reserved.</p>
          {/* Includes sitemap link */}
          <nav className="mt-4 md:mt-0 space-x-6" aria-label="Footer legal navigation">
            <Link href={`/${good_url_alias}/test-link`} className="hover:text-white">Privacy Policy</Link>
            <Link href={`/${good_url_alias}/test-link`} className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
