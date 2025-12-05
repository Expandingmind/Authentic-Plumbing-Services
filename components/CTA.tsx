"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-3 md:py-4 bg-gold text-black" ref={ref}>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        
        <div className={`reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
          <h2 className="text-sm md:text-base lg:text-lg font-black uppercase">Ready to Fix Your Plumbing?</h2>
          <p className="text-[10px] md:text-[11px] font-bold opacity-90">Call <a href="tel:5617655116" className="underline">(561) 765-5116</a> or get a quote.</p>
        </div>

        <Link href="#contact" className={`btn-primary bg-black text-gold px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-[10px] md:text-xs uppercase flex items-center gap-1 reveal-hidden-right ${isVisible ? 'reveal-visible-x' : ''}`}>
          Get Quote <ArrowRight size={12} />
        </Link>

      </div>
    </section>
  );
}
