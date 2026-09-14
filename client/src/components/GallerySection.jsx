import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Hotel RK International Sunset Facade',
    category: 'Lawn & Exterior',
    src: '/hero-building.png'
  },
  {
    id: 2,
    title: 'Deluxe AC Room with Plush Bedding',
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Premium Room Lounge & Seating Area',
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Family Suite with Interconnected Bedrooms',
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Romantic Couple Suite Décor & Ambiance',
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Modern Luxury Bathroom & Rain Shower',
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    title: 'Multi-Cuisine Fine Dining Restaurant',
    category: 'Dining',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Fresh Coastal Seafood Platter',
    category: 'Dining',
    src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'Traditional Bengali Thali & Specialties',
    category: 'Dining',
    src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    title: 'Kids Play Lawn & Tropical Greenery',
    category: 'Lawn & Exterior',
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    title: 'Hotel Entrance & Reception Lobby',
    category: 'Lawn & Exterior',
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 12,
    title: 'Sea Facing Balcony with Coastal Sun View',
    category: 'Rooms',
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  }
];

const GallerySection = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  // Duplicate items for continuous seamless loop
  const marqueeItems = [...galleryItems, ...galleryItems];

  return (
    <section id="gallery" className="section gallery-section-wrapper" aria-label="Photo Gallery – Rooms, Dining and Lawn at Hotel RK International New Digha">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">
            Take a Visual Tour of Hotel RK International
          </h2>
          <p className="section-desc">
            Explore our AC rooms, children's lawn, multi-cuisine dining, and scenic surroundings in New Digha near the sea beach.
          </p>
        </div>
      </div>

      {/* Infinite Moving Single-Row Carousel (Moving to the left) */}
      <div className="gallery-marquee-viewport">
        <div className="gallery-marquee-track">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="gallery-marquee-card"
              onClick={() => setActivePhoto(item)}
              title={`${item.title} - Click to enlarge`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="gallery-card-img"
              />
              
              {/* Bottom Picture Type Label Overlay */}
              <div className="gallery-card-bottom-info">
                <span className={`gallery-type-pill pill-${item.category.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                  {item.category}
                </span>
                <span className="gallery-card-title-text">{item.title}</span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="gallery-card-hover-icon">
                <Maximize2 size={20} color="#ffffff" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="modal-backdrop" onClick={() => setActivePhoto(null)}>
          <div
            className="modal-content"
            style={{ maxWidth: '850px', background: '#001f3f', border: 'none' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative' }}>
              <button
                className="modal-close-btn"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  color: '#ffffff',
                  background: 'rgba(0,0,0,0.6)',
                  zIndex: 10
                }}
                onClick={() => setActivePhoto(null)}
              >
                <X size={24} />
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: '12px' }}
              />
              <div style={{ padding: '16px 20px', color: '#ffffff' }}>
                <div style={{ display: 'inline-block', marginBottom: '6px' }}>
                  <span className={`gallery-type-pill pill-${activePhoto.category.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                    {activePhoto.category}
                  </span>
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '4px' }}>
                  {activePhoto.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
