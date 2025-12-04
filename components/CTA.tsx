"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-4 md:py-6 bg-gold text-black" ref={ref}>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 text-center sm:text-left">
        
        <div className={`reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase mb-0.5 md:mb-1">
            Ready to Fix Your Plumbing?
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-bold opacity-90">
            Call <a href="tel:5617655116" className="underline">(561) 765-5116</a> or request a quote.
          </p>
        </div>

        <Link 
          href="#contact" 
          className={`btn-primary bg-black hover:bg-zinc-800 text-gold px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide shadow-lg flex items-center gap-1.5 md:gap-2 whitespace-nowrap reveal-hidden-right delay-200 ${isVisible ? 'reveal-visible-x' : ''}`}
        >
          Book Free Quote <ArrowRight size={14} />
        </Link>

      </div>
    </section>
  );
}
