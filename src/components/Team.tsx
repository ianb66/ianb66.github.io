import { Linkedin, Twitter } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Alexandra Reed',
      position: 'Founder & CEO',
      bio: '15+ years leading digital transformation for Fortune 500 companies',
      expertise: 'Strategy & Leadership',
    },
    {
      name: 'Marcus Johnson',
      position: 'Head of SEO',
      bio: 'Former Google analyst with proven track record of ranking success',
      expertise: 'Search Engine Optimization',
    },
    {
      name: 'Sophia Martinez',
      position: 'Creative Director',
      bio: 'Award-winning designer crafting campaigns that convert',
      expertise: 'Brand & Design',
    },
    {
      name: 'James Anderson',
      position: 'VP of Paid Media',
      bio: 'Managed $50M+ in ad spend with consistently high ROAS',
      expertise: 'PPC & Paid Advertising',
    },
    {
      name: 'Olivia Chen',
      position: 'Content Strategist',
      bio: 'Storyteller who creates content that resonates and ranks',
      expertise: 'Content Marketing',
    },
    {
      name: 'Daniel Brooks',
      position: 'Analytics Lead',
      bio: 'Data scientist turning insights into actionable strategies',
      expertise: 'Data & Analytics',
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Experts Behind Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate team of strategists, creators, and analysts dedicated to driving your growth.
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
            Join Our Growing Team
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about digital marketing and driving results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 font-medium"
          >
            <span>View Open Positions</span>
          </a>
        </div>
      </div>
    </section>
  );
}
