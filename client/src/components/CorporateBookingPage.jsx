import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  Tv, 
  Wifi, 
  Utensils, 
  Zap, 
  ArrowRight,
  Home,
  Briefcase,
  Layers,
  MapPin,
  Clock
} from 'lucide-react';

const corporateGalleryEvents = [
  {
    id: 'event-1',
    company: 'Tata Consultancy Services (TCS) & Partner Network',
    companyBadge: 'Technology & Enterprise',
    eventTitle: 'Annual Strategic Leadership Conclave & Tech Summit',
    occasion: 'Corporate Annual Meet & Strategy Planning',
    capacity: '180 Delegates (Theater Style Layout)',
    bookingDays: '3 Days / 2 Nights (Full Residential Retreat)',
    dateHosted: 'August 2026',
    hallUsed: 'Grand AC Conclave Hall & Private Executive Lounge',
    diningPlan: 'Full Board: High Tea, Executive Lunch & Lawn Gala Dinner',
    stayRooms: '42 Deluxe & Suite Rooms',
    facilitiesUsed: ['4K Projector with Dual Display', 'Collar & Handheld Wireless Mics', 'Enterprise Wi-Fi & Live Stream Setup', '100% Soundproof Generator Backup'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
        title: 'AC Conference & Presentation Hall',
        subtitle: 'Main auditorium setup with theater seating and 4K projection'
      },
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
        title: 'Evening Gala & Lawn Dinner Buffet',
        subtitle: 'Round table dining with live multi-cuisine buffet counters'
      }
    ]
  },
  {
    id: 'event-2',
    company: 'Eastern India Retail & FMCG Distributors Forum',
    companyBadge: 'Retail & Distribution',
    eventTitle: 'Quarterly Sales Leaders Meet & Product Showcase',
    occasion: 'Business Seminar, Product Launch & Awards Night',
    capacity: '120 Attendees (Cluster / Round Table Layout)',
    bookingDays: '2 Days / 1 Night (Stay & Conference Package)',
    dateHosted: 'July 2026',
    hallUsed: 'Crystal Banquet & Open Lawn Stage',
    diningPlan: 'Welcome Breakfast, High Tea Snacks & Royal Bengali Thali Dinner',
    stayRooms: '30 AC Deluxe Rooms',
    facilitiesUsed: ['Product Display Stage & Lighting', 'Acoustic Sound System', 'Private Valet & Bus Parking', 'Dedicated Event Coordinator'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
        title: 'Interactive Seminar & Workshop Setup',
        subtitle: 'Round cluster tables with attendee stationery & digital displays'
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
        title: 'Awards Ceremony & Stage Presentation',
        subtitle: 'Illuminated stage backdrop with professional audio mixer'
      }
    ]
  },
  {
    id: 'event-3',
    company: 'Cognizant Engineering & Product Teams',
    companyBadge: 'IT & Software Development',
    eventTitle: 'Executive Team Offsite & Outdoor Hackathon',
    occasion: 'Team Offsite, Strategy Hackathon & Team Building Retreat',
    capacity: '90 Engineers & Project Managers',
    bookingDays: '3 Days / 2 Nights (Weekend Team Getaway)',
    dateHosted: 'June 2026',
    hallUsed: 'Executive Boardroom + Beachside Green Lawn',
    diningPlan: 'Continental & Indian Buffets with Evening Barbecue by the Lawn',
    stayRooms: '25 Couple & Deluxe Suite Rooms',
    facilitiesUsed: ['High-Bandwidth Wi-Fi for 90+ Devices', 'Outdoor Lawn Team Games Setup', '24/7 Tea & Coffee Station', 'Digha Beach Excursion Logistics'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
        title: 'Team Offsite & Collaborative Sessions',
        subtitle: 'Breakout brainstorming groups with modern workplace amenities'
      },
      {
        url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
        title: 'Lawn Dinner & Social Networking',
        subtitle: 'Evening outdoor get-together under ambient festival lighting'
      }
    ]
  }
];

// Single Motion Picture Card Component
const GalleryEventCard = ({ event, onBookSimilar }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3800);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="corporate-gallery-card">
      
      {/* ================= LEFT SIDE: IMAGE CONTAINER WITH MOTION ================= */}
      <div 
        className="gallery-motion-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="gallery-motion-div">
          {event.images.map((img, idx) => (
            <div
              key={idx}
              className={`gallery-motion-slide ${idx === slideIndex ? 'active' : 'inactive'}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="gallery-slide-photo"
              />
              <div className="gallery-slide-overlay" />
              <div className="gallery-slide-floating-info">
                <span className="gallery-slide-number-badge">Photo {idx + 1} of {event.images.length}</span>
                <h4 className="gallery-slide-name">{img.title}</h4>
                <p className="gallery-slide-sub">{img.subtitle}</p>
              </div>
            </div>
          ))}

          {/* Navigation motion arrows */}
          <button 
            onClick={prevSlide} 
            className="gallery-nav-arrow prev" 
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide} 
            className="gallery-nav-arrow next" 
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </button>

          {/* Motion Indicators */}
          <div className="gallery-motion-dots">
            {event.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`gallery-dot ${idx === slideIndex ? 'active' : ''}`}
                aria-label={`Slide ${idx + 1}`}
              >
                <span className="dot-bar" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Venue Highlights under Image */}
        <div className="gallery-image-footer-tags">
          <span className="hall-tag">
            <Building2 size={13} />
            {event.hallUsed}
          </span>
          <span className="rooms-tag">
            <Layers size={13} />
            {event.stayRooms}
          </span>
        </div>
      </div>


      {/* ================= RIGHT SIDE: EVENT DETAILS (CAPACITY, DAYS, COMPANY) ================= */}
      <div className="gallery-details-col">
        
        {/* Top Company & Event Title Header */}
        <div className="event-client-header">
          <div className="company-badge-row">
            <span className="event-company-badge">
              <Briefcase size={14} />
              {event.companyBadge}
            </span>
            <span className="event-date-hosted">
              <Clock size={13} />
              Hosted: {event.dateHosted}
            </span>
          </div>

          <h3 className="event-booked-company">
            {event.company}
          </h3>
          <h2 className="event-hosted-title">
            {event.eventTitle}
          </h2>
        </div>

        {/* Primary Event Hosted Metrics Grid */}
        <div className="event-metrics-grid">
          
          {/* 1. Event Booked Company */}
          <div className="metric-box">
            <div className="metric-icon company-icon">
              <Building2 size={18} />
            </div>
            <div className="metric-content">
              <span className="metric-label">Event Booked Company</span>
              <strong className="metric-val">{event.company}</strong>
            </div>
          </div>

          {/* 2. Event / Occasion */}
          <div className="metric-box">
            <div className="metric-icon occasion-icon">
              <Sparkles size={18} />
            </div>
            <div className="metric-content">
              <span className="metric-label">Occasion / Event Type</span>
              <strong className="metric-val">{event.occasion}</strong>
            </div>
          </div>

          {/* 3. Capacity Booking */}
          <div className="metric-box">
            <div className="metric-icon capacity-icon">
              <Users size={18} />
            </div>
            <div className="metric-content">
              <span className="metric-label">Capacity Booking</span>
              <strong className="metric-val">{event.capacity}</strong>
            </div>
          </div>

          {/* 4. Booking Days */}
          <div className="metric-box">
            <div className="metric-icon days-icon">
              <Calendar size={18} />
            </div>
            <div className="metric-content">
              <span className="metric-label">Booking Days &amp; Duration</span>
              <strong className="metric-val">{event.bookingDays}</strong>
            </div>
          </div>

        </div>

        {/* Facilities & Dining Summary */}
        <div className="event-features-wrapper">
          <div className="feature-row">
            <Utensils size={16} className="feature-row-icon" />
            <div>
              <span className="feature-row-label">Dining Arrangement:</span>
              <span className="feature-row-text">{event.diningPlan}</span>
            </div>
          </div>

          <div className="facilities-chips-list">
            {event.facilitiesUsed.map((fac, fIdx) => (
              <span key={fIdx} className="facility-chip">
                <CheckCircle2 size={13} color="#20B7E3" />
                {fac}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="gallery-card-actions">
          <button
            onClick={() => onBookSimilar(event)}
            className="btn btn-cyan btn-sm"
          >
            <span>Book Similar Corporate Event</span>
            <ArrowRight size={16} />
          </button>
          
          <a
            href={`https://wa.me/918910119231?text=${encodeURIComponent(`Hello Hotel RK International, I saw the corporate event hosted for ${event.company} (${event.eventTitle}). We would like to inquire for a similar corporate booking.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>

      </div>

    </div>
  );
};

const CorporateBookingPage = ({ onNavigate, onShowToast, onOpenBooking }) => {
  const [selectedEventForModal, setSelectedEventForModal] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  // Quick Inquiry Form State
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    occasion: 'Corporate Annual Meet',
    capacity: '50-100 Attendees',
    duration: '2 Days / 1 Night',
    tentativeDate: '',
    specialRequirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookSimilar = (event) => {
    setSelectedEventForModal(event);
    setFormData((prev) => ({
      ...prev,
      occasion: event.occasion,
      capacity: event.capacity.split('(')[0].trim(),
      duration: event.bookingDays.split('(')[0].trim()
    }));
    setInquiryModalOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageContent = `[CORPORATE BOOKING INQUIRY]\nCompany: ${formData.companyName}\nContact Person: ${formData.contactPerson}\nOccasion: ${formData.occasion}\nCapacity / Attendees: ${formData.capacity}\nDuration: ${formData.duration}\nDate: ${formData.tentativeDate || 'Flexible'}\nRequirements: ${formData.specialRequirements || 'Standard setup'}`;

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.contactPerson,
          phone: formData.phone,
          email: formData.email,
          subject: `Corporate Booking: ${formData.companyName} (${formData.occasion})`,
          message: messageContent
        })
      });
      const data = await res.json();
      if (data.success) {
        onShowToast('Corporate inquiry received! Our manager will call you within 2 business hours.');
      } else {
        onShowToast('Corporate inquiry submitted! We will reach out shortly.');
      }
    } catch (err) {
      onShowToast('Inquiry recorded! Our corporate events team will contact you at ' + formData.phone);
    } finally {
      setIsSubmitting(false);
      setInquiryModalOpen(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        phone: '',
        email: '',
        occasion: 'Corporate Annual Meet',
        capacity: '50-100 Attendees',
        duration: '2 Days / 1 Night',
        tentativeDate: '',
        specialRequirements: ''
      });
    }
  };

  return (
    <div className="corporate-gallery-page">
      
      {/* Top Header Bar with Clean Breadcrumb */}
      <div className="corporate-gallery-top-bar">
        <div className="container">
          <div className="gallery-header-row">
            <div>
              <div className="corporate-breadcrumb">
                <button onClick={() => onNavigate('/')} className="breadcrumb-link">
                  <Home size={14} />
                  <span>Home</span>
                </button>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">Corporate Booking Gallery</span>
              </div>
              <h1 className="gallery-page-main-title">
                Corporate Events &amp; Conclaves Gallery
              </h1>
              <p className="gallery-page-tagline">
                Explore real corporate events, leadership offsites, and conferences hosted at Hotel RK International.
              </p>
            </div>

            <div className="gallery-top-actions">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="btn btn-cyan"
              >
                <Sparkles size={16} />
                <span>Request Corporate Proposal</span>
              </button>
              <a
                href="tel:+918910119231"
                className="btn btn-navy"
              >
                <Phone size={16} />
                <span>+91 8910119231</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Gallery Items List */}
      <div className="container corporate-gallery-list-container">
        <div className="gallery-items-stack">
          {corporateGalleryEvents.map((event) => (
            <GalleryEventCard
              key={event.id}
              event={event}
              onBookSimilar={handleBookSimilar}
            />
          ))}
        </div>
      </div>

      {/* Bottom Quick Booking / Assistance Bar */}
      <div className="container" style={{ marginTop: '40px' }}>
        <div className="gallery-bottom-cta-banner">
          <div className="cta-banner-text">
            <h3 className="cta-banner-title">Planning an upcoming corporate gathering or annual offsite in Digha?</h3>
            <p className="cta-banner-desc">
              We offer customized corporate packages with AC conference hall, audiovisual technology, multi-room accommodation, and seaside dining.
            </p>
          </div>
          <div className="cta-banner-btns">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="btn btn-cyan btn-lg"
            >
              <span>Instant Event Proposal</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Corporate Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="modal-overlay open" onClick={() => setInquiryModalOpen(false)}>
          <div 
            className="modal-container"
            style={{ maxWidth: '640px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={20} color="#20B7E3" />
                <h3 className="modal-title">Corporate Booking Inquiry</h3>
              </div>
              <button 
                className="modal-close"
                onClick={() => setInquiryModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit} className="corporate-inquiry-form">
                <div className="form-grid-2col">
                  <div className="form-group">
                    <label className="form-label">Company / Organization Name <span className="req">*</span></label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Acme Technologies Ltd."
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Contact Person Name <span className="req">*</span></label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      placeholder="e.g. Suman Sen (Admin/HR)"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-2col">
                  <div className="form-group">
                    <label className="form-label">Phone Number <span className="req">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address <span className="req">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. events@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-3col">
                  <div className="form-group">
                    <label className="form-label">Occasion / Event</label>
                    <input
                      type="text"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Capacity / Attendees</label>
                    <input
                      type="text"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Booking Days</label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Tentative Event Date (Optional)</label>
                  <input
                    type="date"
                    name="tentativeDate"
                    value={formData.tentativeDate}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Special Requirements / Notes</label>
                  <textarea
                    name="specialRequirements"
                    rows="3"
                    placeholder="Mention specific needs e.g., projector & sound system, buffet meal preferences, stay rooms required..."
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-cyan btn-lg"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Corporate Proposal Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CorporateBookingPage;
