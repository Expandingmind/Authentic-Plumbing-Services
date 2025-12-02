import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" /> {/* Dark Overlay */}
        <img
          src="/tick-2.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center gap-6 mt-10 md:mt-0">
        
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight max-w-5xl drop-shadow-lg">
          <span className="block">24/7 Plumbing Experts</span>
          <span className="block text-gold">In Miami, FL</span>
        </h1>
        
        {/* Subheadline */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white max-w-4xl uppercase drop-shadow-md">
          Leaks, Clogs, Emergencies & Full-Service Plumbing
        </h2>

        <p className="text-gray-200 text-base md:text-lg max-w-2xl leading-relaxed drop-shadow-sm font-medium">
          Fast, reliable plumbing services for homes and businesses across Miami and surrounding areas. Licensed, insured, and available 24/7 for emergencies.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Link 
            href="#contact" 
            className="bg-gold hover:bg-gold-hover text-black px-8 py-4 rounded-full font-extrabold text-lg uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-gold/30 flex items-center gap-2"
          >
            <CalendarClock size={20} />
            Book a Free Quote
          </Link>
        </div>

        {/* Availability */}
        <div className="mt-6 text-white/90 text-sm md:text-base font-semibold bg-black/40 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
          Open 24 Hours – 7 Days a Week • <a href="tel:5617655116" className="hover:text-gold underline decoration-gold/50 underline-offset-4">(561) 765-5116</a>
        </div>

      </div>
    </section>
  );
}

