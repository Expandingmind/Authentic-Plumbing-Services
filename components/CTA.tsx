"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 bg-gold text-black" ref={ref}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">
            Ready to Fix Your Plumbing Problem?
          </h2>
          <p className="text-lg md:text-xl font-bold opacity-90">
            Call us anytime at (561) 765-5116 or request a free quote online. We’re available 24/7.
          </p>
        </div>

        <Link 
          href="#contact" 
          className={`btn-primary bg-black hover:bg-zinc-800 text-gold px-10 py-5 rounded-full font-black text-lg uppercase tracking-wide shadow-xl flex items-center gap-3 whitespace-nowrap transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
        >
          Book a Free Quote Now <ArrowRight />
        </Link>

      </div>
    </section>
  );
}



