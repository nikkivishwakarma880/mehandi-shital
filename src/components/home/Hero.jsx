// Hero.jsx
import React from "react";
import { ArrowRight, Sparkles, Heart, Star, ShieldCheck } from "lucide-react";
// import mehndiImage from '/https://..i.pinimg.com/736x/60/d3/7e/60d37ec978be5bfd0e1493edb7fbecb6.jpg'; // Apni image ka path

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1F3D2B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left Side - Content */}
          <div className="flex-1 max-w-2xl">
            {/* Decorative Top Badge */}
            <div className="inline-flex items-center gap-1 bg-[#D4AF37]/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/35 shadow-inner mb-6 transition-transform hover:scale-105">
              <Sparkles size={14} className="text-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] text-[8px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                Handcrafted With Love
              </span>
              <Sparkles size={14} className="text-[#D4AF37] animate-pulse" />
            </div>

            {/* Main Heading */}
            <h1 className="text-[#FFF8E7] text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-serif font-extrabold leading-[1.15] tracking-tight mb-3 drop-shadow-md">
              Where Every Mehndi Tells a{" "}
              <span className="bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA7C11] bg-clip-text text-transparent block sm:inline italic font-normal">
                Beautiful Story
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[#D4AF37] text-base sm:text-lg font-medium tracking-wide mb-4 font-serif opacity-95">
              Beautifully Crafted ✦ Traditionally Inspired ✦ Uniquely Yours
            </p>

            {/* Description */}
            <p className="text-[#FFF8E7]/90 text-xs sm:text-xs max-w-xl mx-auto md:mx-0 mb-7 leading-relaxed font-light drop-shadow-xs">
              From timeless bridal elegance to intricate Arabic motifs, we turn
              your special celebrations into unforgettable art with rich,
              organic henna patterns.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <button className="group w-full sm:w-auto bg-[#D4AF37] text-[#335c43] px-4 py-2 rounded-full font-bold text-xs sm:text-xs hover:bg-[#E5C158] transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-[#D4AF37]/25 flex items-center justify-center gap-3">
                Book Your Appointment
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </button>
              <button className="w-full sm:w-auto border-2 border-[#D4AF37]/80 text-[#FFF8E7] px-4 py-2 rounded-full font-semibold text-xs sm:text-xs backdrop-blur-sm hover:bg-[#D4AF37] hover:text-[#1F3D2B] hover:border-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Explore Our Designs
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-[#D4AF37]/20">
              <div className="flex items-center gap-2 text-[#FFF8E7]/90 text-xs sm:text-sm font-medium">
                <Heart size={16} className="text-[#D4AF37]" />
                <span>Bridal & Event Artistry</span>
              </div>
              <span className="text-[#D4AF37]/40">|</span>
              <div className="flex items-center gap-2 text-[#FFF8E7]/90 text-xs sm:text-sm font-medium">
                <Star size={16} className="text-[#D4AF37]" />
                <span>Customized Patterns</span>
              </div>
              <span className="text-[#D4AF37]/40">|</span>
              <div className="flex items-center gap-2 text-[#FFF8E7]/90 text-xs sm:text-sm font-medium">
                <ShieldCheck size={16} className="text-[#D4AF37]" />
                <span>100% Organic Henna</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/10 border border-[#D4AF37]/20">
                <img
                  src="https://i.pinimg.com/736x/60/d3/7e/60d37ec978be5bfd0e1493edb7fbecb6.jpg"
                  alt="Beautiful Mehndi Designs"
                  className="w-[400px] h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Decorative overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/30 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#D4AF37]/30 rounded-br-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1F3D2B] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
