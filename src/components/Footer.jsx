import React from 'react';
import { MapPin, Phone, Mail, Clock, Link } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal Mehndi', path: '/bridal-mehndi' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    'Bridal Mehndi', 'Engagement Mehndi', 'Arabic Mehndi',
    'Traditional Mehndi', 'Party Mehndi', 'Festival Mehndi'
  ];

  // Google Maps Search Link for Location
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Gorakhpur,+Uttar+Pradesh,+India";

  return (
    <footer className="bg-[#1F3D2B] text-white border-t border-[#1F3D2B]/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-[#B38F24] text-xl font-serif font-bold tracking-wider">
                Shital Artist
              </h3>
              <p className="text-[#B38F24] text-xs tracking-widest font-semibold uppercase">
                Bridal & Artistry
              </p>
            </div>
            <p className="text-white/80 text-xs leading-relaxed">
              Creating timeless mehndi designs that tell your unique love story. 
              Where tradition meets artistry, making every celebration extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#B38F24] text-sm font-bold mb-4 tracking-wide font-serif">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-[#F5E7CF]/85 text-xs hover:text-[#B38F24] transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-[#B38F24] text-sm font-bold mb-4 tracking-wide font-serif">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-[#F5E7CF]/85 text-xs hover:text-[#B38F24] transition-colors duration-300 font-medium"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-[#B38F24] text-sm font-bold mb-4 tracking-wide font-serif">
              Contact Us
            </h3>
            <ul className="space-y-3">
              
              {/* Google Maps Location Link */}
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#B38F24] mt-0.5 flex-shrink-0" />
                <a 
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5E7CF]/85 text-xs font-medium hover:text-[#B38F24] transition-colors duration-300"
                >
                  Gorakhpur, Uttar Pradesh, India
                </a>
              </li>

              {/* Phone Click-to-Call Link */}
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-[#B38F24] flex-shrink-0" />
                <Link 
                  to="tel:+916393430756" 
                  className="text-[#F5E7CF]/85 text-xs font-medium hover:text-[#B38F24] transition-colors duration-300"
                >
                  +91 6393430756
                </Link>
              </li>

              {/* Email Link */}
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-[#B38F24] flex-shrink-0" />
                <a 
                  href="mailto:shital@mehndigrace.com" 
                  className="text-[#F5E7CF]/85 text-xs font-medium hover:text-[#B38F24] transition-colors duration-300"
                >
                  shital@mehndigrace.com
                </a>
              </li>

              {/* Working Hours */}
              <li className="flex items-center gap-2.5">
                <Clock size={18} className="text-[#B38F24] flex-shrink-0" />
                <span className="text-[#F5E7CF]/85 text-xs font-medium">
                  Mon – Sun: 10:00 AM – 8:00 PM
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#1F3D2B]/15 bg-[#F5E7CF]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F5E7CF]/80 text-xs font-medium">
              © 2026 Shital Artist. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-[#F5E7CF]/80 text-xs font-medium">
              <span>Bridal Mehndi</span>
              <span className="text-[#B38F24]">•</span>
              <span>Traditional Art</span>
              <span className="text-[#B38F24]">•</span>
              <span>Beautiful Memories</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;