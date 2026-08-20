import React, { useState } from 'react';
import { Sparkles, Heart, ShieldCheck, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    "https://i.pinimg.com/474x/96/37/ca/9637caf537283ec4df882fae06fc26eb.jpg",
    "https://i.pinimg.com/originals/8a/0f/5d/8a0f5d8d159a36e6433cbe7a950eb579.jpg?nii=t",
    "https://i.pinimg.com/736x/85/2e/ee/852eee984672576e87e7cec718ac8cbf.jpg",
    "https://i.pinimg.com/736x/a4/a3/5b/a4a35b218d9c18f1b0fae62374eb794d.jpg",
    "https://i.pinimg.com/736x/59/08/49/59084908a2cb3c5face4a6bbf4e11a5e.jpg",
    "https://i.pinimg.com/736x/a5/12/54/a51254cdef2a8062eb1ca2cd9c606b22.jpg",
  ];

  const processSteps = [
    { step: "01", title: "Consultation", desc: "Discuss your preferences, bridal outfit themes, and event timings." },
    { step: "02", title: "Design Selection", desc: "Finalize customized motifs, portraits, or traditional elements." },
    { step: "03", title: "Mehndi Application", desc: "Relax and enjoy as pure organic henna transforms into intricate art." },
    { step: "04", title: "Final Look & Care", desc: "Receive complete aftercare instructions to ensure a rich, dark stain." }
  ];

  return (
    <div className="font-sans" style={{ backgroundColor: '#f5f2eb', color: '#3F5B4A' }}>
      
      {/* 1. HERO SECTION - Integrated About Content */}
      <section 
        className="relative py-8 px-6" 
        style={{ 
          background: 'linear-gradient(to right, #F5F2EB 0%, #FAF7F2 100%)', 
          color: '#3F5B4A' 
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 flex-1">
            <span className="font-semibold uppercase tracking-widest text-xs" style={{ color: '#A07E2F' }}>
              Exclusive Bridal Mehndi
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-snug">
              Your Wedding Day, <br /><span className="italic" style={{ color: '#A07E2F' }}>Adorned With Art</span>
            </h1>
            
            {/* Embedded About Content */}
            <div className="pl-4 border-l-2 py-1 space-y-2" style={{ borderColor: '#A07E2F' }}>
              <h2 className="font-serif font-bold text-2xl" style={{ color: '#3F5B4A' }}>
                Shital Artist Bridal Mehndi
              </h2>
              <p className="text-sm leading-relaxed mt-3 font-medium" style={{ color: '#A07E2F' }}>
                Shital Artist specializes in crafting timeless bridal henna that blends traditional elegance with modern artistic flair. Every swirl and motif is thoughtfully customized to reflect your personal story, ensuring meticulous attention to detail and a seamless experience on your big day.
              </p>
            </div>

            <div>
              <Link to="/contact" className="inline-flex items-center mt-4 gap-2 text-white font-semibold px-6 py-3 rounded text-sm transition-all duration-300 shadow-md" style={{ backgroundColor: '#A07E2F' }}>
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center rounded items-center">
            <img 
              src="https://i.pinimg.com/736x/31/91/60/319160fa8092d0a0eb82fcfad1986302.jpg" 
              alt="Bridal Mehndi Art" 
              className="rounded shadow-xl border-2 object-cover w-full max-w-md h-[420px]"
              style={{ borderColor: '#A07E2F33', borderRadius: '20px' }}
            />
          </div>
        </div>
      </section>

      {/* 2. BRIDAL MEHNDI STYLES */}
      <section className="py-12 px-6" style={{ backgroundColor: '#F5F2EB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
              Bridal Mehndi Styles
            </h2>
            <p className="mt-2" style={{ color: '#3F5B4A' }}>Explore the variety of artistry designed for your taste</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stylesList.map((style, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded border transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1" 
                style={{ borderColor: '#e0dcd2' }}
              >
                <h3 className="text-xl font-serif font-semibold mb-2" style={{ color: '#A07E2F' }}>{style.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#3F5B4A' }}>{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SHITAL ARTIST */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
            Why Choose Shital Artist
          </h2>
          <p className="mt-2" style={{ color: '#3F5B4A' }}>Dedicated to excellence and artistic precision</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="p-5 rounded border text-center flex flex-col items-center" style={{ backgroundColor: '#f0ece3', borderColor: '#d4cdbe' }}>
              <div className="p-3 rounded-full mb-3" style={{ backgroundColor: '#e8e0d1' }}>{item.icon}</div>
              <h3 className="font-serif font-semibold text-lg mb-2" style={{ color: '#3F5B4A' }}>{item.title}</h3>
              <p className="text-sm" style={{ color: '#3F5B4A' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BRIDAL MEHNDI PACKAGES */}
      <section id="packages" className="py-12 px-6" style={{ backgroundColor: '#F5F2EB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
              Bridal Mehndi Packages
            </h2>
            <p className="mt-2" style={{ color: '#3F5B4A' }}>Select the perfect package for your wedding celebrations</p>
          </div>
          <div className="grid grid-cols-1 mt-15 md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative bg-white rounded p-6 shadow-sm flex flex-col justify-between border-2 transition ${
                  pkg.isPopular ? 'shadow-xl' : ''
                }`}
                style={{
                  borderColor: pkg.isPopular ? '#A07E2F' : '#d4cdbe'
                }}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs uppercase font-bold px-4 py-1 rounded" style={{ backgroundColor: '#A07E2F' }}>
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: '#3F5B4A' }}>{pkg.name}</h3>
                  <div className="text-xl font-semibold mb-4" style={{ color: '#A07E2F' }}>{pkg.price}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm" style={{ color: '#3F5B4A' }}>
                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#A07E2F' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="w-full text-center py-3 rounded font-semibold transition text-white" style={{ backgroundColor: pkg.isPopular ? '#A07E2F' : '#3F5B4A' }}>
                  Select Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRIDAL GALLERY */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
            Bridal Gallery
          </h2>
          <p className="mt-2" style={{ color: '#3F5B4A' }}>A glimpse of our recent bridal masterpieces</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded shadow-md h-72">
              <img 
                src={img} 
                alt={`Bridal Mehndi Design ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: '#3F5B4A66' }}>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BRIDAL PROCESS */}
      <section 
        className="py-12 px-6" 
        style={{ 
          background: 'linear-gradient(to right, #EEE7D5 0%, #FAF7F2 100%)', 
          color: '#3F5B4A' 
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
              The Bridal Process
            </h2>
            <p className="mt-2" style={{ color: '#526E5D' }}>Four simple steps to your dream bridal henna</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item, idx) => (
              <div key={idx} className="p-5 rounded border bg-white shadow-sm" style={{ borderColor: '#e0dcd2' }}>
                <div className="text-4xl font-serif font-bold mb-3" style={{ color: '#A07E2F' }}>{item.step}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#3F5B4A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#526E5D' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOK YOUR BRIDAL MEHNDI (CTA) */}
      <section id="contact" className="py-10 px-6 text-center" style={{ backgroundColor: '#f0ece3' }}>
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-3xl md:text-4xl font-serif flex justify-center items-center font-bold" style={{ color: '#A07E2F' }}>
            Let's Create Magic For Your Special Day
          </h2>
          <p className="text-lg leading-relaxed flex justify-center items-center" style={{ color: '#3F5B4A' }}>
            Dates book fast during the wedding season. Lock in your slot with Shital Artist and ensure your bridal hands look exceptional.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link to='/book-appointment' className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded transition shadow-lg" style={{ backgroundColor: '#A07E2F' }}>
               Book Appointment
            </Link>
            <a href="#packages" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded transition shadow-lg" style={{ backgroundColor: '#3F5B4A' }}>
              View Packages
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BridalMehndi;