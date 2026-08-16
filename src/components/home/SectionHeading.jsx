// SectionHeading.jsx
import React from 'react';
import { Sparkles, Heart, Star, Award, MapPin, Palette, ArrowRight } from 'lucide-react';

const SectionHeading = () => {
  const highlights = [
    { icon: Sparkles, text: 'Creative & Customized Designs' },
    { icon: Heart, text: 'Specialized Bridal Mehndi' },
    { icon: Palette, text: 'Traditional & Modern Styles' },
    { icon: MapPin, text: 'Based in Gorakhpur' },
    { icon: Award, text: 'Designed With Care & Passion' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1F3D2B] to-[#1F3D2B]/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="relative w-full max-w-md md:max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/10 border border-[#D4AF37]/20">
                <img 
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Shital - Mehndi Artist"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37]/30 rounded-br-2xl"></div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#D4AF37] text-[#1F3D2B] px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                ✨ 5+ Years Experience
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-2xl">
            {/* Section Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/20 mb-4">
                <Sparkles size={16} className="text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">
                  Meet The Artist
                </span>
                <Sparkles size={16} className="text-[#D4AF37]" />
              </div>
              
              <h2 className="text-[#FFF8E7] text-3xl sm:text-4xl font-serif font-bold mb-2">
                Meet Shital –{' '}
                <span className="text-[#D4AF37]">The Artist Behind Every Beautiful Design</span>
              </h2>
              
              <p className="text-[#D4AF37] text-base font-medium">
                ✨ Turning Mehndi Into Art, Memories Into Stories
              </p>
            </div>

            {/* Content */}
            <div className="space-y-3 text-[#FFF8E7]/90 text-sm leading-relaxed mb-6">
              <p>
                <span className="text-[#D4AF37] font-semibold">Shital Mehndi Artist</span> is a passionate mehndi artist 
                based in Gorakhpur, known for creating elegant, detailed, and beautifully customized mehndi designs 
                for every special occasion.
              </p>
              
              <p>
                With a deep love for traditional Indian mehndi artistry and an eye for modern trends, 
                Shital brings together intricate patterns, graceful details, and personalized elements 
                to create designs that feel truly special.
              </p>
              
              <p className="text-[#D4AF37] font-medium">
                For Shital, mehndi is more than just a beautiful design — it is a part of your celebration, 
                your traditions, and your memories.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#D4AF37]/5 rounded-xl p-3 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:bg-[#D4AF37]/10"
                >
                  <item.icon size={16} className="text-[#D4AF37] flex-shrink-0" />
                  <span className="text-[#FFF8E7] text-xs font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <button className="group inline-flex items-center gap-2 border-2 border-[#D4AF37]/80 text-[#FFF8E7] px-6 py-2.5 rounded-full font-semibold text-xs backdrop-blur-sm hover:bg-[#D4AF37] hover:text-[#1F3D2B] hover:border-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Explore Our Designs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group inline-flex items-center gap-2 bg-[#D4AF37] text-[#1F3D2B] px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#E5C158] transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-[#D4AF37]/25">
                Book an Appointment
                <Sparkles size={16} className="group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionHeading;