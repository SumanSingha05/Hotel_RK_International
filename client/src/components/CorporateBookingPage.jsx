import React, { useState, useEffect } from "react";
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

          <a
            href={`https://wa.me/918910119231?text=${encodeURIComponent(`Hello Hotel RK International, I saw the corporate event hosted for ${event.company} (${event.eventTitle}). We would like to inquire for a similar corporate booking.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <WhatsAppIcon size={16} />
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookSimilar = (event) => {
    setSelectedEventForModal(event);
    setFormData((prev) => ({
      ...prev,
      occasion: event.occasion,
      capacity: event.capacity.split("(")[0].trim(),
      duration: event.bookingDays.split("(")[0].trim(),
    }));
    setInquiryModalOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageContent = `[CORPORATE BOOKING INQUIRY]\nCompany: ${formData.companyName}\nContact Person: ${formData.contactPerson}\nOccasion: ${formData.occasion}\nCapacity / Attendees: ${formData.capacity}\nDuration: ${formData.duration}\nDate: ${formData.tentativeDate || "Flexible"}\nRequirements: ${formData.specialRequirements || "Standard setup"}`;

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.contactPerson,
          phone: formData.phone,
          email: formData.email,
          subject: `Corporate Booking: ${formData.companyName} (${formData.occasion})`,
          message: messageContent,
        }),
      });
      const data = await res.json();
      if (data.success) {
        onShowToast(
          "Corporate inquiry received! Our manager will call you within 2 business hours.",
        );
      } else {
        onShowToast("Corporate inquiry submitted! We will reach out shortly.");
      }
    } catch (err) {
      onShowToast(
        "Inquiry recorded! Our corporate events team will contact you at " +
          formData.phone,
      );
    } finally {
      setIsSubmitting(false);
      setInquiryModalOpen(false);
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
                onClick={() => setInquiryModalOpen(true)}
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
        <div
          className="modal-overlay open"
          onClick={() => setInquiryModalOpen(false)}
        >
          <div
            className="modal-container"
            style={{ maxWidth: "640px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
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
                  disabled={isSubmitting}
                  className="btn btn-cyan btn-lg"
                  style={{ width: "100%", marginTop: "8px" }}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Corporate Proposal Request"}
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
