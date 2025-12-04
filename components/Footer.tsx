import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, Clock, MapPin, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 md:pt-16 pb-6 md:pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <Link href="/" className="text-base md:text-lg lg:text-xl font-bold uppercase tracking-tighter flex items-center gap-2">
               <Wrench className="text-gold w-5 h-5 md:w-6 md:h-6" />
               <div>AUTHENTIC <span className="text-gold">PLUMBING</span></div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
              Your trusted partner for plumbing in Miami. Fast, reliable service 24/7.
            </p>
            <div className="flex gap-2 md:gap-3">
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-base font-bold uppercase mb-3 md:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="#home" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Services</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">About Us</Link></li>
              <li><Link href="#locations" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Locations</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm md:text-base font-bold uppercase mb-3 md:mb-4 text-white">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Residential</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Commercial</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Drain Cleaning</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Water Heaters</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors text-xs md:text-sm">Emergency</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm md:text-base font-bold uppercase mb-3 md:mb-4 text-white">Contact</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="text-gold w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 text-xs md:text-sm">Miami, FL & Surrounding</span>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Phone className="text-gold w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                <a href="tel:5617655116" className="text-gray-400 hover:text-gold text-xs md:text-sm">(561) 765-5116</a>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Mail className="text-gold w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                <a href="mailto:authenticplumbingservicesfl@gmail.com" className="text-gray-400 hover:text-gold text-xs md:text-sm break-all">authenticplumbingservicesfl@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Clock className="text-gold w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs md:text-sm">Open 24/7</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
           <p className="text-gray-500 text-[10px] md:text-xs">
             © 2025 Authentic Plumbing Services. All rights reserved.
           </p>
           <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center">
             <Link href="#" className="text-gray-500 hover:text-white text-[10px] md:text-xs">Privacy</Link>
             <Link href="#" className="text-gray-500 hover:text-white text-[10px] md:text-xs">Terms</Link>
             <span className="text-gray-700 text-[10px] md:text-xs">By Maktub Technologies</span>
           </div>
        </div>

      </div>
    </footer>
  );
}
