import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Ian's affiliate mastery guide completely changed my perspective on online business. I went from struggling to make $500/month to consistently earning $15K+ every month. The frameworks are incredibly practical and actionable.",
      author: "James Wilson",
      position: "Affiliate Marketer",
      company: "6-Figure Earner",
      rating: 5,
    },
    {
      content: "What blew my mind about Ian's teaching is that it's not hype or fluff. He breaks down exactly what worked for him and makes it repeatable. My passive income streams are now generating $8K/month on autopilot.",
      author: "Lisa Zhang",
      position: "Course Creator",
      company: "Digital Product Expert",
      rating: 5,
    },
    {
      content: "Following Ian's community has been transformative. The accountability, resources, and genuine support from fellow entrepreneurs is invaluable. I've made meaningful connections and tripled my business revenue in just 8 months.",
      author: "Robert Blake",
      position: "Ecommerce Owner",
      company: "Multi-Channel Seller",
      rating: 5,
    },
    {
      content: "I was skeptical at first, but Ian's systems actually work. I built my first $10K funnel in 3 weeks using his exact blueprint. The email marketing sequences alone have paid for itself 100x over. This is game-changing stuff.",
      author: "Alexandra Foster",
      position: "Funnel Builder",
      company: "Digital Entrepreneur",
      rating: 5,
    },
    {
      content: "Ian doesn't gatekeep his knowledge. He generously shares the exact strategies that made him millions. I went from working 60+ hours with no growth to building a business that runs itself. Grateful doesn't even cover it.",
      author: "Marcus Thompson",
      position: "Affiliate & Coach",
      company: "7-Figure Entrepreneur",
      rating: 5,
    },
    {
      content: "The level of transparency and authenticity from Ian is rare in this space. He shows you the wins AND the failures. His traffic hacking strategies helped me grow from 2K to 50K followers in 6 months.",
      author: "Emma Crawford",
      position: "Content Creator",
      company: "Viral Growth Expert",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>What My Students Say</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by 50K+ Entrepreneurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my students and community members have achieved using my resources and frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-blue-100"
            >
              <div className="mb-6">
                <Quote className="text-blue-600 opacity-50" size={40} />
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.position}
                </div>
                <div className="text-sm font-medium text-blue-600 mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9/5.0</div>
              <div className="text-sm text-gray-600 mt-1">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600 mt-1">Client Reviews</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
