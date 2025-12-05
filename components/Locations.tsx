import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Locations() {
  return (
    <section id="locations" className="py-4 md:py-6 bg-zinc-50 text-black">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-lg mx-auto mb-3">
            <h2 className="text-base md:text-lg lg:text-xl font-black uppercase mb-1">Locations We Serve</h2>
            <p className="text-gray-600 text-[10px] md:text-[11px]">Fast response times across Miami & surrounding areas.</p>
        </div>

        <div className="grid grid-cols-3 gap-1.5 md:gap-2">
            
            <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm border border-gray-100 group">
                <div className="flex items-center gap-1 mb-1">
                    <MapPin className="text-gold w-3 h-3 md:w-4 md:h-4" />
                    <h3 className="text-[11px] md:text-xs font-bold uppercase">Miami</h3>
                </div>
                <p className="text-gray-600 mb-1.5 text-[9px] md:text-[10px] leading-snug line-clamp-2">Brickell to Little Havana, full plumbing services.</p>
                <Link href="#contact" className="inline-flex items-center text-[8px] md:text-[9px] font-bold uppercase group-hover:text-gold">More <ArrowRight size={10} className="ml-0.5" /></Link>
            </div>

            <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm border border-gray-100 group">
                <div className="flex items-center gap-1 mb-1">
                    <MapPin className="text-gold w-3 h-3 md:w-4 md:h-4" />
                    <h3 className="text-[11px] md:text-xs font-bold uppercase">Beach</h3>
                </div>
                <p className="text-gray-600 mb-1.5 text-[9px] md:text-[10px] leading-snug line-clamp-2">Condos, hotels & luxury residences.</p>
                <Link href="#contact" className="inline-flex items-center text-[8px] md:text-[9px] font-bold uppercase group-hover:text-gold">More <ArrowRight size={10} className="ml-0.5" /></Link>
            </div>

            <div className="bg-white p-2 md:p-3 rounded-lg shadow-sm border border-gray-100 group">
                <div className="flex items-center gap-1 mb-1">
                    <MapPin className="text-gold w-3 h-3 md:w-4 md:h-4" />
                    <h3 className="text-[11px] md:text-xs font-bold uppercase">Nearby</h3>
                </div>
                <p className="text-gray-600 mb-1.5 text-[9px] md:text-[10px] leading-snug line-clamp-2">Coral Gables, Doral, Hialeah & more.</p>
                <Link href="#contact" className="inline-flex items-center text-[8px] md:text-[9px] font-bold uppercase group-hover:text-gold">More <ArrowRight size={10} className="ml-0.5" /></Link>
            </div>

        </div>

      </div>
    </section>
  );
}
