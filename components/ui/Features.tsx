import Link from 'next/link'
import Image from 'next/image'

type FeaturesProps = {
  variant: 'good' | 'bad'
}

export function Features({ variant }: FeaturesProps) {
  if (variant === 'bad') {
    return (
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            {/* Skipped heading level (should be H2, not H4) */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to manage your work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 border rounded-xl flex items-center justify-center text-2xl mb-6">
                <img src='/images/bad/bad-icon.png' className='w-8' />
              </div>
              {/* Non-descriptive heading */}
              <h5 className="text-xl font-bold text-gray-900 mb-3">Feature One</h5>
              {/* Thin content */}
              <p className="text-gray-600 leading-relaxed mb-4">
                This feature is great. You will love it. It helps you do things.
              </p>
              {/* Non-descriptive link text */}
              <a href="#" className="text-primary font-semibold hover:underline">
                Click here →
              </a>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 border rounded-xl flex items-center justify-center text-2xl mb-6">
                <img src='/images/bad/bad-icon.png' className='w-8' />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">Feature Two</h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                Another amazing feature. It&apos;s very useful and powerful.
              </p>
              <a href="#" className="text-primary font-semibold hover:underline">
                Learn more →
              </a>
            </article>

            <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 border rounded-xl flex items-center justify-center text-2xl mb-6">
                <img src='/images/bad/bad-icon.png' className='w-8' />
              </div>
              <h5 className="text-xl font-bold text-gray-900 mb-3">Feature Three</h5>
              <p className="text-gray-600 leading-relaxed mb-4">
                You will definitely want this feature. It&apos;s the best.
              </p>
              <a href="#" className="text-primary font-semibold hover:underline">
                Read more →
              </a>
            </article>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          {/* Proper heading hierarchy (H2 after H1) */}
          <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to manage your work efficiently</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 border rounded-xl flex items-center justify-center text-2xl mb-6" aria-hidden="true">
              <Image
                src="/images/good/good-icon.png"
                alt="Task Management - Organize tasks with drag-and-drop simplicity. Set priorities, deadlines,
              and assignees with one click. "
                width={64}
                height={64}
                className="w-8"
              />
            </div>
            {/* Descriptive heading (H3 under H2) */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">Task Management</h3>
            {/* Substantial, valuable content */}
            <p className="text-gray-600 leading-relaxed mb-4">
              Organize tasks with drag-and-drop simplicity. Set priorities, deadlines,
              and assignees with one click. Integrates with Google Calendar and Slack
              for automated notifications.
            </p>
            {/* Descriptive internal link */}
            <Link href="/good/test-link" className="text-primary font-semibold hover:underline">
              Explore task management features →
            </Link>
          </article>

          <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 border rounded-xl flex items-center justify-center text-2xl mb-6" aria-hidden="true">
              <Image
                src="/images/good/good-icon.png"
                alt="Project Tracking -Switch between Gantt charts, Kanban boards, and timeline views instantly. "
                width={64}
                height={64}
                className="w-8"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Project Tracking</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Switch between Gantt charts, Kanban boards, and timeline views instantly.
              Visualize resource allocation and identify bottlenecks before they
              impact delivery.
            </p>
            <Link href="/good/test-link" className="text-primary font-semibold hover:underline">
              Discover project tracking tools →
            </Link>
          </article>

          <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 border rounded-xl flex items-center justify-center text-2xl mb-6" aria-hidden="true">
              <Image
                src="/images/good/good-icon.png"
                alt="Team Collaboration - Keep conversations in context with task-linked comments, file sharing,
              and @mentions. "
                width={64}
                height={64}
                className="w-8"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Keep conversations in context with task-linked comments, file sharing,
              and @mentions. Powerful search finds past discussions instantly.
              Never lose important information again.
            </p>
            <Link href="/good/test-link" className="text-primary font-semibold hover:underline">
              See collaboration features →
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
