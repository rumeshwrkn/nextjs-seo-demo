'use client'
import { useEffect, useState } from 'react'

export function BadPageLoader({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress bar
    const steps = [15, 35, 55, 70, 85, 95, 100]
    const timers: NodeJS.Timeout[] = []

    steps.forEach((target, i) => {
      const t = setTimeout(() => setProgress(target), i * 350)
      timers.push(t)
    })

    // Show content after progress completes
    const done = setTimeout(() => setLoaded(true), steps.length * 350 + 300)
    timers.push(done)

    return () => timers.forEach(clearTimeout)
  }, [])

  if (!loaded) {
    return (
      <div className="min-h-screen bg-white flex flex-col">

        {/* Top progress bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Shimmer style */}
        <style>{`
          @keyframes shimmer {
            0% { background-position: -800px 0; }
            100% { background-position: 800px 0; }
          }
          .shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 800px 100%;
            animation: shimmer 1.5s infinite linear;
          }
        `}</style>

        {/* Navbar */}
        <div className="border-b border-gray-100 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="h-8 w-28 rounded-md shimmer" />
            <div className="hidden md:flex gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 w-14 rounded shimmer" />
              ))}
            </div>
            <div className="h-9 w-24 rounded-lg shimmer" />
          </div>
        </div>

        {/* Hero */}
        <div className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="h-4 w-20 rounded-full shimmer mx-auto" />
            <div className="h-12 w-3/4 rounded-xl shimmer mx-auto" />
            <div className="h-12 w-1/2 rounded-xl shimmer mx-auto" />
            <div className="space-y-2 pt-2">
              <div className="h-5 w-2/3 rounded shimmer mx-auto" />
              <div className="h-5 w-1/2 rounded shimmer mx-auto" />
            </div>
            <div className="flex gap-4 justify-center pt-6">
              <div className="h-12 w-36 rounded-lg shimmer" />
              <div className="h-12 w-36 rounded-lg shimmer" />
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white shimmer" />
                ))}
              </div>
              <div className="h-4 w-36 rounded shimmer" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-3 mb-14">
              <div className="h-8 w-60 rounded-lg shimmer mx-auto" />
              <div className="h-5 w-80 rounded shimmer mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl p-6 space-y-4 shadow-sm">
                  <div className="h-12 w-12 rounded-xl shimmer" />
                  <div className="h-6 w-3/4 rounded shimmer" />
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded shimmer" />
                    <div className="h-4 w-5/6 rounded shimmer" />
                    <div className="h-4 w-4/6 rounded shimmer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="h-8 w-52 rounded-lg shimmer mx-auto mb-12" />
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 space-y-4 shadow-sm">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-4 w-4 rounded shimmer" />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded shimmer" />
                    <div className="h-4 w-5/6 rounded shimmer" />
                    <div className="h-4 w-3/4 rounded shimmer" />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-10 w-10 rounded-full shimmer" />
                    <div className="space-y-1">
                      <div className="h-4 w-24 rounded shimmer" />
                      <div className="h-3 w-20 rounded shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <div className="h-10 w-3/4 rounded-lg shimmer mx-auto" />
            <div className="h-5 w-2/3 rounded shimmer mx-auto" />
            <div className="h-12 w-40 rounded-lg shimmer mx-auto" />
          </div>
        </div>

      </div>
    )
  }

  return <>{children}</>
}