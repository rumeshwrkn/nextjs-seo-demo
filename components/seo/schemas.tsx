// Reusable JSON-LD component
type JsonLdProps = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://techflow.com/#organization',
    name: 'TechFlow Inc.',
    alternateName: ['TechFlow', 'TechFlow Software'],
    url: 'https://techflow.com',
    logo: {
      '@type': 'ImageObject',
      '@id': 'https://techflow.com/#logo',
      url: 'images/pg.png',
      width: 600,
      height: 60,
    },
    description: 'Cloud-based project management and team collaboration software',
    foundingDate: '2020-01-15',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street, Suite 100',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-123-4567',
      contactType: 'customer service',
    },
    sameAs: [
      'https://twitter.com/techflow',
      'https://linkedin.com/company/techflow',
      'https://github.com/techflow',
      'https://www.crunchbase.com/organization/techflow',
    ],
    knowsAbout: [
      'Project Management',
      'Task Management',
      'Team Collaboration',
      'Workflow Automation',
    ],
  }

  return <JsonLd data={data} />
}

// Software Application Schema
export function SoftwareSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://techflow.com/#software',
    name: 'TechFlow',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Project Management Software',
    operatingSystem: 'Web, iOS, Android',
    description: 'Cloud-based project management software for teams',
    featureList: [
      'Task Management',
      'Gantt Charts',
      'Kanban Boards',
      'Team Collaboration',
      'Time Tracking',
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '29',
      priceCurrency: 'USD',
      offers: [
        { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Pro', price: '12', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Enterprise', price: '29', priceCurrency: 'USD' },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      ratingCount: '523',
      bestRating: '5',
    },
    publisher: {
      '@id': 'https://techflow.com/#organization',
    },
  }

  return <JsonLd data={data} />
}

// FAQ Schema
type FAQItem = {
  question: string
  answer: string
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return <JsonLd data={data} />
}

// Breadcrumb Schema
type BreadcrumbItem = {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <JsonLd data={data} />
}

// WebSite Schema with SearchAction
export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://techflow.com/#website',
    url: 'https://techflow.com',
    name: 'TechFlow',
    description: 'Cloud-based project management software',
    publisher: {
      '@id': 'https://techflow.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://techflow.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return <JsonLd data={data} />
}
