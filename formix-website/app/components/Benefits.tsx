export default function Benefits() {
  const benefits = [
    {
      title: "Predictable Pricing",
      description:
        "One flat monthly fee. No hourly billing, no surprises. Know exactly what you're paying for.",
    },
    {
      title: "Fast Turnarounds",
      description:
        "Most requests delivered in 2-3 days. Get your designs when you need them, not weeks later.",
    },
    {
      title: "Unlimited Requests",
      description:
        "Submit as many design requests as you need. We'll work through them one by one.",
    },
    {
      title: "Dedicated Design Portal",
      description:
        "Manage all your requests in one place. Track progress, provide feedback, and stay organized.",
    },
    {
      title: "Top-Tier Quality",
      description:
        "Professional designs that match your brand. Every pixel crafted with care and attention.",
    },
    {
      title: "Problem Solving",
      description:
        "We don't just design—we solve problems. Strategic thinking built into every project.",
    },
  ];

  return (
    <section id="benefits" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-cyan-400 text-sm mb-4 font-mono">
          // Benefits // Benefits // Benefits //
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          ESSENTIALS ONLY.
          <br />
          RESULTS FIRST.
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          Get unlimited design work for a simple monthly rate. No hourly
          billing, no surprises — pause or cancel whenever you need.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
