// Footer.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'Home', 'About Us', 'Services', 
    'Bridal Mehndi', 'Gallery', 'Packages', 'Contact Us'
  ];

  const services = [
    'Bridal Mehndi', 'Engagement Mehndi', 'Arabic Mehndi',
    'Traditional Mehndi', 'Party Mehndi', 'Festival Mehndi'
  ];

  return (
    <footer className="bg-[#1F3D2B] text-[#FFF8E7]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h2 className="text-[#D4AF37] text-2xl font-bold tracking-wider">
                Mehndi Grace
              </h2>
              <p className="text-[#D4AF37] text-sm tracking-widest opacity-80">
                Bridal & Artistry
              </p>
            </div>
            <p className="text-[#FFF8E7] text-sm leading-relaxed opacity-90">
              Creating timeless mehndi designs that tell your unique love story. 
              Where tradition meets artistry, making every celebration extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] text-lg font-semibold mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-[#FFF8E7] text-sm hover:text-[#D4AF37] transition-colors duration-300 opacity-90 hover:opacity-100"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-[#D4AF37] text-lg font-semibold mb-4 tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-[#FFF8E7] text-sm hover:text-[#D4AF37] transition-colors duration-300 opacity-90 hover:opacity-100"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-[#D4AF37] text-lg font-semibold mb-4 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-[#FFF8E7] text-sm opacity-90">
                  Kanpur, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4AF37] flex-shrink-0" />
                <span className="text-[#FFF8E7] text-sm opacity-90">
                  +91 XXXXX XXXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37] flex-shrink-0" />
                <span className="text-[#FFF8E7] text-sm opacity-90">
                  hello@mehndigrace.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#D4AF37] flex-shrink-0" />
                <span className="text-[#FFF8E7] text-sm opacity-90">
                  Mon – Sun: 10:00 AM – 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Book Appointment CTA Section */}
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
          <div className="bg-[#D4AF37]/10 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-[#D4AF37] text-xl md:text-2xl font-bold mb-2">
              Ready for Your Special Day?
            </h3>
            <p className="text-[#FFF8E7] text-sm md:text-base max-w-2xl mx-auto mb-4 opacity-90">
              Let our beautiful mehndi designs make your celebration even more memorable.
            </p>
            <button className="bg-[#D4AF37] text-[#1F3D2B] px-8 py-3 rounded-full font-semibold hover:bg-[#c5a032] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#C9A227] bg-[#1F3D2B]/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#FFF8E7] text-sm opacity-80">
              © 2026 Mehndi Grace. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3 text-[#FFF8E7] text-sm opacity-80">
              <span>Bridal Mehndi</span>
              <span className="text-[#D4AF37]">•</span>
              <span>Traditional Art</span>
              <span className="text-[#D4AF37]">•</span>
              <span>Beautiful Memories</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;