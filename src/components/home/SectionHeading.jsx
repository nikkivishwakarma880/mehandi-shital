// SectionHeading.jsx
import React from 'react';
import { Sparkles, Heart, Award, MapPin, Palette, ArrowRight } from 'lucide-react';
import artist from '../../assets/artist.png'
import { Link } from 'react-router-dom';


const SectionHeading = () => {
  const highlights = [
    { icon: Sparkles, text: 'Creative & Customized Designs' },
    { icon: Heart, text: 'Specialized Bridal Mehndi' },
    { icon: Palette, text: 'Traditional & Modern Styles' },
    { icon: MapPin, text: 'Based in Gorakhpur' },
    { icon: Award, text: 'Designed With Care & Passion' },
  ];

  return (
    /* Light Background: Right to Left (F5EFE0 -> FAF6ED -> White) */
    <section className="py-16 md:py-15 bg-gradient-to-l from-[#F5EFE0] via-[#FAF6ED] to-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1F3D2B]/5 backdrop-blur-sm px-4 py-2 rounded border border-[#1F3D2B]/15 mb-4">
            <Sparkles size={16} className="text-[#B38F24]" />
            <span className="text-[#1F3D2B] text-xs font-semibold tracking-[0.2em] uppercase">
              Meet The Artist
            </span>
            <Sparkles size={16} className="text-[#B38F24]" />
          </div>

          <h2 className="text-[#1F3D2B] text-3xl sm:text-3xl md:text-3xl font-serif font-bold mb-1">
            Meet Shital –{' '}
            <span className="text-[#B38F24]">
              The Artist Behind Every Beautiful Design
            </span>
          </h2>

          <p className="text-[#B38F24] text-base font-medium">
            ✨ Turning Mehndi Into Art, Memories Into Stories
          </p>
        </div>

         {/* Image & Content Side by Side */}
        <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-16">

          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm md:max-w-md">

              <div className="relative rounded overflow-hidden shadow-xl shadow-[#B38F24]/10 border border-[#1F3D2B]/15">
                <img
                  src= {artist}
                  alt="Shital - Mehndi Artist"
                  className="w-full h-90 object-cover hover:scale-105 transition-transform duration-600"
                />

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3f5b4a]/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#B38F24]/40 rounded-tl"></div>

              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#B38F24]/40 rounded-br"></div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#3f5b4a] text-[#FFF8E7] px-4 py-2 rounded text-xs font-bold shadow-lg">
                5+ Years Experience
              </div>

            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-2xl flex flex-col justify-between">

            {/* Content */}
            <div className="space-y-3 text-[#1F3D2B]/80 text-sm justify-center items-center leading-relaxed mb-6">
              <p>
                <span className="text-[#B38F24] font-semibold">
                  Shital Mehndi Artist
                </span>{' '}
                is a passionate mehndi artist based in Gorakhpur, known for
                creating elegant, detailed, and beautifully customized mehndi
                designs for every special occasion.
              </p>

              <p className="text-[#B38F24] font-medium">
                For Shital, mehndi is more than just a beautiful design — it is
                a part of your celebration, your traditions, and your memories.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#3f5b4a]/5 rounded p-3 border border-[#1F3D2B]/10 hover:border-[#B38F24]/40 transition-all duration-300 hover:bg-[#1F3D2B]/10"
                >
                  <item.icon
                    size={16}
                    className="text-[#B38F24] flex-shrink-0"
                  />

                  <span className="text-[#1F3D2B] text-xs font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3">

              <button className="group inline-flex items-center gap-2 border-2
               border-[#1F3D2B]/20 text-[#1F3D2B] px-6 py-2.5 rounded 
               font-semibold text-xs backdrop-blur-sm hover:bg-[#3f5b4a]
                hover:text-[#FFF8E7] transition-all duration-300 transform 
                hover:-translate-y-1 shadow-sm">
                Explore Our Designs
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

              <Link to ='/book-appointment' className="group inline-flex items-center gap-2 bg-[#3f5b4a] text-[#FFF8E7] px-5 py-2.5 rounded font-bold text-xs hover:bg-[#315C3A] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                Book an Appointment
                <Sparkles
                  size={16}
                  className="group-hover:rotate-45 transition-transform duration-300 text-[#B38F24]"
                />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionHeading;