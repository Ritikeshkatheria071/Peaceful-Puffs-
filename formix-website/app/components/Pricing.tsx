export default function Pricing() {
  const pricingTiers = [
    {
      name: "Design Retainer",
      price: "$5K",
      originalPrice: "$6K",
      period: "/mo",
      features: [
        "Unlimited requests",
        "One at a time",
        "Fixed monthly rate",
        "Async communication",
        "Flexible scope",
        "Pause anytime"
      ],
      addon: "Development + $1000"
    },
    {
      name: "Single Project",
      price: "$10K",
      originalPrice: "$15K",
      period: "Start",
      features: [
        "Dedicated team",
        "End-to-End Web Development",
        "Custom Timeline & Scope",
        "Async communication",
        "Advanced SEO & Marketing",
        "Updates every 48 hours"
      ],
      addon: "Development + $1000",
      featured: true
    }
  ];

  const clientLogos = Array(7).fill("•");

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Divider */}
        <div className="text-center mb-12">
          <span className="text-white/40 text-sm tracking-widest">// PRICING //</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            SMART PRICING. REMARKABLE DESIGN.
          </h2>

          {/* Process Steps */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/60 mb-12">
            <span>Subscribe</span>
            <span className="hidden sm:inline">→</span>
            <span>Request</span>
            <span className="hidden sm:inline">→</span>
            <span>Approve or Revise</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`border rounded-2xl p-8 transition-all hover:scale-105 ${
                tier.featured
                  ? "border-white/30 bg-white/5"
                  : "border-white/10"
              }`}
            >
              {/* Tier Name */}
              <h3 className="text-2xl font-bold mb-6">{tier.name}</h3>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-2xl text-white/40 line-through">
                    {tier.originalPrice}
                  </span>
                  <span className="text-white/60">{tier.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white/40 mt-1">✓</span>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Add-on */}
              <div className="mb-8 p-4 border border-white/10 rounded-lg">
                <span className="text-sm text-white/60">{tier.addon}</span>
              </div>

              {/* CTA */}
              <button className="w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105">
                Book Free Call
              </button>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-white/60 mb-6">Worked with:</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="w-12 h-12 flex items-center justify-center text-white/40 text-3xl"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
