export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My AI-Powered Products
          </h2>
          <p className="text-xl text-gray-600">
            Three tools I've built to help entrepreneurs leverage AI
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {/* Product 1 - CompeteWithClaude (Content Left, Image Right) */}
          <div className="group border-2 border-gray-200 rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-blue-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <p className="text-sm uppercase text-gray-500 mb-2">PRODUCT 1 - CompeteWithClaude</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  CompeteWithClaude
                </h3>
                <p className="text-xl text-teal-600 mb-6">
                  AI-Powered Competitor Analysis
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Analyze competitor strategies instantly</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Discover content gaps and opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Generate SEO-optimized outlines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Powered by Claude AI</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    FREE Tutorial
                  </span>
                  <a
                    href="https://competewithclaude.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Create Report
                  </a>
                </div>
              </div>
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl h-80 flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-sm">Analytics Dashboard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 - ProPageReview (Content Right, Image Left) */}
          <div className="group border-2 border-gray-200 rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-blue-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl h-80 flex items-center justify-center shadow-lg order-2 md:order-1">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <p className="text-sm">Review Generator</p>
                </div>
              </div>
              {/* Content */}
              <div className="order-1 md:order-2">
                <p className="text-sm uppercase text-gray-500 mb-2">PRODUCT 2 - ProPageReview</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  ProPageReview
                </h3>
                <p className="text-xl text-teal-600 mb-6">
                  Instant Product Review Generator
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Generate complete reviews in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Chrome extension for any product</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Includes emails, social posts, hashtags</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No writing skills needed</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    $17 One-Time
                  </span>
                  <a
                    href="https://propagereview.com/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Get Instant Access
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 - ThinkLearn (Content Left, Image Right) */}
          <div className="group border-2 border-gray-200 rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-blue-500 hover:scale-[1.02] hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <p className="text-sm uppercase text-gray-500 mb-2">PRODUCT 3 - ThinkLearn</p>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  ThinkLearn
                </h3>
                <p className="text-xl text-teal-600 mb-6">
                  AI Learning Through Questions
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Learn any topic using Socratic method</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Perfect for homeschooling & lifelong learners</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Track progress and earn certificates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Verified sources and deep understanding</span>
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <span className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    FREE Forever
                  </span>
                  <a
                    href="https://thinklearn.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-blue-700 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Start Learning
                  </a>
                </div>
              </div>
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl h-80 flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-sm">Learning Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
