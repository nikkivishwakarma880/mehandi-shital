// Hero.jsx
import React from "react";
import { ArrowRight, Sparkles, Heart, Star, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    /* Light Background: Left side pure white/light cream, Right side soft golden-cream */
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#FFFFFF] via-[#FAF6ED] to-[#F5EFE0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left Side - Content */}
          <div className="flex-1 max-w-3xl">
            {/* Decorative Top Badge */}
            <div className="inline-flex items-center gap-1 bg-[#1F3D2B]/5 backdrop-blur-md px-4 py-1.5 rounded border border-[#1F3D2B]/15 shadow-inner mb-6 transition-transform hover:scale-105">
              <Sparkles size={14} className="text-[#B38F24] animate-pulse" />
              <span className="text-[#1F3D2B] text-[8px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                Handcrafted With Love
              </span>
              <Sparkles size={14} className="text-[#B38F24] animate-pulse" />
            </div>

            {/* Main Heading */}
            <h1 className="text-[#1F3D2B] text-2xl sm:text-2xl md:text-2xl lg:text-xl font-serif font-extrabold leading-[1.14] tracking-tight mb-3">
              Where Every Mehndi Tells a <br />

              <span className="bg-gradient-to-r from-[#B38F24] via-[#AA7C11] to-[#805D0D] bg-clip-text text-transparent block sm:inline italic font-normal">
                 Beautiful Story
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[#B38F24] text-base sm:text-lg font-medium tracking-wide mb-4 font-serif">
              Beautifully Crafted ✦ Traditionally Inspired ✦ Uniquely Yours
            </p>

            {/* Description */}
            <p className="text-[#1F3D2B]/80 text-xs sm:text-xs max-w-xl mx-auto md:mx-0 mb-7 leading-relaxed font-light">
              From timeless bridal elegance to intricate Arabic motifs, we turn
              your special celebrations into unforgettable art with rich,
              organic henna patterns.
            </p>

            {/* Buttons */}
            <div className="flex xs:flex-row items-center gap-2 mb-6">
              <button className="group w-full  bg-[#3f5b4a] text-[#FFF8E7]
               px-3 py-2 rounded font-bold text-xs xs:text-xs hover:bg-[#34573b] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center gap">
                Book Your Appointment
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </button>
              <button className="w-full border-2 border-[#1F3D2B]/20 text-[#1F3D2B] px-2 py-3 rounded font-semibold text-xs sm:text-xs backdrop-blur-sm hover:bg-[#3f5b4a] hover:text-[#FFF8E7] transition-all duration-300 transform  hover:-translate-y-1 shadow-sm">
                Explore Our Designs
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-[#1F3D2B]/15">
              <div className="flex items-center gap-2 text-[#1F3D2B]/85 text-xs sm:text-sm font-medium">
                <Heart size={16} className="text-[#B38F24]" />
                <span>Bridal & Event Artistry</span>
              </div>
              <span className="text-[#1F3D2B]/20">|</span>
              <div className="flex items-center gap-2 text-[#1F3D2B]/85 text-xs sm:text-sm font-medium">
                <Star size={16} className="text-[#B38F24]" />
                <span>Customized Patterns</span>
              </div>
              <span className="text-[#1F3D2B]/20">|</span>
              <div className="flex items-center gap-2 text-[#1F3D2B]/85 text-xs sm:text-sm font-medium">
                <ShieldCheck size={16} className="text-[#B38F24]" />
                <span>100% Organic Henna</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              <div className="relative rounded overflow-hidden shadow-xl shadow-[#B38F24]/10 border border-[#1F3D2B]/15">
                <img
                  src="https://i.pinimg.com/736x/60/d3/7e/60d37ec978be5bfd0e1493edb7fbecb6.jpg"
                  alt="Beautiful Mehndi Designs"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Decorative overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#B38F24]/40 rounded-tl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#B38F24]/40 rounded-br"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F5EFE0]/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;