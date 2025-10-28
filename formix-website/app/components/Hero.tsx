"use client";

export default function Hero() {
  const logos = ["LOGO", "LOGO", "LOGO", "LOGO", "LOGO", "LOGO"];

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Headline */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            WORLD-CLASS DESIGN
            <br />
            PARTNER FOR AI
            <br />
            STARTUPS
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
            Fast, reliable, and scalable design solutions tailored for your
            growing startup.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#pricing"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-full transition-all text-lg"
            >
              View Pricing
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-full transition-all text-lg"
            >
              Book Free Call
            </a>
          </div>

          {/* Social Proof */}
          <div className="text-gray-400 mb-8">
            <span className="text-2xl font-bold text-white">50+</span> Trusted
            by 50+ businesses
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden py-8 border-t border-b border-gray-800">
          <div className="flex animate-marquee space-x-12">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-gray-600"
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
