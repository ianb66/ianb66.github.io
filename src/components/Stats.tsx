import { Award, Clock, Users, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Businesses trust us with their growth',
    },
    {
      icon: TrendingUp,
      value: '$50M+',
      label: 'Revenue Generated',
      description: 'For our clients in the past year',
    },
    {
      icon: Award,
      value: '127',
      label: 'Awards Won',
      description: 'Industry recognition for excellence',
    },
    {
      icon: Clock,
      value: '12 Years',
      label: 'Experience',
      description: 'Delivering marketing excellence',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We don't just promise results—we deliver them consistently for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <stat.icon className="text-white" size={32} />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-blue-100">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-100 text-lg mb-6">
            Join hundreds of businesses achieving remarkable growth
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 font-medium"
          >
            <span>Start Your Success Story</span>
          </a>
        </div>
      </div>
    </section>
  );
}
