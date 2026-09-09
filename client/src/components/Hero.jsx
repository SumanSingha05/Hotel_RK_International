import React from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, Waves } from 'lucide-react';

const Hero = ({ onOpenBooking }) => {
  const whatsappUrl = "https://wa.me/916289276600?text=Hello%20Hotel%20RK%20International%2C%20I%20am%20interested%20in%20booking%20a%20room%20in%20New%20Digha.%20Please%20share%20availability.";

  return (
    <section id="home" className="hero">
      <div className="container">
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
            Finding the right hotel in New Digha can make your coastal trip more convenient, relaxing, and memorable. Experience spacious AC rooms, attached modern bathrooms, 24*7 power backup, and authentic multi-cuisine dining just a short stroll from New Digha Sea Beach.
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

          <div style={{ display: 'flex', gap: '20px', marginTop: '36px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Waves size={16} color="#20B7E3" />
              <span>Minutes to Sea Beach</span>
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
