import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

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

  // Auto slide with smooth luxury pacing (every 6 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = "https://wa.me/918910119231?text=Hello%20Hotel%20RK%20International%2C%20I%20am%20interested%20in%20booking%20a%20room%20in%20New%20Digha.%20Please%20share%20availability.";

  return (
    <section id="home" className="hero" aria-label="Hotel RK International – Best Hotel in New Digha near Sea Beach">
      {/* Background Image Carousel with Smooth Dissolve */}
      <div className="hero-slider-bg">
        {heroImages.map((item, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.src})` }}
            role="img"
            aria-label={item.caption}
          />
        ))}
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">Comfortable Rooms</span>
            <span className="hero-title-for">for</span>
            <span className="hero-title-line">Your Digha Gateway</span>
          </h1>
          <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '8px', fontWeight: '400' }}>
            Hotel RK International, New Digha &nbsp;•&nbsp; AC Rooms from ₹1800/night &nbsp;•&nbsp; Family &amp; Couple Suites
          </p>

          <div className="hero-buttons">
            <a
              href="tel:+918910119231"
              className="btn btn-navy btn-call-hero"
              title="Call Hotel RK International"
              aria-label="Call +91 8910119231"
            >
              <Phone size={18} />
              <span className="btn-text">CALL +91 8910119231</span>
            </a>

            <button
              onClick={() => onOpenBooking(null)}
              className="btn btn-cyan btn-booking-hero"
            >
              <span>Instant Booking</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-whatsapp-hero"
              title="WhatsApp Chat"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
              <span className="btn-text">Whatsapp</span>
            </a>
          </div>

          {/* Mobile Address & Contact Info Bar */}
          <div className="hero-mobile-contact-card">
            <div className="hero-mobile-contact-item">
              <MapPin size={16} color="#002E5B" className="contact-item-icon" />
              <span>B1 Sector, Plot G-13, New Digha, Purba Midnapore, Pin - 721 463 (Near Jahaz Bari)</span>
            </div>
            <div className="hero-mobile-contact-row">
              <a href="tel:+918910119231" className="hero-mobile-contact-item">
                <Phone size={15} color="#002E5B" className="contact-item-icon" />
                <span>+91 8910119231</span>
              </a>
              <a href="mailto:info@hotelrkinternational.com" className="hero-mobile-contact-item">
                <Mail size={15} color="#002E5B" className="contact-item-icon" />
                <span>info@hotelrkinternational.com</span>
              </a>
            </div>
          </div>

        </div>
      </div>


      {/* Mobile Side Action Logos (Left: Phone Call, Right: WhatsApp) - Moves with page scroll */}
      <div className="hero-mobile-side-actions">
        <a
          href="tel:+918910119231"
          className="hero-side-btn hero-side-call"
          aria-label="Call Hotel RK International"
          title="Direct Phone Call"
        >
          <Phone size={24} />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-side-btn hero-side-whatsapp"
          aria-label="WhatsApp Booking Chat"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
