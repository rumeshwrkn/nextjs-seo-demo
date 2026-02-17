# Next.js SEO Demo

Compare **Good vs Bad SEO** implementation in Next.js. Both pages look identical visually, but have very different SEO implementations under the hood.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## 📁 Project Structure

```
seo-demo/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home (selector page)
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt config
│   ├── bad/                # ❌ Bad SEO implementation
│   │   ├── layout.tsx      # Missing metadata
│   │   └── page.tsx        # SEO mistakes
│   └── good/               # ✅ Good SEO implementation
│       ├── layout.tsx      # Comprehensive metadata
│       └── page.tsx        # SEO best practices
├── components/
│   ├── seo/
│   │   └── schemas.tsx     # JSON-LD structured data
│   └── ui/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       └── CTAFooter.tsx
└── README.md
```

## 🔍 How to Test SEO Differences

### Method 1: Lighthouse Audit

1. Open http://localhost:3000/bad in Chrome
2. Press `F12` → **Lighthouse** tab
3. Check **SEO** category
4. Click **Analyze page load**
5. Note the score (~50-70)
6. Repeat for http://localhost:3000/good
7. Compare scores (~90-100)

### Method 2: DevTools Console

Paste this in the browser console:

```javascript
console.log('=== SEO Audit ===');
console.log('H1 count:', document.querySelectorAll('h1').length);
console.log('Meta description:', document.querySelector('meta[name="description"]')?.content || 'MISSING');
console.log('Canonical:', document.querySelector('link[rel="canonical"]')?.href || 'MISSING');
console.log('OG Title:', document.querySelector('meta[property="og:title"]')?.content || 'MISSING');
console.log('Schema count:', document.querySelectorAll('script[type="application/ld+json"]').length);
```

### Method 3: View Page Source

1. Right-click → **View Page Source**
2. Compare the `<head>` section between /bad and /good
3. Look for structured data scripts

## ❌ Bad SEO Issues

| Issue | Problem |
|-------|---------|
| Title | Generic "Home \| TechFlow" |
| Meta Description | Missing |
| H1 Tags | Multiple (2) |
| Heading Hierarchy | H1 → H4 → H5 (skipped) |
| Structured Data | None |
| Images | No alt text, no dimensions |
| Links | "Click here", "Learn more" |
| Testimonials | JavaScript-loaded (not crawlable) |

## ✅ Good SEO Features

| Feature | Implementation |
|---------|----------------|
| Title | "TechFlow \| Cloud Project Management Software..." |
| Meta Description | 160 chars with CTA |
| H1 Tag | Single, keyword-rich |
| Heading Hierarchy | H1 → H2 → H3 (proper) |
| Structured Data | Organization, Software, FAQ, Breadcrumb, WebSite |
| Images | Next.js Image with alt, dimensions, priority |
| Links | Descriptive text |
| Testimonials | Server-rendered (crawlable) |

## 📊 Expected Lighthouse Scores

| Page | SEO Score |
|------|-----------|
| /bad | 50-70 |
| /good | 90-100 |

## 🛠 Key Files to Study

### Metadata (Next.js 14 App Router)

```tsx
// app/good/layout.tsx
export const metadata: Metadata = {
  title: {
    template: '%s | TechFlow',
    default: 'TechFlow | Cloud Project Management Software',
  },
  description: '...',
  openGraph: { ... },
  twitter: { ... },
  alternates: { canonical: '/' },
}
```

### Structured Data

```tsx
// components/seo/schemas.tsx
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://techflow.com/#organization',
    // ...
  }
  return <JsonLd data={data} />
}
```

### Server vs Client Rendering

```tsx
// ❌ Bad: Client-side loaded (not crawlable)
useEffect(() => {
  fetch('/api/testimonials').then(...)
}, [])

// ✅ Good: Server-rendered (in initial HTML)
const testimonials = await getTestimonials()
return testimonials.map(t => <Testimonial {...t} />)
```

## 📚 Resources

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Web.dev SEO Guide](https://web.dev/learn/seo)

## 🎯 Presentation Tips

1. **Start with /bad** - "This looks professional, right?"
2. **Run Lighthouse** - Show the low SEO score
3. **View Source** - Point out missing metadata
4. **Switch to /good** - "Looks identical..."
5. **Run Lighthouse again** - Show the high score
6. **View Source** - Show the comprehensive metadata
7. **Key message**: "SEO issues are invisible to users but critical for search engines"

---

*Created for Advanced SEO Presentation*
