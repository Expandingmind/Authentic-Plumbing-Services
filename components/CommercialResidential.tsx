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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 max-w-3xl mx-auto">
          
          {/* Commercial */}
          <div className="group relative overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[3/2]">
            <img src="/commercialplumbing.png" alt="Commercial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 text-left">
              <div className="bg-gold w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 text-black">
                <Building2 size={16} />
              </div>
              <h3 className="text-sm md:text-base font-black uppercase mb-1">Commercial</h3>
              <p className="text-gray-300 mb-2 text-[10px] md:text-[11px] line-clamp-2">Office buildings, retail, restaurants. Emergency repairs & maintenance.</p>
              <Link href="#services" className="inline-flex items-center bg-white text-black px-3 py-1.5 rounded-full font-bold text-[9px] md:text-[10px] uppercase hover:bg-gold w-fit">
                Explore <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Residential */}
          <div className="group relative overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[3/2]">
            <img src="/emergencyplumbing.png" alt="Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-4 text-left">
              <div className="bg-gold w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 text-black">
                <Home size={16} />
              </div>
              <h3 className="text-sm md:text-base font-black uppercase mb-1">Residential</h3>
              <p className="text-gray-300 mb-2 text-[10px] md:text-[11px] line-clamp-2">Leaks to renovations. Water heaters, drains, pipes & fixtures.</p>
              <Link href="#services" className="inline-flex items-center bg-white text-black px-3 py-1.5 rounded-full font-bold text-[9px] md:text-[10px] uppercase hover:bg-gold w-fit">
                Explore <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
