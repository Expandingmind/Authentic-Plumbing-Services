"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
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
    <section className="relative z-30 -mt-16 pb-10 container mx-auto px-4" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        
        {/* Left: Lead Form Card */}
        <div className={`bg-white rounded-xl shadow-xl p-4 md:p-5 text-black relative overflow-hidden reveal-hidden-left ${isVisible ? 'reveal-visible-x' : ''}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            
            {!isSuccess ? (
                <>
                    <h3 className="text-xl font-black uppercase tracking-tight mb-4">
                        Get a Free <span className="text-gold-dark">Plumbing Quote</span> Today
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-bold text-gray-600 uppercase">Your Name</label>
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-3 py-2 text-sm outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-600 uppercase">Phone Number</label>
                                <input 
                                    required 
                                    type="tel" 
                                    placeholder="(555) 555-5555" 
                                    className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-3 py-2 text-sm outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="text-xs font-bold text-gray-600 uppercase">Email Address</label>
                                <input 
                                    required 
                                    type="email" 
                                    placeholder="name@example.com" 
                                    className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-3 py-2 text-sm outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-600 uppercase">Zip Code</label>
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="33101" 
                                    className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-3 py-2 text-sm outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-600 uppercase">Service Needed</label>
                            <select className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-3 py-2 text-sm outline-none transition-all cursor-pointer">
                                <option>Residential Plumbing Services</option>
                                <option>Commercial Plumbing Services</option>
                                <option>Toilet Clog / Toilet Backup</option>
                                <option>Emergency Plumbing Services</option>
                                <option>Water Heater Install/Repair</option>
                                <option>Drain Cleaning</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-600 uppercase">Message</label>
                            <textarea 
                                rows={2} 
                                placeholder="Tell us about your issue..." 
                                className="w-full bg-gray-100 border border-transparent focus:border-gold focus:bg-white rounded px-3 py-2 text-sm outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="btn-primary w-full bg-gold hover:bg-gold-hover text-black font-bold text-sm uppercase py-3 rounded shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="animate-spin w-4 h-4" /> Sending...</>
                            ) : (
                                "Submit Request"
                            )}
                        </button>
                    </form>
                </>
            ) : (
                <div className="h-full min-h-[280px] flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-2 animate-pulse-glow">
                        <img src="/tick-2.png" alt="Success" className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="text-2xl font-black uppercase">Request Received!</h3>
                    <p className="text-gray-600 text-sm max-w-sm">
                        Thank you for contacting Authentic Plumbing Services. One of our experts will be in touch shortly.
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-gold font-bold underline text-sm mt-2"
                    >
                        Send another request
                    </button>
                </div>
            )}
        </div>

        {/* Right: Crew Image Section */}
        <div className={`relative h-[300px] lg:h-auto rounded-xl overflow-hidden shadow-xl group reveal-hidden-right delay-200 ${isVisible ? 'reveal-visible-x' : ''}`}>
             {/* Image */}
            <img 
                src="/emergencyplumbing.png"
                alt="Professional Plumbing Crew"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-5 w-full">
                <div className="bg-gold text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-sm inline-block mb-2">
                    Miami's Trusted Plumbing Pros
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold uppercase leading-tight mb-2">
                    Expert Crew. Professional Results.
                </h3>
                <p className="text-gray-300 font-medium text-sm">
                    Fast response times, clean work, and clear communication.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
