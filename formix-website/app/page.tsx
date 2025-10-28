"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Benefits from "./components/Benefits";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <Services />
      <WhyUs />
      <Benefits />
      <Work />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
