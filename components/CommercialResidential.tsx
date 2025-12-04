import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

export default function CommercialResidential() {
  return (
    <section className="py-12 lg:py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-10">
           <span className="text-gold font-bold tracking-widest uppercase text-xs mb-1 block">
             Tailored to Your Needs
           </span>
           <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight">
             Comprehensive Plumbing Solutions
           </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Commercial Card */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[380px]">
            <img 
              src="/commercialplumbing.png" 
              alt="Commercial Plumbing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-left">
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4 text-black shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase mb-3">Commercial Plumbing</h3>
              <p className="text-gray-300 mb-6 max-w-md text-base font-medium">
                Office buildings, retail stores, restaurants, and warehouses. Emergency repairs and maintenance plans.
              </p>
              <Link 
                href="#services" 
                className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gold transition-colors"
              >
                Explore Commercial Services <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Residential Card */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[380px]">
            <img 
              src="/emergencyplumbing.png" 
              alt="Residential Plumbing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-left">
              <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4 text-black shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <Home size={24} />
              </div>
              <h3 className="text-2xl font-black uppercase mb-3">Residential Plumbing</h3>
              <p className="text-gray-300 mb-6 max-w-md text-base font-medium">
                From minor leaks to major renovations. Expert repairs for water heaters, drains, and fixtures.
              </p>
              <Link 
                href="#services" 
                className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gold transition-colors"
              >
                Explore Residential Services <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

