import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

export default function CommercialResidential() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-6 md:mb-8">
           <span className="text-gold font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 block">
             Tailored to Your Needs
           </span>
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-2 leading-tight">
             Comprehensive Plumbing Solutions
           </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          
          {/* Commercial Card */}
          <div className="group relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/3] md:aspect-auto md:h-[300px] lg:h-[350px]">
            <img 
              src="/commercialplumbing.png" 
              alt="Commercial Plumbing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-left">
              <div className="bg-gold w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 text-black shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <Building2 size={20} className="md:hidden" />
                <Building2 size={24} className="hidden md:block" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-black uppercase mb-2">Commercial Plumbing</h3>
              <p className="text-gray-300 mb-4 max-w-md text-xs md:text-sm font-medium line-clamp-2">
                Office buildings, retail stores, restaurants, and warehouses. Emergency repairs and maintenance.
              </p>
              <Link 
                href="#services" 
                className="inline-flex items-center bg-white text-black px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide hover:bg-gold transition-colors w-fit"
              >
                Explore Services <ArrowRight size={16} className="ml-1.5" />
              </Link>
            </div>
          </div>

          {/* Residential Card */}
          <div className="group relative overflow-hidden rounded-xl md:rounded-2xl aspect-[4/3] md:aspect-auto md:h-[300px] lg:h-[350px]">
            <img 
              src="/emergencyplumbing.png" 
              alt="Residential Plumbing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-left">
              <div className="bg-gold w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 text-black shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <Home size={20} className="md:hidden" />
                <Home size={24} className="hidden md:block" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-black uppercase mb-2">Residential Plumbing</h3>
              <p className="text-gray-300 mb-4 max-w-md text-xs md:text-sm font-medium line-clamp-2">
                From minor leaks to major renovations. Expert repairs for water heaters, drains, and fixtures.
              </p>
              <Link 
                href="#services" 
                className="inline-flex items-center bg-white text-black px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide hover:bg-gold transition-colors w-fit"
              >
                Explore Services <ArrowRight size={16} className="ml-1.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
