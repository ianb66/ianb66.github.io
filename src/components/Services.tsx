import { BookOpen, DollarSign, Zap, TrendingUp, Users, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Affiliate Mastery Guide',
      description: 'Complete blueprint to launch profitable affiliate campaigns. Learn my exact system for finding high-converting products and audiences.',
      features: ['Product Selection', 'Audience Research', 'Funnel Building', 'Scaling Strategies'],
    },
    {
      icon: DollarSign,
      title: 'Passive Income Systems',
      description: 'Build multiple revenue streams with digital products, courses, and membership programs that generate income while you sleep.',
      features: ['Course Creation', 'Product Launch', 'Sales Funnels', 'Automation Setup'],
    },
    {
      icon: Zap,
      title: 'Email List Building',
      description: 'Grow your subscriber base to 50K+ and monetize with my battle-tested email sequences and offer structures.',
      features: ['Lead Magnet Design', 'Autoresponder Setup', 'Segmentation', 'Monetization'],
    },
    {
      icon: TrendingUp,
      title: 'Traffic & Growth Hacks',
      description: 'Tap into multiple traffic sources and scale your business faster. From content to ads, I share what actually works.',
      features: ['Content Strategies', 'Paid Traffic', 'SEO Tactics', 'Viral Growth'],
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Create a loyal audience that becomes your greatest asset. Build a following that actively supports your business.',
      features: ['Engagement Tactics', 'Content Calendars', 'Community Tools', 'Loyalty Programs'],
    },
    {
      icon: Award,
      title: 'Business Scaling Blueprint',
      description: 'Take your six-figure business to seven figures. Advanced strategies for outsourcing, systems, and team building.',
      features: ['Hiring & Delegation', 'Systems Design', 'Team Management', 'Scaling Mindset'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>My Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Build a Profitable Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get access to my comprehensive guides, tools, and frameworks that have helped thousands of entrepreneurs build 6 and 7-figure businesses.
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
            <span>Access All Resources Free</span>
          </a>
        </div>
      </div>
    </section>
  );
}
