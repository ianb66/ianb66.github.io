import { Heart, Lightbulb, Users } from 'lucide-react';

export default function WhyBuild() {
  const reasons = [
    {
      icon: Heart,
      title: 'Help Others Succeed',
      description: 'I believe everyone deserves the chance to build a profitable business and achieve financial freedom.',
    },
    {
      icon: Lightbulb,
      title: 'Share Real Knowledge',
      description: 'I build from experience, not theory. Every framework, strategy, and tool is battle-tested and proven.',
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'The best part of entrepreneurship is connecting with like-minded people building amazing things together.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why I Build These Tools</h2>
          <p className="text-xl text-gray-600">
            My mission is simple: provide entrepreneurs with the knowledge, tools, and community they need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
