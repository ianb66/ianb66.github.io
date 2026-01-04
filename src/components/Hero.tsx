import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm Ian.
            </h1>
            <p className="text-2xl text-gray-600 font-light">
              I build tools and share knowledge to help entrepreneurs succeed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <a
              href="#products"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 font-medium"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center space-x-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium"
            >
              <span>Free Resources</span>
            </a>
          </div>

          <div className="pt-12 relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center">
              <div className="text-8xl">📸</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
