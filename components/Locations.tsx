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

        <div className="grid grid-cols-3 gap-1 md:gap-2">
            
            <div className="bg-white p-1.5 md:p-3 rounded-lg shadow-sm border border-gray-100 group">
                <div className="flex items-center gap-0.5 md:gap-1 mb-0.5 md:mb-1">
                    <MapPin className="text-gold w-2.5 h-2.5 md:w-4 md:h-4" />
                    <h3 className="text-[9px] md:text-xs font-bold uppercase">Miami</h3>
                </div>
                <p className="text-gray-600 mb-1 md:mb-1.5 text-[8px] md:text-[10px] leading-snug line-clamp-2">Brickell to Little Havana.</p>
                <Link href="#contact" className="inline-flex items-center text-[7px] md:text-[9px] font-bold uppercase group-hover:text-gold">More <ArrowRight size={8} className="ml-0.5" /></Link>
            </div>

            <div className="bg-white p-1.5 md:p-3 rounded-lg shadow-sm border border-gray-100 group">
                <div className="flex items-center gap-0.5 md:gap-1 mb-0.5 md:mb-1">
                    <MapPin className="text-gold w-2.5 h-2.5 md:w-4 md:h-4" />
                    <h3 className="text-[9px] md:text-xs font-bold uppercase">Beach</h3>
                </div>
                <p className="text-gray-600 mb-1 md:mb-1.5 text-[8px] md:text-[10px] leading-snug line-clamp-2">Condos & hotels.</p>
                <Link href="#contact" className="inline-flex items-center text-[7px] md:text-[9px] font-bold uppercase group-hover:text-gold">More <ArrowRight size={8} className="ml-0.5" /></Link>
            </div>

            <div className="bg-white p-1.5 md:p-3 rounded-lg shadow-sm border border-gray-100 group">
                <div className="flex items-center gap-0.5 md:gap-1 mb-0.5 md:mb-1">
                    <MapPin className="text-gold w-2.5 h-2.5 md:w-4 md:h-4" />
                    <h3 className="text-[9px] md:text-xs font-bold uppercase">Nearby</h3>
                </div>
                <p className="text-gray-600 mb-1 md:mb-1.5 text-[8px] md:text-[10px] leading-snug line-clamp-2">Doral, Hialeah & more.</p>
                <Link href="#contact" className="inline-flex items-center text-[7px] md:text-[9px] font-bold uppercase group-hover:text-gold">More <ArrowRight size={8} className="ml-0.5" /></Link>
            </div>

        </div>

      </div>
    </section>
  );
}
