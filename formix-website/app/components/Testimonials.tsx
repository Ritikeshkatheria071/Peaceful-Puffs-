export default function Testimonials() {
  const testimonials = [
    {
      name: "Jared Kim",
      role: "Marketing Director",
      rating: 4.9,
      quote: "THE QUALITY AND SPEED OF DELIVERY EXCEEDED ALL OUR EXPECTATIONS."
    },
    {
      name: "Maya Collins",
      role: "Head of Product",
      rating: 5.0,
      quote: "FORMIX TRANSFORMED OUR BRAND IDENTITY WITH INCREDIBLE ATTENTION TO DETAIL."
    },
    {
      name: "Jesse Leigh",
      role: "CEO & Founder",
      rating: 4.9,
      quote: "WORKING WITH FORMIX WAS SEAMLESS. THEY UNDERSTOOD OUR VISION PERFECTLY."
    },
    {
      name: "Benjamin Daul",
      role: "Head of Engineering",
      rating: 4.9,
      quote: "THE DESIGN SYSTEM THEY CREATED SCALED PERFECTLY WITH OUR PRODUCT."
    },
    {
      name: "Michael Joseph",
      role: "Head of Content",
      rating: 5.0,
      quote: "BEST DESIGN PARTNER WE'VE WORKED WITH. HIGHLY RECOMMEND."
    },
    {
      name: "Amy Louise",
      role: "Customer Success Manager",
      rating: 5.0,
      quote: "RESPONSIVE, PROFESSIONAL, AND DELIVERED EXCEPTIONAL RESULTS."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Divider */}
        <div className="text-center mb-12">
          <span className="text-white/40 text-sm tracking-widest">// CLIENTS //</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            WHY TEAMS CHOOSE TO WORK WITH ME.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all hover:scale-105"
            >
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(testimonial.rating) ? "text-white" : "text-white/20"}
                      >
                        ★
                      </span>
                    ))}
                </div>
                <span className="text-sm text-white/60">{testimonial.rating}</span>
              </div>

              {/* Quote */}
              <p className="text-lg font-semibold mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-white/60">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
