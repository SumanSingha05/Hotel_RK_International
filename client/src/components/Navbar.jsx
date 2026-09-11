import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenBooking, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Corporate Booking', href: '#contact', isCorporate: true },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    const href = typeof item === 'string' ? item : item.href;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (item && item.isCorporate) {
      window.dispatchEvent(new CustomEvent('select-corporate-booking'));
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Authentic Logo Image */}
          <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); handleNavClick({ href: '#home' }); }}>
            <img
              src="/logo-transparent.png"
              alt="Hotel RK International Logo"
              className="nav-logo-img"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Nav Actions */}
          <div className="nav-actions">
            <button
              onClick={() => onOpenBooking(null)}
              className="btn btn-cyan btn-sm"
              id="nav-book-now-btn"
            >
              <Calendar size={16} />
              <span>Book Now</span>
            </button>

            <button
              className="nav-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img
            src="/logo-transparent.png"
            alt="Hotel RK International Logo"
            style={{ height: '56px', maxWidth: '230px', objectFit: 'contain', imageRendering: '-webkit-optimize-contrast' }}
          />
          <button
            className="modal-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-drawer-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="mobile-drawer-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking(null);
            }}
            className="btn btn-cyan"
            style={{ width: '100%' }}
          >
            <Calendar size={18} />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
