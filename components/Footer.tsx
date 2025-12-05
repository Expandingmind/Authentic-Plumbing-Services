import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, Clock, MapPin, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-6 md:pt-8 pb-4 border-t border-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-2">
            <Link href="/" className="text-xs md:text-sm font-bold uppercase tracking-tighter flex items-center gap-1.5">
               <Wrench className="text-gold w-4 h-4" />
               <span>AUTHENTIC <span className="text-gold">PLUMBING</span></span>
            </Link>
            <p className="text-gray-400 text-[9px] md:text-[10px] leading-relaxed">Fast, reliable plumbing in Miami. 24/7.</p>
            <div className="flex gap-1.5">
              <a href="#" className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"><Facebook size={12} /></a>
              <a href="#" className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"><Instagram size={12} /></a>
              <a href="#" className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"><Linkedin size={12} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase mb-2 text-white">Links</h4>
            <ul className="space-y-1">
              <li><Link href="#home" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">Services</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">About</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase mb-2 text-white">Services</h4>
            <ul className="space-y-1">
              <li><Link href="#services" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">Residential</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">Commercial</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">Emergency</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">Drains</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase mb-2 text-white">Contact</h4>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-1.5"><MapPin className="text-gold w-3 h-3" /><span className="text-gray-400 text-[9px] md:text-[10px]">Miami, FL</span></li>
              <li className="flex items-center gap-1.5"><Phone className="text-gold w-3 h-3" /><a href="tel:5617655116" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px]">(561) 765-5116</a></li>
              <li className="flex items-center gap-1.5"><Mail className="text-gold w-3 h-3" /><a href="mailto:authenticplumbingservicesfl@gmail.com" className="text-gray-400 hover:text-gold text-[9px] md:text-[10px] truncate">email us</a></li>
              <li className="flex items-center gap-1.5"><Clock className="text-gold w-3 h-3" /><span className="text-gray-400 text-[9px] md:text-[10px]">24/7</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-900 pt-3 flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
           <p className="text-gray-500 text-[8px] md:text-[9px]">© 2025 Authentic Plumbing Services</p>
           <span className="text-gray-700 text-[8px] md:text-[9px]">By Maktub Technologies</span>
        </div>

      </div>
    </footer>
  );
}
