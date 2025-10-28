"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the subscription model work?",
      answer: "Our subscription model gives you unlimited design requests for a fixed monthly fee. You can submit as many requests as you need, and we'll work on them one at a time. You can pause or cancel anytime with no long-term commitment required."
    },
    {
      question: "What kind of design tasks can I request?",
      answer: "You can request any design work including brand identity, web design, mobile app design, marketing materials, social media graphics, presentations, and more. If you're unsure, just ask and we'll let you know if it's within scope."
    },
    {
      question: "How fast will I receive my designs?",
      answer: "Most design requests are delivered within 48 hours. Complex projects may take longer, but we'll always communicate timelines upfront and keep you updated throughout the process."
    },
    {
      question: "What tools do you use to manage the work?",
      answer: "We provide a dedicated design portal where you can submit requests, track progress, provide feedback, and access all your completed designs. Everything is organized in one place for easy collaboration."
    },
    {
      question: "Is there a limit to how many requests I can make?",
      answer: "No limits! You can submit as many design requests as you need. We work on them one at a time to ensure quality and attention to detail for each project."
    },
    {
      question: "Can I cancel or pause anytime?",
      answer: "Yes, absolutely. You can pause your subscription if you don't have active design needs, and resume whenever you're ready. You can also cancel anytime with no penalties or fees."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Divider */}
        <div className="text-center mb-12">
          <span className="text-white/40 text-sm tracking-widest">// FAQs //</span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            QUESTIONS & ANSWERS.
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
            Everything you need to know about our design subscription service.
          </p>

          {/* CTA */}
          <div className="mb-12">
            <p className="text-white/60 mb-4">HAVE MORE QUESTIONS? BOOK A FREE DISCOVERY CALL</p>
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 mb-2">
              Book Free Call
            </button>
            <div>
              <a href="mailto:hello@formix.com" className="text-sm text-white/60 hover:text-white transition-colors">
                Or, email me
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <span className="text-2xl flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
