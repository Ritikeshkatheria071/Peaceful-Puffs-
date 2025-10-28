"use client";

import { useEffect, useState } from "react";

export default function WhyUs() {
  const [counts, setCounts] = useState({
    projects: 0,
    timeline: 0,
    visitors: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const targets = {
      projects: 150,
      timeline: 3,
      visitors: 100,
      satisfaction: 98,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.floor(targets.projects * progress),
        timeline: Math.floor(targets.timeline * progress),
        visitors: Math.floor(targets.visitors * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="why-us" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-cyan-400 text-sm mb-4 font-mono">
          // Why Us // Why Us // Why Us //
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          PROVEN RESULTS FOR
          <br />
          EVERY PROJECT
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Founder Profile */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold">ROBERT PARK</h3>
                  <p className="text-gray-400">Founder of Formix</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                With over a decade of experience in design and development, I've
                helped 50+ startups transform their vision into reality through
                exceptional design solutions.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {counts.projects}+
              </div>
              <div className="text-gray-400">Digital projects delivered</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {counts.timeline}X
              </div>
              <div className="text-gray-400">Delivery timeline reduction</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {counts.visitors}k+
              </div>
              <div className="text-gray-400">Monthly visitors via SEO</div>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {counts.satisfaction}%
              </div>
              <div className="text-gray-400">Client satisfaction rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
