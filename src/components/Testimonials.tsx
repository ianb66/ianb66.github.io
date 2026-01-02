import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Velocity Digital transformed our online presence completely. Within 6 months, we saw a 300% increase in qualified leads and our revenue doubled. Their strategic approach and attention to detail is unmatched.",
      author: "Sarah Mitchell",
      position: "CEO",
      company: "TechFlow Solutions",
      rating: 5,
    },
    {
      content: "The ROI we've achieved with Velocity Digital is exceptional. They don't just execute campaigns—they become true partners in your growth. Every recommendation is backed by data and delivers results.",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "Urban Boutique",
      rating: 5,
    },
    {
      content: "Working with Velocity Digital has been a game-changer. Their expertise in both strategy and execution helped us dominate our market. The team is responsive, knowledgeable, and genuinely invested in our success.",
      author: "Jennifer Rodriguez",
      position: "VP of Marketing",
      company: "Global Finance Group",
      rating: 5,
    },
    {
      content: "We tried several agencies before Velocity Digital, but none came close to their level of service and results. They increased our organic traffic by 400% and helped us scale profitably. Highly recommend!",
      author: "David Thompson",
      position: "Founder",
      company: "Summit Ventures",
      rating: 5,
    },
    {
      content: "The team at Velocity Digital is simply outstanding. They took time to understand our business, industry, and goals. The customized strategy they developed has delivered consistent growth quarter after quarter.",
      author: "Emily Watson",
      position: "CMO",
      company: "Nexus Healthcare",
      rating: 5,
    },
    {
      content: "Professional, results-driven, and innovative. Velocity Digital brought fresh ideas that transformed our marketing approach. Our customer acquisition costs dropped by 45% while quality improved significantly.",
      author: "Robert Kim",
      position: "Growth Lead",
      company: "Catalyst Software",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
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
