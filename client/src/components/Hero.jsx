import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, Waves } from 'lucide-react';

const heroImages = [
  {
    src: '/hero-building.png',
    caption: 'Hotel RK International Sunset Facade'
  },
  {
    src: '/hero-pool-night.png',
    caption: 'Luxury Swimming Pool with Ambient Evening Lights'
  },
  {
    src: '/hero-restaurant.png',
    caption: 'Multi-Cuisine In-House Restaurant'
  },
  {
    src: '/hero-pool-day.jpg',
    caption: 'Sparkling Swimming Pool & Outdoor Relaxation'
  }
];

const Hero = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 1.8 seconds (1.5 - 2 sec as requested)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = "https://wa.me/916289276600?text=Hello%20Hotel%20RK%20International%2C%20I%20am%20interested%20in%20booking%20a%20room%20in%20New%20Digha.%20Please%20share%20availability.";

  return (
    <section id="home" className="hero">
      {/* Background Image Carousel with Smooth Dissolve */}
      <div className="hero-slider-bg">
        {heroImages.map((item, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        ))}
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={16} fill="#FFB703" color="#FFB703" />
            <span>Top Rated Hospitality in New Digha</span>
          </div>

          <h1 className="hero-title">
            Comfortable Rooms for Your Digha Getaway
          </h1>

          <h2 className="hero-subtitle">
            Hotel R K International
          </h2>

          <p className="hero-desc">
            Finding the right hotel in New Digha can make your coastal trip more convenient, relaxing, and memorable. Experience spacious AC rooms, attached modern bathrooms, 24*7 power backup, swimming pool, and authentic multi-cuisine dining just a short stroll from New Digha Sea Beach.
          </p>

          <div className="hero-buttons">
            <a href="tel:+916289276600" className="btn btn-navy btn-lg">
              <Phone size={18} />
              <span>CALL +91 6289276600</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Whatsapp</span>
            </a>

            <button
              onClick={() => onOpenBooking(null)}
              className="btn btn-cyan btn-lg"
            >
              <span>Instant Booking</span>
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="hero-slide-indicators">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`hero-indicator-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '30px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Waves size={16} color="#20B7E3" />
              <span>Swimming Pool & Sea Beach</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#20B7E3" />
              <span>24/7 Power Backup</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Star size={16} color="#FFB703" fill="#FFB703" />
              <span>4.8/5 Star Rated on Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
