"use client";

import Link from "next/link";
import { CalendarClock } from "lucide-react";
import { usePageLoadAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const isLoaded = usePageLoadAnimation(100);

  return (
    <section id="home" className="relative w-full min-h-[55vh] md:min-h-[60vh] flex items-center justify-center pt-14 pb-8 md:pt-16 md:pb-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src="/tick-2.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center gap-2 md:gap-3">
        
        {/* Headline */}
        <h1 className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-tight tracking-tight max-w-4xl drop-shadow-lg reveal-hidden ${isLoaded ? 'reveal-visible' : ''}`}>
          <span className="block">24/7 Plumbing Experts</span>
          <span className="block text-gold">In Miami, FL</span>
        </h1>
        
        {/* Subheadline */}
        <p className={`text-gray-200 text-[11px] sm:text-xs md:text-sm max-w-xl leading-relaxed drop-shadow-sm font-medium reveal-hidden delay-100 px-2 ${isLoaded ? 'reveal-visible' : ''}`}>
          Fast, reliable plumbing for homes & businesses. Licensed, insured, available 24/7.
        </p>

        {/* CTA */}
        <Link 
          href="#contact" 
          className={`bg-gold hover:bg-gold-hover text-black px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-gold/30 flex items-center gap-1.5 mt-1 reveal-hidden delay-200 ${isLoaded ? 'reveal-visible' : ''}`}
        >
          <CalendarClock size={14} />
          Get Free Quote
        </Link>

        {/* Availability */}
        <div className={`text-white/90 text-[10px] md:text-xs font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 reveal-hidden delay-300 ${isLoaded ? 'reveal-visible' : ''}`}>
          24/7 • <a href="tel:5617655116" className="hover:text-gold underline">(561) 765-5116</a>
        </div>

      </div>
    </section>
  );
}
