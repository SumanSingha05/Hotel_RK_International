import React from "react";
import {
  MapPin,
  Headphones,
  CheckCircle2,
  Calendar,
  Compass,
  Briefcase,
  Sparkles,
} from "lucide-react";

const AboutSection = ({ onOpenBooking }) => {
  return (
    <section
      id="about"
      className="section"
      aria-label="About Hotel RK International – New Digha Hotel near Sea Beach"
    >
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Center Hotel Picture surrounded by 4 Landmark Satellites with Animated Connectors */}
          <div className="about-proximity-visual-hub">
            {/* Top Hub Header */}
            <div className="proximity-hub-header">
              <span className="proximity-badge">
                <Compass size={14} className="compass-spin" />
                CENTRAL LOCATION • SURROUNDED BY TOP ATTRACTIONS
              </span>
            </div>

            {/* Orbit / Surround Layout: Center Hotel with Surrounding Landmarks */}
            <div className="proximity-orbit-grid">
              {/* Top-Left Satellite: Dheu Sagar Eco Park */}
              <div className="orbit-satellite sat-top-left">
                <div className="satellite-card">
                  <div className="sat-img-box">
                    <img
                      src="/locations/dhuesagar park.jpeg"
                      alt="Dheu Sagar Eco Park near Hotel RK International"
                      className="sat-thumb-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="sat-text">
                    <h4 className="sat-title">Dheu Sagar Eco Park</h4>
                    <div className="sat-dist-badge" style={{ color: "#10B981" }}>
                      <MapPin size={11} />
                      <span>200m • 3 Mins Walk</span>
                    </div>
                  </div>
                </div>
                <div className="sat-arrow-pointer arrow-top-left">
                  <svg className="sat-arrow-svg" viewBox="0 0 50 30">
                    <path
                      d="M42,26 L10,6"
                      className="orbit-line-anim"
                      stroke="#10B981"
                    />
                    <polygon
                      points="10,6 18,4 12,14"
                      fill="#10B981"
                      className="orbit-head-anim"
                    />
                  </svg>
                </div>
              </div>

              {/* Top-Right Satellite: New Digha Sea Beach */}
              <div className="orbit-satellite sat-top-right">
                <div className="satellite-card">
                  <div className="sat-img-box">
                    <img
                      src="/locations/beach.jpg"
                      alt="New Digha Sea Beach near Hotel RK International"
                      className="sat-thumb-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="sat-text">
                    <h4 className="sat-title">New Digha Sea Beach</h4>
                    <div className="sat-dist-badge" style={{ color: "#0284c7" }}>
                      <MapPin size={11} />
                      <span>300m • 5 Mins Walk</span>
                    </div>
                  </div>
                </div>
                <div className="sat-arrow-pointer arrow-top-right">
                  <svg className="sat-arrow-svg" viewBox="0 0 50 30">
                    <path
                      d="M8,26 L40,6"
                      className="orbit-line-anim"
                      stroke="#0284c7"
                    />
                    <polygon
                      points="40,6 38,14 32,4"
                      fill="#0284c7"
                      className="orbit-head-anim"
                    />
                  </svg>
                </div>
              </div>

              {/* CENTER: Hotel RK International Photo Card */}
              <div className="orbit-center-hotel">
                <div className="hotel-photo-frame">
                  <img
                    src="/about-building.jpg"
                    alt="Hotel RK International – A Boutique Hotel in New Digha"
                    className="hotel-hub-img"
                    loading="lazy"
                  />
                  <div className="hotel-hub-glass-label">
                    <div className="hotel-hub-pulse-dot" />
                    <div>
                      <strong>Hotel RK International</strong>
                      <span>Your Boutique Stay at the Center</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-Left Satellite: Digha Railway Station */}
              <div className="orbit-satellite sat-bottom-left">
                <div className="sat-arrow-pointer arrow-bottom-left">
                  <svg className="sat-arrow-svg" viewBox="0 0 50 30">
                    <path
                      d="M42,4 L10,24"
                      className="orbit-line-anim"
                      stroke="#8b5cf6"
                    />
                    <polygon
                      points="10,24 12,16 18,26"
                      fill="#8b5cf6"
                      className="orbit-head-anim"
                    />
                  </svg>
                </div>
                <div className="satellite-card">
                  <div className="sat-img-box">
                    <img
                      src="/locations/station.jpg"
                      alt="Digha Railway Station near Hotel RK International"
                      className="sat-thumb-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="sat-text">
                    <h4 className="sat-title">Digha Railway Station</h4>
                    <div className="sat-dist-badge" style={{ color: "#8b5cf6" }}>
                      <MapPin size={11} />
                      <span>900m • 3 Mins Drive</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-Right Satellite: Digha Jagannath Temple */}
              <div className="orbit-satellite sat-bottom-right">
                <div className="sat-arrow-pointer arrow-bottom-right">
                  <svg className="sat-arrow-svg" viewBox="0 0 50 30">
                    <path
                      d="M8,4 L40,24"
                      className="orbit-line-anim"
                      stroke="#f59e0b"
                    />
                    <polygon
                      points="40,24 32,26 38,16"
                      fill="#f59e0b"
                      className="orbit-head-anim"
                    />
                  </svg>
                </div>
                <div className="satellite-card">
                  <div className="sat-img-box">
                    <img
                      src="/locations/jagannath temple.jpg"
                      alt="Digha Jagannath Temple near Hotel RK International"
                      className="sat-thumb-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="sat-text">
                    <h4 className="sat-title">Digha Jagannath Temple</h4>
                    <div className="sat-dist-badge" style={{ color: "#d97706" }}>
                      <MapPin size={11} />
                      <span>1.8 km • 7 Mins Drive</span>
                    </div>
                  </div>
                </div>
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
              Welcome to <strong>Hotel R K International</strong>, one of the
              finest and most welcoming boutique hotels in New Digha, offering
              the ultimate coastal leisure experiences. Situated within walking
              distance to New Digha Sea Beach and Dheu Sagar Park, our dedicated
              staff ensures warm hospitality to make you feel right at home.
            </p>

            {/* 4 Compact Feature Write-Ups in 2x2 Grid */}
            <div className="about-feature-boxes">
              <div className="about-feature-card">
                <div className="feature-card-icon">
                  <MapPin size={20} color="#20B7E3" />
                </div>
                <h3 className="about-feature-title">Convenient Location</h3>
              </div>

              <div className="about-feature-card">
                <div className="feature-card-icon">
                  <Headphones size={20} color="#20B7E3" />
                </div>
                <h3 className="about-feature-title">Easy Booking</h3>
              </div>

              <div className="about-feature-card">
                <div className="feature-card-icon">
                  <Briefcase size={20} color="#20B7E3" />
                </div>
                <h3 className="about-feature-title">Corporate Booking Friendly</h3>
              </div>

              <div className="about-feature-card">
                <div className="feature-card-icon">
                  <Sparkles size={20} color="#20B7E3" />
                </div>
                <h3 className="about-feature-title">All amenities provided</h3>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => onOpenBooking(null)}
                className="btn btn-cyan btn-lg"
              >
                <Calendar size={18} />
                <span>Book Your Stay Now</span>
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#166534",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
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
