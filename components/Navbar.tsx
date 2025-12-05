"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black py-2 md:py-3 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-tighter text-white">
          AUTHENTIC <span className="text-gold">PLUMBING</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-white hover:text-gold text-[11px] lg:text-xs font-bold uppercase">{link.label}</Link>
          ))}
          <a href="tel:5617655116" className="bg-gold text-black px-3 py-1.5 rounded-full font-bold text-[11px] flex items-center gap-1.5">
            <Phone size={12} /> (561) 765-5116
          </a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/98 border-t border-gray-800 md:hidden flex flex-col p-3 gap-3">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="text-white text-sm font-bold uppercase py-1.5 border-b border-gray-800/50" onClick={() => setIsOpen(false)}>{link.label}</Link>
          ))}
          <a href="tel:5617655116" className="bg-gold text-black px-4 py-2 rounded-lg font-black text-sm flex justify-center items-center gap-2 mt-1">
            <Phone size={16} /> (561) 765-5116
          </a>
        </div>
      )}
    </nav>
  );
}
