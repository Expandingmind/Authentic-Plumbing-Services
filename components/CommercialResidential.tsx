import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

export default function CommercialResidential() {
  return (
    <section className="py-4 md:py-6 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        
        <div className="max-w-2xl mx-auto mb-4">
           <span className="text-gold font-bold tracking-widest uppercase text-[9px] md:text-[10px] mb-0.5 block">Tailored Solutions</span>
           <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase leading-tight">Plumbing for Every Property</h2>
        </div>

        <div className="grid grid-cols-2 gap-1.5 md:gap-3 max-w-3xl mx-auto">
          
          {/* Commercial */}
          <div className="group relative overflow-hidden rounded-lg aspect-[3/4] sm:aspect-[3/2]">
            <img src="/commercialplumbing.png" alt="Commercial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-4 text-left">
              <div className="bg-gold w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-1 md:mb-2 text-black">
                <Building2 size={12} className="md:w-4 md:h-4" />
              </div>
              <h3 className="text-[11px] md:text-base font-black uppercase mb-0.5 md:mb-1">Commercial</h3>
              <p className="text-gray-300 mb-1.5 md:mb-2 text-[8px] md:text-[11px] line-clamp-2 leading-snug">Office, retail & restaurants.</p>
              <Link href="#services" className="inline-flex items-center bg-white text-black px-2 py-1 md:px-3 md:py-1.5 rounded-full font-bold text-[8px] md:text-[10px] uppercase hover:bg-gold w-fit">
                Explore <ArrowRight size={10} className="ml-0.5 md:ml-1" />
              </Link>
            </div>
          </div>

          {/* Residential */}
          <div className="group relative overflow-hidden rounded-lg aspect-[3/4] sm:aspect-[3/2]">
            <img src="/emergencyplumbing.png" alt="Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-4 text-left">
              <div className="bg-gold w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-1 md:mb-2 text-black">
                <Home size={12} className="md:w-4 md:h-4" />
              </div>
              <h3 className="text-[11px] md:text-base font-black uppercase mb-0.5 md:mb-1">Residential</h3>
              <p className="text-gray-300 mb-1.5 md:mb-2 text-[8px] md:text-[11px] line-clamp-2 leading-snug">Leaks, heaters & fixtures.</p>
              <Link href="#services" className="inline-flex items-center bg-white text-black px-2 py-1 md:px-3 md:py-1.5 rounded-full font-bold text-[8px] md:text-[10px] uppercase hover:bg-gold w-fit">
                Explore <ArrowRight size={10} className="ml-0.5 md:ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
