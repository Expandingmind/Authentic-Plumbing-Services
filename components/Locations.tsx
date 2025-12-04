import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Locations() {
  return (
    <section id="locations" className="py-8 lg:py-10 bg-zinc-50 text-black">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-xl mx-auto mb-6">
            <h2 className="text-2xl font-black uppercase mb-2">The Locations We Serve</h2>
            <p className="text-gray-600 text-sm">
                Proudly serving Miami, FL and nearby areas with fast response times and quality plumbing solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Location 1 */}
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-gold w-5 h-5" />
                    <h3 className="text-base font-bold uppercase">Miami, FL</h3>
                </div>
                <p className="text-gray-600 mb-3 text-sm leading-snug">
                    From Brickell high-rises to Little Havana homes, we provide comprehensive plumbing services across Miami.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black text-xs font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Find Out More <ArrowRight size={14} className="ml-1" />
                </Link>
            </div>

            {/* Location 2 */}
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-gold w-5 h-5" />
                    <h3 className="text-base font-bold uppercase">Miami Beach, FL</h3>
                </div>
                <p className="text-gray-600 mb-3 text-sm leading-snug">
                    Serving condos, hotels, and luxury residences on the beach with specialized maintenance and emergency repairs.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black text-xs font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Find Out More <ArrowRight size={14} className="ml-1" />
                </Link>
            </div>

            {/* Location 3 */}
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-gold w-5 h-5" />
                    <h3 className="text-base font-bold uppercase">Surrounding Areas</h3>
                </div>
                <p className="text-gray-600 mb-3 text-sm leading-snug">
                    We also serve Coral Gables, Doral, Hialeah, and other nearby communities with reliable 24/7 service.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black text-xs font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Find Out More <ArrowRight size={14} className="ml-1" />
                </Link>
            </div>

        </div>

      </div>
    </section>
  );
}
