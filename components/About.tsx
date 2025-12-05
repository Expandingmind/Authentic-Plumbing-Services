"use client";

import Link from "next/link";
import { ShieldCheck, Clock, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-4 md:py-6 lg:py-8 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center">
          
          {/* Image */}
          <div className={`relative reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 w-12 h-12 md:w-16 md:h-16 bg-gold z-0 rounded-tl-xl" />
            <div className="absolute -bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2 w-12 h-12 md:w-16 md:h-16 border-2 border-gold z-0 rounded-br-xl" />
            <img src="/emergencyplumbing.png" alt="Plumber" className="relative z-10 w-full h-auto rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
          </div>

          {/* Content */}
          <div className={`space-y-2 md:space-y-3 reveal-hidden-right delay-100 ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div>
                <span className="text-gold font-bold tracking-widest uppercase text-[9px] md:text-[10px] mb-0.5 block">Licensed & Insured</span>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase leading-tight mb-1.5">About Authentic Plumbing</h2>
                <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed">Locally owned plumbing company serving Miami, FL. Quality solutions with honesty and clear communication.</p>
            </div>

            <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                <div className="flex flex-col items-center gap-0.5 p-1.5 md:p-2 bg-zinc-900 rounded border border-zinc-800 text-center">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    <span className="font-bold text-[9px] md:text-[10px] uppercase">Licensed</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 p-1.5 md:p-2 bg-zinc-900 rounded border border-zinc-800 text-center">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    <span className="font-bold text-[9px] md:text-[10px] uppercase">Fast</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 p-1.5 md:p-2 bg-zinc-900 rounded border border-zinc-800 text-center">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                    <span className="font-bold text-[9px] md:text-[10px] uppercase">5-Star</span>
                </div>
            </div>

            <div className="bg-zinc-900/50 p-2 md:p-3 rounded border-l-3 border-gold">
                <p className="text-white font-medium text-[11px] md:text-xs">Miami, FL & Surrounding</p>
                <p className="text-gold font-bold uppercase text-[10px]">Open 24/7</p>
            </div>

            <Link href="#contact" className="btn-primary inline-block bg-gold hover:bg-gold-hover text-black px-4 py-2 rounded-full font-bold text-[11px] md:text-xs uppercase shadow-lg">
                Get Free Quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
