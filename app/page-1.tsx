import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4">
          Next.js SEO Demo
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Compare Good vs Bad SEO implementation. Both pages look identical,
          but have very different SEO implementations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bad SEO Card */}
          <Link
            href="/bad"
            className="block p-8 bg-white rounded-xl border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-thumb-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" /></svg>
            </div>
            <h2 className="text-xl font-bold text-red-600 mb-2">Bad SEO</h2>
            <p className="text-gray-600 text-sm">
              Missing meta tags, multiple H1s, no schema, JS-loaded content,
              poor link text.
            </p>
            <div className="mt-4 text-sm text-red-500 font-medium">
              Lighthouse Score: ~50-70
            </div>
          </Link>

          {/* Good SEO Card */}
          <Link
            href="/good"
            className="block p-8 bg-white rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>

            </div>
            <h2 className="text-xl font-bold text-green-600 mb-2">Good SEO</h2>
            <p className="text-gray-600 text-sm">
              Proper metadata, single H1, structured data, server-rendered,
              descriptive links.
            </p>
            <div className="mt-4 text-sm text-green-500 font-medium">
              Lighthouse Score: ~90-100
            </div>
          </Link>
        </div>

        {/* <div className="mt-12 p-6 bg-blue-50 rounded-xl">
          <h3 className="font-bold text-blue-800 mb-2">How to Test:</h3>
          <ol className="text-sm text-blue-700 space-y-1">
            <li>1. Open each page in Chrome</li>
            <li>2. Press F12 → Lighthouse tab → Check &quot;SEO&quot;</li>
            <li>3. Click &quot;Analyze page load&quot;</li>
            <li>4. Compare the scores and issues</li>
          </ol>
        </div> */}

        {/* <div className="mt-6 p-6 bg-gray-100 rounded-xl">
          <h3 className="font-bold text-gray-800 mb-2">Console Commands:</h3>
          <code className="text-xs text-gray-600 block whitespace-pre-wrap">
            {`// Paste in DevTools Console:
console.log('H1 count:', document.querySelectorAll('h1').length);
console.log('Meta desc:', document.querySelector('meta[name="description"]')?.content || 'MISSING');
console.log('Schema count:', document.querySelectorAll('script[type="application/ld+json"]').length);`}
          </code>
        </div> */}
      </div>
    </main>
  )
}
