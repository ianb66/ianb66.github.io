import { ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      company: 'TechFlow Solutions',
      industry: 'SaaS',
      challenge: 'Low organic traffic and poor conversion rates',
      solution: 'Comprehensive SEO strategy and conversion optimization',
      results: [
        { icon: TrendingUp, metric: '+385%', label: 'Organic Traffic' },
        { icon: Users, metric: '+210%', label: 'Lead Generation' },
        { icon: DollarSign, metric: '+$2.4M', label: 'Annual Revenue' },
      ],
      bgColor: 'from-blue-500 to-blue-600',
    },
    {
      company: 'Urban Boutique',
      industry: 'E-commerce',
      challenge: 'High cart abandonment and low ROAS',
      solution: 'Multi-channel PPC campaigns and email automation',
      results: [
        { icon: TrendingUp, metric: '+520%', label: 'ROAS' },
        { icon: Users, metric: '-67%', label: 'Cart Abandonment' },
        { icon: DollarSign, metric: '+$1.8M', label: 'Revenue Increase' },
      ],
      bgColor: 'from-teal-500 to-teal-600',
    },
    {
      company: 'Global Finance Group',
      industry: 'Financial Services',
      challenge: 'Low brand awareness and market penetration',
      solution: 'Integrated content marketing and social media strategy',
      results: [
        { icon: TrendingUp, metric: '+290%', label: 'Brand Awareness' },
        { icon: Users, metric: '150K+', label: 'New Followers' },
        { icon: DollarSign, metric: '3,400+', label: 'Qualified Leads' },
      ],
      bgColor: 'from-blue-600 to-teal-500',
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve extraordinary growth through strategic digital marketing.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="grid lg:grid-cols-3 gap-8 p-8 md:p-10">
                <div className="lg:col-span-1 space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {study.company}
                    </h3>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">
                      Challenge
                    </div>
                    <p className="text-gray-600">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">
                      Solution
                    </div>
                    <p className="text-gray-600">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className={`bg-gradient-to-br ${study.bgColor} rounded-xl p-8 h-full`}>
                    <div className="text-white text-lg font-semibold mb-6">
                      Key Results
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="bg-white/20 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-200"
                        >
                          <result.icon className="text-white mb-3" size={28} />
                          <div className="text-3xl font-bold text-white mb-2">
                            {result.metric}
                          </div>
                          <div className="text-blue-100 text-sm">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 md:px-10 pb-8">
                <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                  <span>Read Full Case Study</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
