import React from 'react';
import { FaLeaf, FaPalette, FaCrown, FaStar, FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-[#F5EFE0] text-[#315C3A] py-16 px-6 md:px-12 font-sans min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header / Intro Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded p-8 md:p-12 text-center shadow-md border border-[#B99239]/30">
          <div className="flex justify-center mb-2 text-[#315C3A] text-3xl">
            <FaLeaf />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#315C3A] tracking-tight mb-4 font-serif">
            About the Artist
          </h1>
          <p className="text-[#B99239] text-sm max-w-2xl mx-auto leading-relaxed">
            Welcome to my creative space! Main ek professional Mehndi Artist hoon, jo aapke weddings aur festivals ko royal traditional aur intricate henna designs se aur bhi khas banati hoon.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* My Journey Card */}
          <div className="bg-white rounded p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#B99239]/20 relative overflow-hidden group">
            <FaPalette className="absolute -bottom-6 -right-6 text-9xl text-[#315C3A]/5 opacity-40 group-hover:scale-105 transition-transform" />
            
            <div className="w-12 h-12 bg-[#315C3A]/10 text-[#315C3A] rounded flex items-center justify-center text-xl mb-6 relative z-10">
              <FaCrown className="text-[#B99239]" />
            </div>
            <h3 className="text-2xl font-bold text-[#315C3A] mb-3 font-serif relative z-10">
              My Passion & Craft
            </h3>
            <p className="text-slate-600 leading-relaxed relative z-10">
              Mehndi sirf ek tradition nahi, mere liye ek fine art hai. Unique bridal patterns se le kar aesthetic minimal designs tak, har stroke mein perfection aur elegance lane ka try karti hoon.
            </p>
          </div>

          {/* Specialties Card */}
          <div className="bg-white rounded p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#B99239]/20">
            <div className="w-12 h-12 bg-[#315C3A]/10 text-[#315C3A] rounded flex items-center justify-center text-xl mb-6">
              <FaStar className="text-[#B99239]" />
            </div>
            <h3 className="text-2xl font-bold text-[#315C3A] mb-4 font-serif">
              Our Specialties
            </h3>
            <ul className="space-y-3">
              {[
                'Royal Bridal Mehndi',
                'Indo-Arabic & Figure Mehndi',
                'Traditional & Floral Motifs',
                'Minimalist Modern Patterns',
                'Festival & Event Special Henna'
              ].map((specialty, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <span className="w-2.5 h-2.5 rounded bg-[#B99239]"></span>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Quality Banner & Social Booking Section */}
        <div className="bg-[#315C3A] text-white rounded-3xl p-8 md:p-10 shadow-xl text-center border-t-4 border-[#B99239]">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 font-serif text-[#B99239]">
            100% Pure & Organic Henna
          </h2>
          <p className="text-emerald-50 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Aapki skin ki safety hamari pehli preference hai. Hum sirf natural, chemical-free homemade henna paste ka use karte hain, jo rich, dark stain ke sath skin-friendly bhi hota hai.
          </p>
          
          <div className="pt-6 border-t border-emerald-800/80">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-[#B99239]">
              Connect & Book Appointment
            </p>
            <div className="flex justify-center gap-5">
              <a 
                href="#" 
                className="bg-[#B99239] hover:bg-[#a07e2f] p-4 rounded-full text-white transition-all hover:-translate-y-1 shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-[#B99239] hover:bg-[#a07e2f] p-4 rounded-full text-white transition-all hover:-translate-y-1 shadow-md"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-[#B99239] hover:bg-[#a07e2f] p-4 rounded-full text-white transition-all hover:-translate-y-1 shadow-md"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;