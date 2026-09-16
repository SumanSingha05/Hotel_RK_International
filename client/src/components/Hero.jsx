import React, { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";

const WhatsAppIcon = ({ size = 26, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495.16.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const heroImages = [
  {
    src: "/hero-building.png",
    caption: "Hotel RK International Sunset Facade",
  },
  {
    src: "/hero-pool-night.png",
    caption: "Luxury Swimming Pool with Ambient Evening Lights",
  },
  { src: "/hero-restaurant.png", caption: "Multi-Cuisine In-House Restaurant" },
  {
    src: "/hero-pool-day.jpg",
    caption: "Sparkling Swimming Pool & Outdoor Relaxation",
  },
];

const statsData = [
  { target: 50, suffix: "+", label: "Well-Appointed Rooms", float: false },
  { target: 10000, suffix: "+", label: "Happy Guests Hosted", float: false },
  { target: 4.8, suffix: "★", label: "Average Guest Rating", float: true },
  { target: 24, suffix: "/7", label: "Front Desk & Assistance", float: false },
];

const AnimatedStats = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [showLabels, setShowLabels] = useState(statsData.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    statsData.forEach((stat, index) => {
      setTimeout(() => {
        let startTimestamp = null;
        const duration = 1500; // 1.5s counting duration

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 4);

          setCounts((prev) => {
            const newCounts = [...prev];
            const currentVal = easeProgress * stat.target;
            newCounts[index] = stat.float
              ? currentVal.toFixed(1)
              : Math.floor(currentVal).toLocaleString("en-US");
            return newCounts;
          });

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setShowLabels((prev) => {
              const newLabels = [...prev];
              newLabels[index] = true;
              return newLabels;
            });
          }
        };

        window.requestAnimationFrame(step);
      }, index * 200); // 200ms stagger delay
    });
  }, [hasAnimated]);

  return (
    <>
      <style>{`
        .hero-stats-banner {
          position: absolute;
          bottom: 30px;
          left: 0;
          width: 100%;
          padding: 24px 0;
          z-index: 10;
          overflow: hidden; /* Hide marquee overflow */
        }
        .stats-grid-inner {
          display: flex;
          align-items: center;
          gap: 30px; /* Reduced space between stats */
          flex-wrap: nowrap;
          width: max-content;
          animation: statsMarquee 25s linear infinite;
        }
        .stats-grid-inner:hover {
          animation-play-state: paused;
        }
        @keyframes statsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .stat-card-custom {
          text-align: center;
          opacity: 0;
          transform: translateX(-40px); 
          text-shadow: 0 4px 15px rgba(0,0,0,0.6);
          flex-shrink: 0; 
          padding: 0 15px; /* Gentle padding */
        }
        .stat-card-custom.animate-in {
          animation: slideRightFade 0.6s ease forwards;
        }
        @keyframes slideRightFade {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .stat-val-text {
          font-size: 1.6rem; 
          font-weight: 800;
          color: #20B7E3;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        .stat-lbl-text {
          font-size: 0.85rem; 
          font-weight: 600;
          color: #ffffff;
          margin-top: 4px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .stat-lbl-text.show {
          opacity: 1;
        }
      `}</style>
      <div ref={containerRef} className="hero-stats-banner">
        <div className="stats-grid-inner">
          {/* First set of stats */}
          {statsData.map((stat, i) => (
            <div
              key={`stat1-${i}`}
              className={`stat-card-custom ${hasAnimated ? "animate-in" : ""}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="stat-val-text">
                {counts[i]}
                {stat.suffix}
              </div>
              <div className={`stat-lbl-text ${showLabels[i] ? "show" : ""}`}>
                {stat.label}
              </div>
            </div>
          ))}
          {/* Duplicated set for seamless infinite marquee scroll */}
          {statsData.map((stat, i) => (
            <div
              key={`stat2-${i}`}
              className={`stat-card-custom ${hasAnimated ? "animate-in" : ""}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="stat-val-text">
                {counts[i]}
                {stat.suffix}
              </div>
              <div className={`stat-lbl-text ${showLabels[i] ? "show" : ""}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Hero = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl =
    "https://wa.me/918910119231?text=Hello%20Hotel%20RK%20International%2C%20I%20am%20interested%20in%20booking%20a%20room%20in%20New%20Digha.%20Please%20share%20availability.";

  return (
    <section
      id="home"
      className="hero"
      aria-label="Hotel RK International – Best Hotel in New Digha near Sea Beach"
    >
      <div className="hero-slider-bg">
        {heroImages.map((item, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.src})` }}
            role="img"
            aria-label={item.caption}
          />
        ))}
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">Comfortable Rooms</span>
            <span className="hero-title-for">for</span>
            <span className="hero-title-line">Your New Digha Gateway</span>
          </h1>
          <p
            className="hero-subtitle"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.05rem",
              marginBottom: "8px",
              fontWeight: "400",
            }}
          >
            Hotel RK International, New Digha &nbsp;•&nbsp; AC Rooms from
            ₹1800/night &nbsp;•&nbsp; Family &amp; Couple Suites
          </p>

          <div className="hero-buttons">
            <a href="tel:+918910119231" className="btn btn-navy btn-call-hero">
              <Phone size={18} />
              <span className="btn-text">CALL +91 8910119231</span>
            </a>
            <button
              onClick={() => onOpenBooking(null)}
              className="btn btn-cyan btn-booking-hero"
            >
              <span>Book Now</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-whatsapp-hero"
            >
              <WhatsAppIcon size={20} />
              <span className="btn-text">Whatsapp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-mobile-side-actions">
        <a href="tel:+918910119231" className="hero-side-btn hero-side-call">
          <Phone size={24} />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-side-btn hero-side-whatsapp"
        >
          <WhatsAppIcon size={26} />
        </a>
      </div>

      <AnimatedStats />
    </section>
  );
};

export default Hero;
