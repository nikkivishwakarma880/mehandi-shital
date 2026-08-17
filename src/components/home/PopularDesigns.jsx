// PopularDesigns.jsx
import React from 'react';
import { 
  Sparkles, 
  Heart, 
  Flower2, 
  Leaf, 
  Moon, 
  Sun, 
  Stars,
  Eye,
  Calendar,
  Crown
} from 'lucide-react';

const PopularDesigns = () => {
  const designs = [
    {
      icon: Crown,
      title: 'Bridal Mehndi',
      description: 'Your wedding story, beautifully designed on your hands.',
      details: 'Intricate bridal patterns featuring florals, mandalas, traditional motifs, personalised elements and detailed storytelling designs.',
      perfectFor: ['Brides', 'Wedding Ceremonies'],
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-rose-500/10 via-rose-500/5 to-transparent',
    },
    {
      icon: Leaf,
      title: 'Arabic Mehndi',
      description: 'Elegant, stylish & effortlessly beautiful.',
      details: 'Flowing floral patterns, leafy trails and graceful spacing create a modern Arabic look that feels both classy and eye-catching.',
      perfectFor: ['Engagements', 'Parties'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    },
    {
      icon: Sun,
      title: 'Traditional Mehndi',
      description: 'A timeless touch of Indian tradition.',
      details: 'Classic paisleys, flowers, peacocks, mandalas and traditional motifs come together to create beautiful ethnic mehndi designs.',
      perfectFor: ['Festivals','Family Functions'],
      image: 'https://images.unsplash.com/photo-1583143844622-3a65b9af3f78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-amber-500/10 via-amber-500/5 to-transparent',
    },
    {
      icon: Stars,
      title: 'Minimal Mehndi',
      description: 'Simple lines. Beautiful details. Maximum elegance.',
      details: 'For those who love a clean and sophisticated look, our minimal designs add just the right amount of charm without feeling too heavy.',
      perfectFor: ['Engagements','Modern Brides'],
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
    },
    {
      icon: Moon,
      title: 'Indo-Arabic Mehndi',
      description: 'Where tradition meets modern artistry.',
      details: 'A beautiful combination of Indian detailing and Arabic flow, creating a balanced design that looks rich yet contemporary.',
      perfectFor: ['Weddings','Special Occasions'],
      image: 'https://images.unsplash.com/photo-1532710093739-9470ac59d1e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-purple-500/10 via-purple-500/5 to-transparent',
    },
    {
      icon: Flower2,
      title: 'Floral Mehndi',
      description: 'Inspired by the beauty of nature.',
      details: 'Delicate flowers, vines and leafy patterns create a soft and feminine design that\'s perfect for anyone who loves elegant mehndi artistry.',
      perfectFor: ['Parties', 'Celebrations'],
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-pink-500/10 via-pink-500/5 to-transparent',
    },
  ];

  return (
    /* Light Background: Right side slightly darker cream, Left side ultra light / white */
    <section className="py-16 md:py-24 bg-gradient-to-l from-[#f0e8d6] via-[#FAF6ED] to-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1F3D2B]/5 backdrop-blur-sm px-4 py-2 rounded-full border border-[#1F3D2B]/15 mb-4">
            <Sparkles size={16} className="text-[#B38F24]" />
            <span className="text-[#1F3D2B] text-xs font-semibold tracking-[0.2em] uppercase">
              Popular Mehndi Designs
            </span>
            <Sparkles size={16} className="text-[#B38F24]" />
          </div>
          
          <h2 className="text-[#1F3D2B] text-3xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">
            Beauty in Every Detail,{' '}
            <span className="text-[#B38F24]">Art in Every Hand</span>
          </h2>
          
          <p className="text-[#1F3D2B]/75 text-bold  text-xs max-w-1xl mx-auto">
            Explore Shital Artist's most loved mehndi styles, thoughtfully created to make every celebration extra special. 
            From intricate bridal patterns to elegant minimal designs, there's a perfect style for every occasion.
          </p>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {designs.map((design, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md border border-[#1F3D2B]/10 hover:border-[#B38F24]/40 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#B38F24]/10"
            >
              {/* Background Image with Light Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 group-hover:scale-100 transition-transform duration-700 opacity-20"
                style={{ backgroundImage: `url(${design.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90"></div>
              </div>
              
              {/* Decorative Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${design.color}`}></div>
              
              {/* Content */}
              <div className="relative p-6 z-10 min-h-[280px] flex flex-col">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1F3D2B]/10 backdrop-blur-sm text-[#507a61] mb-4 group-hover:bg-[#1F3D2B] group-hover:text-[#FFF8E7] transition-all duration-300 border border-[#1F3D2B]/15">
                  <design.icon size={24} />
                </div>
                
                {/* Title */}
                <h3 className="text-[#1F3D2B] text-xl font-serif font-bold mb-2 group-hover:text-[#B38F24] transition-colors duration-300">
                  {design.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#B38F24] text-sm font-semibold mb-2">
                  {design.description}
                </p>
                
                {/* Details */}
                <p className="text-[#1F3D2B]/70 text-xs leading-relaxed mb-3 flex-grow">
                  {design.details}
                </p>
                
                {/* Perfect For Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {design.perfectFor.map((item, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 bg-[#1F3D2B]/5 px-2.5 py-1 rounded-full border border-[#1F3D2B]/10 text-[#1F3D2B]/80 text-[10px] font-medium"
                    >
                      <Heart size={10} className="text-[#B38F24]" />
                      {item}
                    </span>
                  ))}
                </div>
                
                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-[#B38F24] transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-[#1F3D2B]/10 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-[#1F3D2B] text-2xl sm:text-3xl font-serif font-bold mb-3">
              Which Design Will{' '}
              <span className="text-[#B38F24]">Tell Your Story?</span>
            </h3>
            <p className="text-[#1F3D2B]/70 text-sm mb-6">
              Choose your favourite style and let Shital Artist turn your hands into a beautiful piece of art.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="group inline-flex items-center gap-2 border-2 border-[#1F3D2B]/20 text-[#1F3D2B] px-6 py-2.5 rounded-full font-semibold text-xs hover:bg-[#1F3D2B] hover:text-[#FFF8E7] transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                Explore Gallery
                <Eye size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group inline-flex items-center gap-2 bg-[#1F3D2B] text-[#FFF8E7] px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#315C3A] transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                Book Your Mehndi
                <Calendar size={16} className="group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PopularDesigns;