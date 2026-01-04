import { BookOpen, Zap, Mail, TrendingUp, ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: BookOpen,
      title: 'Affiliate Mastery',
      description: 'Complete blueprint for building a profitable affiliate business from scratch. Learn the exact framework I use.',
      href: '#',
    },
    {
      icon: Zap,
      title: 'Passive Income Systems',
      description: 'Build multiple revenue streams with digital products and courses that generate income on autopilot.',
      href: '#',
    },
    {
      icon: Mail,
      title: 'Email Marketing Mastery',
      description: 'Grow your list to 50K+ subscribers and monetize with proven email sequences and sales strategies.',
      href: '#',
    },
    {
      icon: TrendingUp,
      title: 'Growth Accelerator',
      description: 'Advanced strategies for scaling from 6-figures to 7-figures using proven systems and automation.',
      href: '#',
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Products</h2>
          <p className="text-xl text-gray-600">Tools and courses designed to accelerate your journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <product.icon className="text-white" size={24} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {product.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <a
                href={product.href}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group"
              >
                <span>Learn More</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
