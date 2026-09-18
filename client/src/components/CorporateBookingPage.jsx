import React, { useState, useEffect, useRef } from "react";
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
  Clock,
  CheckCircle,
  X,
} from "lucide-react";

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

const corporateGalleryEvents = [
  {
    id: "event-1",
    company: "VAIBWORK",
    companyBadge: "Software Development Company",
    eventTitle: "Annual Meet and Success Party",
    occasion: "Corporate Annual Meet & Strategy Planning",
    capacity: "20 Attendees",
    bookingDays: "3 Days / 2 Nights (Full Residential Retreat)",
    dateHosted: "August 2026",
    hallUsed: "Grand AC Conclave Hall & Private Executive Lounge",
    diningPlan: "Full Board: High Tea, Executive Lunch & Lawn Gala Dinner",
    stayRooms: "42 Deluxe & Suite Rooms",

    images: [
      {
        url: "/hotel pics/ln.jpeg",
      },
      {
        url: "/hotel pics/lounge pic.jpg",
      },
    ],
  },
  {
    id: "event-2",
    company: "Shaw Manufacturing",
    companyBadge: "Pulses Manufacturing Company",
    eventTitle: "Annual Meet and Success Party",
    occasion: "Business Seminar, Product Launch & Awards Night",
    capacity: "100 Attendees",
    bookingDays: "2 Days / 1 Night (Stay & Conference Package)",
    dateHosted: "July 2026",
    hallUsed: "Crystal Banquet",
    diningPlan:
      "Welcome Breakfast, High Tea Snacks & Royal Bengali Thali Dinner",
    stayRooms: "30 AC Deluxe Rooms",

    images: [
      {
        url: "/hotel pics/lounge pic.jpg",
      },
      {
        url: "/hotel pics/room pic.jpeg",
      },
    ],
  },
  {
    id: "event-3",
    company: "Maharaja Hosiery",
    companyBadge: "Lux Cozi Dealer",
    eventTitle: "Annual Meet and Success Party",
    occasion: "Team Offsite, Strategy Hackathon & Team Building Retreat",
    capacity: "150 Attendees",
    bookingDays: "3 Days / 2 Nights (Weekend Team Getaway)",
    dateHosted: "June 2026",
    hallUsed: "Executive Boardroom",
    diningPlan:
      "Continental & Indian Buffets with Evening Barbecue by the Lawn",
    stayRooms: "25 Couple & Deluxe Suite Rooms",

    images: [
      {
        url: "/hotel pics/room pic.jpeg",
      },
      {
        url: "/hotel pics/ln.jpeg",
      },
    ],
  },
  {
    id: "event-4",
    company: "Ankita Traders",
    companyBadge: "Wholesaler of Pulses",
    eventTitle: "Annual Meet and Success Party",
    occasion: "Team Offsite, Strategy Hackathon & Team Building Retreat",
    capacity: "30 Attendees",
    bookingDays: "3 Days / 2 Nights (Weekend Team Getaway)",
    dateHosted: "June 2026",
    hallUsed: "Executive Boardroom",
    diningPlan:
      "Continental & Indian Buffets with Evening Barbecue by the Lawn",
    stayRooms: "25 Couple & Deluxe Suite Rooms",

    images: [
      {
        url: "/hotel pics/ln.jpeg",
      },
      {
        url: "/hotel pics/room pic.jpeg",
      },
    ],
  },
];

// Single Motion Picture Card Component
const GalleryEventCard = ({ event, onBookSimilar, onWhatsAppInquiry }) => {
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
              className={`gallery-motion-slide ${idx === slideIndex ? "active" : "inactive"}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="gallery-slide-photo"
              />
              <div className="gallery-slide-overlay" />
              <div className="gallery-slide-floating-info">
                <span className="gallery-slide-number-badge">
                  Photo {idx + 1} of {event.images.length}
                </span>
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
                className={`gallery-dot ${idx === slideIndex ? "active" : ""}`}
                aria-label={`Slide ${idx + 1}`}
              >
                <span className="dot-bar" />
              </button>
            ))}
          </div>
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

          <h3 className="event-booked-company">{event.company}</h3>
          <h2 className="event-hosted-title">{event.eventTitle}</h2>
        </div>

        {/* Primary Event Hosted Metrics Grid */}
        <div className="event-metrics-grid">
          {/* 1. Event / Occasion */}
          <div className="metric-box">
            <div className="metric-icon occasion-icon">
              <Sparkles size={18} />
            </div>
            <div className="metric-content">
              <span className="metric-label">Occasion / Event Type</span>
              <strong className="metric-val">{event.occasion}</strong>
            </div>
          </div>

          {/* 2. Capacity Booking */}
          <div className="metric-box">
            <div className="metric-icon capacity-icon">
              <Users size={18} />
            </div>
            <div className="metric-content">
              <span className="metric-label">Capacity Booking</span>
              <strong className="metric-val">{event.capacity}</strong>
            </div>
          </div>

          {/* 3. Booking Days */}
          <div className="metric-box">
            <div className="metric-icon days-icon">
              <Calendar size={18} />
            </div>
            <div className="metric-content">
              <span className="metric-label">Booking Days &amp; Duration</span>
              <strong className="metric-val">{event.bookingDays}</strong>
            </div>
          </div>

          {/* 4. Dining Arrangement */}
          <div className="metric-box">
            <div className="metric-icon dining-icon">
              <Utensils size={18} />
            </div>
            <div className="metric-content">
              <span className="metric-label">Dining Arrangement</span>
              <strong className="metric-val">{event.diningPlan}</strong>
            </div>
          </div>
        </div>

        <div className="gallery-venue-details">
          <span>
            <Building2 size={13} />
            {event.hallUsed}
          </span>
          <span>
            <Layers size={13} />
            {event.stayRooms}
          </span>
        </div>

        {/* Action Button */}
        <div className="gallery-card-actions">
          <button
            onClick={() => onBookSimilar(event)}
            className="btn btn-cyan btn-sm"
          >
            <span>Book Now</span>
            <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => onWhatsAppInquiry(event)}
            className="btn btn-whatsapp btn-sm"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp Inquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CorporateBookingPage = ({ onNavigate, onShowToast, onOpenBooking }) => {
  const [selectedEventForModal, setSelectedEventForModal] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);
  const whatsappTimerRef = useRef(null);

  // Quick Inquiry Form State
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    occasion: "Corporate Annual Meet",
    capacity: "50-100 Attendees",
    duration: "2 Days / 1 Night",
    tentativeDate: "",
    specialRequirements: "",
  });
  useEffect(() => () => {
    if (whatsappTimerRef.current) clearTimeout(whatsappTimerRef.current);
  }, []);

  const openGeneralInquiry = () => {
    setSelectedEventForModal(null);
    setEnquirySent(false);
    setFormData({
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      occasion: "Corporate Annual Meet",
      capacity: "50-100 Attendees",
      duration: "2 Days / 1 Night",
      tentativeDate: "",
      specialRequirements: "",
    });
    setInquiryModalOpen(true);
  };

  const handleBookSimilar = (event) => {
    setSelectedEventForModal(event);
    setEnquirySent(false);
    setFormData({
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      occasion: event.occasion,
      capacity: event.capacity.split("(")[0].trim(),
      duration: event.bookingDays.split("(")[0].trim(),
      tentativeDate: "",
      specialRequirements: "",
    });
    setInquiryModalOpen(true);
  };

  const handleDirectWhatsAppInquiry = (event) => {
    const message = [
      "*CORPORATE EVENT ENQUIRY — HOTEL RK INTERNATIONAL*",
      "",
      `*Event Type:* ${event.occasion}`,
      `*Reference Event:* ${event.company} — ${event.eventTitle}`,
      `*Expected Attendees:* ${event.capacity}`,
      `*Expected Duration:* ${event.bookingDays}`,
      "",
      "I would like to organize a similar event at Hotel RK International. Please share availability and package details.",
      "Thank you."
    ].join("\n");

    window.location.href = `https://wa.me/918910119231?text=${encodeURIComponent(message)}`;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageLines = [
      "*CORPORATE EVENT ENQUIRY — HOTEL RK INTERNATIONAL*",
      "",
      `*Event Type:* ${formData.occasion.trim()}`,
      selectedEventForModal
        ? `*Reference Event:* ${selectedEventForModal.company} — ${selectedEventForModal.eventTitle}`
        : null,
      `*Company / Organization:* ${formData.companyName.trim()}`,
      `*Contact Person:* ${formData.contactPerson.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      `*Email:* ${formData.email.trim()}`,
      `*Attendees:* ${formData.capacity.trim()}`,
      `*Duration:* ${formData.duration.trim()}`,
      `*Tentative Date:* ${formData.tentativeDate || "Flexible"}`,
      `*Requirements:* ${formData.specialRequirements.trim() || "Standard setup"}`,
      "",
      "I would like to organize this event at Hotel RK International. Please share availability and package details.",
      "Thank you."
    ].filter(Boolean);
    const messageContent = messageLines.join("\n");
    const whatsappUrl = `https://wa.me/918910119231?text=${encodeURIComponent(messageContent)}`;

    void fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.contactPerson.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        subject: `Corporate Booking: ${formData.companyName.trim()} (${formData.occasion.trim()})`,
        message: messageContent,
      }),
      keepalive: true,
    }).catch(() => {
      // WhatsApp remains the guest-facing delivery path if background saving is unavailable.
    });

    setEnquirySent(true);
    whatsappTimerRef.current = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 2800);
  };

  const handleCloseInquiry = () => {
    if (whatsappTimerRef.current) {
      clearTimeout(whatsappTimerRef.current);
      whatsappTimerRef.current = null;
    }
    setInquiryModalOpen(false);
    setEnquirySent(false);
  };

  return (
    <div className="corporate-gallery-page">
      {/* Top Header Bar with Clean Breadcrumb */}
      <div className="corporate-gallery-top-bar">
        <div className="container">
          <div className="gallery-header-row">
            <div>
              <div className="corporate-breadcrumb">
                <button
                  onClick={() => onNavigate("/")}
                  className="breadcrumb-link"
                >
                  <Home size={14} />
                  <span>Home</span>
                </button>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">
                  Corporate Booking Gallery
                </span>
              </div>
              <h1 className="gallery-page-main-title">
                Corporate Events &amp; Conclaves Gallery
              </h1>
              <p className="gallery-page-tagline">
                Explore real corporate events, leadership offsites, and
                conferences hosted at Hotel RK International.
              </p>
            </div>

            <div className="gallery-top-actions">
              <button
                onClick={openGeneralInquiry}
                className="btn btn-cyan"
              >
                <Sparkles size={16} />
                <span>Request Corporate Proposal</span>
              </button>
              <a href="tel:+918910119231" className="btn btn-navy">
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
              onWhatsAppInquiry={handleDirectWhatsAppInquiry}
            />
          ))}
        </div>
      </div>

      {/* Bottom Quick Booking / Assistance Bar */}
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="gallery-bottom-cta-banner">
          <div className="cta-banner-text">
            <h3 className="cta-banner-title">
              Planning an upcoming corporate gathering or annual offsite in
              Digha?
            </h3>
            <p className="cta-banner-desc">
              We offer customized corporate packages with AC conference hall,
              audiovisual technology, multi-room accommodation, and seaside
              dining.
            </p>
          </div>
          <div className="cta-banner-btns">
            <button
              onClick={openGeneralInquiry}
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
        <div
          className="modal-backdrop"
          onClick={handleCloseInquiry}
        >
          <div
            className="modal-content"
            style={{ maxWidth: "640px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`modal-header ${enquirySent ? "booking-enquiry-header" : ""}`}>
              {!enquirySent && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sparkles size={20} color="#20B7E3" />
                  <h3 className="modal-title">Corporate Booking Inquiry</h3>
                </div>
              )}
              <button
                className="modal-close-btn"
                onClick={handleCloseInquiry}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            <div className="modal-body">
              {enquirySent ? (
                <div className="booking-enquiry-success" role="status" aria-live="polite">
                  <div className="booking-enquiry-success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h4>Please send the message in WhatsApp 🙏</h4>
                  <p>Someone from the hotel will connect with you soon. Thanks.</p>
                  <span className="booking-enquiry-opening">Opening WhatsApp…</span>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="corporate-inquiry-form">
                <div className="form-grid-2col">
                  <div className="form-group">
                    <label className="form-label">
                      Company / Organization Name <span className="req">*</span>
                    </label>
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
                    <label className="form-label">
                      Contact Person Name <span className="req">*</span>
                    </label>
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
                    <label className="form-label">
                      Phone Number <span className="req">*</span>
                    </label>
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
                    <label className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
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
                    <label className="form-label">Event Type</label>
                    <input
                      type="text"
                      name="occasion"
                      required
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
                      required
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
                      required
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Tentative Event Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="tentativeDate"
                    value={formData.tentativeDate}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Special Requirements / Notes
                  </label>
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
                  className="btn btn-whatsapp btn-lg modal-submit-btn"
                  style={{ width: "100%", marginTop: "8px" }}
                >
                  <WhatsAppIcon size={18} />
                  <span>Send Enquiry</span>
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CorporateBookingPage;
