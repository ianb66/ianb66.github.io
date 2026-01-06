import React from 'react';

const ToolsResources: React.FC = () => {
  const tools = [
    {
      name: 'ElevenLabs',
      icon: '🎙️',
      description: 'Industry-leading AI text-to-speech platform with 5,000+ natural-sounding voices in 70+ languages',
      usage: 'I use ElevenLabs to create professional voiceovers for my YouTube tutorials and product demos without hiring voice actors',
      link: 'https://try.elevenlabs.io/5rlowp9b1jz4',
      buttonText: 'Try ElevenLabs'
    },
    {
      name: 'ClickDesigns',
      icon: '🎨',
      description: 'Cloud-based graphic design tool with drag-and-drop editor for creating eBook covers, mockups, logos, and marketing graphics',
      usage: 'I use ClickDesigns to create all my product mockups, eBook covers, and sales page graphics in minutes',
      link: 'https://app.clickdesigns.com/r?a=ianbarwell&b=5hH1Avzq',
      buttonText: 'Get ClickDesigns'
    },
    {
      name: 'Aweber',
      icon: '✉️',
      description: 'Easy-to-use email marketing platform with automation, landing pages, and unlimited email sends',
      usage: 'I use Aweber to build my email list, automate follow-up sequences, and nurture leads into customers',
      link: 'https://www.aweber.com/easy-email.htm?id=479214',
      buttonText: 'Try Aweber'
    },
    {
      name: 'ClickMagick',
      icon: '📊',
      description: 'Advanced ad tracking and attribution platform that monitors clicks, conversions, and ROI across all marketing channels',
      usage: 'I use ClickMagick to track every click and conversion, so I know exactly which traffic sources are profitable',
      link: 'https://clickmagick.com/go/ianbarwell',
      buttonText: 'Get ClickMagick'
    },
    {
      name: 'Convertri',
      icon: '🚀',
      description: 'The world\'s fastest funnel builder for creating lightning-fast landing pages, sales funnels, and complete websites',
      usage: 'I use Convertri to build high-converting sales funnels with blazing-fast page load speeds that boost conversions',
      link: 'https://app.convertri.com/a/ada03d35-534c-11e6-829d-066a9bd5fb79',
      buttonText: 'Try Convertri'
    },
    {
      name: 'Designrr',
      icon: '📚',
      description: 'AI-powered eBook creation software that turns blog posts, PDFs, or ideas into professional eBooks and lead magnets',
      usage: 'I use Designrr to quickly create professional eBooks and lead magnets from my content without design skills',
      link: 'https://designrr.io',
      buttonText: 'Get Designrr'
    },
    {
      name: 'Hostinger',
      icon: '🌐',
      description: 'Fast, secure, and affordable web hosting platform with 99.9% uptime and easy WordPress integration',
      usage: 'I use Hostinger to host my websites and domains with reliable performance at an unbeatable price',
      link: 'https://hostinger.co.uk?REFERRALCODE=189IANBARP4L',
      buttonText: 'Try Hostinger'
    },
    {
      name: 'Canva',
      icon: '🎨',
      description: 'Professional graphic design platform with drag-and-drop interface, templates, and AI-powered design tools',
      usage: 'I use Canva Pro to create stunning social media graphics, presentations, and marketing materials in minutes',
      link: 'https://www.canva.com/',
      buttonText: 'Try Canva'
    }
  ];

  const trafficLeadSources = [
    {
      name: 'Trafficzest',
      icon: '🚦',
      description: 'Fast, scalable traffic generation platform delivering instant laser-targeted visitors to your offers with a unique bidding system',
      usage: 'Trafficzest helps me get immediate, converting traffic to my offers without waiting for SEO or organic growth',
      link: 'https://bit.ly/tzest',
      buttonText: 'Get Traffic'
    },
    {
      name: 'My Lead Gen Secret',
      icon: '🔑',
      description: 'Daily lead generation service delivering 100 fresh, permission-based email leads every day for just $1/day after first month',
      usage: 'My Lead Gen Secret gives me a constant stream of fresh leads to market to, eliminating my biggest bottleneck',
      link: 'https://www.myleadgensecret.com/?rid=23754',
      buttonText: 'Get Leads'
    },
    {
      name: 'Traffic For Me',
      icon: '🎯',
      description: 'Done-for-you traffic generation service delivering targeted visitors to your offers with hands-free automation',
      usage: 'Traffic For Me provides consistent, high-quality traffic without me having to manage campaigns or ad platforms',
      link: 'https://www.trafficforme.net/IB21',
      buttonText: 'Get Traffic'
    },
    {
      name: 'Udimi',
      icon: '👑',
      description: 'Premium solo ads marketplace connecting you with verified email list owners who deliver real, targeted clicks',
      usage: 'I use Udimi to buy high-quality solo ads from trusted sellers, ensuring I get real clicks from engaged subscribers',
      link: 'https://udimi.com/p/ss52u/recommends',
      buttonText: 'Try Udimi'
    }
  ];

  const trainingPrograms = [
    {
      name: 'Master Affiliate Profits',
      icon: '🎓',
      description: 'Comprehensive affiliate marketing training program with 9 modules covering list building, email marketing, traffic generation, and scaling',
      usage: 'Master Affiliate Profits gave me the complete blueprint for building a profitable affiliate business from scratch',
      link: 'https://masteraffiliateprofits.com/tdf/AzRKxA',
      buttonText: 'Learn More'
    },
    {
      name: 'Ambassador Program',
      icon: '💼',
      description: 'ClickBank\'s elite affiliate training program teaching advanced strategies for promoting high-converting digital products',
      usage: 'The Ambassador Program taught me how to identify winning offers and scale campaigns on ClickBank\'s marketplace',
      link: 'https://hop.clickbank.net/?vendor=ambsador&affiliate=ambprog&cbpage=jv',
      buttonText: 'Join Now'
    },
    {
      name: 'Partner & Profit',
      icon: '🤝',
      description: 'Advanced partnership and profit-sharing training program for building scalable online businesses with strategic collaborations',
      usage: 'Partner & Profit showed me how to leverage partnerships and joint ventures to multiply my income streams',
      link: 'https://warriorplus.com/o2/a/rm2b0sv/0',
      buttonText: 'Learn More'
    },
    {
      name: 'OLSP System',
      icon: '💎',
      description: 'Dynamic online platform offering marketing tools, training, and resources with automated lead capture and email follow-up',
      usage: 'OLSP System provides done-for-you funnels and ongoing training that helped me generate consistent affiliate commissions',
      link: 'https://olspsystem.com/offer/1388/702982/u1',
      buttonText: 'Join OLSP'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tools & Resources
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The exact tools and training programs I use to build AI-powered businesses
          </p>
        </div>

        {/* Tools I Use Section */}
        <div className="mb-20">
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Tools I Use
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              My complete software stack for creating, marketing, and scaling digital products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-gray-300 p-6 transition-all duration-300 hover:border-blue-500 hover:scale-105 hover:shadow-xl flex flex-col"
              >
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{tool.name}</h4>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {tool.description}
                </p>
                <p className="text-sm italic text-teal-600 mb-4 flex-grow">
                  "{tool.usage}"
                </p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300"
                >
                  {tool.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Recommended Resources
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Traffic sources and training programs that accelerated my success
            </p>
          </div>

          {/* Traffic & Lead Sources */}
          <div className="mb-16">
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Traffic & Lead Sources
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trafficLeadSources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border-2 border-gray-300 p-6 transition-all duration-300 hover:border-blue-500 hover:scale-105 hover:shadow-xl flex flex-col"
                >
                  <div className="text-5xl mb-4">{resource.icon}</div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">{resource.name}</h5>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {resource.description}
                  </p>
                  <p className="text-sm italic text-teal-600 mb-4 flex-grow">
                    "{resource.usage}"
                  </p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300"
                  >
                    {resource.buttonText}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Training Programs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainingPrograms.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border-2 border-gray-300 p-6 transition-all duration-300 hover:border-blue-500 hover:scale-105 hover:shadow-xl flex flex-col"
                >
                  <div className="text-5xl mb-4">{resource.icon}</div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">{resource.name}</h5>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {resource.description}
                  </p>
                  <p className="text-sm italic text-teal-600 mb-4 flex-grow">
                    "{resource.usage}"
                  </p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300"
                  >
                    {resource.buttonText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsResources;
