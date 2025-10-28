export default function SocialProof() {
  const logos = Array(12).fill("•");

  return (
    <section className="py-12 px-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <span className="text-sm text-white/60">
            Trusted by <span className="font-semibold text-white">50+</span> businesses
          </span>
          <div className="flex gap-6 items-center flex-wrap justify-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center text-white/40 text-2xl"
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
