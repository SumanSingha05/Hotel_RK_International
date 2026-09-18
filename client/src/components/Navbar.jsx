import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import SlideFillButton from './SlideFillButton';

const Navbar = ({ onOpenBooking, activeSection, currentPath = '/', onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCorporateRoute = typeof currentPath === 'string' && decodeURIComponent(currentPath).toLowerCase().includes('corporate');
  const isInnerRoute = typeof currentPath === 'string' && currentPath !== '/';

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Corporate Booking', href: '/corporate-booking', isCorporate: true },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    
    if (item.isCorporate) {
      if (onNavigate) {
        onNavigate('/corporate-booking');
      } else {
        window.history.pushState({}, '', '/corporate-booking');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      return;
    }

    const href = typeof item === 'string' ? item : item.href;

    if (isInnerRoute) {
      // If we are currently on Corporate Booking page, navigate back to home then scroll
      if (onNavigate) {
        onNavigate('/', href);
      } else {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // On Home Page, smooth scroll to element
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Authentic Logo Image */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick({ href: '#home', label: 'Home' });
            }}
          >
            <img
              src="/logo-transparent.png"
              alt="Hotel RK International Logo"
              className="nav-logo-img"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navItems.map((item) => {
              const isActive = item.isCorporate 
                ? isCorporateRoute 
                : (!isCorporateRoute && activeSection === item.href.slice(1));

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Nav Actions */}
          <div className="nav-actions">
            <SlideFillButton
              id="nav-book-now-btn"
              label="Book Now"
              onClick={() => onOpenBooking(null)}
              padding="9px 18px"
              rounded={20}
              colors={{ fill: "#E6F8FD", textColor: "#000000" }}
              icon={{ color: "#000000", hoverColor: "#FFFFFF", size: 15 }}
              border={{ borderWidth: 1, borderStyle: "solid", borderColor: "#BAE6FD" }}
              water={{
                color: "#002E5B",
                direction: "up",
                textColor: "#FFFFFF",
                waveSpeed: 60,
                defaultFill: 3,
              }}
              font={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "0.88rem",
                letterSpacing: "0.3px",
              }}
            >
              <Calendar size={15} style={{ marginRight: "6px" }} />
            </SlideFillButton>

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
        <div
          className="mobile-drawer-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingBottom: '14px',
            marginBottom: '20px',
            borderBottom: '1px solid #e2e8f0',
          }}
        >
          <img
            src="/logo-transparent.png"
            alt="Hotel RK International Logo"
            className="mobile-drawer-logo"
            style={{ height: '42px', maxWidth: '160px', width: 'auto', objectFit: 'contain' }}
          />

          {/* Direct Top-Right Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            id="mobile-drawer-close-btn"
            title="Close menu"
            style={{
              width: '38px',
              height: '38px',
              minWidth: '38px',
              borderRadius: '50%',
              backgroundColor: '#002E5B',
              color: '#ffffff',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 46, 91, 0.25)',
              padding: 0,
              margin: 0,
            }}
          >
            ✕
          </button>
        </div>

        <ul className="mobile-drawer-links">
          {navItems.map((item) => {
            const isActive = item.isCorporate
              ? isCorporateRoute
              : (!isCorporateRoute && activeSection === item.href.slice(1));

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
          <SlideFillButton
            label="Book Now"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking(null);
            }}
            padding="12px 24px"
            rounded={16}
            colors={{ fill: "#E6F8FD", textColor: "#000000" }}
            icon={{ color: "#000000", hoverColor: "#FFFFFF", size: 18 }}
            border={{ borderWidth: 1, borderStyle: "solid", borderColor: "#BAE6FD" }}
            water={{
              color: "#002E5B",
              direction: "up",
              textColor: "#FFFFFF",
              waveSpeed: 60,
              defaultFill: 3,
            }}
            style={{ width: "100%" }}
            font={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.4px",
            }}
          >
            <Calendar size={18} style={{ marginRight: "8px" }} />
          </SlideFillButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
