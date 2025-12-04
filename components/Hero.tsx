"use client";

import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import { usePageLoadAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const isLoaded = usePageLoadAnimation(100);

  return (
    <section id="home" className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center pt-16 pb-10 md:pt-20 md:pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Dark Overlay */}
        <img
          src="/tick-2.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center gap-3 md:gap-4 mt-8 md:mt-0">
        
        {/* Headline */}
        <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight max-w-5xl drop-shadow-lg reveal-hidden ${isLoaded ? 'reveal-visible' : ''}`}>
          <span className="block">24/7 Plumbing Experts</span>
          <span className="block text-gold">In Miami, FL</span>
        </h1>
        
        {/* Subheadline */}
        <h2 className={`text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-white max-w-4xl uppercase drop-shadow-md reveal-hidden delay-100 ${isLoaded ? 'reveal-visible' : ''}`}>
          Leaks, Clogs, Emergencies & Full-Service Plumbing
        </h2>

        <p className={`text-gray-200 text-xs sm:text-sm md:text-lg max-w-2xl leading-relaxed drop-shadow-sm font-medium reveal-hidden delay-200 px-2 ${isLoaded ? 'reveal-visible' : ''}`}>
          Fast, reliable plumbing services for homes and businesses across Miami and surrounding areas. Licensed, insured, and available 24/7.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-3 mt-2 reveal-hidden delay-300 ${isLoaded ? 'reveal-visible' : ''}`}>
          <Link 
            href="#contact" 
            className="bg-gold hover:bg-gold-hover text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-gold/30 flex items-center justify-center gap-2"
          >
            <CalendarClock size={18} />
            Book a Free Quote
          </Link>
        </div>

        {/* Availability */}
        <div className={`mt-3 text-white/90 text-xs md:text-sm font-semibold bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 reveal-hidden delay-500 ${isLoaded ? 'reveal-visible' : ''}`}>
          Open 24/7 • <a href="tel:5617655116" className="hover:text-gold underline decoration-gold/50 underline-offset-4">(561) 765-5116</a>
        </div>

      </div>
    </section>
  );
}
