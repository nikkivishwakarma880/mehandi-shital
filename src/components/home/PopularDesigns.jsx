// PopularDesigns.jsx
import React from 'react';
import shital1 from '../../assets/shital1.png'
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
import { Link } from 'react-router-dom';

const PopularDesigns = () => {
  const designs = [
    {
      icon: Crown,
      title: 'Bridal Mehndi',
      description: 'Your wedding story, beautifully designed on your hands.',
      details: 'Intricate bridal patterns featuring florals, mandalas, traditional motifs, personalised elements and detailed storytelling designs.',
      perfectFor: ['Brides', 'Wedding Ceremonies'],
      image: 'https://i.pinimg.com/736x/eb/32/f4/eb32f49f89e28d98758fba6bfdb53257.jpg',
      color: 'from-rose-500/10 via-rose-500/5 to-transparent',
    },
    {
      icon: Leaf,
      title: 'Arabic Mehndi',
      description: 'Elegant, stylish & effortlessly beautiful.',
      details: 'Flowing floral patterns, leafy trails and graceful spacing create a modern Arabic look that feels both classy and eye-catching.',
      perfectFor: ['Engagements', 'Parties'],
      image: 'https://i.pinimg.com/originals/54/c0/96/54c0963f1476fc74bf48f99232b224d5.jpg?nii=t',
      color: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    },
    {
      icon: Sun,
      title: 'Traditional Mehndi',
      description: 'A timeless touch of Indian tradition.',
      details: 'Classic paisleys, flowers, peacocks, mandalas and traditional motifs come together to create beautiful ethnic mehndi designs.',
      perfectFor: ['Festivals','Family Functions'],
      image: 'https://i.pinimg.com/736x/50/a4/e6/50a4e6d964ca04d8ba6d7ce01c054dab.jpg',
      color: 'from-amber-500/10 via-amber-500/5 to-transparent',
    },
    {
      icon: Stars,
      title: 'Minimal Mehndi',
      description: 'Simple lines. Beautiful details. Maximum elegance.',
      details: 'For those who love a clean and sophisticated look, our minimal designs add just the right amount of charm without feeling too heavy.',
      perfectFor: ['Engagements','Modern Brides'],
      image: 'https://i.pinimg.com/736x/50/a4/e6/50a4e6d964ca04d8ba6d7ce01c054dab.jpg',
      color: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
    },
    {
      icon: Moon,
      title: 'Indo-Arabic Mehndi',
      description: 'Where tradition meets modern artistry.',
      details: 'A beautiful combination of Indian detailing and Arabic flow, creating a balanced design that looks rich yet contemporary.',
      perfectFor: ['Weddings','Special Occasions'],
      image: 'https://i.pinimg.com/474x/fc/53/e9/fc53e96c38800531a46f0d0aef9a0ed7.jpg',
      color: 'from-purple-500/10 via-purple-500/5 to-transparent',
    },
    {
      icon: Flower2,
      title: 'Floral Mehndi',
      description: 'Inspired by the beauty of nature.',
      details: 'Delicate flowers, vines and leafy patterns create a soft and feminine design that\'s perfect for anyone who loves elegant mehndi artistry.',
      perfectFor: ['Parties', 'Celebrations'],
      image: 'https://i.pinimg.com/videos/thumbnails/originals/6f/fe/51/6ffe51a4c693471539005b796ae02b72.0000000.jpg',
      color: 'from-pink-500/10 via-pink-500/5 to-transparent',
    },
  ];

  return (
    <section className="py-5 md:py-5 bg-gradient-to-l from-[#f0e8d6] via-[#FAF6ED] to-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1F3D2B]/5 backdrop-blur-sm px-4 py-2 rounded border border-[#1F3D2B]/15 mb-4">
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
          
          <p className="text-[#1F3D2B]/75 text-bold text-xs max-w-1xl mx-auto">
            Explore Shital Artist's most loved mehndi styles, thoughtfully created to make every celebration extra special. 
            From intricate bridal patterns to elegant minimal designs, there's a perfect style for every occasion.
          </p>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {designs.map((design, index) => (
            <div
              key={index}
              className="group relative rounded overflow-hidden bg-white/70 backdrop-blur-md border border-[#1F3D2B]/10 hover:border-[#B38F24]/40 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#B38F24]/10 min-h-[300px] flex flex-col"
            >
              {/* Background Image with Light Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 group-hover:scale-100 transition-transform duration-700"
                style={{ backgroundImage: `url(${design.image})` }}
              >
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-white/70 group-hover:bg-white/50 transition-all duration-500"></div>
              </div>
              
              {/* Decorative Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-50`}></div>
              
              {/* Content */}
              <div className="relative p-6 z-10 flex flex-col flex-1">
                {/* Icon - Top Left */}
                <div className="flex justify-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#1F3D2B]/10 backdrop-blur-sm text-[#507a61] group-hover:bg-[#1F3D2B] group-hover:text-[#FFF8E7] transition-all duration-300 border border-[#1F3D2B]/15">
                    <design.icon size={24} />
                  </div>
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1"></div>

                {/* Content - Centered at Bottom */}
                <div className="text-center">
                  {/* Title */}
                  <h3 className="text-[#1F3D2B] text-xl font-serif font-bold mb-1 group-hover:text-[#B38F24] transition-colors duration-300">
                    {design.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#B38F24] text-sm font-semibold mb-1">
                    {design.description}
                  </p>
                  
                  {/* Details */}
                  <p className="text-[#1F3D2B]/80 text-xs leading-relaxed mb-2">
                    {design.details}
                  </p>
                  
                  {/* Perfect For Tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-2">
                    {design.perfectFor.map((item, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1 bg-[#1F3D2B]/5 px-2.5 py-1 rounded border border-[#1F3D2B]/10 text-[#1F3D2B]/80 text-[10px] font-medium"
                      >
                        <Heart size={10} className="text-[#B38F24]" />
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bottom decorative line - thinner */}
                  <div className="relative">
                    <div className="mx-auto w-0 group-hover:w-1/3 h-[1px] bg-[#B38F24] transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-white/60 backdrop-blur-md rounded p-8 md:p-10 border border-[#1F3D2B]/10 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-[#1F3D2B] text-2xl sm:text-3xl font-serif font-bold mb-3">
              Which Design Will{' '} 
              <span className="text-[#B38F24]">Tell Your Story?</span>
            </h3>
            <p className="text-[#1F3D2B]/70 text-sm mb-6">
              Choose your favourite style and let Shital Artist turn your hands into a beautiful piece of art.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="group inline-flex items-center gap-2 border-2 border-[#1F3D2B]/20 text-[#1F3D2B] px-6 py-2.5 rounded font-semibold text-xs hover:bg-[#1F3D2B] hover:text-[#FFF8E7] transition-all duration-300 transform hover:-translate-y-1 shadow-sm">
                Explore Gallery
                <Eye size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <Link to='/book-appointment' className="group inline-flex items-center gap-2 bg-[#1F3D2B] text-[#FFF8E7] px-6 py-2.5 rounded font-bold text-xs hover:bg-[#315C3A] transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                Book Your Mehndi
                <Calendar size={16} className="group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PopularDesigns;