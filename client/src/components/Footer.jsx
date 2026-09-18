import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const Footer = ({ onOpenPolicy, onOpenAdmin, onNavigate, currentPath = '/' }) => {
  const isCorporateRoute = typeof currentPath === 'string' && decodeURIComponent(currentPath).toLowerCase().includes('corporate');

  const scrollToSection = (id) => {
    if (isCorporateRoute) {
      if (onNavigate) {
        onNavigate('/', id);
      } else {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        setTimeout(() => {
          const el = document.querySelector(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCorporateClick = () => {
    if (onNavigate) {
      onNavigate('/corporate-booking');
    } else {
      window.history.pushState({}, '', '/corporate-booking');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ marginBottom: "14px" }}>
              <img
                src="/logo-white.png"
                alt="Hotel RK International Logo"
                style={{
                  height: "48px",
                  maxWidth: "210px",
                  objectFit: "contain",
                  filter: "brightness(1.1)",
                }}
              />
            </div>
            <p className="footer-desc">
              Founded in 2022, Hotel RK International offers one of the most
              delightful hospitality experiences in New Digha. Clean, fully
              furnished AC rooms, 24/7 power backup, lawn, and authentic
              multi-cuisine dining near the sea beach.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#home")}
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={handleCorporateClick}
                  style={{ color: isCorporateRoute ? 'var(--accent-cyan)' : 'inherit', fontWeight: isCorporateRoute ? '600' : 'normal' }}
                >
                  Corporate Booking
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#about")}
                >
                  About Us
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#services")}
                >
                  Services & Amenities
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#rooms")}
                >
                  Rooms & Tariff
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#gallery")}
                >
                  Photo Gallery
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#reviews")}
                >
                  Guest Reviews
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Types */}
          <div>
            <h4 className="footer-col-title">Accommodations</h4>
            <ul className="footer-links">
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#rooms")}
                >
                  Deluxe Room
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#rooms")}
                >
                  Premium Deluxe Room
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#rooms")}
                >
                  Three Bedded Deluxe
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#rooms")}
                >
                  Couple Suite Room
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#rooms")}
                >
                  Family Suite Room
                </span>
              </li>
              <li>
                <span
                  className="footer-link"
                  onClick={() => scrollToSection("#rooms")}
                >
                  Front Sea Facing Deluxe
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div>
            <h4 className="footer-col-title">Contact Info</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>
                B1 Sector, Plot G-13, New Digha, Purba Midnapore, Pin - 721 463
                (Near Jahaz Bari)
              </span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                <a href="tel:+918910119231" style={{ color: "inherit" }}>
                  +91 8910119231
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <a
                  href="mailto:info@hotelrkinternational.com"
                  style={{ color: "inherit" }}
                >
                  info@hotelrkinternational.com
                </a>
                <br />
                <a
                  href="https://www.hotelrkinternational.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  www.hotelrkinternational.com
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} />
              <span>Check-in: 11:00 AM • Check-out: 10:00 AM</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Policies matching Seabird Digha */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Hotel R K International. All Rights
            Reserved.
          </div>
          <div className="footer-bottom-links">
            <span onClick={() => onOpenPolicy("privacy")}>Privacy Policy</span>
            <span onClick={() => onOpenPolicy("terms")}>
              Terms & Conditions
            </span>
            <span onClick={() => onOpenPolicy("disclaimer")}>Disclaimer</span>
            {onOpenAdmin && (
              <span onClick={onOpenAdmin} style={{ opacity: 0.7 }}>
                • Staff Portal
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
