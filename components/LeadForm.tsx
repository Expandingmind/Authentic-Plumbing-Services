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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // TODO: Backend integration using Nodemailer or Form service
    console.log("Form submitted!");
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="relative z-30 -mt-10 md:-mt-16 pb-6 md:pb-10 container mx-auto px-4" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
        
        {/* Left: Lead Form Card */}
        <div className={`bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl p-3 md:p-4 lg:p-5 text-black relative overflow-hidden reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            
            {!isSuccess ? (
                <>
                    <h3 className="text-base md:text-lg lg:text-xl font-black uppercase tracking-tight mb-3">
                        Get a Free <span className="text-gold-dark">Quote</span> Today
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                        <div className="grid grid-cols-2 gap-2 md:gap-3">
                            <div>
                                <label className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Name</label>
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Phone</label>
                                <input 
                                    required 
                                    type="tel" 
                                    placeholder="(555) 555-5555" 
                                    className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 md:gap-3">
                            <div>
                                <label className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Email</label>
                                <input 
                                    required 
                                    type="email" 
                                    placeholder="email@example.com" 
                                    className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Zip</label>
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="33101" 
                                    className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Service</label>
                            <select className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm outline-none transition-all cursor-pointer">
                                <option>Residential Plumbing</option>
                                <option>Commercial Plumbing</option>
                                <option>Toilet Clog / Backup</option>
                                <option>Emergency Plumbing</option>
                                <option>Water Heater</option>
                                <option>Drain Cleaning</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Message</label>
                            <textarea 
                                rows={2} 
                                placeholder="Tell us about your issue..." 
                                className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="btn-primary w-full bg-gold hover:bg-gold-hover text-black font-bold text-xs md:text-sm uppercase py-2.5 md:py-3 rounded shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="animate-spin w-3 h-3 md:w-4 md:h-4" /> Sending...</>
                            ) : (
                                "Submit Request"
                            )}
                        </button>
                    </form>
                </>
            ) : (
                <div className="h-full min-h-[200px] md:min-h-[250px] flex flex-col items-center justify-center text-center space-y-2">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-full flex items-center justify-center mb-2 animate-pulse-glow">
                        <img src="/tick-2.png" alt="Success" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                    </div>
                    <h3 className="text-lg md:text-xl font-black uppercase">Request Received!</h3>
                    <p className="text-gray-600 text-xs md:text-sm max-w-sm">
                        Thank you! One of our experts will be in touch shortly.
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-gold font-bold underline text-xs md:text-sm mt-2"
                    >
                        Send another request
                    </button>
                </div>
            )}
        </div>

        {/* Right: Crew Image Section */}
        <div className={`relative h-[200px] md:h-[280px] lg:h-auto rounded-lg md:rounded-xl overflow-hidden shadow-lg md:shadow-xl group reveal-hidden-right delay-200 ${isVisible ? 'reveal-visible-x' : ''}`}>
             {/* Image */}
            <img 
                src="/tick-2.png"
                alt="Professional Plumbing Crew"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-3 md:p-5 w-full">
                <div className="bg-gold text-black text-[8px] md:text-[10px] font-black uppercase px-1.5 md:px-2 py-0.5 rounded-sm inline-block mb-1 md:mb-2">
                    Miami's Trusted Pros
                </div>
                <h3 className="text-white text-base md:text-xl lg:text-2xl font-bold uppercase leading-tight mb-1">
                    Expert Crew. Professional Results.
                </h3>
                <p className="text-gray-300 font-medium text-xs md:text-sm hidden sm:block">
                    Fast response times, clean work, and clear communication.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
