import React from 'react';
import { ArrowRight, Zap, TrendingUp, Cpu } from 'lucide-react';

interface HeroNewProps {
  onOpenModal: () => void;
}

const HeroNew = ({ onOpenModal }: HeroNewProps) => {
  return (
    <div className="relative bg-gradient-to-br from-[#1E40AF] to-[#0891B2] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Hero Top Section - Headline */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
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

        {/* Old Way vs New Way Comparison */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Old Way of Building Online Businesses vs The AI-Powered Way
            </h2>
            <p className="text-xl text-white/90">
              Why waste years learning code when AI can build your business in weeks?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="bg-red-50 border-4 border-red-400 rounded-2xl p-8 shadow-xl">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-red-600 text-center mb-6">The Old Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-500 flex-shrink-0">✗</span>
                  <span className="text-gray-900 text-lg">Spend months learning to code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-500 flex-shrink-0">✗</span>
                  <span className="text-gray-900 text-lg">Hire expensive developers ($5,000+ per project)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-500 flex-shrink-0">✗</span>
                  <span className="text-gray-900 text-lg">Wait weeks for simple changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-500 flex-shrink-0">✗</span>
                  <span className="text-gray-900 text-lg">Struggle with technical issues alone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-red-500 flex-shrink-0">✗</span>
                  <span className="text-gray-900 text-lg">Miss opportunities while competitors move fast</span>
                </li>
              </ul>
            </div>

            {/* The New Way */}
            <div className="bg-teal-50 border-4 border-teal-400 rounded-2xl p-8 shadow-xl">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-teal-600 text-center mb-6">The New Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-teal-500 flex-shrink-0">✓</span>
                  <span className="text-gray-900 text-lg">Build SaaS products in days, not months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-teal-500 flex-shrink-0">✓</span>
                  <span className="text-gray-900 text-lg">Use AI to write code, design, and deploy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-teal-500 flex-shrink-0">✓</span>
                  <span className="text-gray-900 text-lg">Make changes instantly without developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-teal-500 flex-shrink-0">✓</span>
                  <span className="text-gray-900 text-lg">Launch 3 businesses in a year (even at 66!)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-teal-500 flex-shrink-0">✓</span>
                  <span className="text-gray-900 text-lg">Focus on strategy while AI handles execution</span>
                </li>
              </ul>
            </div>
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
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-white text-[#1E40AF] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-xl"
          >
            Join Now
            <ArrowRight className="w-5 h-5" />
          </button>
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
