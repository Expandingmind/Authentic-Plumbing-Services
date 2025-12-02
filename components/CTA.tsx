import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 bg-gold text-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-3">
            Ready to Fix Your Plumbing Problem?
          </h2>
          <p className="text-lg md:text-xl font-bold opacity-90">
            Call us anytime at (561) 765-5116 or request a free quote online. We’re available 24/7.
          </p>
        </div>

        <Link 
          href="#contact" 
          className="bg-black hover:bg-zinc-800 text-gold px-10 py-5 rounded-full font-black text-lg uppercase tracking-wide transition-all hover:scale-105 shadow-xl flex items-center gap-3 whitespace-nowrap"
        >
          Book a Free Quote Now <ArrowRight />
        </Link>

      </div>
    </section>
  );
}


