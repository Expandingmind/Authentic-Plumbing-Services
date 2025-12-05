"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted!");
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact" className="relative z-30 -mt-6 md:-mt-10 pb-4 md:pb-6 container mx-auto px-4" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3">
        
        {/* Lead Form Card */}
        <div className={`bg-white rounded-lg shadow-lg p-3 md:p-4 text-black relative overflow-hidden reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gold" />
            
            {!isSuccess ? (
                <>
                    <h3 className="text-sm md:text-base font-black uppercase tracking-tight mb-2">
                        Get a Free <span className="text-gold-dark">Quote</span>
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-1.5 md:space-y-2">
                        <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                            <input required type="text" placeholder="Name" className="w-full bg-gray-100 border border-transparent focus:border-gold rounded px-2 py-1.5 text-[11px] md:text-xs outline-none" />
                            <input required type="tel" placeholder="Phone" className="w-full bg-gray-100 border border-transparent focus:border-gold rounded px-2 py-1.5 text-[11px] md:text-xs outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                            <input required type="email" placeholder="Email" className="w-full bg-gray-100 border border-transparent focus:border-gold rounded px-2 py-1.5 text-[11px] md:text-xs outline-none" />
                            <input required type="text" placeholder="Zip" className="w-full bg-gray-100 border border-transparent focus:border-gold rounded px-2 py-1.5 text-[11px] md:text-xs outline-none" />
                        </div>
                        <select className="w-full bg-gray-100 border border-transparent focus:border-gold rounded px-2 py-1.5 text-[11px] md:text-xs outline-none cursor-pointer">
                            <option>Residential Plumbing</option>
                            <option>Commercial Plumbing</option>
                            <option>Toilet Clog / Backup</option>
                            <option>Emergency Plumbing</option>
                            <option>Water Heater</option>
                            <option>Drain Cleaning</option>
                        </select>
                        <textarea rows={2} placeholder="Describe your issue..." className="w-full bg-gray-100 border border-transparent focus:border-gold rounded px-2 py-1.5 text-[11px] md:text-xs outline-none resize-none"></textarea>
                        <button disabled={isSubmitting} type="submit" className="w-full bg-gold hover:bg-gold-hover text-black font-bold text-[11px] md:text-xs uppercase py-2 rounded shadow disabled:opacity-70 flex justify-center items-center gap-1.5">
                            {isSubmitting ? <><Loader2 className="animate-spin w-3 h-3" /> Sending...</> : "Submit Request"}
                        </button>
                    </form>
                </>
            ) : (
                <div className="h-full min-h-[150px] flex flex-col items-center justify-center text-center space-y-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center animate-pulse-glow">
                        <img src="/tick-2.png" alt="Success" className="w-6 h-6 object-contain" />
                    </div>
                    <h3 className="text-base font-black uppercase">Request Received!</h3>
                    <p className="text-gray-600 text-[11px]">We'll contact you shortly.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-gold font-bold underline text-[11px]">Send another</button>
                </div>
            )}
        </div>

        {/* Crew Image */}
        <div className={`relative h-[140px] md:h-[180px] lg:h-auto rounded-lg overflow-hidden shadow-lg group reveal-hidden-right delay-100 ${isVisible ? 'reveal-visible-x' : ''}`}>
            <img src="/tick-2.png" alt="Plumbing Crew" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-2 md:p-3 w-full">
                <div className="bg-gold text-black text-[8px] font-black uppercase px-1.5 py-0.5 rounded-sm inline-block mb-1">Miami's Trusted Pros</div>
                <h3 className="text-white text-sm md:text-base font-bold uppercase leading-tight">Expert Crew. Professional Results.</h3>
            </div>
        </div>

      </div>
    </section>
  );
}
