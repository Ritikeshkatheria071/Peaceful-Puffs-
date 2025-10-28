export default function WhyUs() {
  const stats = [
    { value: "50+", label: "Digital projects delivered" },
    { value: "3X", label: "Delivery timeline reduction" },
    { value: "10k+", label: "Monthly visitors via SEO" },
    { value: "100%", label: "Client satisfaction rate" }
  ];

  return (
    <section id="why-us" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Divider */}
        <div className="text-center mb-12">
          <span className="text-white/40 text-sm tracking-widest">// WHY US //</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            PROVEN RESULTS FOR EVERY PROJECT
          </h2>
        </div>

        {/* Founder Profile */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-24 h-24 rounded-full bg-white/10 mb-4 flex items-center justify-center text-4xl">
            👤
          </div>
          <h3 className="text-xl font-semibold">ROBERT PARK</h3>
          <p className="text-white/60">Founder of Formix</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border border-white/10 rounded-2xl hover:border-white/30 transition-all"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">
                {stat.value}
              </div>
              <div className="text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
