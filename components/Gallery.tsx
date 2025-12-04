"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CATEGORIES = ["All", "Emergencies", "Bathrooms", "Water Heaters", "Drains"];

const PROJECTS = [
  {
    id: 1,
    category: "Bathrooms",
    title: "Luxury Bath Remodel",
    description: "Complete repiping and fixture installation.",
    image: "/tick-11.png"
  },
  {
    id: 2,
    category: "Drains",
    title: "Main Line Clog",
    description: "Hydrojetting a blocked sewer line.",
    image: "/toilet-overflow.png"
  },
  {
    id: 3,
    category: "Water Heaters",
    title: "Tankless Install",
    description: "Energy-efficient upgrade.",
    image: "/waterheaters.png"
  },
  {
    id: 4,
    category: "Emergencies",
    title: "Burst Pipe Repair",
    description: "Emergency response for flooded kitchen.",
    image: "/tick-12.png"
  },
  {
    id: 5,
    category: "Bathrooms",
    title: "Kitchen Sink",
    description: "Farm-style sink installation.",
    image: "/tick-10.png"
  },
  {
    id: 6,
    category: "Drains",
    title: "Storm Drain Cleaning",
    description: "Commercial drain clearing.",
    image: "/draincleaning.png"
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-white text-black" ref={ref}>
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-4 md:mb-5 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
           <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase mb-3">
             Explore Our Recent Work
           </h2>
           
           {/* Tabs */}
           <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
             {CATEGORIES.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-2.5 md:px-4 py-1 md:py-1.5 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-wide transition-all border ${
                   activeCategory === cat 
                     ? "bg-black text-white border-black" 
                     : "bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black"
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {filteredProjects.map((project, idx) => (
                <div 
                    key={project.id} 
                    className={`group relative overflow-hidden rounded md:rounded-lg cursor-pointer reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 md:p-4">
                        <span className="text-gold text-[8px] md:text-[10px] font-bold uppercase mb-0.5">
                            {project.category}
                        </span>
                        <h3 className="text-white font-bold text-xs md:text-sm mb-0.5">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 text-[10px] md:text-xs hidden md:block">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
