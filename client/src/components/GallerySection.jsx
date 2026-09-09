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
  const [filter, setFilter] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = ['All', 'Rooms', 'Dining', 'Lawn & Exterior'];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">
            Take a Visual Tour of Hotel RK International
          </h2>
          <p className="section-desc">
            Explore our rooms, clean premises, children's lawn, dining spaces, and pleasant surroundings in New Digha.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="room-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => setActivePhoto(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <Maximize2 size={24} style={{ marginBottom: '8px' }} />
                <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{item.title}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>{item.category}</span>
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
                <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '4px' }}>
                  {activePhoto.title}
                </h4>
                <p style={{ color: '#20B7E3', fontSize: '0.85rem' }}>{activePhoto.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
