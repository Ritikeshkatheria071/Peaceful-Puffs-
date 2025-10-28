"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", website: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      title: "Chat to Sales",
      value: "sales@formix.com",
      link: "mailto:sales@formix.com"
    },
    {
      title: "Call Us",
      value: "+359 887 779 80",
      link: "tel:+359887779880"
    },
    {
      title: "Office",
      value: "100 Georgi S. Rakovski Street",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Divider */}
        <div className="text-center mb-12">
          <span className="text-white/40 text-sm tracking-widest">// CONTACT //</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            LET'S DESIGN, BUILD, CREATE TOGETHER.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="border border-white/10 rounded-2xl p-6">
                <h3 className="text-sm text-white/60 mb-2">{method.title}</h3>
                {method.link ? (
                  <a
                    href={method.link}
                    className="text-xl font-semibold hover:text-white/70 transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-xl font-semibold">{method.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="url"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="More Info"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105"
            >
              Send the message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
