import React, { useState } from 'react';
import { Sparkles, Heart, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurMehndiGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample Gallery Data - Added 4 more images (total 16)
  const galleryItems = [
    {
      id: 1,
      title: "Royal Bridal Motifs",
      category: "Bridal Mehndi",
      image: "https://images.unsplash.com/photo-1595039838779-f3780873afd5?q=80&w=600&auto=format&fit=crop",
      desc: "Detailed bride-groom figures & heritage artwork."
    },
    {
      id: 2,
      title: "Flowing Arabic Floral",
      category: "Arabic Mehndi",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
      desc: "Bold lines with elegant floral flow."
    },
    {
      id: 3,
      title: "Delicate Minimal Mandala",
      category: "Minimal Mehndi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
      desc: "Clean, modern, and subtle center mandala."
    },
    {
      id: 4,
      title: "Classic Indian Peacock",
      category: "Traditional Mehndi",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop",
      desc: "Timeless traditional intricate detailing."
    },
    {
      id: 5,
      title: "Full-Arm Bridal Story",
      category: "Bridal Mehndi",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop",
      desc: "Customized wedding ritual elements."
    },
    {
      id: 6,
      title: "Contemporary Arabic Vane",
      category: "Arabic Mehndi",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
      desc: "Spacious and chic modern vine work."
    },
    {
      id: 7,
      title: "Bridal Hand Elegance",
      category: "Bridal Mehndi",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop",
      desc: "Elegant bridal hand patterns with traditional motifs."
    },
    {
      id: 8,
      title: "Arabic Floral Cuff",
      category: "Arabic Mehndi",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
      desc: "Beautiful floral cuff designs with Arabic influence."
    },
    {
      id: 9,
      title: "Minimal Finger Art",
      category: "Minimal Mehndi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
      desc: "Simple yet elegant finger mehndi designs."
    },
    {
      id: 10,
      title: "Traditional Bridal Set",
      category: "Traditional Mehndi",
      image: "https://images.unsplash.com/photo-1595039838779-f3780873afd5?q=80&w=600&auto=format&fit=crop",
      desc: "Complete traditional bridal mehndi set."
    },
    {
      id: 11,
      title: "Modern Arabic Fusion",
      category: "Arabic Mehndi",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
      desc: "Fusion of modern and traditional Arabic styles."
    },
    {
      id: 12,
      title: "Royal Wedding Collection",
      category: "Bridal Mehndi",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop",
      desc: "Royal collection for the perfect wedding day."
    },
    {
      id: 13,
      title: "Elegant Peacock Motif",
      category: "Traditional Mehndi",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop",
      desc: "Beautiful peacock motifs with intricate detailing."
    },
    {
      id: 14,
      title: "Minimal Wrist Art",
      category: "Minimal Mehndi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
      desc: "Delicate wrist mehndi for everyday elegance."
    },
    {
      id: 15,
      title: "Bridal Feet Mehndi",
      category: "Bridal Mehndi",
      image: "https://images.unsplash.com/photo-1595039838779-f3780873afd5?q=80&w=600&auto=format&fit=crop",
      desc: "Traditional bridal feet mehndi patterns."
    },
    {
      id: 16,
      title: "Arabic Vine Symphony",
      category: "Arabic Mehndi",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
      desc: "Beautiful flowing vine patterns in Arabic style."
    }
  ];

  const categories = [
    { name: "Bridal Mehndi", desc: "Intricate and elegant bridal designs created to make your wedding moments truly unforgettable." },
    { name: "Arabic Mehndi", desc: "Stylish floral patterns and flowing designs perfect for a graceful and contemporary look." },
    { name: "Minimal Mehndi", desc: "Simple, delicate, and elegant designs for those who love a subtle yet beautiful mehndi style." },
    { name: "Traditional Mehndi", desc: "Timeless traditional patterns inspired by classic Indian mehndi artistry." }
  ];

  const filteredGallery = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div 
      className="font-sans min-h-screen relative" 
      style={{ 
        color: '#3F5B4A' 
      }}
    >
      {/* Background Blur Image */}
      <div 
        className="absolute h-100 inset-0 z-0"
        style={{
          backgroundImage: 'url("https://i.pinimg.com/736x/60/d3/7e/60d37ec978be5bfd0e1493edb7fbecb6.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.41px)',
          opacity: '0.15'
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* 1. HERO SECTION */}
        <section className="py-12 px-6 text-center max-w-4xl mx-auto">
          <span className="font-semibold uppercase tracking-widest text-xs inline-flex items-center gap-1.5 px-3 py-1 rounded border mb-4" style={{ borderColor: '#A07E2F', color: '#A07E2F', backgroundColor: '#A07E2F10' }}>
            <Sparkles className="w-3.5 h-3.5" /> Shital Artist Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4" style={{ color: '#3F5B4A' }}>
            Our Mehndi Gallery
          </h1>
          <p className="text-xl font-serif italic mt-10 mb-6" style={{ color: '#A07E2F' }}>
            "Every Design Tells a Story"
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#526E5D' }}>
            Welcome to the world of beautiful mehndi artistry by Shital Artist. Explore our collection of thoughtfully created mehndi designs, crafted with precision, creativity, and attention to every detail.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded" style={{ backgroundColor: '#A07E2F' }}></div>
        </section>

        {/* 2. EXPLORE OUR DESIGNS (CATEGORY CARDS) */}
        <section className="py-10 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
              Explore Our Designs
            </h2>
            <p className="mt-2 text-sm" style={{ color: '#526E5D' }}>
              From elegant bridal patterns to modern Arabic styles, customized to complement your style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveCategory(cat.name)}
                className={`p-6 rounded border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between ${
                  activeCategory === cat.name ? 'ring-2' : ''
                }`}
                style={{ 
                  backgroundColor: activeCategory === cat.name ? '#FAF7F2' : '#FFFFFF', 
                  borderColor: '#A07E2F55',
                  ringColor: '#A07E2F',
                  borderRadius: '12px'
                }}
              >
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3" style={{ color: '#A07E2F' }}>
                    {cat.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3F5B4A' }}>
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-semibold uppercase tracking-wider" style={{ color: '#A07E2F' }}>
                  View Collection <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. INTERACTIVE GALLERY GRID */}
        <section className="py-10 px-6 max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === 'All' ? 'text-white shadow-md' : 'border'
              }`}
              style={{ 
                backgroundColor: activeCategory === 'All' ? '#A07E2F' : 'transparent',
                borderColor: '#A07E2F',
                color: activeCategory === 'All' ? '#FFFFFF' : '#3F5B4A',
                borderRadius: '12px'
              }}
            >
              All Designs
            </button>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.name ? 'text-white shadow-md' : 'border'
                }`}
                style={{ 
                  backgroundColor: activeCategory === cat.name ? '#A07E2F' : 'transparent',
                  borderColor: '#A07E2F',
                  color: activeCategory === cat.name ? '#FFFFFF' : '#3F5B4A',
                  borderRadius: '12px'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Image Grid - 4 Cards in One Line with 16 Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id} 
                className="bg-white overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 group"
                style={{ borderColor: '#e0dcd2', borderRadius: '12px' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 text-white shadow" style={{ backgroundColor: '#3F5B4A', borderRadius: '12px' }}>
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-serif font-bold text-lg mb-1" style={{ color: '#3F5B4A' }}>
                    {item.title}
                  </h4>
                  <p className="text-xs" style={{ color: '#A07E2F' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CREATIVITY & LOVE FEATURE SECTION */}
        <section className="py-12 px-6 max-w-5xl mx-auto my-6 rounded border text-center shadow-sm" style={{ backgroundColor: '#FAF7F2', borderColor: '#A07E2F33', borderRadius: '12px' }}>
          <Heart className="w-10 h-10 mx-auto mb-4" style={{ color: '#A07E2F' }} />
          <h2 className="text-3xl font-serif font-bold mb-4" style={{ color: '#3F5B4A' }}>
            Made With Creativity & Love
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium" style={{ color: '#A07E2F' }}>
            Every mehndi design is created with patience, passion, and a personal touch. Whether it's your wedding day, festival, engagement, or any special celebration, Shital Artist brings your vision to life through beautiful mehndi art.
          </p>
        </section>

        {/* 5. CALL TO ACTION (CTA) SECTION */}
        <section className="py-14 px-6 text-center" style={{ backgroundColor: '#F0ECE3' }}>
          <div className="max-w-3xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-serif font-bold" style={{ color: '#3F5B4A' }}>
              Create Your Perfect Mehndi Look
            </h2>
            <p className="text-base md:text-lg" style={{ color: '#526E5D' }}>
              Have a design in mind? Let us create something special just for you. Make your special occasion more beautiful with a unique mehndi design by Shital Artist.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <Link 
                to="/book-appointment" 
                className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 transition-all shadow-lg hover:opacity-90" 
                style={{ backgroundColor: '#A07E2F', borderRadius: '12px' }}
              >
                <Calendar className="w-5 h-5" /> Book Your Mehndi Appointment
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurMehndiGallery;