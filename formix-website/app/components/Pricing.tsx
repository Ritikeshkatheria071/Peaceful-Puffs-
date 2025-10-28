export default function Pricing() {
  const plans = [
    {
      name: "Design Retainer",
      price: "$5K",
      originalPrice: "$6K",
      period: "/mo",
      features: [
        "Unlimited design requests",
        "2-3 day turnaround",
        "Unlimited revisions",
        "Dedicated designer",
        "Design portal access",
        "Pause or cancel anytime",
      ],
    },
    {
      name: "Single Project",
      price: "$10K",
      originalPrice: "$15K",
      period: "Start",
      features: [
        "One-time project",
        "Complete brand identity",
        "Website design & development",
        "3 rounds of revisions",
        "Source files included",
        "30-day support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-cyan-400 text-sm mb-4 font-mono">
          // Pricing // Pricing // Pricing //
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          SMART PRICING.
          <br />
          REMARKABLE DESIGN.
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          Pick your plan and start designing today. One flat fee. Unlimited
          design. Zero stress.
        </p>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-6xl font-bold text-cyan-400 mb-4">01</div>
            <h3 className="text-2xl font-bold mb-2">SUBSCRIBE</h3>
            <p className="text-gray-400">Pick a plan that fits your needs</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-cyan-400 mb-4">02</div>
            <h3 className="text-2xl font-bold mb-2">REQUEST</h3>
            <p className="text-gray-400">Submit unlimited design tasks</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-cyan-400 mb-4">03</div>
            <h3 className="text-2xl font-bold mb-2">APPROVE OR REVISE</h3>
            <p className="text-gray-400">Receive designs in 2-3 days</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-2xl text-gray-500 line-through ml-2">
                  {plan.originalPrice}
                </span>
                <span className="text-xl text-gray-400 ml-2">
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-full transition-all text-center"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Worked With */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Worked with:</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["LOGO", "LOGO", "LOGO", "LOGO", "LOGO"].map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-gray-600">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
