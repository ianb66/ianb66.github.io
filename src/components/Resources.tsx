import { Download } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: 'Affiliate Marketing Checklist',
      description: 'Your step-by-step guide to launching your first affiliate campaign',
      href: '#',
    },
    {
      title: 'Email Sequences Template',
      description: 'Copy-paste email templates that convert subscribers into customers',
      href: '#',
    },
    {
      title: 'Business Planning Worksheet',
      description: 'Plan your first 90 days of business with this proven framework',
      href: '#',
    },
    {
      title: 'Product Launch Checklist',
      description: 'Everything you need to successfully launch and scale a digital product',
      href: '#',
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Free Resources</h2>
          <p className="text-xl text-gray-600">No email required. Just real, actionable resources.</p>
        </div>

        <div className="space-y-3">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.href}
              className="flex items-center justify-between p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Download className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>
              <div className="text-blue-600 group-hover:text-blue-700 transition-colors flex-shrink-0 ml-4">
                →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
