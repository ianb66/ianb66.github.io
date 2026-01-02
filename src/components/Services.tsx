import { Search, Target, BarChart3, Megaphone, Palette, Mail } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Dominate search rankings with strategic SEO. We optimize your site for visibility, traffic, and conversions that matter.',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Link Building'],
    },
    {
      icon: Megaphone,
      title: 'PPC Advertising',
      description: 'Maximize ROI with precision-targeted paid campaigns across Google, Facebook, LinkedIn, and more.',
      features: ['Campaign Management', 'A/B Testing', 'Conversion Optimization', 'Bid Strategy'],
    },
    {
      icon: Palette,
      title: 'Social Media Marketing',
      description: 'Build engaged communities and drive brand awareness with compelling social media strategies.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Analytics'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics, reporting, and actionable insights.',
      features: ['Custom Dashboards', 'Performance Tracking', 'Attribution Modeling', 'Reporting'],
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization',
      description: 'Turn more visitors into customers with scientific testing and optimization methodologies.',
      features: ['User Research', 'Heat Mapping', 'Multivariate Testing', 'UX Optimization'],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized, automated email campaigns that convert.',
      features: ['Automation', 'Segmentation', 'Template Design', 'Performance Analysis'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end digital marketing services designed to grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 font-medium"
          >
            <span>Discuss Your Project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
