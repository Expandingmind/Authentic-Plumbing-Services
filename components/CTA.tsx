"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-10 bg-gold text-black" ref={ref}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className={`reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-2">
            Ready to Fix Your Plumbing Problem?
          </h2>
          <p className="text-base md:text-lg font-bold opacity-90">
            Call us anytime at (561) 765-5116 or request a free quote online.
          </p>
        </div>

        <Link 
          href="#contact" 
          className={`btn-primary bg-black hover:bg-zinc-800 text-gold px-8 py-4 rounded-full font-bold text-base uppercase tracking-wide shadow-xl flex items-center gap-2 whitespace-nowrap reveal-hidden-right delay-200 ${isVisible ? 'reveal-visible-x' : ''}`}
        >
          Book a Free Quote Now <ArrowRight />
        </Link>

      </div>
    </section>
  );
}



