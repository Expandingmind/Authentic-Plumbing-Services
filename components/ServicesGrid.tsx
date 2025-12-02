     1|import Link from "next/link";
     2|import { ArrowRight, Wrench, Droplets, AlertTriangle, Flame, Camera, Hammer } from "lucide-react";
     3|
     4|const SERVICES = [
     5|  {
     6|    title: "Commercial Plumbing",
     7|    description: "Complete plumbing solutions for businesses, retail stores, and offices.",
     8|    icon: <Hammer className="w-10 h-10 text-gold" />,
     9|    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=600&auto=format&fit=crop"
    10|  },
    11|  {
    12|    title: "Residential Plumbing",
    13|    description: "Expert home plumbing repairs, installations, and maintenance.",
    14|    icon: <Wrench className="w-10 h-10 text-gold" />,
    15|    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
    16|  },
    17|  {
    18|    title: "Toilet Clog & Backup",
    19|    description: "Fast removal of stubborn clogs and sewer line backups.",
    20|    icon: <Droplets className="w-10 h-10 text-gold" />,
    21|    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=600&auto=format&fit=crop"
    22|  },
    23|  {
    24|    title: "Shower & Bathroom Leaks",
    25|    description: "Leak detection and repair for showers, tubs, and sinks.",
    26|    icon: <Droplets className="w-10 h-10 text-gold" />,
    27|    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop"
    28|  },
    29|  {
    30|    title: "Emergency Plumbing (24/7)",
    31|    description: "Immediate response for burst pipes, floods, and critical failures.",
    32|    icon: <AlertTriangle className="w-10 h-10 text-gold" />,
    33|    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop"
    34|  },
    35|  {
    36|    title: "Hydrojet Drain Cleaning",
    37|    description: "High-pressure water jetting to clear grease and sludge.",
    38|    icon: <Droplets className="w-10 h-10 text-gold" />,
    39|    image: "https://images.unsplash.com/photo-1609619590791-66966d57d5b9?q=80&w=600&auto=format&fit=crop"
    40|  },
    41|  {
    42|    title: "Tankless Water Heaters",
    43|    description: "Installation and repair of energy-efficient tankless systems.",
    44|    icon: <Flame className="w-10 h-10 text-gold" />,
    45|    image: "https://images.unsplash.com/photo-1544617402-7df9b6318463?q=80&w=600&auto=format&fit=crop"
    46|  },
    47|  {
    48|    title: "Camera Pipe Inspection",
    49|    description: "Non-invasive video inspection to locate hidden pipe issues.",
    50|    icon: <Camera className="w-10 h-10 text-gold" />,
    51|    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=600&auto=format&fit=crop"
    52|  },
    53|  {
    54|    title: "Drain Maintenance",
    55|    description: "Preventative cleaning to keep your drains flowing freely.",
    56|    icon: <Wrench className="w-10 h-10 text-gold" />,
    57|    image: "https://images.unsplash.com/photo-1632759143294-57a1b5615a70?q=80&w=600&auto=format&fit=crop"
    58|  }
    59|];
    60|
    61|export default function ServicesGrid() {
    62|  return (
    63|    <section id="services" className="bg-zinc-900 py-20 lg:py-28">
    64|      <div className="container mx-auto px-4">
    65|        
    66|        {/* Header */}
    67|        <div className="text-center max-w-4xl mx-auto mb-16">
    68|          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
    69|            Expert Craftsmanship
    70|          </span>
    71|          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6">
    72|            Explore Our Plumbing Services
    73|          </h2>
    74|          <p className="text-gray-300 text-lg leading-relaxed">
    75|            At Authentic Plumbing Services, we handle everything from minor leaks to full-scale plumbing projects. Our team combines experience, honest pricing, and dependable service—day or night.
    76|          </p>
    77|        </div>
    78|
    79|        {/* Grid */}
    80|        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    81|          {SERVICES.map((service, idx) => (
    82|            <div key={idx} className="group bg-black border border-zinc-800 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5">
    83|              {/* Image */}
    84|              <div className="relative h-48 overflow-hidden">
    85|                <img 
    86|                  src={service.image} 
    87|                  alt={service.title}
    88|                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
    89|                />
    90|                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
    91|                <div className="absolute bottom-4 left-4">
    92|                    {service.icon}
    93|                </div>
    94|              </div>
    95|              
    96|              {/* Content */}
    97|              <div className="p-6">
    98|                <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:text-gold transition-colors">
    99|                  {service.title}
   100|                </h3>
   101|                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
   102|                  {service.description}
   103|                </p>
   104|                <Link 
   105|                  href="#contact" 
   106|                  className="inline-flex items-center text-sm font-bold text-white hover:text-gold uppercase tracking-wide transition-colors"
   107|                >
   108|                  Book a Free Quote <ArrowRight size={16} className="ml-2" />
   109|                </Link>
   110|              </div>
   111|            </div>
   112|          ))}
   113|        </div>
   114|
   115|      </div>
   116|    </section>
   117|  );
   118|}
