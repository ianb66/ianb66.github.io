import React from 'react';
import { CheckCircle, Rocket, Youtube, Mail, MessageCircle } from 'lucide-react';

interface AboutProps {
  onOpenModal: () => void;
}

const About = ({ onOpenModal }: AboutProps) => {
  return (
    <div className="bg-white py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Photo + Intro */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Left: Photo (2 columns) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-teal-100">
                <img 
                  src="/IanJB.png" 
                  alt="Ian Barwell - AI Entrepreneur" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Intro Content (3 columns) */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About Ian Barwell</h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-teal-600 mb-6">
              From Beat Cop to AI Entrepreneur: My Unconventional Journey
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
              <strong>At 66 years old, I learned Python, launched three AI-powered softwares, and built complete sales funnels with payment integration—all in less than a year.</strong>
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Most AI marketers will tell you about their computer science degrees or their years at tech startups. My story starts on the streets of Manchester as an 18-year-old police officer.
            </p>
          </div>
        </div>

        {/* The Unlikely Path to Tech */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Unlikely Path to Tech</h3>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              I spent 34 years in law enforcement, learning something that most marketers never master: patience, pattern recognition, and methodical problem-solving. I learned to gather evidence, test hypotheses, and build criminal cases. Those skills? They're the foundation of everything I do in AI and marketing today.
            </p>
            <p className="mb-4">
              But here's the twist—I've always been a tech enthusiast in hiding.
            </p>
            <p className="mb-4">
              When the internet first crawled into existence, I was one of the first to get a computer with a dial-up modem (I remember that screeching sound was music to my ears). While my colleagues were skeptical of "computer stuff," I was exploring this new digital frontier.
            </p>
            <p>
              In 2006, I stumbled into cryptocurrency—years before it was mainstream. Bitcoin? I had some. And yes, I sold too early—but that early exposure taught me something invaluable: how to spot emerging technology before the crowd arrives. That same instinct led me to AI in 2024.
            </p>
          </div>
        </div>

        {/* The AI Awakening */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The AI Awakening</h3>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="mb-4">
              After retiring from the police, I continued in private security and spent my final working years with Border Force at Manchester Airport until June 2024. Throughout this time, I dabbled in digital marketing and software, always keeping one foot in the tech world.
            </p>
            <p className="mb-6">
              Then 2024 happened. AI exploded. And at 66 years old, I thought: <em>"I've been preparing for this my entire life."</em>
            </p>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">In less than a year, I've:</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                <strong>Launched three AI-powered softwares</strong> – CompeteWithClaude (competitive analysis for affiliates), ThinkLearn (AI education platform), and ProPageReview (Chrome extension for instant product reviews)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                <strong>Taught myself Python programming</strong> from scratch (albeit, I'm still a beginner)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                <strong>Built complete sales funnels</strong> with payment integration, email automation, and password-protected delivery systems
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                <strong>Migrated from traditional hosting to modern GitHub Pages deployment</strong> with custom domains and automated workflows
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                <strong>Created comprehensive marketing systems</strong> with AWeber sequences, lead magnets, and multi-stage nurture campaigns
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-6 italic">
            And I did it all while everyone told me I should be thinking about retirement.
          </p>
        </div>

        {/* What Makes Me Different */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">What Makes Me Different?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Experience Over Hype */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-xl">
                  1
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Experience Over Hype</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I bring years of real-world experience. I've seen tech bubbles come and go. I've learned that sustainable business isn't about hype—it's about solving real problems for real people. My police training taught me to be skeptical, thorough, and evidence-based. I don't chase shiny objects; I build systems that work.
              </p>
            </div>

            {/* 2. Hands-On, Not Theory */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-xl">
                  2
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Hands-On, Not Theory</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                While many marketers talk about AI, I'm in the trenches coding, testing, and deploying. I learned Python at 66, not because it looked good on my resume, but because I needed to build actual products. Every tutorial I create, every strategy I share, comes from hands-on implementation—not regurgitated theory.
              </p>
            </div>

            {/* 3. Systematic, Not Impulsive */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-xl">
                  3
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Systematic, Not Impulsive</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                34 years of law enforcement trains you to be methodical. I approach AI and marketing like building a legal case: gather data, test hypotheses, document everything, and only make claims you can back up. This systematic approach means my students get step-by-step systems that actually work, not flashy tactics that fall apart under pressure.
              </p>
            </div>

            {/* 4. Living Proof It's Never Too Late */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-500 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-xl">
                  4
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900">Living Proof It's Never Too Late</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                If a 66-year-old former police officer can learn Python, build AI products, master GitHub workflows, and launch multiple businesses in a year, what's your excuse? I'm living proof: age is just a number, and career transformation is possible at any stage.
              </p>
            </div>
          </div>
        </div>

        {/* My Mission */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">My Mission</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm building tools and education that democratize AI and marketing for everyday people. Whether it's competitive analysis for affiliates, Socratic learning for homeschoolers, or instant product reviews for marketers, my goal is the same: make complex technology accessible and actionable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm especially passionate about showing affiliate marketers how to leverage AI for competitive advantage—because I've lived both sides. I know what it's like to be the outsider looking at tech, and I know how to bridge that gap.
          </p>
        </div>

        {/* What's Next */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What's Next?</h3>
          <p className="text-lg text-gray-700 mb-6">I'm not slowing down. Here's what's coming:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Rocket className="w-8 h-8 text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">White-label AI product platform (January 2025)</h4>
                <p className="text-gray-700">So you can sell AI tools under your own brand</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Youtube className="w-8 h-8 text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">"Claude for Affiliates" YouTube channel</h4>
                <p className="text-gray-700">Practical AI tutorials for affiliate marketers (launching soon!)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="w-8 h-8 text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">AI marketing automation systems</h4>
                <p className="text-gray-700">Built specifically for small businesses</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-teal-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Continuous learning</h4>
                <p className="text-gray-700">Because in AI, standing still means falling behind</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Bottom Line */}
        <div className="mb-16 border-l-4 border-teal-600 pl-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm not here to sell you a dream. I'm here to show you what's possible when you combine experience, discipline, and a willingness to learn. I've spent 66 years preparing for this moment—years of learning systematic problem-solving in law enforcement, decades staying ahead of tech trends, and the last year proving you can reinvent yourself at any age.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            If you want flashy promises and get-rich-quick schemes, I'm not your guy. But if you want proven systems, honest implementation advice, and strategies built on decades of pattern recognition, stick around.
          </p>
          <p className="text-lg text-gray-900 font-semibold">
            The best part of my career is just beginning. And if you're ready to leverage AI for your business, maybe yours is too.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-700 to-teal-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Join the AI Revolution?</h3>
          <p className="text-lg sm:text-xl mb-8">Here's how to get started:</p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">1</div>
              <h4 className="font-bold mb-2">Test my AI Software</h4>
              <p className="text-sm">CompeteWithClaude, ProPageReview, and ThinkLearn are live and ready to use</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">2</div>
              <h4 className="font-bold mb-2">Explore my AI Tools & Resources</h4>
              <p className="text-sm">Discover the exact tools and training I use to build AI-powered softwares</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">3</div>
              <h4 className="font-bold mb-2">Join my email list</h4>
              <p className="text-sm">Get early access to new tools, exclusive tutorials, and proven strategies</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-block px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore My Products
            </a>
            <button
              onClick={onOpenModal}
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
