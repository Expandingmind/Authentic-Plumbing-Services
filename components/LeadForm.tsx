"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    <section className="relative z-30 -mt-20 pb-20 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left: Lead Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 text-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gold" />
            
            {!isSuccess ? (
                <>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-6">
                        Get a Free <span className="text-gold-dark">Plumbing Quote</span> Today
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 uppercase">Your Name</label>
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full bg-gray-100 border-2 border-transparent focus:border-gold focus:bg-white rounded-lg px-4 py-3 outline-none transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 uppercase">Phone Number</label>
                                <input 
                                    required 
                                    type="tel" 
                                    placeholder="(555) 555-5555" 
                                    className="w-full bg-gray-100 border-2 border-transparent focus:border-gold focus:bg-white rounded-lg px-4 py-3 outline-none transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 uppercase">Email Address</label>
                                <input 
                                    required 
                                    type="email" 
                                    placeholder="name@example.com" 
                                    className="w-full bg-gray-100 border-2 border-transparent focus:border-gold focus:bg-white rounded-lg px-4 py-3 outline-none transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 uppercase">Zip Code</label>
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="33101" 
                                    className="w-full bg-gray-100 border-2 border-transparent focus:border-gold focus:bg-white rounded-lg px-4 py-3 outline-none transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700 uppercase">Service Needed</label>
                            <select className="w-full bg-gray-100 border-2 border-transparent focus:border-gold focus:bg-white rounded-lg px-4 py-3 outline-none transition-all font-medium cursor-pointer appearance-none">
                                <option>Residential Plumbing Services</option>
                                <option>Commercial Plumbing Services</option>
                                <option>Toilet Clog / Toilet Backup</option>
                                <option>Shower Overflow</option>
                                <option>Emergency Plumbing Services</option>
                                <option>Hydrojet / High-Pressure Drain Cleaning</option>
                                <option>Tankless Water Heater Install/Repair</option>
                                <option>Camera Detection / Pipe Inspection</option>
                                <option>Drain Cleaning</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700 uppercase">Message</label>
                            <textarea 
                                rows={3} 
                                placeholder="Tell us about your issue..." 
                                className="w-full bg-gray-100 border-2 border-transparent focus:border-gold focus:bg-white rounded-lg px-4 py-3 outline-none transition-all font-medium resize-none"
                            ></textarea>
                        </div>

                        <button 
                            disabled={isSubmitting}
                            type="submit" 
                            className="w-full bg-gold hover:bg-gold-hover text-black font-black text-lg uppercase py-4 rounded-lg shadow-lg transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="animate-spin" /> Sending...</>
                            ) : (
                                "Submit Request"
                            )}
                        </button>
                    </form>
                </>
            ) : (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-black uppercase">Request Received!</h3>
                    <p className="text-gray-600 max-w-md">
                        Thank you for contacting Authentic Plumbing Services. One of our experts will be in touch with you shortly to discuss your quote.
                    </p>
                    <button 
                        onClick={() => setIsSuccess(false)}
                        className="text-gold font-bold underline mt-4"
                    >
                        Send another request
                    </button>
                </div>
            )}
        </div>

        {/* Right: Crew Image Section */}
        <div className="relative h-full min-h-[400px] lg:min-h-auto rounded-2xl overflow-hidden shadow-2xl group">
             {/* Image */}
            <img 
                src="https://images.unsplash.com/photo-1581578731117-104f2a412729?q=80&w=1000&auto=format&fit=crop"
                alt="Professional Plumbing Crew"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                <div className="bg-gold text-black text-xs font-black uppercase px-3 py-1 rounded-sm inline-block mb-3">
                    Miami’s Trusted Plumbing Pros
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold uppercase leading-none mb-3">
                    Expert Crew. <br/> Professional Results.
                </h3>
                <p className="text-gray-300 font-medium text-lg">
                    Fast response times, clean work, and clear communication. We treat your home like our own.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
