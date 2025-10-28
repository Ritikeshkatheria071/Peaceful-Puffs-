export default function Clients() {
  const testimonials = [
    {
      name: "Jared Kim",
      role: "Marketing Director",
      rating: 5.0,
      text: "Working with Formix has been a game-changer for our startup. The quality and speed of delivery exceeded all expectations.",
    },
    {
      name: "Maya Collins",
      role: "Head of Product",
      rating: 4.9,
      text: "The design subscription model is brilliant. We get consistent, high-quality work without the overhead of hiring full-time.",
    },
    {
      name: "Jesse Leigh",
      role: "CEO & Founder",
      rating: 5.0,
      text: "Formix helped us establish a strong brand identity that resonates with our target audience. Highly recommended!",
    },
    {
      name: "Benjamin Daul",
      role: "Head of Engineering",
      rating: 5.0,
      text: "The designs are not just beautiful—they're functional and well-thought-out. Perfect for our technical product.",
    },
    {
      name: "Michael Joseph",
      role: "Head of Content",
      rating: 4.9,
      text: "Fast turnaround times and excellent communication. The team truly understands what we need before we even ask.",
    },
    {
      name: "Amy Louise",
      role: "Customer Success Manager",
      rating: 5.0,
      text: "Our customers love the new interface. The user experience improvements have significantly reduced support tickets.",
    },
  ];

  return (
    <section id="clients" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-cyan-400 text-sm mb-4 font-mono">
          // Clients // Clients // Clients //
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          WHY TEAMS CHOOSE
          <br />
          TO WORK WITH ME
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-cyan-400 mr-2">
                  {testimonial.rating}
                </span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-cyan-400">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
