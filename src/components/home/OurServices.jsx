import React from 'react';
import { Sparkles, Heart, Flower2, Leaf, Star, Palette, Calendar, ChevronRight } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Minimal Mehndi",
      subtitle: "Simple • Elegant • Modern",
      description: "For clients who love clean, subtle, and sophisticated designs. Minimal floral patterns, geometric accents, and fine line work.",
      perfectFor: "Daily wear, office events, or minimal bridal touch.",
      gradient: "from-amber-50/50 to-rose-50/50"
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8" />,
      title: "Party & Festival Mehndi",
      subtitle: "Fun • Festive • Eye-catching",
      description: "Attractive, lively designs for every celebration. Bold motifs, Dholki special, Arabic & Indo-Arabic styles.",
      perfectFor: "Karwa Chauth, Diwali, Eid, Sangeet, and family get-togethers.",
      gradient: "from-rose-50/50 to-pink-50/50"
    },
    {
      id: 3,
      icon: <Palette className="w-8 h-8" />,
      title: "Customized Mehndi Designs",
      subtitle: "Personalized • Unique • Client-centric",
      description: "Designs tailored to your outfit, occasion, and personality. Custom initials, hidden symbols, theme-based art.",
      perfectFor: "Tell us your vision — we bring it to life on your hands!",
      gradient: "from-orange-50/50 to-amber-50/50"
    },
    {
      id: 4,
      icon: <Star className="w-8 h-8" />,
      title: "Bridal Family Mehndi",
      subtitle: "Complete • Coordinated • Memorable",
      description: "For the bride and her entire squad — matching or complementary designs. Heavy bridal set with coordinated patterns for family.",
      perfectFor: "Mother, sisters, cousins, and special guests.",
      gradient: "from-blue-50/50 to-indigo-50/50"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ backgroundColor: '#F1E9D8' }}>
      {/* Background Gradient Overlay - Left to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ede5d3] via-[#efece7] to-[#edebe7] opacity-80" />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded bg-[#B38F24]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded bg-[#315C3A]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B38F24]/[0.03] blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] font-medium" style={{ color: '#B38F24' }}>
            ✨ Our Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold leading-tight" style={{ color: '#315C3A' }}>
            Mehndi Designs for
            <span className="block mt-2" style={{ color: '#B38F24' }}>Every Special Occasion</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded" style={{ backgroundColor: '#B38F24' }} />
          <p className="max-w-2xl mx-auto text-sm leading-relaxed mt-6" style={{ color: '#315C3A' }}>
            From minimal elegance to grand celebrations — we create art that tells your story.
            Every design is created with patience, creativity, and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-white/50"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
            >
              {/* Card Gradient Overlay */}
              <div className={`absolute inset-0 rounded bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon Circle */}
                <div 
                  className="w-16 h-16 rounded flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ 
                    backgroundColor: '#F1E9D8',
                    color: '#B38F24'
                  }}
                >
                  {service.icon}
                </div>

                <h3 
                  className="text-xl font-bold mb-1 transition-colors duration-300"
                  style={{ color: '#315C3A' }}
                >
                  {service.title}
                </h3>
                
                <p 
                  className="text-sm font-medium mb-3"
                  style={{ color: '#B38F24' }}
                >
                  {service.subtitle}
                </p>

                <p 
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{ color: '#315C3A' }}
                >
                  {service.description}
                </p>

                {/* Perfect For */}
                <div 
                  className="mt-4 p-3 rounded bg-white/60 text-xs"
                  style={{ color: '#315C3A' }}
                >
                  <span className="font-semibold" style={{ color: '#B38F24' }}>🎯 Perfect for:</span> {service.perfectFor}
                </div>

                {/* Decorative Line */}
                <div 
                  className="mt-4 w-12 h-0.5 rounded transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: '#B38F24' }}
                />
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded border border-transparent group-hover:border-[#B99349] transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B38F24]/10 to-[#315C3A]/10 rounded blur-2xl" />
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded px-8 py-12 md:px-16 md:py-14 border border-white/50 shadow-xl" 
                 style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
              <h3 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: '#315C3A' }}
              >
                Let Your Mehndi{' '}
                <span style={{ color: '#B38F24' }}>Tell Your Story</span>
              </h3>
              
              <p 
                className="text-lg max-w-2xl mx-auto mb-8"
                style={{ color: '#315C3A' }}
              >
                Choose a design that feels uniquely yours and make every celebration a little more beautiful.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  className="group inline-flex items-center gap-3 px-5 py-3 rounded text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ 
                    backgroundColor: '#B38F24',
                    boxShadow: '0 8px 30px rgba(179, 143, 36, 0.3)'
                  }}
                >
                  <span>📞 Book Appointment</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              <div className="mt-6 text-sm" style={{ color: '#315C3A' }}>
                <p>📸 Instagram: <strong style={{ color: '#B38F24' }}>@yourmehndiart</strong> &nbsp;|&nbsp; 📧 <strong style={{ color: '#B38F24' }}>info@yourmehndi.com</strong></p>
                <p className="mt-2 italic text-sm" style={{ color: '#B38F24' }}>
                  “Har occasion ke liye perfect mehndi — bas aapki ek call door!”
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded border-2 border-[#dfc472] animate-pulse" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded border-2 border-[#406849] animate-pulse delay-1000" />
            </div>
          </div>
        </div>

        {/* Bottom Decorative Pattern */}
        <div className="mt-16 flex justify-center gap-3 opacity-30">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded"
              style={{ 
                backgroundColor: i % 2 === 0 ? '#B38F24' : '#315C3A',
                opacity: 0.3 + (i * 0.05)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;