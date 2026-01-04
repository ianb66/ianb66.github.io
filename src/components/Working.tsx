export default function Working() {
  const items = [
    'Building a new AI-powered tool that helps entrepreneurs automate their email marketing and see real-time performance metrics.',
    'Creating an advanced mastermind community where serious entrepreneurs can collaborate, share strategies, and accelerate their growth together.',
    'Developing a comprehensive course platform that makes it easier than ever to create, launch, and scale digital products with proven frameworks.',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What I'm Working On</h2>

        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center mt-1">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed pt-1">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
