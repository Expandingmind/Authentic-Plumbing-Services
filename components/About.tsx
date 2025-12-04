"use client";

import Link from "next/link";
import { ShieldCheck, Clock, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-12 lg:py-16 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Image */}
          <div className={`relative reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold z-0 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold z-0 rounded-br-3xl" />
            
            <img 
              src="/emergencyplumbing.png" 
              alt="Authentic Plumbing Technician" 
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white text-black p-4 rounded-lg shadow-xl max-w-xs hidden md:block animate-float">
                <p className="text-sm font-bold uppercase tracking-wide text-gold-dark mb-1">Since 2025</p>
                <p className="font-extrabold text-lg leading-tight">Dedicated to Quality & Integrity in Every Job.</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-5 reveal-hidden-right delay-200 ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div>
                <span className="text-gold font-bold tracking-widest uppercase text-xs mb-1 block">
                    Licensed & Insured
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-4">
                    About Us – <br/>Authentic Plumbing Services
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                    We are a locally owned and operated plumbing company serving Miami, FL and the surrounding areas. Our mission is simple: provide high-quality plumbing solutions with honesty, clear communication, and up-front pricing.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col items-start gap-2 p-3 bg-zinc-900 rounded-lg border border-zinc-800 card-hover">
                    <ShieldCheck className="w-6 h-6 text-gold" />
                    <span className="font-bold text-xs uppercase">Licensed & Insured</span>
                </div>
                <div className="flex flex-col items-start gap-2 p-3 bg-zinc-900 rounded-lg border border-zinc-800 card-hover">
                    <Clock className="w-6 h-6 text-gold" />
                    <span className="font-bold text-xs uppercase">Fast Response</span>
                </div>
                <div className="flex flex-col items-start gap-2 p-3 bg-zinc-900 rounded-lg border border-zinc-800 card-hover">
                    <Star className="w-6 h-6 text-gold" />
                    <span className="font-bold text-xs uppercase">5-Star Rated</span>
                </div>
            </div>

            <div className="bg-zinc-900/50 p-4 rounded-xl border-l-4 border-gold">
                <p className="text-white font-medium mb-1">
                    Serving Miami, FL and the Surrounding Areas
                </p>
                <p className="text-gold font-bold uppercase tracking-wide text-sm">
                    Open 24 Hours – 7 Days a Week
                </p>
            </div>

            <Link 
                href="#contact" 
                className="btn-primary inline-block bg-gold hover:bg-gold-hover text-black px-6 py-3 rounded-full font-bold text-base uppercase tracking-wide shadow-lg shadow-gold/20"
            >
                Book a Free Quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

