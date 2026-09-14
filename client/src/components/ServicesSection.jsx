import React, { useState, useEffect, useRef } from 'react';

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8C5938" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="19.5" r="1.5" fill="#8C5938" stroke="none" />
      </svg>
    ),
    title: 'Free WiFi'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#8C5938">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V7h.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H8v2H7zm3 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        <circle cx="17.5" cy="4.5" r="1" />
        <circle cx="20.5" cy="5.2" r="1" />
        <circle cx="19.5" cy="8.2" r="1" />
        <circle cx="17" cy="9.2" r="1" />
      </svg>
    ),
    title: '24 / 7 Room Services'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8C5938" strokeWidth="2.5" strokeLinecap="round">
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
        <line x1="12" y1="2" x2="12" y2="12" />
      </svg>
    ),
    title: '24 / 7 Power Backup'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#8C5938">
        <path d="M5.5 3h4.2l-2.1 4.5V13h1.8v1.5H4.6V13h1.8V7.5L4.3 3h1.2z" transform="rotate(-18 7 8)" />
        <path d="M14.3 3h4.2l-2.1 4.5V13h1.8v1.5h-3.6V13h1.8V7.5L13.1 3h1.2z" transform="rotate(18 17 8)" />
        <circle cx="12" cy="4" r="0.8" />
      </svg>
    ),
    title: 'AC Multi-Cuisine Restaurant'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8C5938" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3v11" />
        <path d="M13 3v11" />
        <path d="M7 4a3 3 0 0 1 3-3 3 3 0 0 1 3 3" />
        <line x1="7" y1="7" x2="13" y2="7" />
        <line x1="7" y1="10.5" x2="13" y2="10.5" />
        <path d="M3 17c1.5-1 3.5-1 5 0s3.5 1 5 0 3.5-1 5 0 2 0.7 3 0" />
        <path d="M3 20.5c1.5-1 3.5-1 5 0s3.5 1 5 0 3.5-1 5 0 2 0.7 3 0" />
      </svg>
    ),
    title: 'Swimming Pool'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#8C5938">
        <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm2.5-3.5L6.3 11h11.4l-1.2-3.5a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5zM6.5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm11 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      </svg>
    ),
    title: 'Car Parking'
  }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section section-bg-muted" ref={sectionRef}>
      <div className="container" style={{ overflow: 'hidden' }}>
        <div className="section-header">
          <span className="section-tag">Services</span>
          <h2 className="section-title">
            Enjoy a Relaxing Stay at Hotel RK International
          </h2>
          <p className="section-desc">
            We focus on providing our guests with essential comforts, thoughtful hospitality, and peace of mind during their Digha vacation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, idx) => {
            const isFirstRow = idx < 3;
            const directionClass = isFirstRow ? 'service-card-left' : 'service-card-right';
            const staggerDelay = isFirstRow
              ? `${idx * 0.12}s`
              : `${(idx - 3) * 0.12}s`;

            return (
              <div
                key={idx}
                className={`service-card ${directionClass} ${isVisible ? 'animated' : ''}`}
                style={{ transitionDelay: isVisible ? staggerDelay : '0s' }}
              >
                <div className="service-icon-box">
                  {s.icon}
                </div>
                <h3 className="service-title">{s.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
