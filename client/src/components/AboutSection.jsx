import React from 'react';
import { MapPin, Headphones, CheckCircle2, Calendar } from 'lucide-react';

const AboutSection = ({ onOpenBooking }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image Collage */}
          <div className="about-images-wrapper">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Hotel RK International New Digha"
              className="about-main-img"
            />
            <div className="about-floating-card">
              <div className="floating-number">2022</div>
              <div className="floating-text">
                Founded With<br />
                <strong>Warm Hospitality & Luxury</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Feature Highlights */}
          <div className="about-content">
            <span className="section-tag">About</span>
            <h2 className="section-title">
              Affordable Stay Near New Digha Sea Beach
            </h2>
            <p className="section-desc">
              Welcome to <strong>Hotel R K International</strong>, one of the finest and most welcoming hotels in New Digha, offering the ultimate coastal leisure experiences. Whether you are traveling with family, on a romantic escape, or visiting on business, our dedicated staff ensures warm hospitality services to make you feel right at home.
            </p>
            <p className="section-desc" style={{ marginTop: '12px' }}>
              Completely designed to meet contemporary traveler needs, Hotel RK International gives you luxurious accommodations that don't burn a hole in your pocket. Rejuvenate, unwind, and experience sweet seaside memories with us!
            </p>

            <div className="about-feature-boxes">
              <div className="about-feature-card">
                <div className="feature-card-icon">
                  <MapPin size={24} color="#20B7E3" />
                </div>
                <h3 className="about-feature-title">Convenient Location</h3>
                <p className="about-feature-desc">
                  Situated in B-1 Sector, New Digha — minutes away from the main sea beach, railway station, and vibrant local sea beach market.
                </p>
              </div>

              <div className="about-feature-card">
                <div className="feature-card-icon">
                  <Headphones size={24} color="#20B7E3" />
                </div>
                <h3 className="about-feature-title">Easy Booking Assistance</h3>
                <p className="about-feature-desc">
                  Direct online and WhatsApp reservation assistance. Fast check-in, transparent pricing, and instant room confirmation.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenBooking(null)}
                className="btn btn-cyan btn-lg"
              >
                <Calendar size={18} />
                <span>Book Your Stay Now</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', fontWeight: '600', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} color="#16a34a" />
                <span>Best Price Guaranteed Direct</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
