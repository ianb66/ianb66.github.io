import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">Stay Updated</h3>
            <p className="text-lg text-blue-100">Get exclusive tips, new product launches, and strategies delivered to your inbox.</p>

            {subscribed ? (
              <div className="inline-flex items-center space-x-2 bg-white/20 px-6 py-3 rounded-lg">
                <Mail className="text-white" size={20} />
                <span className="text-white font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Ian Barwell
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building a community of successful entrepreneurs. I share the systems, resources, and frameworks I used to build a 7-figure business—all to help you achieve your goals.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                'Affiliate Marketing',
                'Passive Income',
                'Email Mastery',
                'Traffic Growth',
                'Community Building',
                'Business Scaling',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Ian', href: '#team' },
                { label: 'Success Stories', href: '#case-studies' },
                { label: 'My Community', href: '#' },
                { label: 'Podcast', href: '#' },
                { label: 'Free Training', href: '#' },
                { label: 'Get Started', href: '#contact' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'GDPR',
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Ian Barwell. All rights reserved. Built with passion for entrepreneurs.
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
