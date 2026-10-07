import React, { useState } from 'react';
import {
  FaHandSparkles,
  FaCrown,
  FaHeart,
  FaGem,
  FaClock,
  FaMagic,
  FaAward,
  FaSmile,
} from 'react-icons/fa';

const mehndiDesignsData = [
  {
    id: 1,
    icon: <FaCrown />,
    title: 'Royal Dulhan Package',
    description: 'Full hand and feet intricate traditional Rajasthani and Marwari bridal art.',
    bgImage: 'https://avatars.mds.yandex.net/i?id=977be0dafcd9faac53e176b40a785b86_l-4026732-images-thumbs&ref=rim&n=13&w=844&h=1056',
  },
  {
    id: 2,
    icon: <FaHandSparkles />,
    title: 'Indo-Arabic Fusion',
    description: 'Modern bold outlines mixed with delicate Indian shading and vine elements.',
    bgImage: 'https://i.pinimg.com/736x/68/68/4e/68684e1a55edf3975b293007aa6d7c27.jpg',
  },
  {
    id: 3,
    icon: <FaGem />,
    title: 'Minimalist Mandalas',
    description: 'Elegant round mandala accents perfect for bridesmaids and light occasions.',
    bgImage: 'https://i.pinimg.com/originals/ab/16/ad/ab16ad5487e5a243f7bb62713e0727a8.jpg?nii=t',
  },
  {
    id: 4,
    icon: <FaMagic />,
    title: 'Portrait Mehndi',
    description: 'Customized realistic portraits of Bride & Groom drawn directly on palms.',
    bgImage: 'https://i.pinimg.com/736x/e2/b9/f5/e2b9f58bbeec2ee9059e945e7308417d.jpg',
  },
  {
    id: 5,
    icon: <FaHeart />,
    title: 'Sangeet Party Group',
    description: 'Fast, trendy, and stylish speed-designs for guests at wedding functions.',
    bgImage: 'https://i.pinimg.com/736x/b8/5f/32/b85f3211edae39d78bf62fad0c3436b1.jpg',
  },
  {
    id: 6,
    icon: <FaClock />,
    title: 'Organic Fast Stain',
    description: 'Premium organic cones that yield a dark reddish-brown stain within 24 hours.',
    bgImage: 'https://i.pinimg.com/originals/6c/78/74/6c78745777c4d064cde3996a0b12fac0.jpg?nii=t',
  },
  {
    id: 7,
    icon: <FaAward />,
    title: 'Celebrity Styling',
    description: 'High-profile luxury henna service tailored for grand shoots and galas.',
    bgImage: 'https://i.pinimg.com/736x/12/95/98/12959888289ceabc63d3b543f7513cff.jpg',
  },
  {
    id: 8,
    icon: <FaSmile />,
    title: 'Tattoo-Style Henna',
    description: 'Modern wristbands, floral cuffs, and shoulder tattoos for parties.',
    bgImage: 'https://i.pinimg.com/736x/f9/06/be/f906be39542bc770d0649f75ecd6d5de.jpg',
  },
];

const MehndiDesigns = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #EEE6D5 0%, #FFFFFF 100%)',
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Dynamic Hover Effect Style */}
      <style>{`
        .card-wrapper {
          display: flex;
          flex-direction: column;
          border-radius: 0.375rem;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          background-color: #FFFFFF;
          cursor: pointer;
        }

        .card-wrapper:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }

        .card-image {
          position: relative;
          height: 250px;
          overflow: hidden;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
        }

        .card-image::before,
        .card-image::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          background: linear-gradient(
            90deg,
            rgba(49, 92, 58, 0.05) 0%,
            rgba(49, 92, 58, 0.22) 50%,
            rgba(49, 92, 58, 0.35) 100%
          );
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 2;
          pointer-events: none;
        }

        .card-image::before {
          left: 0;
          transform: translateX(-101%);
        }

        .card-image::after {
          right: 0;
          transform: translateX(101%);
          background: linear-gradient(
            270deg,
            rgba(49, 92, 58, 0.05) 0%,
            rgba(49, 92, 58, 0.22) 50%,
            rgba(49, 92, 58, 0.35) 100%
          );
        }

        .card-wrapper:hover .card-image::before {
          transform: translateX(0);
        }
        .card-wrapper:hover .card-image::after {
          transform: translateX(0);
        }

        .card-content {
          background-color: #FFFFFF;
          padding: 0.6rem 0.75rem 0.8rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }

        .hover-icon-wrapper {
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.3s ease, transform 0.3s ease;
          font-size: 2rem;
          color: #B38F24;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-bottom: 0.4rem;
          filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.3));
        }

        .card-wrapper:hover .hover-icon-wrapper {
          opacity: 1;
          transform: scale(1);
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
          cursor: zoom-out;
        }

        .modal-image {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 0.5rem;
          box-shadow: 0 0 40px rgba(179, 143, 36, 0.6);
        }

        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          color: #B38F24;
          font-size: 2.5rem;
          font-weight: bold;
          cursor: pointer;
          line-height: 1;
          background: transparent;
          border: none;
        }

        @media (max-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1
            style={{
              color: '#315C3A',
              fontSize: '2.8rem',
              fontWeight: '700',
              letterSpacing: '1px',
              marginBottom: '0.1rem',
            }}
          >
            ✿ Exclusive Henna Services ✿
          </h1>
          <p
            style={{
              color: '#B38F24',
              fontSize: '1.1rem',
              fontWeight: '500',
              borderBottom: '2px solid #B38F24',
              paddingBottom: '0.5rem',
              display: 'inline-block',
              opacity: 0.9,
            }}
          >
            Artistic designs tailored for weddings and grand celebrations
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="card-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
          }}
        >
          {mehndiDesignsData.map((design) => (
            <div
              key={design.id}
              className="card-wrapper"
              onClick={() => setSelectedImage(design.bgImage)}
            >
              {/* Image section */}
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${design.bgImage})`,
                }}
              />

              {/* Content section below image */}
              <div className="card-content">
                {/* Gold Icon */}
                <div className="hover-icon-wrapper">
                  {design.icon}
                </div>

                {/* Green Title */}
                <h3
                  style={{
                    color: '#315C3A',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    margin: '0 0 0.3rem 0',
                    textAlign: 'center',
                    lineHeight: '1.3',
                  }}
                >
                  {design.title}
                </h3>

                {/* Green Description */}
                <p
                  style={{
                    color: '#315C3A',
                    fontSize: '0.8rem',
                    lineHeight: '1.4',
                    margin: '0',
                    textAlign: 'center',
                    fontWeight: '600',
                    maxWidth: '92%',
                  }}
                >
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full View Modal */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="modal-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full View"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default MehndiDesigns;