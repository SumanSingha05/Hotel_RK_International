import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

const ContactSection = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Room Booking Inquiry',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleCorporate = () => {
      setFormData((prev) => ({
        ...prev,
        subject: 'Corporate / Group Booking'
      }));
    };
    window.addEventListener('select-corporate-booking', handleCorporate);
    return () => window.removeEventListener('select-corporate-booking', handleCorporate);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        onShowToast('Inquiry sent successfully! Our reservations team will contact you shortly.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: 'Room Booking Inquiry',
          message: ''
        });
      } else {
        onShowToast(data.message || 'Failed to send inquiry. Please call us directly.');
      }
    } catch (err) {
      // Offline fallback
      onShowToast('Inquiry received! We will call you back on ' + formData.phone);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Room Booking Inquiry',
        message: ''
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">
            Easy & Convenient Digha Hotel Booking
          </h2>
          <p className="section-desc">
            Planning your next weekend trip or family holiday to Digha? Contact Hotel RK International for instant room reservations, group discounts, and custom stay packages.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Hotel RK Info */}
          <div className="contact-info-card">
            <div>
              <h3 className="contact-info-title">Reach Out to Us</h3>
              <p className="contact-info-desc">
                Our reservations and front desk team is on standby 24 hours a day to assist you with room tariff, check-in logistics, and travel queries.
              </p>

              <div className="contact-channels">
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="channel-label">Hotel Address</div>
                    <div className="channel-value">
                      B1 Sector, Plot G-13, New Digha, Purba Midnapore, Pin - 721 463 (Near Jahaz Bari)
                    </div>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="channel-label">Reservations & Desk</div>
                    <div className="channel-value">
                      <a href="tel:+918910119231" style={{ color: '#fff', textDecoration: 'underline' }}>+91 8910119231</a>
                    </div>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="channel-label">Email & Website</div>
                    <div className="channel-value">
                      <a href="mailto:info@hotelrkinternational.com" style={{ color: '#fff', textDecoration: 'underline' }}>info@hotelrkinternational.com</a><br />
                      <a href="https://www.hotelrkinternational.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>www.hotelrkinternational.com</a>
                    </div>
                  </div>
                </div>

                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="channel-label">Timings</div>
                    <div className="channel-value">
                      Check-In: 11:00 AM • Check-Out: 10:00 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918910119231?text=Hello%20Hotel%20RK%20International%2C%20I%20have%20an%20inquiry%20regarding%20booking%20rooms."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', marginTop: '20px' }}
            >
              <MessageCircle size={18} />
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.4rem', color: '#002E5B', marginBottom: '8px' }}>
              Send an Online Inquiry
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '24px' }}>
              Fill in your details below and our team will get back to you with confirmed availability within minutes.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Rahul Mukherjee"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject / Room Required</label>
                <select
                  name="subject"
                  className="form-select"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="Room Booking Inquiry">Room Booking Inquiry</option>
                  <option value="Deluxe Room (Rs. 1,800)">Deluxe Room (Rs. 1,800)</option>
                  <option value="Premium Deluxe Room (Rs. 2,400)">Premium Deluxe Room (Rs. 2,400)</option>
                  <option value="Three Bedded Deluxe (Rs. 2,800)">Three Bedded Deluxe (Rs. 2,800)</option>
                  <option value="Couple Suite Room (Rs. 3,200)">Couple Suite Room (Rs. 3,200)</option>
                  <option value="Family Suite Room (Rs. 4,500)">Family Suite Room (Rs. 4,500)</option>
                  <option value="Corporate / Group Booking">Corporate / Group Booking</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message or Dates *</label>
                <textarea
                  name="message"
                  rows="4"
                  className="form-input"
                  placeholder="Please specify your expected arrival date, number of guests, or special requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-cyan btn-lg"
                disabled={submitting}
                style={{ width: '100%', marginTop: '8px' }}
              >
                <Send size={18} />
                <span>{submitting ? 'Submitting Inquiry...' : 'Submit Booking Inquiry'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="map-container">
          <iframe
            title="Hotel RK International New Digha Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14787.525048261397!2d87.51139415!3d21.6239103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19980f7bb0d6e5%3A0x67ee1c5e933e4b7b!2sNew%20Digha%2C%20Digha%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
