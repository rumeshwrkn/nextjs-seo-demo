import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js SEO Demo',
  description: 'Compare Good vs Bad SEO implementation in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><script src="https://analytics.ahrefs.com/analytics.js" data-key="UUCucujdNwHvf7Jxg6mx+w" async></script></head>
      <body>{children}</body>
    </html>
  )
}
