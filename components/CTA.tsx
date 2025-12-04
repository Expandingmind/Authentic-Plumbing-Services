"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-6 bg-gold text-black" ref={ref}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        <div className={`reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
          <h2 className="text-xl md:text-2xl font-black uppercase mb-1">
            Ready to Fix Your Plumbing Problem?
          </h2>
          <p className="text-sm md:text-base font-bold opacity-90">
            Call us anytime at (561) 765-5116 or request a free quote online.
          </p>
        </div>

        <Link 
          href="#contact" 
          className={`btn-primary bg-black hover:bg-zinc-800 text-gold px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg flex items-center gap-2 whitespace-nowrap reveal-hidden-right delay-200 ${isVisible ? 'reveal-visible-x' : ''}`}
        >
          Book a Free Quote Now <ArrowRight size={16} />
        </Link>

      </div>
    </section>
  );
}
