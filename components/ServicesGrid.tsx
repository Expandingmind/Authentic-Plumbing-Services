import Link from "next/link";
import { ArrowRight, Wrench, Droplets, AlertTriangle, Flame, Camera, Hammer } from "lucide-react";

// Only 6 services as requested
const SERVICES = [
  {
    title: "Commercial Plumbing",
    slug: "commercial-plumbing",
    icon: <Hammer className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Residential Plumbing",
    slug: "residential-plumbing",
    icon: <Wrench className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Toilet Clog & Backup",
    slug: "toilet-clog-backup",
    icon: <Droplets className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Emergency Plumbing",
    slug: "emergency-plumbing",
    icon: <AlertTriangle className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1621905252507-b35a83265532?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Water Heaters",
    slug: "water-heaters",
    icon: <Flame className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Drain Cleaning",
    slug: "drain-cleaning",
    icon: <Droplets className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=600&auto=format&fit=crop"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-zinc-900 py-20 lg:py-28 relative overflow-hidden">
      {/* Dark Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-900/95 z-10" />
        <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2560&auto=format&fit=crop" 
            alt="Plumbing Services Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
                <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                    Expert Craftsmanship
                </span>
                <h2 className="text-5xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">
                    Explore Our <br/> Services
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Our mission at Authentic Plumbing Services is to enhance the lives of our clients by providing high-quality plumbing solutions that combine efficiency with structural integrity.
                </p>
                
                <Link 
                    href="#contact" 
                    className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-blue-600/20 items-center gap-2"
                >
                    Book a Free Quote <ArrowRight size={20} />
                </Link>
            </div>

            {/* Right Grid */}
            <div className="lg:w-2/3 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service, idx) => (
                        <Link href={`/services/${service.slug}`} key={idx} className="group relative h-[280px] overflow-hidden cursor-pointer border border-white/10 hover:border-gold/50 transition-all duration-300 block">
                            
                            {/* Background Image */}
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                            
                            {/* Top Left Icon */}
                            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20">
                                {service.icon}
                            </div>

                            {/* Bottom Blue Bar */}
                            <div className="absolute bottom-0 left-0 w-full bg-blue-600 text-white text-center py-4 font-bold uppercase tracking-wide transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                {service.title}
                            </div>

                            {/* Static Title (Hidden on Hover) */}
                            <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white text-center py-4 font-bold uppercase tracking-wide transform translate-y-0 group-hover:translate-y-full transition-transform duration-300 z-10">
                                {service.title}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Expand Button */}
                <div className="mt-8 text-center">
                    <Link 
                        href="#services" 
                        className="inline-flex items-center text-gray-400 hover:text-white font-bold uppercase tracking-wide transition-colors border-b-2 border-transparent hover:border-gold pb-1"
                    >
                        View All Services <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
