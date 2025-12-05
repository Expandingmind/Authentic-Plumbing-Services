"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CATEGORIES = ["All", "Emergency", "Bath", "Heaters", "Drains"];

const PROJECTS = [
  { id: 1, category: "Bath", title: "Bath Remodel", image: "/tick-11.png" },
  { id: 2, category: "Drains", title: "Main Line Clog", image: "/toilet-overflow.png" },
  { id: 3, category: "Heaters", title: "Tankless Install", image: "/waterheaters.png" },
  { id: 4, category: "Emergency", title: "Burst Pipe", image: "/tick-12.png" },
  { id: 5, category: "Bath", title: "Kitchen Sink", image: "/tick-10.png" },
  { id: 6, category: "Drains", title: "Storm Drain", image: "/draincleaning.png" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const filteredProjects = activeCategory === "All" ? PROJECTS : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-4 md:py-6 bg-white text-black" ref={ref}>
      <div className="container mx-auto px-4">
        
        <div className={`text-center mb-3 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
           <h2 className="text-base md:text-lg lg:text-xl font-black uppercase mb-2">Recent Work</h2>
           <div className="flex flex-wrap justify-center gap-1">
             {CATEGORIES.map((cat) => (
               <button key={cat} onClick={() => setActiveCategory(cat)}
                 className={`px-2 py-0.5 rounded-full font-bold text-[9px] md:text-[10px] uppercase border ${activeCategory === cat ? "bg-black text-white border-black" : "bg-transparent text-gray-500 border-gray-200 hover:border-black"}`}>
                 {cat}
               </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 md:gap-2">
            {filteredProjects.map((project, idx) => (
                <div key={project.id} className={`group relative overflow-hidden rounded cursor-pointer reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: `${idx * 30}ms` }}>
                    <div className="aspect-square overflow-hidden bg-gray-200">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-1.5 md:p-2">
                        <h3 className="text-white font-bold text-[9px] md:text-[10px]">{project.title}</h3>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
