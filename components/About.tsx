import Link from "next/link";
import { ShieldCheck, Clock, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold z-0 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold z-0 rounded-br-3xl" />
            
            <img 
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop" 
              alt="Authentic Plumbing Technician" 
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-white text-black p-4 rounded-lg shadow-xl max-w-xs hidden md:block">
                <p className="text-sm font-bold uppercase tracking-wide text-gold-dark mb-1">Since 2025</p>
                <p className="font-extrabold text-lg leading-tight">Dedicated to Quality & Integrity in Every Job.</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
                <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
                    Licensed & Insured
                </span>
                <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                    About Us – <br/>Authentic Plumbing Services
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    We are a locally owned and operated plumbing company serving Miami, FL and the surrounding areas. Our mission is simple: provide high-quality plumbing solutions with honesty, clear communication, and up-front pricing.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                    <ShieldCheck className="w-8 h-8 text-gold" />
                    <span className="font-bold text-sm uppercase">Licensed & <br/>Insured</span>
                </div>
                <div className="flex flex-col items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                    <Clock className="w-8 h-8 text-gold" />
                    <span className="font-bold text-sm uppercase">Fast Response <br/>Times</span>
                </div>
                <div className="flex flex-col items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                    <Star className="w-8 h-8 text-gold" />
                    <span className="font-bold text-sm uppercase">5-Star Rated <br/>Service</span>
                </div>
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-xl border-l-4 border-gold">
                <p className="text-white font-medium mb-1">
                    Serving Miami, FL and the Surrounding Areas
                </p>
                <p className="text-gold font-bold uppercase tracking-wide text-sm">
                    Open 24 Hours – 7 Days a Week
                </p>
            </div>

            <Link 
                href="#contact" 
                className="inline-block bg-gold hover:bg-gold-hover text-black px-8 py-4 rounded-full font-extrabold text-lg uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-gold/20"
            >
                Book a Free Quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

