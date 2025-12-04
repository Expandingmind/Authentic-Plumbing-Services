import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Locations() {
  return (
    <section id="locations" className="py-6 md:py-8 lg:py-10 bg-zinc-50 text-black">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-xl mx-auto mb-4 md:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-1 md:mb-2">The Locations We Serve</h2>
            <p className="text-gray-600 text-xs md:text-sm">
                Serving Miami, FL and nearby areas with fast response times.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
            
            {/* Location 1 */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                    <MapPin className="text-gold w-4 h-4 md:w-5 md:h-5" />
                    <h3 className="text-sm md:text-base font-bold uppercase">Miami, FL</h3>
                </div>
                <p className="text-gray-600 mb-2 md:mb-3 text-xs md:text-sm leading-snug">
                    Brickell to Little Havana, comprehensive plumbing across Miami.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black text-[10px] md:text-xs font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Learn More <ArrowRight size={12} className="ml-1" />
                </Link>
            </div>

            {/* Location 2 */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                    <MapPin className="text-gold w-4 h-4 md:w-5 md:h-5" />
                    <h3 className="text-sm md:text-base font-bold uppercase">Miami Beach</h3>
                </div>
                <p className="text-gray-600 mb-2 md:mb-3 text-xs md:text-sm leading-snug">
                    Condos, hotels, and luxury residences on the beach.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black text-[10px] md:text-xs font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Learn More <ArrowRight size={12} className="ml-1" />
                </Link>
            </div>

            {/* Location 3 */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                    <MapPin className="text-gold w-4 h-4 md:w-5 md:h-5" />
                    <h3 className="text-sm md:text-base font-bold uppercase">Surrounding</h3>
                </div>
                <p className="text-gray-600 mb-2 md:mb-3 text-xs md:text-sm leading-snug">
                    Coral Gables, Doral, Hialeah, and nearby communities.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black text-[10px] md:text-xs font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Learn More <ArrowRight size={12} className="ml-1" />
                </Link>
            </div>

        </div>

      </div>
    </section>
  );
}
