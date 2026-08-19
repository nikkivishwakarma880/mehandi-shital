import React, { useState } from 'react';
import { Sparkles, Heart, ShieldCheck, Clock, CheckCircle, Calendar, Phone, ArrowRight } from 'lucide-react';

const BridalMehndi = () => {
  const [selectedPackage, setSelectedPackage] = useState('Premium Bridal');

  const stylesList = [
    { name: "Traditional", desc: "Classic full-hand motifs, peacock, and floral patterns." },
    { name: "Arabic", desc: "Bold lines, elegant flow, and spacious geometric beauty." },
    { name: "Rajasthani", desc: "Intricate artwork capturing Royal heritage and culture." },
    { name: "Indo-Arabic", desc: "A fusion of dense shading and graceful Arabic outlines." },
    { name: "Minimal", desc: "Subtle, modern, and clean aesthetics for delicate hands." },
    { name: "Portrait / Story", desc: "Customized bride-groom figures and wedding rituals." },
  ];

  const whyChooseUs = [
    { title: "Customized Designs", desc: "Tailored artwork reflecting your personal love story.", icon: <Sparkles className="w-6 h-6" style={{ color: '#A07E2F' }} /> },
    { title: "Intricate Detailing", desc: "Precision in every line, curve, and traditional element.", icon: <Heart className="w-6 h-6" style={{ color: '#A07E2F' }} /> },
    { title: "Premium Quality", desc: "100% natural, chemical-free henna for deep dark stain.", icon: <ShieldCheck className="w-6 h-6" style={{ color: '#A07E2F' }} /> },
    { title: "Personalized Experience", desc: "Dedicated time, patience, and comfort on your big day.", icon: <Clock className="w-6 h-6" style={{ color: '#A07E2F' }} /> },
  ];

  const packages = [
    {
      name: "Basic Bridal",
      price: "₹5,000 - ₹8,000",
      features: [
        "Elbow length (Front & Back)",
        "Ankle length feet mehndi",
        "Traditional design motifs",
        "Natural organic henna paste"
      ]
    },
    {
      name: "Premium Bridal",
      price: "₹10,000 - ₹15,000",
      isPopular: true,
      features: [
        "Mid-arm length (Front & Back)",
        "Mid-calf length feet mehndi",
        "Custom Indo-Arabic / Rajasthani fusion",
        "Bride-Groom initials inclusion",
        "Aftercare stain-lock kit included"
      ]
    },
    {
      name: "Royal Bridal",
      price: "₹18,000+",
      features: [
        "Full arm length (Front & Back)",
        "Full leg coverage up to knees",
        "Customized Portrait / Storytelling art",
        "Doli, Barat, & Vows elements",
        "Exclusive VIP booking slot & Aftercare"
      ]
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1595039838779-f3780873afd5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
  ];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "Discuss your preferences, bridal outfit themes, and event timings." },
    { step: "02", title: "Design Selection", desc: "Finalize customized motifs, portraits, or traditional elements." },
    { step: "03", title: "Mehndi Application", desc: "Relax and enjoy as pure organic henna transforms into intricate art." },
    { step: "04", title: "Final Look & Care", desc: "Receive complete aftercare instructions to ensure a rich, dark stain." }
  ];

  return (
    <div className="font-sans" style={{ backgroundColor: '#f5f2eb', color: '#3F5B4A' }}>
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 px-6" style={{ backgroundColor: '#3F5B4A', color: '#ffffff' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-semibold uppercase tracking-widest text-sm" style={{ color: '#A07E2F' }}>
              Exclusive Bridal Mehndi
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Your Wedding Day, <br /><span className="italic" style={{ color: '#A07E2F' }}>Adorned With Art</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#d4d0c8' }}>
              Celebrate your love story with bespoke, intricate bridal henna created to make your special day truly unforgettable.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg" style={{ backgroundColor: '#A07E2F' }}>
              Book Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1595039838779-f3780873afd5?q=80&w=800&auto=format&fit=crop" 
              alt="Bridal Mehndi Art" 
              className="rounded-2xl shadow-2xl border-4 object-cover w-full h-[450px]"
              style={{ borderColor: '#A07E2F33' }}
            />
          </div>
        </div>
      </section>

      {/* 2. ABOUT BRIDAL MEHNDI */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6" style={{ color: '#3F5B4A' }}>
          About Shital Artist Bridal Mehndi
        </h2>
        <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: '#A07E2F' }}></div>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#3F5B4A' }}>
          Shital Artist specializes in crafting timeless bridal henna that blends traditional elegance with modern artistic flair. Every swirl and motif is thoughtfully customized to reflect your personal story, ensuring meticulous attention to detail and a seamless experience on your big day.
        </p>
      </section>

      {/* 3. BRIDAL MEHNDI STYLES */}
      <section className="py-20 px-6" style={{ backgroundColor: '#e8e3d9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
              Bridal Mehndi Styles
            </h2>
            <p className="mt-2" style={{ color: '#3F5B4A' }}>Explore the variety of artistry designed for your taste</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stylesList.map((style, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border" style={{ borderColor: '#e0dcd2' }}>
                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: '#3F5B4A' }}>{style.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#3F5B4A' }}>{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SHITAL ARTIST */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
            Why Choose Shital Artist
          </h2>
          <p className="mt-2" style={{ color: '#3F5B4A' }}>Dedicated to excellence and artistic precision</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border text-center flex flex-col items-center" style={{ backgroundColor: '#f0ece3', borderColor: '#d4cdbe' }}>
              <div className="p-3 rounded-full mb-4" style={{ backgroundColor: '#e8e0d1' }}>{item.icon}</div>
              <h3 className="font-serif font-semibold text-lg mb-2" style={{ color: '#3F5B4A' }}>{item.title}</h3>
              <p className="text-sm" style={{ color: '#3F5B4A' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BRIDAL MEHNDI PACKAGES */}
      <section className="py-20 px-6" style={{ backgroundColor: '#e8e3d9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
              Bridal Mehndi Packages
            </h2>
            <p className="mt-2" style={{ color: '#3F5B4A' }}>Select the perfect package for your wedding celebrations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between border-2 transition ${
                  pkg.isPopular ? 'shadow-xl' : ''
                }`}
                style={{
                  borderColor: pkg.isPopular ? '#A07E2F' : '#d4cdbe'
                }}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs uppercase font-bold px-4 py-1 rounded-full" style={{ backgroundColor: '#A07E2F' }}>
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: '#3F5B4A' }}>{pkg.name}</h3>
                  <div className="text-xl font-semibold mb-6" style={{ color: '#A07E2F' }}>{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm" style={{ color: '#3F5B4A' }}>
                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#A07E2F' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className={`w-full text-center py-3 rounded-lg font-semibold transition text-white`} style={{ backgroundColor: pkg.isPopular ? '#A07E2F' : '#3F5B4A' }}>
                  Select Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRIDAL GALLERY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
            Bridal Gallery
          </h2>
          <p className="mt-2" style={{ color: '#3F5B4A' }}>A glimpse of our recent bridal masterpieces</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md h-72">
              <img 
                src={img} 
                alt={`Bridal Mehndi Design ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: '#3F5B4A66' }}>
                <span className="text-white font-serif tracking-wider font-semibold pb-1" style={{ borderBottom: '2px solid #A07E2F' }}>View Design</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BRIDAL EXPERIENCE / PROCESS */}
      <section className="py-20 px-6" style={{ backgroundColor: '#3F5B4A', color: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#ffffff' }}>
              The Bridal Process
            </h2>
            <p className="mt-2" style={{ color: '#d4d0c8' }}>Four simple steps to your dream bridal henna</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border" style={{ backgroundColor: '#3F5B4A', borderColor: '#4a6a55' }}>
                <div className="text-4xl font-serif font-bold mb-4" style={{ color: '#A07E2F' }}>{item.step}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#ffffff' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#d4d0c8' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOOK YOUR BRIDAL MEHNDI (CTA) */}
      <section id="contact" className="py-20 px-6 text-center" style={{ backgroundColor: '#f0ece3' }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
            Let's Create Magic For Your Special Day
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#3F5B4A' }}>
            Dates book fast during the wedding season. Lock in your slot with Shital Artist and ensure your bridal hands look exceptional.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition shadow-lg" style={{ backgroundColor: '#A07E2F' }}>
              <Phone className="w-5 h-5" /> Book Appointment
            </a>
            <a href="#packages" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition shadow-lg" style={{ backgroundColor: '#3F5B4A' }}>
              <Calendar className="w-5 h-5" /> View Packages
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BridalMehndi;