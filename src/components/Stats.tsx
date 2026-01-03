import { Award, Clock, Users, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Students & Followers',
      description: 'Building profitable businesses worldwide',
    },
    {
      icon: TrendingUp,
      value: '$2.3M',
      label: 'Annual Revenue',
      description: 'Proof that the system actually works',
    },
    {
      icon: Award,
      value: '95%',
      label: 'Student Success Rate',
      description: 'Achieve their income milestones',
    },
    {
      icon: Clock,
      value: '12 Years',
      label: 'In Business',
      description: 'Building digital empires since 2012',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results That Inspire
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            My success isn't just about my numbers—it's about the thousands of students and followers I've helped achieve their entrepreneurial dreams.
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
            You could be next. Join thousands building their digital empire.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 font-medium"
          >
            <span>Join My Community</span>
          </a>
        </div>
      </div>
    </section>
  );
}
