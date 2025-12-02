import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

export default function CommercialResidential() {
  return (
    <section className="py-20 lg:py-28 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
           <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
             Tailored to Your Needs
           </span>
           <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
             Comprehensive Plumbing <br/> Solutions for Every Property
           </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Commercial Card */}
          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
              alt="Commercial Plumbing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-left">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mb-6 text-black shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <Building2 size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-4">Commercial Plumbing</h3>
              <p className="text-gray-300 mb-8 max-w-md text-lg font-medium">
                Office buildings, retail stores, restaurants, and warehouses. We handle emergency repairs, maintenance plans, and new installations for businesses.
              </p>
              <Link 
                href="#services" 
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gold transition-colors"
              >
                Explore Commercial Services <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Residential Card */}
          <div className="group relative overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
              alt="Residential Plumbing" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-left">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mb-6 text-black shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                <Home size={32} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-4">Residential Plumbing</h3>
              <p className="text-gray-300 mb-8 max-w-md text-lg font-medium">
                From minor leaks to major renovations. We protect your home with expert repairs for water heaters, drains, pipes, and fixtures.
              </p>
              <Link 
                href="#services" 
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gold transition-colors"
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

