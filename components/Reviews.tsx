"use client";

import { Star, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Rhianna Wolk",
    initials: "RW",
    date: "Aug 13, 2025",
    rating: 5,
    text: "I'm thrilled with the work Authentic Plumbing Services did on my sink install. They were professional, friendly, and made the whole process easy."
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
    text: "Raymond's work is wonderful! He is kind and very helpful as well, which is hard to find these days! Thanks so much for fixing our leak."
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
    text: "Had a very good experience working with Authentic Plumbing, highly recommend and would go with again! They fixed our clogged drain fast."
  },
  {
    id: 6,
    name: "Leonard Zimmerman",
    initials: "LZ",
    date: "Nov 25, 2024",
    rating: 5,
    text: "This gentleman is the best guy to work for and with. I personally work with Raymond. He is precise and always ready to help."
  }
];

// Duplicate reviews to create seamless loop
const CAROUSEL_REVIEWS = [...REVIEWS, ...REVIEWS];

export default function Reviews() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4 mb-4 md:mb-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-gray-200 pb-3 md:pb-4">
          <div className="max-w-xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight mb-1">
              What our clients say
            </h2>
            <p className="text-gray-600 font-medium text-xs md:text-sm">
              Real reviews from real customers in Miami.
            </p>
          </div>
          
          <div className="flex items-center gap-3 md:flex-col md:items-end">
            {/* Google Guaranteed Badge */}
            <div className="flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm px-2 py-1 rounded-full">
                <div className="bg-green-500 rounded-full p-0.5">
                    <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="font-bold text-xs text-gray-700">Google Guaranteed</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-2xl md:text-3xl font-black text-black">4.90</div>
              <div className="flex items-center gap-0.5">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-gold text-gold" />
                 ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee Carousel */}
      <div className="relative w-full">
        <div className="flex gap-3 md:gap-4 animate-marquee w-max px-4">
          {CAROUSEL_REVIEWS.map((review, index) => (
            <div 
                key={`${review.id}-${index}`} 
                className="w-[260px] md:w-[320px] bg-gray-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-gray-100 shadow-sm whitespace-normal"
            >
               <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">{review.date}</span>
               </div>
               
               <p className="text-gray-700 mb-3 leading-relaxed font-medium text-xs md:text-sm min-h-[50px]">
                 "{review.text}"
               </p>
               
               <div className="flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-zinc-200 rounded-full flex items-center justify-center text-gray-500 font-black text-[10px] md:text-xs">
                    {review.initials}
                  </div>
                  <span className="font-bold text-black uppercase text-[10px] md:text-xs">
                    {review.name}
                  </span>
                  <div className="ml-auto">
                     <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                        <span className="font-bold text-blue-500 text-[8px] md:text-[10px]">G</span>
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
