import React from 'react';
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
        .card-container {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          border-radius: 0.375rem !important;
        }

        /* Hover Overlay - Transparent */
        .card-overlay {
          position: absolute;
          inset: 0;
          background-color: transparent !important;
          transition: background-color 0.4s ease;
          z-index: 1;
        }

        .card-container:hover .card-overlay {
          background-color: transparent !important;
        }

        /* Green gradient layers sliding from left & right - Slightly richer & chatak green */
        .card-container::before,
        .card-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          background: linear-gradient(
            90deg,
            rgba(34, 84, 45, 0.05) 0%,
            rgba(34, 84, 45, 0.22) 50%,
            rgba(34, 84, 45, 0.35) 100%
          );
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          z-index: 2;
          pointer-events: none;
        }

        /* Left Side */
        .card-container::before {
          left: 0;
          transform: translateX(-101%);
        }

        /* Right Side */
        .card-container::after {
          right: 0;
          transform: translateX(101%);
          background: linear-gradient(
            270deg,
            rgba(34, 84, 45, 0.05) 0%,
            rgba(34, 84, 45, 0.22) 50%,
            rgba(34, 84, 45, 0.35) 100%
          );
        }

        /* Slide both sides inward on hover */
        .card-container:hover::before {
          transform: translateX(0);
        }
        .card-container:hover::after {
          transform: translateX(0);
        }

        .card-container:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 25px rgba(34, 84, 45, 0.3);
        }

        /* Icon Animation: Only visible on Hover */
        .hover-icon-wrapper {
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .card-container:hover .hover-icon-wrapper {
          opacity: 1;
          transform: scale(1);
        }

        @media (max-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .card-grid {
            grid-template-columns: 1fr !important;
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
              marginBottom: '0.5rem',
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
              className="card-container"
              style={{
                borderRadius: '0.375rem',
                height: '350px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage: `url(${design.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="card-overlay" />

              {/* Card Content Centered with GOLD COLOR */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                {/* Gold Icon */}
                <div
                  className="hover-icon-wrapper"
                  style={{
                    fontSize: '2.2rem',
                    color: '#B38F24',
                    backgroundColor: 'transparent',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    marginBottom: '0.75rem',
                    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.6))',
                  }}
                >
                  {design.icon}
                </div>

                {/* Gold Title */}
                <h3
                  style={{
                    color: '#B38F24',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 0 0.5rem 0',
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    padding: '0',
                    display: 'inline-block',
                    lineHeight: '1.3',
                    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  {design.title}
                </h3>

                {/* Gold Description */}
                <p
                  style={{
                    color: '#D4AF37',
                    fontSize: '0.88rem',
                    lineHeight: '1.5',
                    margin: '0',
                    textAlign: 'center',
                    fontWeight: '600',
                    backgroundColor: 'transparent',
                    padding: '0',
                    maxWidth: '92%',
                    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.9)',
                  }}
                >
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MehndiDesigns;