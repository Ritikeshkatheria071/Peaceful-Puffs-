export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            WORLD-CLASS DESIGN PARTNER FOR AI STARTUPS
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto">
            Fast, reliable, and scalable design solutions tailored for your growing startup.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 w-full sm:w-auto"
            >
              View Pricing
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all hover:scale-105 w-full sm:w-auto">
              Book Free Call
            </button>
          </div>

          {/* Brand Repeat */}
          <div className="mt-16 text-sm text-white/40 tracking-widest">
            FORMIX
          </div>
        </div>
      </div>
    </section>
  );
}
