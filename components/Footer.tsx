import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, Clock, MapPin, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold uppercase tracking-tighter flex items-center gap-2">
               <Wrench className="text-gold w-8 h-8" />
               <div>AUTHENTIC <span className="text-gold">PLUMBING</span> SERVICES</div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for residential and commercial plumbing in Miami. Fast, reliable, and honest service available 24/7.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="#locations" className="text-gray-400 hover:text-gold transition-colors">Locations</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors">Residential Plumbing</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors">Commercial Plumbing</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors">Drain Cleaning</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors">Water Heater Repair</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-gold transition-colors">Emergency Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 text-white">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold w-6 h-6 shrink-0" />
                <div>
                  <span className="block text-white font-bold">Service Area</span>
                  <span className="text-gray-400">Miami, FL & Surrounding Areas</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-gold w-6 h-6 shrink-0" />
                <div>
                  <span className="block text-white font-bold">Phone</span>
                  <a href="tel:5617655116" className="text-gray-400 hover:text-gold">(561) 765-5116</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-gold w-6 h-6 shrink-0" />
                <div>
                  <span className="block text-white font-bold">Email</span>
                  <a href="mailto:authenticplumbingservicesfl@gmail.com" className="text-gray-400 hover:text-gold break-all">authenticplumbingservicesfl@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="text-gold w-6 h-6 shrink-0" />
                <div>
                  <span className="block text-white font-bold">Hours</span>
                  <span className="text-gray-400">Open 24 Hours – 7 Days a Week</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
           <p className="text-gray-500 text-sm">
             © 2025 Authentic Plumbing Services. All rights reserved.
           </p>
           <div className="flex items-center gap-6">
             <Link href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
             <Link href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
             <span className="text-gray-700 text-sm">Website by Maktub Technologies</span>
           </div>
        </div>

      </div>
    </footer>
  );
}



