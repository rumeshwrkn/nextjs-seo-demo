'use client'

import { useEffect, useState } from 'react'

type TestimonialsProps = {
  variant: 'good' | 'bad'
}

// Testimonial data
const testimonials = [
  {
    quote: "TechFlow transformed how our team collaborates. We reduced meeting time by 5 hours per week and improved project delivery by 40%.",
    name: "John Davidson",
    title: "CTO, TechCorp Inc.",
    initials: "JD",
    color: "bg-primary"
  },
  {
    quote: "The best project management tool we've ever used. Simple to set up, powerful features, and excellent support team.",
    name: "Sarah Mitchell",
    title: "Product Manager, StartupXYZ",
    initials: "SM",
    color: "bg-orange-700"
  },
  {
    quote: "We scaled from 10 to 100 employees with TechFlow. The platform grew with us seamlessly. Highly recommended the team!",
    name: "Michael Kim",
    title: "CEO, GrowthLabs",
    initials: "MK",
    color: "bg-purple-600"
  }
]

export function Testimonials({ variant }: TestimonialsProps) {
  if (variant === 'bad') {
    return <BadTestimonials />
  }
  return <GoodTestimonials />
}

// BAD: Client-side loaded testimonials - Google may not index this!
function BadTestimonials() {
  const [loaded, setLoaded] = useState(false)
  const [items, setItems] = useState<typeof testimonials>([])

  useEffect(() => {
    // Simulating API fetch - this content loads AFTER JavaScript executes
    // Google's crawler may not wait for this!
    setTimeout(() => {
      setItems(testimonials)
      setLoaded(true)
    }, 100)
  }, [])

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h1>
          <p className="text-gray-600">Trusted by leading companies worldwide</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Content loaded via JavaScript - not in initial HTML */}
          {!loaded ? (
            <p className="col-span-3 text-center text-gray-400">Loading testimonials...</p>
          ) : (
            items.map((item, index) => (
              <article key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.title}</div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

// GOOD: Server-rendered testimonials - fully crawlable
// Note: This is a client component only because it's in the same file
// In real app, this would be a Server Component by default
function GoodTestimonials() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Trusted by leading companies worldwide</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Content is in the HTML - fully indexable */}
          {testimonials.map((item, index) => (
            <article key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <blockquote>
                <h3 className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </h3>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {item.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
