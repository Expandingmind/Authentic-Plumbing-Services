"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Emergencies", "Kitchens & Bathrooms", "Water Heaters", "Drain & Sewer"];

const PROJECTS = [
  {
    id: 1,
    category: "Kitchens & Bathrooms",
    title: "Luxury Master Bath Remodel",
    description: "Complete repiping and fixture installation for a modern Miami home.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Drain & Sewer",
    title: "Main Line Clog Clearance",
    description: "Hydrojetting a blocked sewer line for a commercial property.",
    image: "https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Water Heaters",
    title: "Tankless Water Heater Install",
    description: "Energy-efficient upgrade for a family of five.",
    image: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Emergencies",
    title: "Burst Pipe Repair",
    description: "Emergency response at 2 AM to fix a flooded kitchen.",
    image: "https://images.unsplash.com/photo-1540428085067-035972987f9c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Kitchens & Bathrooms",
    title: "Kitchen Sink Replacement",
    description: "Upgrading to a farm-style sink with new garbage disposal.",
    image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "Drain & Sewer",
    title: "Storm Drain Cleaning",
    description: "Clearing debris from parking lot storm drains.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=600&auto=format&fit=crop"
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
           <span className="text-gold-dark font-bold tracking-widest uppercase text-sm mb-2 block">
             Crafting Solutions, Protecting Your Home
           </span>
           <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
             Explore Our Recent Work
           </h2>
           
           {/* Tabs */}
           <div className="flex flex-wrap justify-center gap-2 md:gap-4">
             {CATEGORIES.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-all border-2 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-gold text-xs font-bold uppercase mb-1">
                            {project.category}
                        </span>
                        <h3 className="text-white font-bold text-lg mb-1">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
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

