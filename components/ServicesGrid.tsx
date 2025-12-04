"use client";

import Link from "next/link";
import { ArrowRight, Wrench, Droplets, AlertTriangle, Flame, Camera, Hammer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Only 6 services as requested
const SERVICES = [
  {
    title: "Commercial Plumbing",
    slug: "commercial-plumbing",
    icon: <Hammer className="w-6 h-6 text-gold" />,
    image: "/commercialplumbing.png"
  },
  {
    title: "Residential Plumbing",
    slug: "residential-plumbing",
    icon: <Wrench className="w-6 h-6 text-gold" />,
    image: "/tick-9.png"
  },
  {
    title: "Toilet Clog & Backup",
    slug: "toilet-clog-backup",
    icon: <Droplets className="w-6 h-6 text-gold" />,
    image: "/toilet-overflow.png"
  },
  {
    title: "Emergency Plumbing",
    slug: "emergency-plumbing",
    icon: <AlertTriangle className="w-6 h-6 text-gold" />,
    image: "/emergencyplumbing.png"
  },
  {
    title: "Water Heaters",
    slug: "water-heaters",
    icon: <Flame className="w-6 h-6 text-gold" />,
    image: "/waterheaters.png"
  },
  {
    title: "Drain Cleaning",
    slug: "drain-cleaning",
    icon: <Droplets className="w-6 h-6 text-gold" />,
    image: "/draincleaning.png"
  }
];

export default function ServicesGrid() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="bg-zinc-900 py-10 lg:py-14 relative overflow-hidden" ref={ref}>
      {/* Dark Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/95 z-10" />
        <img 
            src="/tick-13.png" 
            alt="Plumbing Services Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Content */}
            <div className={`lg:w-1/3 lg:sticky lg:top-24 reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
                <span className="text-gold font-bold tracking-widest uppercase text-xs mb-2 block">
                    Expert Craftsmanship
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4 leading-tight">
                    Explore Our Services
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    Our mission at Authentic Plumbing Services is to enhance the lives of our clients by providing high-quality plumbing solutions that combine efficiency with structural integrity.
                </p>
                
                <Link 
                    href="#contact" 
                    className="btn-primary inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg shadow-blue-600/20 items-center gap-2"
                >
                    Book a Free Quote <ArrowRight size={16} />
                </Link>
            </div>

            {/* Right Grid */}
            <div className="lg:w-2/3 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES.map((service, idx) => (
                        <Link 
                            href={`/services/${service.slug}`} 
                            key={idx} 
                            className={`group relative h-[200px] overflow-hidden cursor-pointer border border-white/10 hover:border-gold/50 transition-all duration-500 block reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
                            style={{ transitionDelay: `${idx * 75}ms` }}
                        >
                            
                            {/* Background Image */}
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                            
                            {/* Top Left Icon */}
                            <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md p-1.5 rounded-lg border border-white/20">
                                {service.icon}
                            </div>

                            {/* Bottom Blue Bar */}
                            <div className="absolute bottom-0 left-0 w-full bg-blue-600 text-white text-center py-3 font-bold text-sm uppercase tracking-wide transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                {service.title}
                            </div>

                            {/* Static Title (Hidden on Hover) */}
                            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white text-center py-3 font-bold text-sm uppercase tracking-wide transform translate-y-0 group-hover:translate-y-full transition-transform duration-300 z-10">
                                {service.title}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Expand Button */}
                <div className={`mt-5 text-center reveal-hidden delay-500 ${isVisible ? 'reveal-visible' : ''}`}>
                    <Link 
                        href="#services" 
                        className="inline-flex items-center text-gray-400 hover:text-white font-bold text-sm uppercase tracking-wide transition-colors border-b border-transparent hover:border-gold pb-1"
                    >
                        View All Services <ArrowRight size={14} className="ml-2" />
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
