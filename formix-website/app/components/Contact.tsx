"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", website: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-cyan-400 text-sm mb-4 font-mono">
          // Contact // Contact // Contact //
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          LET'S DESIGN, BUILD,
          <br />
          CREATE TOGETHER
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-400 mb-16 max-w-3xl">
          Got questions or ready to start your design project? Let's bring your
          ideas to life!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Chat to Sales</h3>
              <a
                href="mailto:sales@formix.com"
                className="text-cyan-400 hover:text-cyan-300 text-lg"
              >
                sales@formix.com
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <a
                href="tel:+359887779880"
                className="text-cyan-400 hover:text-cyan-300 text-lg"
              >
                +359 887 779 880
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Office</h3>
              <p className="text-gray-400 text-lg">
                100 Georgi S. Rakovski Street
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
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
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <input
                  type="url"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="More Info"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-full transition-all"
              >
                Send the message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
