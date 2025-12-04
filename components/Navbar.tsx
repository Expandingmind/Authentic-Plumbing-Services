"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Locations", href: "/#locations" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black py-3 md:py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold uppercase tracking-tighter text-white flex items-center gap-2">
          <div>
             AUTHENTIC <span className="text-gold">PLUMBING</span> <span className="hidden sm:inline">SERVICES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
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
            className="bg-gold hover:bg-gold-hover text-black px-4 py-2 rounded-full font-extrabold text-sm flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-gold/20"
          >
            <Phone size={16} className="stroke-black" strokeWidth={2.5} />
            (561) 765-5116
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/98 backdrop-blur-xl border-t border-gray-800 lg:hidden flex flex-col p-4 gap-4 shadow-2xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-gold text-lg font-bold uppercase tracking-tight py-2 border-b border-gray-800/50"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:5617655116"
            className="bg-gold hover:bg-gold-hover text-black px-5 py-3 rounded-lg font-black text-base flex justify-center items-center gap-2 mt-2"
          >
            <Phone size={20} />
            CALL (561) 765-5116
          </a>
        </div>
      )}
    </nav>
  );
}
