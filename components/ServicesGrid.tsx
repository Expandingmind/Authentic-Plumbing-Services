import Link from "next/link";
import { ArrowRight, Wrench, Droplets, AlertTriangle, Flame, Camera, Hammer } from "lucide-react";

const SERVICES = [
  {
    title: "Commercial Plumbing",
    description: "Complete plumbing solutions for businesses, retail stores, and offices.",
    icon: <Hammer className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" // Industrial pipes
  },
  {
    title: "Residential Plumbing",
    description: "Expert home plumbing repairs, installations, and maintenance.",
    icon: <Wrench className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=600&auto=format&fit=crop" // Plumber under sink
  },
  {
    title: "Toilet Clog & Backup",
    description: "Fast removal of stubborn clogs and sewer line backups.",
    icon: <Droplets className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600&auto=format&fit=crop" // Bathroom/Toilet area
  },
  {
    title: "Shower & Bathroom Leaks",
    description: "Leak detection and repair for showers, tubs, and sinks.",
    icon: <Droplets className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1564540582763-c368c1980685?q=80&w=600&auto=format&fit=crop" // Shower head/water
  },
  {
    title: "Emergency Plumbing (24/7)",
    description: "Immediate response for burst pipes, floods, and critical failures.",
    icon: <AlertTriangle className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1621905252507-b35a83265532?q=80&w=600&auto=format&fit=crop" // Emergency/Tools
  },
  {
    title: "Hydrojet Drain Cleaning",
    description: "High-pressure water jetting to clear grease and sludge.",
    icon: <Droplets className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=600&auto=format&fit=crop" // Water/Pipes
  },
  {
    title: "Tankless Water Heaters",
    description: "Installation and repair of energy-efficient tankless systems.",
    icon: <Flame className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=600&auto=format&fit=crop" // Heater/Industrial
  },
  {
    title: "Camera Pipe Inspection",
    description: "Non-invasive video inspection to locate hidden pipe issues.",
    icon: <Camera className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1574360773950-3634164a7cc2?q=80&w=600&auto=format&fit=crop" // Inspection/Dark pipe
  },
  {
    title: "Drain Maintenance",
    description: "Preventative cleaning to keep your drains flowing freely.",
    icon: <Wrench className="w-10 h-10 text-gold" />,
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=600&auto=format&fit=crop" // Drain/Tools
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-zinc-900 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
            Expert Craftsmanship
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6">
            Explore Our Plumbing Services
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Authentic Plumbing Services, we handle everything from minor leaks to full-scale plumbing projects. Our team combines experience, honest pricing, and dependable service—day or night.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group bg-black border border-zinc-800 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4">
                    {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {service.description}
                </p>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-bold text-white hover:text-gold uppercase tracking-wide transition-colors"
                >
                  Book a Free Quote <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
