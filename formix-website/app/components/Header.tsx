"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold tracking-tight">FORMIX</h1>
            <span className="hidden md:inline-block px-3 py-1 text-xs border border-white/20 rounded-full">
              Available For Projects
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-sm hover:text-white/70 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-sm hover:text-white/70 transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-sm hover:text-white/70 transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection("work")} className="text-sm hover:text-white/70 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm hover:text-white/70 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm hover:text-white/70 transition-colors">
              Clients
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm hover:text-white/70 transition-colors">
              FAQs
            </button>
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105">
            Book Free Call
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-0.5 bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("services")} className="text-left py-2 hover:text-white/70 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("why-us")} className="text-left py-2 hover:text-white/70 transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-left py-2 hover:text-white/70 transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection("work")} className="text-left py-2 hover:text-white/70 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-left py-2 hover:text-white/70 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-left py-2 hover:text-white/70 transition-colors">
              Clients
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-left py-2 hover:text-white/70 transition-colors">
              FAQs
            </button>
            <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all">
              Book Free Call
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
