"use client";

import { useState } from "react";
import { Star } from "lucide-react";

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

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, REVIEWS.length));
  };

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-200 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-2">
              What our clients say about us
            </h2>
            <p className="text-gray-600 font-medium">
              Real reviews from real customers in Miami and beyond.
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-5xl font-black text-black mb-1">4.90</div>
            <div className="flex items-center gap-1 mb-1 justify-end">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-5 h-5 fill-gold text-gold" />
               ))}
            </div>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wide">
              Based on 25+ Google Reviews
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.slice(0, visibleCount).map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase">{review.date}</span>
               </div>
               
               <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                 "{review.text}"
               </p>
               
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-gray-500 font-black text-sm">
                    {review.initials}
                  </div>
                  <span className="font-bold text-black uppercase text-sm">
                    {review.name}
                  </span>
                  <div className="ml-auto">
                     {/* Google G icon placeholder */}
                     <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                        <span className="font-bold text-blue-500 text-xs">G</span>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < REVIEWS.length && (
          <div className="text-center">
            <button 
              onClick={handleLoadMore}
              className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

