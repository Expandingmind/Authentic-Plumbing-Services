"use client";

import Link from "next/link";
import { ShieldCheck, Clock, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-8 md:py-12 lg:py-16 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left: Image */}
          <div className={`relative reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 bg-gold z-0 rounded-tl-2xl md:rounded-tl-3xl" />
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-2 border-gold z-0 rounded-br-2xl md:rounded-br-3xl" />
            
            <img 
              src="/emergencyplumbing.png" 
              alt="Authentic Plumbing Technician" 
              className="relative z-10 w-full h-auto rounded-lg md:rounded-xl shadow-xl md:shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Floating Badge - Hidden on mobile */}
            <div className="absolute bottom-6 left-6 z-20 bg-white text-black p-3 rounded-lg shadow-xl max-w-[200px] hidden lg:block animate-float">
                <p className="text-xs font-bold uppercase tracking-wide text-gold-dark mb-1">Since 2025</p>
                <p className="font-extrabold text-sm leading-tight">Dedicated to Quality & Integrity.</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-4 md:space-y-5 reveal-hidden-right delay-200 ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div>
                <span className="text-gold font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 block">
                    Licensed & Insured
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight mb-3">
                    About Us – <br className="hidden sm:block"/>Authentic Plumbing
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    We are a locally owned plumbing company serving Miami, FL. Our mission: provide quality plumbing solutions with honesty and clear communication.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
                <div className="flex flex-col items-center md:items-start gap-1 md:gap-2 p-2 md:p-3 bg-zinc-900 rounded-lg border border-zinc-800 card-hover text-center md:text-left">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                    <span className="font-bold text-[10px] md:text-xs uppercase">Licensed</span>
                </div>
                <div className="flex flex-col items-center md:items-start gap-1 md:gap-2 p-2 md:p-3 bg-zinc-900 rounded-lg border border-zinc-800 card-hover text-center md:text-left">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                    <span className="font-bold text-[10px] md:text-xs uppercase">Fast</span>
                </div>
                <div className="flex flex-col items-center md:items-start gap-1 md:gap-2 p-2 md:p-3 bg-zinc-900 rounded-lg border border-zinc-800 card-hover text-center md:text-left">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                    <span className="font-bold text-[10px] md:text-xs uppercase">5-Star</span>
                </div>
            </div>

            <div className="bg-zinc-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border-l-4 border-gold">
                <p className="text-white font-medium text-sm mb-1">
                    Serving Miami, FL & Surrounding Areas
                </p>
                <p className="text-gold font-bold uppercase tracking-wide text-xs">
                    Open 24 Hours – 7 Days a Week
                </p>
            </div>

            <Link 
                href="#contact" 
                className="btn-primary inline-block bg-gold hover:bg-gold-hover text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base uppercase tracking-wide shadow-lg shadow-gold/20"
            >
                Book a Free Quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
