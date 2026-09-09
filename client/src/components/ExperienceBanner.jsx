import React from 'react';
import { Phone, Calendar, Award, Users, ThumbsUp, Clock } from 'lucide-react';

const ExperienceBanner = ({ onOpenBooking }) => {
  return (
    <section className="experience-banner">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-tag light">Hotel Near New Digha Sea Beach</span>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            Experience Digha With Comfort & Convenience
          </h2>
          <p className="section-desc" style={{ color: '#cbd5e1' }}>
            Enjoy a relaxing stay at Hotel RK International, offering clean rooms, pleasant sea breeze, and prompt personalized guest service for your perfect weekend getaway.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Well-Appointed Rooms</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Happy Guests Hosted</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">4.8★</div>
            <div className="stat-label">Average Guest Rating</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Front Desk & Assistance</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
          <button
            onClick={() => onOpenBooking(null)}
            className="btn btn-cyan btn-lg"
          >
            <Calendar size={18} />
            <span>Book Your Stay Direct</span>
          </button>
          
          <a
            href="tel:+916289276600"
            className="btn btn-outline-white btn-lg"
          >
            <Phone size={18} />
            <span>Call +91 6289276600</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceBanner;
