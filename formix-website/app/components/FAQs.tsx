"use client";

import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does the subscription model work?",
      answer:
        "You pay a fixed monthly fee and get access to a dedicated design team. Submit unlimited requests, and we'll deliver them one by one (or two at a time with the Pro plan). No hourly billing, no contracts — cancel or pause anytime.",
    },
    {
      question: "What kind of design tasks can I request?",
      answer:
        "Anything from brand identity, web design, mobile apps, marketing materials, social media graphics, presentations, and more. If it's design-related, we can help.",
    },
    {
      question: "How fast will I receive my designs?",
      answer:
        "Most requests are delivered within 2-3 business days. Complex projects may take longer, but we'll always communicate timelines upfront.",
    },
    {
      question: "What tools do you use?",
      answer:
        "We use industry-standard tools including Figma, Adobe Creative Suite, Framer, and more. We'll work with whatever tools fit your workflow best.",
    },
    {
      question: "Are there any limits to requests?",
      answer:
        "No limits on the number of requests. However, we work on them one at a time (or two with Pro plan) to ensure quality and attention to detail.",
    },
    {
      question: "Can I cancel or pause my subscription?",
      answer:
        "Yes! You can pause or cancel your subscription at any time. No long-term contracts or commitments required.",
    },
  ];

  return (
    <section id="faqs" className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-cyan-400 text-sm mb-4 font-mono">
          // FAQs // FAQs // FAQs //
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          QUESTIONS &<br />
          ANSWERS
        </h2>

        {/* Subheading */}
        <p className="text-xl text-gray-400 mb-12">
          Everything you need to know about our design subscription service.
        </p>

        {/* CTA */}
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">HAVE MORE QUESTIONS?</h3>
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-full transition-all"
          >
            BOOK A FREE DISCOVERY CALL
          </a>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-semibold pr-8">
                  {faq.question}
                </span>
                <span className="text-2xl text-cyan-400 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
