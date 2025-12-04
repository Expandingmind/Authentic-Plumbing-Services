"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CATEGORIES = ["All", "Emergencies", "Kitchens & Bathrooms", "Water Heaters", "Drain & Sewer"];

const PROJECTS = [
  {
    id: 1,
    category: "Kitchens & Bathrooms",
    title: "Luxury Master Bath Remodel",
    description: "Complete repiping and fixture installation for a modern Miami home.",
    image: "/tick-11.png"
  },
  {
    id: 2,
    category: "Drain & Sewer",
    title: "Main Line Clog Clearance",
    description: "Hydrojetting a blocked sewer line for a commercial property.",
    image: "/toilet-overflow.png"
  },
  {
    id: 3,
    category: "Water Heaters",
    title: "Tankless Water Heater Install",
    description: "Energy-efficient upgrade for a family of five.",
    image: "/waterheaters.png"
  },
  {
    id: 4,
    category: "Emergencies",
    title: "Burst Pipe Repair",
    description: "Emergency response at 2 AM to fix a flooded kitchen.",
    image: "/tick-12.png"
  },
  {
    id: 5,
    category: "Kitchens & Bathrooms",
    title: "Kitchen Sink Replacement",
    description: "Upgrading to a farm-style sink with new garbage disposal.",
    image: "/tick-10.png"
  },
  {
    id: 6,
    category: "Drain & Sewer",
    title: "Storm Drain Cleaning",
    description: "Clearing debris from parking lot storm drains.",
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
    <section className="py-8 lg:py-10 bg-white text-black" ref={ref}>
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className={`text-center mb-5 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
           <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">
             Explore Our Recent Work
           </h2>
           
           {/* Tabs */}
           <div className="flex flex-wrap justify-center gap-2">
             {CATEGORIES.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wide transition-all border ${
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredProjects.map((project, idx) => (
                <div 
                    key={project.id} 
                    className={`group relative overflow-hidden rounded-lg cursor-pointer reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <span className="text-gold text-[10px] font-bold uppercase mb-0.5">
                            {project.category}
                        </span>
                        <h3 className="text-white font-bold text-sm mb-0.5">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 text-xs hidden md:block">
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
