// FeaturedServices.jsx
import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Flower, 
  Gem, 
  PartyPopper, 
  Feather, 
  Palette,
  CalendarHeart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'Bridal Mehndi',
      subtitle: 'Your Love Story, Beautifully Designed',
      description: 'Intricate and personalized bridal mehndi crafted to make your wedding day truly unforgettable.',
      image: 'https://i.pinimg.com/736x/bf/79/b9/bf79b9729b21fe68ad4b454815625e50.jpg',
    },
    {
      id: 2,
      icon: Flower,
      title: 'Arabic Mehndi',
      subtitle: 'Elegant. Flowing. Timeless.',
      description: 'Graceful floral patterns, delicate trails, and modern Arabic-inspired designs perfect for a sophisticated look.',
      image: 'https://i.pinimg.com/1200x/0b/f2/5e/0bf25eba359cddd03dae70b97db09287.jpg',
    },
    {
      id: 3,
      icon: Gem,
      title: 'Engagement Mehndi',
      subtitle: 'A Beautiful Beginning',
      description: 'Elegant mehndi designs created specially for engagement ceremonies and pre-wedding celebrations.',
      image: 'https://i.pinimg.com/736x/f3/60/10/f36010f7ec9c674643025c9b1584e134.jpg',
    },
    {
      id: 4,
      icon: PartyPopper,
      title: 'Party Mehndi',
      subtitle: 'Celebrate in Style',
      description: 'Beautiful and trendy designs for birthdays, festivals, family functions, and special gatherings.',
      image: 'https://i.pinimg.com/736x/7b/2e/55/7b2e552038276f22e4176ef51916f551.jpg',
    },
    {
      id: 5,
      icon: Feather,
      title: 'Traditional Mehndi',
      subtitle: 'Inspired by Timeless Art',
      description: 'Classic Indian patterns featuring traditional motifs and detailed designs that celebrate the beauty of our heritage.',
      image: 'https://i.pinimg.com/736x/45/50/bb/4550bb7d49e38dddc820071a6918f978.jpg',
    },
    {
      id: 6,
      icon: Palette,
      title: 'Customized Mehndi',
      subtitle: 'Designed Just for You',
      description: 'Have a special idea in mind? We create personalized mehndi designs based on your preferences, outfit, occasion, and story.',
      image: 'https://i.pinimg.com/736x/e9/e6/d3/e9e6d3a499ea705c68fad26f3da14d5c.jpg',
    },
  ];

  return (
    <section className="py-8 md:py-10 bg-gradient-to-r from-[#FFFFFF] via-[#FAF6ED] to-[#F5EFE0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-center mx-auto md:mb-3">
          <div className="inline-flex gap-2 bg-[#1F3D2B]/5 backdrop-blur-sm px-4 py-2 rounded border border-[#1F3D2B]/15 mb-4">
            <Sparkles size={16} className="text-[#B38F24]" />
            <span className="text-[#1F3D2B] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
            <Sparkles size={16} className="text-[#B38F24]" />
          </div>       
        
          <h2 className="text-[#1F3D2B] text-3xl sm:text-4xl md:text-4xl font-serif font-bold mb-4">
            OUR <span className="text-[#B38F24]">FEATURED SERVICES</span>
          </h2>
        
          <p className="text-[#B38F24] text-base sm:text-lg font-medium mb-4">
            Beautiful Mehndi for Every Special Occasion
          </p>
        
          <p className="text-[#1F3D2B]/80 text-sm sm:text-sm mb-14 leading-relaxed">
            From intricate bridal designs to elegant Arabic patterns our mehndi artistry is thoughtfully created to complement your style, celebration, and special moments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded overflow-hidden bg-[#1F3D2B] border border-[#1F3D2B]/15 hover:border-[#B38F24]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#B38F24]/10 min-h-[340px] flex flex-col"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 group-hover:opacity-90 scale-100 group-hover:scale-110 transition-all duration-700 ease-out z-0"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>

              {/* Left-to-Right Green Overlay Animation */}
              <div className="absolute inset-0 bg-[#1F3D2B]/75 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out pointer-events-none z-0"></div>

              {/* Bottom Gradient for Text Readability */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1F3D2B]/90 via-[#1F3D2B]/40 to-transparent z-0"></div>

              {/* Content - Icon Top Left, Rest Centered at Bottom */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col flex-1">
                {/* Icon - Top Left */}
                <div className="flex justify-start">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded bg-[#B38F24]/20 border border-[#B38F24]/30 group-hover:bg-[#B38F24]/40 transition-colors duration-300 backdrop-blur-sm">
                    <service.icon size={28} className="text-[#FFF8E7]" />
                  </div>
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1"></div>

                {/* Content - Centered at Bottom */}
                <div className="text-center">
                  {/* Title */}
                  <h3 className="text-[#FFF8E7] text-xl font-bold mb-1 drop-shadow-md">
                    {service.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[#F3E5AB] text-sm font-medium mb-3 drop-shadow-md">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#FFF8E7]/95 text-sm leading-relaxed mb-5 drop-shadow-md">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button className="group/btn inline-flex items-center gap-2 text-[#F3E5AB] text-sm font-semibold hover:text-[#FFFFFF] transition-colors duration-300 w-fit drop-shadow-md mx-auto">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 md:mt-18">
          <div className="relative bg-gradient-to-r from-[#1F3D2B]/5 via-[#1F3D2B]/10 to-[#1F3D2B]/5 backdrop-blur-sm rounded p-8 md:p-6 text-center border border-[#1F3D2B]/15 overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#B38F24]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B38F24]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-[#1F3D2B] text-lg sm:text-lg md:text-xl font-serif font-bold">
                MAKE YOUR SPECIAL MOMENT MORE BEAUTIFUL
              </h3>
              
              <p className="text-[#1F3D2B]/80 text-xs sm:text-sm max-w-2xl mx-auto mt-1 leading-relaxed">
                Let our mehndi artistry become a part of your most cherished memories.
              </p>
              
              <Link to='/book-appointment' className="group inline-flex mt-4 text-xs items-center gap-1.5 
              bg-[#3f5b4a] text-[#FFF8E7] px-5 py-2.5 rounded font-bold
              hover:bg-[#477150] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                Book Your Appointment
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300 text-[#B38F24]" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;