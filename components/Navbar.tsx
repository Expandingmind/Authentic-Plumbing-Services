"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Wrench } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-black py-4 shadow-md"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-tighter text-white flex items-center gap-2">
          <div>
             AUTHENTIC <span className="text-gold">PLUMBING</span> SERVICES
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-gold transition-colors text-sm font-bold uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:5617655116"
            className="bg-gold hover:bg-gold-hover text-black px-5 py-2.5 rounded-full font-extrabold text-sm flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-gold/20"
          >
            <Phone size={18} className="stroke-black" strokeWidth={2.5} />
            (561) 765-5116
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 lg:hidden flex flex-col p-6 gap-6 shadow-2xl h-screen">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-gold text-2xl font-bold uppercase tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:5617655116"
            className="bg-gold hover:bg-gold-hover text-black px-6 py-4 rounded-xl font-black text-xl flex justify-center items-center gap-3 mt-4"
          >
            <Phone size={24} />
            CALL (561) 765-5116
          </a>
        </div>
      )}
    </nav>
  );
}
