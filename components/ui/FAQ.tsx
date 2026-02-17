type FAQProps = {
  variant: 'good' | 'bad'
}

const faqs = [
  {
    question: "How long is the free trial?",
    answer: "We offer a 30-day free trial with full access to all features. No credit card required to start. Your data is preserved if you decide to continue with a paid plan."
  },
  {
    question: "How long does setup take?",
    answer: "You can get started in under 10 minutes. Create your account, invite your team, and you're ready to go. We also offer data import tools for seamless migration from other platforms."
  },
  {
    question: "Is my data secure?",
    answer: "Yes! We're ISO 27001 certified with end-to-end encryption and two-factor authentication. Enterprise customers trust us with their most sensitive project data."
  }
]

export function FAQ({ variant }: FAQProps) {
  if (variant === 'bad') {
    return (
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-16">
            {/* Wrong heading level */}
            <h4 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h4>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                {/* Wrong heading level */}
                <h5 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h5>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    // Proper section with aria-labelledby
    <section className="py-20" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-16">
          {/* Proper H2 */}
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              {/* Proper H3 under H2 */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Export FAQ data for schema generation
export { faqs }
