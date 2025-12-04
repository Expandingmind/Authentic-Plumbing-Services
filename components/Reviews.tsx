"use client";

import { Star, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Rhianna Wolk",
    initials: "RW",
    date: "Aug 13, 2025",
    rating: 5,
    text: "I'm thrilled with the work Authentic Plumbing Services did on my sink install. They were professional, friendly, and made the whole process easy. They showed up on time and cleaned up perfectly."
  },
  {
    id: 2,
    name: "Elam Fisher",
    initials: "EF",
    date: "Aug 04, 2025",
    rating: 5,
    text: "Very professional, came and got the project done promptly, with very a reasonable price!! Highly recommended for any plumbing needs in Miami."
  },
  {
    id: 3,
    name: "Justin Ohler",
    initials: "JO",
    date: "Mar 11, 2025",
    rating: 5,
    text: "Raymond's work is wonderful! He is kind and very helpful as well, which is hard to find these days! Thanks so much for fixing our leak so quickly."
  },
  {
    id: 4,
    name: "Debra Cook",
    initials: "DC",
    date: "Dec 19, 2024",
    rating: 5,
    text: "Turned my unfinished basement bathroom into a masterpiece. Also redid the piping. Excellent craftsmanship and attention to detail."
  },
  {
    id: 5,
    name: "David Peachey",
    initials: "DP",
    date: "Dec 01, 2024",
    rating: 5,
    text: "Had a very good experience working with Authentic Plumbing, highly recommend and would go with again! They fixed our clogged drain in under an hour."
  },
  {
    id: 6,
    name: "Leonard Zimmerman",
    initials: "LZ",
    date: "Nov 25, 2024",
    rating: 5,
    text: "This gentleman is the best guy to work for and with. I personally work with Raymond. He is precise and is always ready to fix any mistake or misunderstandings."
  }
];

// Duplicate reviews to create seamless loop
const CAROUSEL_REVIEWS = [...REVIEWS, ...REVIEWS];

export default function Reviews() {
  return (
    <section className="py-12 lg:py-16 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-200 pb-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-1">
              What our clients say about us
            </h2>
            <p className="text-gray-600 font-medium text-sm">
              Real reviews from real customers in Miami and beyond.
            </p>
          </div>
          
          <div className="text-right flex flex-col items-end">
            {/* Google Guaranteed Badge */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-3 py-1.5 rounded-full mb-3">
                <div className="bg-green-500 rounded-full p-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="font-bold text-sm text-gray-700">Google Guaranteed</span>
            </div>

            <div className="text-4xl font-black text-black mb-1">4.90</div>
            <div className="flex items-center gap-1 mb-1 justify-end">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-4 h-4 fill-gold text-gold" />
               ))}
            </div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">
              Based on 25+ Google Reviews
            </p>
          </div>
        </div>

      </div>

      {/* Marquee Carousel */}
      <div className="relative w-full">
        <div className="flex gap-4 animate-marquee w-max px-4">
          {CAROUSEL_REVIEWS.map((review, index) => (
            <div 
                key={`${review.id}-${index}`} 
                className="w-[300px] md:w-[380px] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow whitespace-normal"
            >
               <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase">{review.date}</span>
               </div>
               
               <p className="text-gray-700 mb-4 leading-relaxed font-medium text-sm min-h-[60px]">
                 "{review.text}"
               </p>
               
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-zinc-200 rounded-full flex items-center justify-center text-gray-500 font-black text-xs">
                    {review.initials}
                  </div>
                  <span className="font-bold text-black uppercase text-xs">
                    {review.name}
                  </span>
                  <div className="ml-auto">
                     {/* Google G icon placeholder */}
                     <div className="w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                        <span className="font-bold text-blue-500 text-[10px]">G</span>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
