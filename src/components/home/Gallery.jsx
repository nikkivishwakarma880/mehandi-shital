import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
// import shital1 from '../../assets/shital1.png'

// Sample Mehndi Images Data
const galleryImages = [
  {
    id: 1,
    url: 'https://i.pinimg.com/originals/03/a1/0b/03a10b16a4e1a29bdf4db3e80952d370.jpg',
    title: 'Bridal Front Hand Mehndi',
    category: 'Bridal',
  },
  {
    id: 2,
    url: 'https://i.pinimg.com/originals/46/76/67/4676679c55811efeb2c2b5dd423e4ce2.jpg?nii=t',
    title: 'Arabic Royal Pattern',
    category: 'Arabic',
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/originals/a0/e3/b8/a0e3b836f866fcceacaa4c0cbd40916e.jpg?nii=t',
    title: 'Traditional Floral Motif',
    category: 'Traditional',
  },
  {
    id: 4,
    url: 'https://i.pinimg.com/originals/a3/42/b0/a342b0e5138c88546fbf406e9245f22d.jpg?nii=t',
    title: 'Minimalist Wrist Mehndi',
    category: 'Modern',
  },
  {
    id: 5,
    url: 'https://i.pinimg.com/736x/d9/64/8a/d9648a7bab13cd6659ad35cf262c9931.jpg',
    title: 'Full Back Hand Design',
    category: 'Bridal',
  },
  {
    id: 6,
    url: 'https://i.pinimg.com/736x/3f/6e/42/3f6e4238be1e821f5a309f28a5507876.jpg',
    title: 'Intricate Geometric Art',
    category: 'Arabic',
  },
  {
    id: 7,
    url: 'https://i.pinimg.com/736x/07/07/0e/07070ea8d14add5324d8d7416e08af70.jpg',
    title: 'Festive Special Henna',
    category: 'Festive',
  },
  {
    id: 8,
    url: 'https://i.pinimg.com/originals/54/c0/96/54c0963f1476fc74bf48f99232b224d5.jpg?nii=t',
    title: 'Contemporary Mehndi Art',
    category: 'Modern',
  },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const showNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }
  }, [selectedIndex]);

  const showPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
      );
    }
  }, [selectedIndex]);

  const closeModal = () => setSelectedIndex(null);

  // Keyboard navigation listener (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section className="py-20 bg-[#F6F1E4] relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#315C3A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#D4AF37] text-xs sm:text-sm uppercase font-semibold tracking-[0.25em] bg-[#315C3A]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded inline-block mb-3">
            Our Masterpieces
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#315C3A] mb-4">
            Exquisite Design <span className="text-[#dabc58] italic font-normal">Gallery</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#f3dc91] mx-auto rounded mb-4"></div>
          <p className="text-[#315C3A]/80 text-sm sm:text-base">
            Explore our handcrafted henna creations tailored for every special moment.
          </p>
        </div>

        {/* Image Grid: 4 Images per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative cursor-pointer overflow-hidden border border-[#D4AF37]/30 bg-[#315C3A] shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500 rounded"
            >
              {/* Image Box */}
              <div className="aspect-[4/5] w-full overflow-hidden rounded">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover rounded transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B] via-[#1F3D2B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 rounded">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="text-[#FFF8E7] text-base font-medium mt-1">
                    {image.title}
                  </h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#1F3D2B] p-2 rounded shadow-md transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Full View */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#315C3A] backdrop-blur-md p-4 transition-all duration-300">
          
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-[#FFF8E7] hover:text-[#D4AF37] bg-[#315C3A] hover:bg-[#315C3A] rounded transition-all z-50 border border-white/20"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-[#FFF8E7] hover:text-[#D4AF37] bg-white/10 hover:bg-white/20 p-3 rounded transition-all z-50 border border-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-[#FFF8E7] hover:text-[#D4AF37] bg-white/10 hover:bg-white/20 p-3 rounded transition-all z-50 border border-white/20"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Full-size Image Container */}
          <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={galleryImages[selectedIndex].url}
              alt={galleryImages[selectedIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl border border-[#D4AF37]/40"
            />
            
            {/* Image Details Caption */}
            <div className="mt-4 text-center">
              <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                {galleryImages[selectedIndex].category}
              </p>
              <h3 className="text-[#FFF8E7] text-lg font-serif font-medium mt-1">
                {galleryImages[selectedIndex].title}
              </h3>
              <p className="text-white/50 text-xs mt-1">
                Image {selectedIndex + 1} of {galleryImages.length} • Use Arrow Keys ← → to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;