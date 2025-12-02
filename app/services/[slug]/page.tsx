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
    description: "At Authentic Plumbing Services, we specialize in commercial plumbing solutions that keep your business running smoothly. Based in Miami, FL, and serving nearby areas, our expert team offers custom plumbing systems tailored to your industry needs.",
    faqs: [
      {
        question: "Do you offer 24/7 emergency services for businesses?",
        answer: "Yes, we understand that plumbing issues can halt operations. Our team is available 24/7 to handle commercial plumbing emergencies promptly."
      },
      {
        question: "Can you handle plumbing for large commercial renovations?",
        answer: "Absolutely. We have extensive experience with large-scale commercial renovations, including office buildings, retail spaces, and restaurants."
      },
      {
        question: "Do you provide preventative maintenance plans?",
        answer: "Yes, we offer customized maintenance plans to prevent costly breakdowns and ensure your commercial plumbing systems remain efficient."
      },
      {
        question: "Are you licensed and insured for commercial work?",
        answer: "Yes, Authentic Plumbing Services is fully licensed and insured to perform commercial plumbing work in Miami, FL and surrounding areas."
      },
      {
        question: "What types of commercial properties do you serve?",
        answer: "We serve a wide range of properties including restaurants, hotels, office complexes, retail stores, and industrial facilities."
      }
    ]
  },
  "residential-plumbing": {
    title: "Residential Plumbing Services",
    image: "/tick-9.png",
    description: "Transform your home with our expert residential plumbing services. Whether it's a kitchen upgrade, bathroom renovation, or emergency repair, we deliver results that exceed expectations.",
    faqs: [
      {
        question: "How quickly can you respond to a home plumbing emergency?",
        answer: "We strive to respond to all residential emergencies as quickly as possible, typically within the hour for critical issues."
      },
      {
        question: "Do you offer free estimates for home repairs?",
        answer: "Yes, we provide free, no-obligation estimates for all our residential plumbing services so you know the cost upfront."
      },
      {
        question: "Can you help with bathroom and kitchen remodeling?",
        answer: "Yes, we specialize in plumbing installations for remodels, including sinks, faucets, showers, tubs, and toilet replacements."
      },
      {
        question: "What should I do if I have a burst pipe?",
        answer: "Shut off your main water supply immediately to minimize damage and call us right away for emergency repair."
      },
      {
        question: "Do you warranty your residential plumbing work?",
        answer: "Yes, we stand behind our craftsmanship with a warranty on labor and manufacturer warranties on parts installed."
      }
    ]
  },
  "toilet-clog-backup": {
    title: "Toilet Clog & Backup Services",
    image: "/toilet-overflow.png",
    description: "Fast and effective removal of stubborn toilet clogs and sewer line backups. We ensure your bathroom facilities are fully operational with minimal downtime.",
    faqs: [
      {
        question: "What causes persistent toilet clogs?",
        answer: "Frequent clogs can be caused by flushing non-flushable items, mineral build-up, or issues deeper in the sewer line."
      },
      {
        question: "Is it safe to use chemical drain cleaners?",
        answer: "We recommend avoiding harsh chemicals as they can damage pipes over time. Mechanical snaking or hydrojetting is safer and more effective."
      },
      {
        question: "How do I know if it's a main sewer line backup?",
        answer: "Signs include multiple drains clogging simultaneously, water backing up in the shower when flushing, or gurgling noises from drains."
      },
      {
        question: "Can you remove objects flushed down the toilet?",
        answer: "Yes, we have specialized tools to retrieve flushed objects like toys or jewelry without damaging the toilet or pipes."
      },
      {
        question: "Do you replace toilets if the clog cannot be fixed?",
        answer: "If the toilet itself is damaged or outdated, we can recommend and install high-efficiency replacements."
      }
    ]
  },
  "emergency-plumbing": {
    title: "Emergency Plumbing Services",
    image: "/emergencyplumbing.png",
    description: "Available 24/7 for critical plumbing failures. From burst pipes to severe leaks, our emergency response team is ready to protect your property.",
    faqs: [
      {
        question: "What is considered a plumbing emergency?",
        answer: "Emergencies include burst pipes, severe leaks, sewage backups, no water supply, and gas leaks."
      },
      {
        question: "Are your emergency services available on holidays?",
        answer: "Yes, our emergency plumbers are on call 24 hours a day, 7 days a week, including weekends and holidays."
      },
      {
        question: "What information do you need when I call for an emergency?",
        answer: "Please provide your location, a description of the problem, and whether you have been able to shut off the water."
      },
      {
        question: "Do you charge extra for after-hours service?",
        answer: "We offer transparent pricing. Any applicable after-hours rates will be discussed upfront before we begin work."
      },
      {
        question: "How can I prevent plumbing emergencies?",
        answer: "Regular maintenance, inspecting pipes for leaks, and knowing where your main shut-off valve is located can help prevent disasters."
      }
    ]
  },
  "water-heaters": {
    title: "Water Heater Installation & Repair",
    image: "/waterheaters.png",
    description: "Upgrade to energy-efficient tankless systems or repair your existing water heater. We ensure you have reliable hot water when you need it most.",
    faqs: [
      {
        question: "How long does a water heater typically last?",
        answer: "Traditional tank water heaters last 8-12 years, while tankless models can last 20+ years with proper maintenance."
      },
      {
        question: "Should I repair or replace my water heater?",
        answer: "If your unit is over 10 years old, leaking, or requires frequent repairs, replacement is usually the more cost-effective option."
      },
      {
        question: "What are the benefits of a tankless water heater?",
        answer: "Tankless heaters provide endless hot water, take up less space, and are more energy-efficient than traditional tank models."
      },
      {
        question: "Do you install both electric and gas water heaters?",
        answer: "Yes, we are certified to install, repair, and maintain both electric and gas water heater systems."
      },
      {
        question: "Why is my water heater making a popping noise?",
        answer: "Popping sounds often indicate sediment buildup in the tank. Flushing the tank usually resolves this issue."
      }
    ]
  },
  "drain-cleaning": {
    title: "Drain Cleaning Services",
    image: "/draincleaning.png",
    description: "Professional drain cleaning using hydrojet technology to clear grease, sludge, and debris. Keep your plumbing system flowing freely with our maintenance services.",
    faqs: [
      {
        question: "What is hydrojetting?",
        answer: "Hydrojetting uses high-pressure water streams to scour the inside of pipes, removing grease, roots, and stubborn blockages completely."
      },
      {
        question: "How often should I have my drains cleaned?",
        answer: "For preventative maintenance, we recommend professional drain cleaning every 18-24 months to prevent major clogs."
      },
      {
        question: "Can drain cleaning remove tree roots?",
        answer: "Yes, our hydrojetting and snaking equipment is powerful enough to cut through and remove tree roots invading your sewer lines."
      },
      {
        question: "Is your drain cleaning process safe for old pipes?",
        answer: "We assess the condition of your pipes with a camera inspection first to choose the safest and most effective cleaning method."
      },
      {
        question: "Why does my drain smell bad?",
        answer: "Bad odors can be caused by trapped food, bacteria buildup, or a dried-out P-trap. Professional cleaning can eliminate the source of the smell."
      }
    ]
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
                    {(service.faqs || []).map((faq: any, idx: number) => (
                        <div key={idx} className="border-b border-gray-200 pb-4">
                            <div className="group cursor-pointer">
                                <div className="flex justify-between items-center hover:text-blue-600 transition-colors mb-2">
                                    <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
                                    <ChevronDown className="text-gray-400 shrink-0 group-hover:text-blue-600" />
                                </div>
                                <p className="text-gray-600 text-base leading-relaxed hidden group-hover:block animate-in slide-in-from-top-1 fade-in duration-200">
                                    {faq.answer}
                                </p>
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


