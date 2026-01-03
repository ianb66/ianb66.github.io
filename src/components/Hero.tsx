import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap size={16} />
              <span>Entrepreneur & Affiliate Expert</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build Passive Income & Scale Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Entrepreneurial Vision
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Learn my proven strategies for building successful online businesses. I share the tools, resources, and insights that helped me build a 7-figure affiliate and coaching empire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 font-medium text-lg"
              >
                <span>Get My Free Resources</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 px-8 py-4 rounded-full border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium text-lg"
              >
                <span>Read Success Stories</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">$2.3M</div>
                <div className="text-sm text-gray-600">Annual Revenue</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Community Members</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">12 Years</div>
                <div className="text-sm text-gray-600">Entrepreneurship</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="text-green-500" size={24} />
                    <span className="font-semibold text-gray-900">Monthly Revenue</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">$190K+</div>
                  <div className="text-sm text-gray-600 mt-1">From affiliate and digital products</div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="text-blue-500" size={24} />
                    <span className="font-semibold text-gray-900">Student Success</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600 mt-1">Achieve their first income milestone</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
