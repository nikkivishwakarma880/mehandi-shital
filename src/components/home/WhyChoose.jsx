// WhyChoose.jsx
import React from 'react';
import artist1 from '../../assets/artist1.png'
import artist2 from '../../assets/artist2.png'
import artist3 from '../../assets/artist3.png'
import artist4 from '../../assets/artist4.png'
import artist5 from '../../assets/artist5.png'
import artist6 from '../../assets/artist6.png'

import { 
  Sparkles, 
  Heart, 
  Palette, 
  PenTool, 
  Flower2, 
  MapPin, 
  Star
} from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Sparkles,
      number: '01',
      title: 'Creative & Unique Designs',
      description: 'हर design को आपकी पसंद, outfit और occasion के हिसाब से खूबसूरत और unique touch दिया जाता है।',
      bgImage: artist1,
    },
    {
      icon: Heart,
      number: '02',
      title: 'Bridal Mehndi Expertise',
      description: 'Bridal mehndi में traditional patterns से लेकर modern detailing तक, आपकी शादी के लिए खास designs तैयार किए जाते हैं।',
      bgImage:artist2,
    },
    {
      icon: Palette,
      number: '03',
      title: 'Customized Designs',
      description: 'आपकी पसंद हमारी inspiration है। आप जिस तरह का design चाहें, उसी style और theme के according mehndi तैयार की जाती है।',
      bgImage: artist3,
    },
    {
      icon: PenTool,
      number: '04',
      title: 'Fine & Detailed Work',
      description: 'छोटी-छोटी detailing पर खास ध्यान दिया जाता है ताकि mehndi elegant, clean और beautifully finished लगे।',
      bgImage: artist4,
    },
    {
      icon: Flower2,
      number: '05',
      title: 'Perfect for Every Occasion',
      description: 'Wedding, engagement, festivals, baby shower या कोई भी special occasion—हर celebration के लिए अलग और beautiful mehndi designs।',
      bgImage: artist5,
    },
    {
      icon: MapPin,
      number: '06',
      title: 'Based in Gorakhpur',
      description: 'Gorakhpur में आसानी से उपलब्ध professional mehndi artistry, जहाँ आपकी special occasion की mehndi को खूबसूरत बनाने पर पूरा ध्यान दिया जाता है।',
      bgImage: artist6,
    },
  ];

  return (
    /* Main Section Light Background */
    <section className="py-5 md:py-10 bg-gradient-to-r from-[#FFFFFF] via-[#FAF6ED] to-[#F5EFE0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1F3D2B]/5 backdrop-blur-sm px-4 py-2 rounded border border-[#1F3D2B]/15 mb-4">
            <Star size={16} className="text-[#B38F24]" />
            <span className="text-[#1F3D2B] text-xs font-semibold tracking-[0.2em] uppercase">
              Why Choose Us
            </span>
            <Star size={16} className="text-[#B38F24]" />
          </div>
          
          <h2 className="text-[#1F3D2B] text-2xl sm:text-2xl md:text-2xl font-serif font-bold mb-4">
            WHY CHOOSE {' '}
            <span className="text-[#B38F24]">SHITAL ARTIST</span>
          </h2>
          
          <p className="text-[#1F3D2B]/80 text-xs flex justify-center items-center max-w-2xl mx-auto leading-relaxed">
            Your special moments deserve beautiful details.
            <br />
            At Shital Artist, every mehndi design is created with creativity, precision, and personal attention. 
            From elegant bridal mehndi to beautiful festive designs, we make every celebration even more memorable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded overflow-hidden bg-[#FFFDF9] border border-[#1F3D2B]/10 hover:border-[#B38F24]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1F3D2B]/10 min-h-[280px] flex flex-col"
            >
              {/* Background Image: Visible by default & enhances on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 group-hover:opacity-85 scale-100 group-hover:scale-110 transition-all duration-700 ease-out z-0"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              ></div>

              {/* Halka Soft Green Radial Overlay (#1F3D2B/60) - Expands from center on Hover */}
              <span className="absolute inset-0 m-auto w-1 h-1 bg-[#1F3D2B]/60 rounded scale-0 group-hover:scale-[350] transition-transform duration-700 ease-out pointer-events-none z-0"></span>

              {/* Decorative Number - Top Right */}
              <div className="absolute top-4 right-4 text-4xl font-serif font-bold text-[#1F3D2B]/30 group-hover:text-[#F3E5AB]/40 transition-colors duration-500 z-10">
                {feature.number}
              </div>

              {/* Card Content */}
              <div className="relative p-6 z-10 flex flex-col flex-1">
                {/* Icon - Top Left */}
                <div className="flex justify-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#1F3D2B]/10 text-[#1F3D2B] group-hover:bg-[#B38F24] group-hover:text-[#FFF8E7] transition-all duration-500 border border-[#1F3D2B]/15 group-hover:border-[#B38F24]">
                    <feature.icon size={24} />
                  </div>
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1"></div>

                {/* Content - Centered at Bottom */}
                <div className="text-center">
                  {/* Title */}
                  <h3 className="text-[#1F3D2B] text-lg font-serif font-bold mb-2 group-hover:text-[#FFF8E7] transition-colors duration-500 drop-shadow-md">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#1F3D2B] font-medium text-sm leading-relaxed group-hover:text-[#FFF8E7]/95 transition-colors duration-500 drop-shadow-md">
                    {feature.description}
                  </p>

                  {/* Bottom Decorative Line - Center Shrink Target */}
                  <div className="relative mt-4">
                    <div className="mx-auto w-0 group-hover:w-1/2 h-0.5 bg-[#B38F24] transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;