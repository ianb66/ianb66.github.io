import { Linkedin, Twitter } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Ian Barwell',
      position: 'Founder & Entrepreneur',
      bio: 'Built a $2.3M/year business from scratch through affiliate marketing and digital products. 12+ years of proven results.',
      expertise: 'Personal Brand',
    },
    {
      name: 'Russell Brunson',
      position: 'Mentor - Funnel Architecture',
      bio: 'Pioneer of modern sales funnels. His frameworks shaped my entire approach to online business.',
      expertise: 'Sales Funnels',
    },
    {
      name: 'Pat Flynn',
      position: 'Mentor - Content & Community',
      bio: 'Master of building businesses on transparency and audience trust. Inspired my community-first approach.',
      expertise: 'Community Building',
    },
    {
      name: 'Tim Ferriss',
      position: 'Mentor - Automation & Systems',
      bio: 'His principles of outsourcing and systemization helped me scale beyond my own time.',
      expertise: 'Automation',
    },
    {
      name: 'Amy Porterfield',
      position: 'Mentor - Email & Launches',
      bio: 'The gold standard in email marketing and product launches. Her strategies multiplied my revenue.',
      expertise: 'Email Marketing',
    },
    {
      name: 'My 50K Community Members',
      position: 'Collaborators & Supporters',
      bio: 'Entrepreneurs building businesses together. They push me to be better every single day.',
      expertise: 'Collective Wisdom',
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>My Inspiration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mentors, Influences & Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I stand on the shoulders of giants. These mentors and my community push me to continuously improve and share more value with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-600 to-teal-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Linkedin size={18} className="text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Twitter size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-medium mb-3">
                  {member.position}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  <span>{member.expertise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join my community and get access to all the resources, guides, and frameworks I've shared with thousands of successful entrepreneurs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 font-medium"
          >
            <span>Connect With Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
