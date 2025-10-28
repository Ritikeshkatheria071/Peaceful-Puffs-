export default function Services() {
  const services = [
    {
      title: "BRAND IDENTITY",
      features: [
        "Art Direction",
        "Motion Identity",
        "Logo design",
        "Color systems"
      ]
    },
    {
      title: "WEB & MOBILE DESIGN",
      features: [
        "Clean & Modern UI",
        "Dashboards",
        "Prototyping",
        "Design system"
      ]
    },
    {
      title: "NO-CODE WEBSITES",
      features: [
        "Framer development",
        "Integrations",
        "CMS integration",
        "E-commerce setup"
      ]
    }
  ];

  const bullets = Array(12).fill("•");

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Divider */}
        <div className="text-center mb-12">
          <span className="text-white/40 text-sm tracking-widest">// SERVICES //</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            HOW WE GROW YOUR BUSINESS
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We combine strategy, speed, and skill to deliver exceptional design — every time.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all hover:scale-105"
            >
              {/* Decorative Bullets */}
              <div className="grid grid-cols-6 gap-2 mb-6">
                {bullets.map((bullet, i) => (
                  <span key={i} className="text-white/20 text-center">
                    {bullet}
                  </span>
                ))}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold mb-6 tracking-tight">
                {service.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-white/70 flex items-start gap-2">
                    <span className="text-white/40 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
