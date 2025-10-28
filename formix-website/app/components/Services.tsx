export default function Services() {
  const services = [
    {
      title: "Brand Identity",
      items: [
        "Art Direction",
        "Motion Identity",
        "Logo design",
        "Color systems",
      ],
    },
    {
      title: "Web & Mobile Design",
      items: [
        "Clean & Modern UI",
        "Dashboards",
        "Prototyping",
        "Design system",
      ],
    },
    {
      title: "No-Code Websites",
      items: [
        "Framer development",
        "Integrations",
        "CMS integration",
        "E-commerce setup",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-cyan-400 text-sm mb-4 font-mono">
          // Services // Services // Services //
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          HOW WE GROW YOUR
          <br />
          BUSINESS
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          We combine strategy, speed, and skill to deliver exceptional design —
          every time.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-cyan-400 mr-3">→</span>
                    <span className="text-gray-300">{item}</span>
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
