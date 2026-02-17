import Link from 'next/link'

type HeaderProps = {
  variant: 'good' | 'bad'
}

export function Header({ variant }: HeaderProps) {
  // Both look identical - only the underlying code differs
  
  if (variant === 'bad') {
    return (
      // BAD: No semantic role, no aria-label
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
          {/* No aria-label on logo link */}
          <Link href="/bad" className="text-2xl font-bold text-primary">
            TechFlow
          </Link>
          
          {/* No nav role or aria-label */}
          <div className="hidden md:flex items-center gap-8">
            {/* Non-descriptive link text */}
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Click Here</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Learn More</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Info</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Stuff</a>
            <a href="#" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold">
              Get Started
            </a>
          </div>
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
          href="/good" 
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
          <Link href="/good/features" className="text-gray-700 hover:text-primary font-medium">Features</Link>
          <Link href="/good/pricing" className="text-gray-700 hover:text-primary font-medium">Pricing</Link>
          <Link href="/good/case-studies" className="text-gray-700 hover:text-primary font-medium">Case Studies</Link>
          <Link href="/good/support" className="text-gray-700 hover:text-primary font-medium">Support</Link>
          <Link href="/good/free-trial" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold">
            Start Free Trial
          </Link>
        </nav>
      </div>
    </header>
  )
}
