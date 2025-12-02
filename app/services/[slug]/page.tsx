import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CalendarClock, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export const dynamic = 'force-static';

// Map of services with dummy content for the layout
const SERVICES_DATA: Record<string, any> = {
  "commercial-plumbing": {
    title: "Commercial Plumbing Services",
    image: "/commercialplumbing.png",
    description: "At Authentic Plumbing Services, we specialize in commercial plumbing solutions that keep your business running smoothly. Based in Miami, FL, and serving nearby areas, our expert team offers custom plumbing systems tailored to your industry needs."
  },
  "residential-plumbing": {
    title: "Residential Plumbing Services",
    image: "/tick-9.png",
    description: "Transform your home with our expert residential plumbing services. Whether it's a kitchen upgrade, bathroom renovation, or emergency repair, we deliver results that exceed expectations."
  },
  "toilet-clog-backup": {
    title: "Toilet Clog & Backup Services",
    image: "/toilet-overflow.png",
    description: "Fast and effective removal of stubborn toilet clogs and sewer line backups. We ensure your bathroom facilities are fully operational with minimal downtime."
  },
  "emergency-plumbing": {
    title: "Emergency Plumbing Services",
    image: "/emergencyplumbing.png",
    description: "Available 24/7 for critical plumbing failures. From burst pipes to severe leaks, our emergency response team is ready to protect your property."
  },
  "water-heaters": {
    title: "Water Heater Installation & Repair",
    image: "/waterheaters.png",
    description: "Upgrade to energy-efficient tankless systems or repair your existing water heater. We ensure you have reliable hot water when you need it most."
  },
  "drain-cleaning": {
    title: "Drain Cleaning Services",
    image: "/draincleaning.png",
    description: "Professional drain cleaning using hydrojet technology to clear grease, sludge, and debris. Keep your plumbing system flowing freely with our maintenance services."
  }
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  
  return {
    title: service ? `${service.title} | Authentic Plumbing Services` : 'Service Not Found',
    description: service?.description || 'Professional plumbing services in Miami, FL.',
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-gold underline hover:text-white">Return Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
            {/* Layout mirroring MasterCraft Construction Screenshot */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left: Image Card */}
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Top Left Logo Overlay */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-2 rounded-md shadow-sm">
                         <span className="text-xs font-black uppercase tracking-tighter flex items-center gap-1">
                            <span className="text-gold">AUTHENTIC</span> PLUMBING
                         </span>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="space-y-6">
                    <p className="text-blue-600 font-bold uppercase tracking-wide text-sm">
                        Upgrade Your Space with Expert Solutions
                    </p>
                    
                    <h1 className="text-4xl md:text-5xl font-black text-black leading-tight">
                        {service.title} – <br/> Authentic Plumbing Services
                    </h1>
                    
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                        {service.description}
                    </p>
                    
                    <Link 
                        href="/#contact"
                        className="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wide transition-all hover:scale-105 shadow-lg shadow-blue-600/20 items-center gap-2 mt-4"
                    >
                        Book a Free Quote <CalendarClock size={20} />
                    </Link>
                </div>

            </div>
        </div>
      </div>

      {/* FAQ / Details Section Placeholder (from screenshot) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left: Title */}
                <div className="lg:col-span-1">
                    <h2 className="text-3xl font-black text-black mb-4">
                        Frequently Asked Questions – <br/> {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Find answers to all your questions about our professional services. Whether you're upgrading or repairing, we have the details you need.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold uppercase text-sm">Call Now</Link>
                        <button className="bg-gold text-black px-6 py-3 rounded-full font-bold uppercase text-sm">More FAQs</button>
                    </div>
                </div>

                {/* Right: Accordion List (Visual Only) */}
                <div className="lg:col-span-2 space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="border-b border-gray-200 pb-4">
                            <div className="flex justify-between items-center cursor-pointer hover:text-blue-600 transition-colors">
                                <h3 className="font-bold text-lg">What materials or techniques do you use for this service?</h3>
                                <ChevronDown className="text-gray-400" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}


