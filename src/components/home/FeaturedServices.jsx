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

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'Bridal Mehndi',
      subtitle: 'Your Love Story, Beautifully Designed',
      description: 'Intricate and personalized bridal mehndi crafted to make your wedding day truly unforgettable.',
      buttonText: 'Explore Bridal Mehndi',
      image: 'https://i.pinimg.com/736x/bf/79/b9/bf79b9729b21fe68ad4b454815625e50.jpg',
    },
    {
      id: 2,
      icon: Flower,
      title: 'Arabic Mehndi',
      subtitle: 'Elegant. Flowing. Timeless.',
      description: 'Graceful floral patterns, delicate trails, and modern Arabic-inspired designs perfect for a sophisticated look.',
      buttonText: 'View Designs',
      image: 'https://i.pinimg.com/1200x/0b/f2/5e/0bf25eba359cddd03dae70b97db09287.jpg',
    },
    {
        id: 3,
        icon: Gem,
        title: 'Engagement Mehndi',
        subtitle: 'A Beautiful Beginning',
        description: 'Elegant mehndi designs created specially for engagement ceremonies and pre-wedding celebrations.',
        buttonText: 'Discover More',
        image: 'https://i.pinimg.com/736x/f3/60/10/f36010f7ec9c674643025c9b1584e134.jpg',
    },
    {
      id: 4,
      icon: PartyPopper,
      title: 'Party Mehndi',
      subtitle: 'Celebrate in Style',
      description: 'Beautiful and trendy designs for birthdays, festivals, family functions, and special gatherings.',
      buttonText: 'Book Now',
      image: 'https://i.pinimg.com/736x/7b/2e/55/7b2e552038276f22e4176ef51916f551.jpg',
    },
    {
      id: 5,
      icon: Feather,
      title: 'Traditional Mehndi',
      subtitle: 'Inspired by Timeless Art',
      description: 'Classic Indian patterns featuring traditional motifs and detailed designs that celebrate the beauty of our heritage.',
      buttonText: 'View Designs',
      image: 'https://i.pinimg.com/736x/45/50/bb/4550bb7d49e38dddc820071a6918f978.jpg',
    },
    {
      id: 6,
      icon: Palette,
      title: 'Customized Mehndi',
      subtitle: 'Designed Just for You',
      description: 'Have a special idea in mind? We create personalized mehndi designs based on your preferences, outfit, occasion, and story.',
      buttonText: 'Create Your Design',
      image: 'https://i.pinimg.com/736x/e9/e6/d3/e9e6d3a499ea705c68fad26f3da14d5c.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1F3D2B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/20 mb-4">
            <Sparkles size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
            <Sparkles size={16} className="text-[#D4AF37]" />
          </div>
          
          <h2 className="text-[#FFF8E7] text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Our <span className="text-[#D4AF37]">Featured Services</span>
          </h2>
          
          <p className="text-[#D4AF37] text-base sm:text-lg font-medium mb-3">
            Beautiful Mehndi for Every Special Occasion
          </p>
          
          <p className="text-[#FFF8E7]/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From intricate bridal designs to elegant Arabic patterns, our mehndi artistry is thoughtfully created 
            to complement your style, celebration, and special moments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/10"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-700 group-hover:scale-100"
                style={{
                  backgroundImage: `url('${service.image}')`,
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/95 via-[#1F3D2B]/80 to-[#1F3D2B]/70 group-hover:from-[#1F3D2B]/90 group-hover:via-[#1F3D2B]/75 group-hover:to-[#1F3D2B]/60 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 min-h-[320px] flex flex-col justify-between">
                <div>
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-4 group-hover:bg-[#D4AF37]/20 transition-colors duration-300 backdrop-blur-sm">
                    <service.icon size={28} className="text-[#D4AF37]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#FFF8E7] text-xl font-bold mb-1">
                    {service.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[#D4AF37] text-sm font-medium mb-3">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#FFF8E7]/80 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <button className="group/btn inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold hover:text-[#E5C158] transition-colors duration-300 w-fit">
                  {service.buttonText}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 md:mt-20">
          <div className="relative bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-[#D4AF37]/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* <CalendarHeart size={48} className="text-[#D4AF37] mx-auto mb-4" /> */}
              
              <h3 className="text-[#FFF8E7] text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3">
                Make Your Special Moment More Beautiful
              </h3>
              
              <p className="text-[#FFF8E7]/80 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                Let our mehndi artistry become a part of your most cherished memories.
              </p>
              
              <button className="group inline-flex items-center gap-2 bg-[#D4AF37] text-[#1F3D2B] px-8 py-3.5 rounded-full font-bold hover:bg-[#E5C158] transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-[#D4AF37]/25">
                Book Your Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;