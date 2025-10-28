export default function Benefits() {
  const benefits = [
    {
      title: "Predictable Pricing",
      description: "Fixed monthly rate with no hidden fees or surprises."
    },
    {
      title: "Fast Turnarounds",
      description: "Get your designs delivered in 48 hours or less."
    },
    {
      title: "Unlimited Requests",
      description: "Submit as many design requests as you need."
    },
    {
      title: "Dedicated Design Portal",
      description: "Manage all your projects in one organized place."
    },
    {
      title: "Top-Tier Quality",
      description: "Professional designs that match your brand vision."
    },
    {
      title: "Problem Solving",
      description: "Strategic thinking to solve your design challenges."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Divider */}
        <div className="text-center mb-12">
          <span className="text-white/40 text-sm tracking-widest">// BENEFITS //</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            ESSENTIALS ONLY. RESULTS FIRST.
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Get unlimited design work for a simple monthly rate with no contracts or commitments.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-white/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
