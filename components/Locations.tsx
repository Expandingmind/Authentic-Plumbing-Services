import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-zinc-50 text-black">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black uppercase mb-6">The Locations We Serve</h2>
            <p className="text-gray-600 text-lg font-medium">
                Authentic Plumbing Services proudly serves Miami, FL and nearby areas, ensuring fast response times and high-quality plumbing solutions for every neighborhood.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Location 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-gold w-8 h-8" />
                    <h3 className="text-2xl font-bold uppercase">Miami, FL</h3>
                </div>
                <p className="text-gray-600 mb-8 font-medium">
                    From Brickell high-rises to Little Havana homes, we provide comprehensive plumbing services across the heart of Miami.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Find Out More <ArrowRight size={16} className="ml-2" />
                </Link>
            </div>

            {/* Location 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-gold w-8 h-8" />
                    <h3 className="text-2xl font-bold uppercase">Miami Beach, FL</h3>
                </div>
                <p className="text-gray-600 mb-8 font-medium">
                    Serving condos, hotels, and luxury residences on the beach with specialized maintenance and emergency repairs.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Find Out More <ArrowRight size={16} className="ml-2" />
                </Link>
            </div>

            {/* Location 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-gold w-8 h-8" />
                    <h3 className="text-2xl font-bold uppercase">Surrounding Areas</h3>
                </div>
                <p className="text-gray-600 mb-8 font-medium">
                    We also serve Coral Gables, Doral, Hialeah, and other nearby communities with the same reliable 24/7 service.
                </p>
                <Link href="#contact" className="inline-flex items-center text-black font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                    Find Out More <ArrowRight size={16} className="ml-2" />
                </Link>
            </div>

        </div>

      </div>
    </section>
  );
}



