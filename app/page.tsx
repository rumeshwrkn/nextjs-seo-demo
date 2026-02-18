import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bad SEO Card */}
          <Link
            href="/site1"
            className="block p-8 bg-white rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">
            </div>
            <h2 className="text-xl font-bold text-green-600 mb-2">Site Template 1</h2>
          </Link>
          {/* Good SEO Card */}
          <Link
            href="/site2"
            className="block p-8 bg-white rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">
            </div>
            <h2 className="text-xl font-bold text-green-600 mb-2">Site Template 2</h2>
          </Link>
        </div>
      </div>
    </main>
  )
}
