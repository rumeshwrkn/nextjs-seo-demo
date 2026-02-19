import Link from 'next/link'

type HeaderProps = {
  variant: 'good' | 'bad'
}

export function Header({ variant }: HeaderProps) {
  const good_url_alias = process.env.NEXT_PUBLIC_GOOD_LINK_ALIAS;

  // Both look identical - only the underlying code differs

  if (variant === 'bad') {
    return (
      // BAD: No semantic role, no aria-label
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          {/* No aria-label on logo link */}
          <Link href="/site1" className="text-2xl font-bold text-violet-700">
            TechFlow
          </Link>

          {/* No nav role or aria-label */}
          <div className="hidden md:flex items-center gap-8">
            <a href="" className="text-gray-700 hover:text-violet-700 font-medium">Features</a>
            <a href="#" className="text-gray-700 hover:text-violet-700 font-medium">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-violet-700 font-medium">Case Studies</a>
            <a href="#" className="text-gray-700 hover:text-violet-700 font-medium">Support</a>
            <a href="#" className="bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 rounded-lg font-semibold">
              Start Free Trial
            </a>
          </div>
          <svg className="block md:hidden w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L2 9h2v9h5v-5h2v5h5V9h2L10 2z" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    // GOOD: Proper semantic markup
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Descriptive aria-label */}
        <Link
          href={`/${good_url_alias}`}
          className="text-2xl font-bold text-primary"
          aria-label="TechFlow - Back to homepage"
        >
          TechFlow
        </Link>

        {/* Navigation with role and aria-label */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {/* Descriptive link text */}
          <Link href={`/${good_url_alias}/test-link`} className="text-gray-700 hover:text-primary font-medium">Features</Link>
          <Link href={`/${good_url_alias}/test-link`} className="text-gray-700 hover:text-primary font-medium">Pricing</Link>
          <Link href={`/${good_url_alias}/test-link`} className="text-gray-700 hover:text-primary font-medium">Case Studies</Link>
          <Link href={`/${good_url_alias}/test-link`} className="text-gray-700 hover:text-primary font-medium">Support</Link>
          <Link href={`/${good_url_alias}/test-link`} className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold">
            Start Free Trial
          </Link>
        </nav>
        <svg className="block md:hidden w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2L2 9h2v9h5v-5h2v5h5V9h2L10 2z" />
        </svg>
      </div>
    </header>
  )
}
