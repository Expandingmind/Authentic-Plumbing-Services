"use client";

import { Star, CheckCircle2 } from "lucide-react";

const REVIEWS = [
  { id: 1, name: "Rhianna W.", initials: "RW", date: "Aug 2025", rating: 5, text: "Professional and friendly! They showed up on time and cleaned up perfectly." },
  { id: 2, name: "Elam F.", initials: "EF", date: "Aug 2025", rating: 5, text: "Very professional, got the project done promptly with a reasonable price!" },
  { id: 3, name: "Justin O.", initials: "JO", date: "Mar 2025", rating: 5, text: "Raymond's work is wonderful! Kind and helpful. Fixed our leak quickly." },
  { id: 4, name: "Debra C.", initials: "DC", date: "Dec 2024", rating: 5, text: "Turned my basement bathroom into a masterpiece. Excellent craftsmanship." },
  { id: 5, name: "David P.", initials: "DP", date: "Dec 2024", rating: 5, text: "Great experience! Fixed our clogged drain in under an hour." },
  { id: 6, name: "Leonard Z.", initials: "LZ", date: "Nov 2024", rating: 5, text: "Raymond is precise and always ready to help. Best plumber in Miami!" }
];

const CAROUSEL_REVIEWS = [...REVIEWS, ...REVIEWS];

export default function Reviews() {
  return (
    <section className="py-4 md:py-6 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4 mb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-2">
          <div>
            <h2 className="text-base md:text-lg lg:text-xl font-black uppercase tracking-tight">What Clients Say</h2>
            <p className="text-gray-500 text-[10px] md:text-[11px]">Real reviews from Miami customers</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white border border-gray-200 px-1.5 py-0.5 rounded-full">
              <CheckCircle2 className="w-3 h-3 text-green-500" strokeWidth={3} />
              <span className="font-bold text-[9px] text-gray-700">Google Guaranteed</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg md:text-xl font-black">4.9</span>
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-gold text-gold" />)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div className="flex gap-2 animate-marquee w-max px-4">
          {CAROUSEL_REVIEWS.map((review, index) => (
            <div key={`${review.id}-${index}`} className="w-[200px] md:w-[240px] bg-gray-50 p-2.5 md:p-3 rounded-lg border border-gray-100 whitespace-normal">
               <div className="flex items-center justify-between mb-1.5">
                  <div className="flex gap-0.5">{[...Array(review.rating)].map((_, i) => <Star key={i} className="w-2 h-2 fill-gold text-gold" />)}</div>
                  <span className="text-[8px] font-bold text-gray-400">{review.date}</span>
               </div>
               <p className="text-gray-700 mb-2 leading-snug text-[10px] md:text-[11px] min-h-[36px]">"{review.text}"</p>
               <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center text-[8px] font-black text-gray-500">{review.initials}</div>
                  <span className="font-bold text-[9px] uppercase">{review.name}</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
