import React from "react";
import { Heart, Sparkles, Users, Award } from "lucide-react";

// Sample image URLs - replace with your actual images
const profileImage = "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=150&h=150&fit=crop&crop=face&auto=format";
const bgMehndiImage = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80"; // Main Card Background Image

const Introduction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-4xl font-serif font-bold mb-3 tracking-wide" style={{ color: "#315C3A" }}>
           <span className="text-[#B99239]">Meet Shital –</span><br /> The Artist Behind Every Beautiful Design
          </h2>
          <div className="w-24 h-1 bg-[#B99239] mx-auto my-4 rounded"></div>
          <p className="text-lg md:text-sm text-[#B99239] max-w-3xl mx-auto italic font-light">
            "Creating elegant mehndi designs that celebrate traditions, emotions, and unforgettable moments."
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-stone-700 text-base md:text-sm leading-relaxed">
              At <span className="font-semibold text-lg text-[#b8891d]">Shital Artist</span>, we believe mehndi is more than just an art—it's a beautiful expression of love, culture, and celebration. Based in Gorakhpur, Shital specializes in creating elegant and customized mehndi designs that perfectly complement every occasion.
            </p>
            <p className="text-stone-700 text-base md:text-sm leading-relaxed">
              Whether it's a grand bridal ceremony, engagement, Karwa Chauth, Teej, Eid, or a family celebration, every design is crafted with precision, creativity, and attention to detail. From intricate traditional patterns to modern Arabic and contemporary styles, each artwork is tailored to reflect your unique personality.
            </p>
            <p className="text-stone-700 text-base md:text-sm leading-relaxed">
              With a commitment to quality, hygiene, and client satisfaction, Shital ensures every client enjoys a comfortable experience and leaves with stunning mehndi that creates lasting memories.
            </p>

            {/* Highlight Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="relative flex items-center gap-3 bg-white p-7 rounded shadow-sm border border-amber-400">
                <Heart className="w-7 h-7 text-[#B99239] flex-shrink-0" />
                <span className="font-medium text-[#315C3A]">Bridal & Customized Mehndi</span>
              </div>
              <div className="relative flex items-center gap-3 bg-white p-7 rounded shadow-sm border border-amber-400">
                <Sparkles className="w-7 h-7 text-[#B99239] flex-shrink-0" />
                <span className="font-medium text-[#315C3A]">Traditional & Arabic Styles</span>
              </div>
              <div className="relative flex items-center gap-3 bg-white p-7 rounded shadow-sm border border-amber-400">
                <Award className="w-7 h-7 text-[#B99239] flex-shrink-0" />
                <span className="font-medium text-[#315C3A]">Clean & Professional Service</span>
              </div>
              <div className="relative flex items-center gap-3 bg-white p-7 rounded shadow-sm border border-amber-400">
                <Users className="w-7 h-7 text-[#B99239] flex-shrink-0" />
                <span className="font-medium text-[#315C3A]">Serving Clients Across Gorakhpur</span>
              </div>
            </div>
          </div>

          {/* Image / Card Section */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded shadow-2xl overflow-visible border-4 border-amber-100/50">
              
              {/* Background Image Container */}
              <div className="w-full h-full rounded overflow-hidden relative">
                <img 
                  src={bgMehndiImage} 
                  alt="Mehndi Art Background" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Center / Bottom Text on Main Card */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="font-serif text-2xl font-bold tracking-wide">Shital Artist</h3>
                  <p className="text-amber-200 text-sm font-medium">Gorakhpur</p>
                </div>
              </div>

              {/* Floating Mini Card attached to Top Right corner */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md p-3 px-4 rounded shadow-xl border border-amber-200/80 flex items-center gap-3 z-20">
                {/* Rotating Circular Profile Image */}
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-[#315C3A] shadow-sm flex-shrink-0">
                  <img 
                    src={profileImage} 
                    alt="Shital Artist" 
                    className="w-full h-full rounded-full object-cover animate-[spin_10s_linear_infinite]"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 text-sm leading-tight">Shital</h4>
                  <p className="text-[11px] text-[#B99239] font-medium">Artist</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center items-center gap-3">
          <div className="h-px w-12 bg-amber-300"></div>
          <span className="text-amber-500 text-sm tracking-widest">✦ ✦ ✦</span>
          <div className="h-px w-12 bg-amber-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;