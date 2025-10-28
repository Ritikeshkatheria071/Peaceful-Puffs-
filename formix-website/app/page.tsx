"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Benefits from "./components/Benefits";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WhyUs />
      <Benefits />
      <Projects />
      <Pricing />
      <Clients />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}
