import Image from 'next/image'

type HeroProps = {
  variant: 'good' | 'bad'
}

export function Hero({ variant }: HeroProps) {
  if (variant === 'bad') {
    return (
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Multiple H1 tags */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Streamline Your Team&apos;s Workflow
            </h1>
            <h1 className="text-2xl font-bold text-gray-700 mb-6">
              The Best Solution for Modern Teams
            </h1>
            
            {/* Thin, vague content */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our product is amazing and helps teams work better. It&apos;s really great and you should try it.
            </p>
            
            <a href="#" className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Start Free Trial
            </a>
            
            <div className="flex gap-10 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-500">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-500">Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.6</div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>
          
          <div>
            {/* No alt text, no dimensions */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://placehold.co/600x400/png"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
        <div>
          {/* Single, descriptive H1 with keywords */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Streamline Your Team&apos;s Workflow with Cloud Project Management
          </h1>
          
          {/* Substantial, keyword-rich content */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            TechFlow is cloud-based project management software that combines task management, 
            project tracking, and team collaboration in one powerful platform. 
            Trusted by 500+ companies to boost productivity by an average of 32%.
          </p>
          
          <a 
            href="/good/free-trial" 
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg"
            data-track="hero-cta"
          >
            Start Free Trial
          </a>
          
          {/* Trust signals */}
          <div className="flex gap-10 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-500">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-500">Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.6</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>
        </div>
        
        <div>
          {/* Next.js Image with proper alt, dimensions, priority */}
          <Image
            src="https://placehold.co/600x400/png"
            alt="TechFlow dashboard showing task lists, project progress charts, and team collaboration features"
            width={600}
            height={400}
            priority
            className="rounded-xl shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  )
}
