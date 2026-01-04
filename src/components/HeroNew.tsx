import React from 'react';
import { ArrowRight, Zap, TrendingUp, Cpu } from 'lucide-react';

const HeroNew = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1E40AF] to-[#0891B2] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Hero Top Section - Photo + Headline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/IanJB.png" 
                  alt="Ian Barwell" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Right: Headline + Subheadline */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Has Changed Everything!
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Here's How I'm Using It To Build SaaS Businesses Faster Than Ever
            </h2>
            <p className="text-xl sm:text-2xl text-white/90">
              Learn the exact AI strategies I use to build, launch, and scale SaaS products
            </p>
          </div>
        </div>

        {/* The AI Opportunity */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <Cpu className="w-6 h-6" />
            <h2 className="text-2xl font-bold uppercase tracking-wide">The AI Opportunity</h2>
          </div>
          <h3 className="text-3xl font-bold mb-4">Why Now?</h3>
          <p className="text-lg text-white/90 leading-relaxed">
            The intersection of advanced AI models and no-code tools has created an unprecedented moment for rapid product development. Seize the opportunity to innovate and dominate your niche now.
          </p>
        </div>

        {/* Three Product Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* CompeteWithClaude */}
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E40AF] to-[#0891B2] rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">CompeteWithClaude</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              An AI-powered competitive intelligence tool. Analyze market rivals and their strategies instantly using Claude's advanced capabilities.
            </p>
          </div>

          {/* Pro Page Review */}
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E40AF] to-[#0891B2] rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Pro Page Review</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Automated landing page optimization. Get AI-driven actionable insights to improve conversion rates and user experience.
            </p>
          </div>

          {/* ThinkLearn */}
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1E40AF] to-[#0891B2] rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">ThinkLearn</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              A personalized AI learning assistant for SaaS concepts. Accelerate your knowledge acquisition and application in record time.
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-wide">Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="flex justify-center mb-4">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-bold mb-2">10x Faster</h3>
              <p className="text-white/90 text-lg">Development Speed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold mb-2">Automated</h3>
              <p className="text-white/90 text-lg">Workflows & Tasks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="text-4xl font-bold mb-2">Scalable</h3>
              <p className="text-white/90 text-lg">Growth Potential</p>
            </div>
          </div>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#join"
            className="inline-flex items-center gap-2 bg-white text-[#1E40AF] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-xl"
          >
            Join the AI Revolution
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
          >
            See My Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
