"use client";

import Link from "next/link";
import { ArrowRight, Wrench, Droplets, AlertTriangle, Flame, Hammer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SERVICES = [
  { title: "Commercial", slug: "commercial-plumbing", icon: <Hammer className="w-3 h-3 md:w-4 md:h-4 text-gold" />, image: "/commercialplumbing.png" },
  { title: "Residential", slug: "residential-plumbing", icon: <Wrench className="w-3 h-3 md:w-4 md:h-4 text-gold" />, image: "/tick-9.png" },
  { title: "Toilet Clog", slug: "toilet-clog-backup", icon: <Droplets className="w-3 h-3 md:w-4 md:h-4 text-gold" />, image: "/toilet-overflow.png" },
  { title: "Emergency", slug: "emergency-plumbing", icon: <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-gold" />, image: "/emergencyplumbing.png" },
  { title: "Water Heaters", slug: "water-heaters", icon: <Flame className="w-3 h-3 md:w-4 md:h-4 text-gold" />, image: "/waterheaters.png" },
  { title: "Drain Cleaning", slug: "drain-cleaning", icon: <Droplets className="w-3 h-3 md:w-4 md:h-4 text-gold" />, image: "/draincleaning.png" }
];

export default function ServicesGrid() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="bg-zinc-900 py-4 md:py-6 lg:py-8 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/95 z-10" />
        <img src="/tick-13.png" alt="" className="w-full h-full object-cover opacity-20 grayscale" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-start">
            
            {/* Left */}
            <div className={`lg:w-1/3 reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
                <span className="text-gold font-bold tracking-widest uppercase text-[9px] md:text-[10px] mb-0.5 block">Expert Craftsmanship</span>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white uppercase mb-1.5 md:mb-2 leading-tight">Our Services</h2>
                <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed mb-2 md:mb-3">High-quality plumbing solutions with efficiency and integrity.</p>
                <Link href="#contact" className="btn-primary inline-flex bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold text-[10px] md:text-xs uppercase items-center gap-1">
                    Get Quote <ArrowRight size={12} />
                </Link>
            </div>

            {/* Right Grid */}
            <div className="lg:w-2/3 w-full">
                <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                    {SERVICES.map((service, idx) => (
                        <Link href={`/services/${service.slug}`} key={idx} 
                            className={`group relative h-[90px] sm:h-[110px] md:h-[140px] lg:h-[160px] overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-300 block reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
                            style={{ transitionDelay: `${idx * 50}ms` }}>
                            <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                            <div className="absolute top-1.5 left-1.5 md:top-2 md:left-2 bg-white/10 backdrop-blur-md p-0.5 md:p-1 rounded border border-white/20">{service.icon}</div>
                            <div className="absolute bottom-0 left-0 w-full bg-blue-600 text-white text-center py-1.5 md:py-2 font-bold text-[9px] md:text-[11px] uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-20">{service.title}</div>
                            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white text-center py-1.5 md:py-2 font-bold text-[9px] md:text-[11px] uppercase transform translate-y-0 group-hover:translate-y-full transition-transform duration-200 z-10">{service.title}</div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
