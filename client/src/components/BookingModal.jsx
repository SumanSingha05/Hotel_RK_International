import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle, MessageCircle } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, selectedRoom, initialParams, rooms }) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];
  const dayAfterDate = new Date();
  dayAfterDate.setDate(dayAfterDate.getDate() + 2);
  const dayAfter = dayAfterDate.toISOString().split('T')[0];

  const defaultRoom = selectedRoom || (rooms && rooms[0]) || {
    id: 'deluxe-room',
    title: 'Deluxe Room',
    price: 1800,
    priceNote: 'Including Breakfast + GST'
  };

  const [roomId, setRoomId] = useState(initialParams?.roomId || defaultRoom.id);
  const [checkIn, setCheckIn] = useState(initialParams?.checkIn || tomorrow);
  const [checkOut, setCheckOut] = useState(initialParams?.checkOut || dayAfter);
  const [guests, setGuests] = useState(initialParams?.guests || 2);
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [enquirySent, setEnquirySent] = useState(false);
  const whatsappTimerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    setRoomId(initialParams?.roomId || defaultRoom.id);
    setCheckIn(initialParams?.checkIn || tomorrow);
    setCheckOut(initialParams?.checkOut || dayAfter);
    setGuests(initialParams?.guests || 2);
    setGuestName('');
    setPhone('');
    setEmail('');
    setSpecialRequests('');
    setEnquirySent(false);
  }, [isOpen, selectedRoom, initialParams]);

  useEffect(() => () => {
    if (whatsappTimerRef.current) clearTimeout(whatsappTimerRef.current);
  }, []);

  const currentRoom = rooms?.find((r) => r.id === roomId) || defaultRoom;

  // Calculate nights
  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = d2 - d1;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  };

  const nights = calculateNights();
  const totalAmount = currentRoom.price * nights;

  const formatDisplayDate = (value) => {
    if (!value) return 'Not provided';
    return new Date(`${value}T00:00:00`).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleSendEnquiry = (e) => {
    e.preventDefault();
    const bookingPayload = {
      guestName: guestName.trim(),
      email: email.trim() || 'guest@hotelrkinternational.com',
      phone: phone.trim(),
      roomId: currentRoom.id,
      roomTitle: currentRoom.title,
      checkIn,
      checkOut,
      guests: Number(guests),
      nights,
      totalAmount,
      specialRequests: specialRequests.trim()
    };

    const lines = [
      '*ROOM BOOKING ENQUIRY — HOTEL RK INTERNATIONAL*',
      '',
      `*Guest Name:* ${guestName.trim()}`,
      `*Phone:* ${phone.trim()}`,
      email.trim() ? `*Email:* ${email.trim()}` : null,
      `*Room:* ${currentRoom.title}`,
      `*Check-in:* ${formatDisplayDate(checkIn)}`,
      `*Check-out:* ${formatDisplayDate(checkOut)}`,
      `*Guests:* ${guests}`,
      `*Number of Nights:* ${nights}`,
      `*Estimated Amount:* ₹${totalAmount.toLocaleString('en-IN')}`,
      `*Special Request:* ${specialRequests.trim() || 'None'}`,
      '',
      'Please confirm room availability and the final price.',
      'Thank you.'
    ].filter((line) => line !== null);

    const whatsappUrl = `https://wa.me/918910119231?text=${encodeURIComponent(lines.join('\n'))}`;

    // Save the enquiry silently for hotel staff while keeping WhatsApp as the guest-facing flow.
    void fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingPayload),
      keepalive: true
    }).catch(() => {
      // WhatsApp remains the reliable delivery path if the background save is unavailable.
    });

    setEnquirySent(true);

    whatsappTimerRef.current = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 2800);
  };

  const handleClose = () => {
    if (whatsappTimerRef.current) {
      clearTimeout(whatsappTimerRef.current);
      whatsappTimerRef.current = null;
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-header ${enquirySent ? 'booking-enquiry-header' : ''}`}>
          {!enquirySent && <h3 className="modal-title">Send Your Room Enquiry</h3>}
          <button className="modal-close-btn" onClick={handleClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {enquirySent ? (
            <div className="booking-enquiry-success" role="status" aria-live="polite">
              <div className="booking-enquiry-success-icon">
                <CheckCircle size={48} />
              </div>
              <h4>
                Please send the message in WhatsApp 🙏
              </h4>
              <p>
                Someone from the hotel will connect with you soon. Thanks.
              </p>
              <span className="booking-enquiry-opening">Opening WhatsApp…</span>
            </div>
          ) : (
            <form onSubmit={handleSendEnquiry}>
              {/* Room & Pricing Summary */}
              <div style={{ backgroundColor: '#f0f9fc', border: '1px solid #bce8f5', borderRadius: '8px', padding: '14px 18px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#0284c7', textTransform: 'uppercase', fontWeight: '700' }}>
                      Selected Accommodation
                    </span>
                    <h4 style={{ fontSize: '1.15rem', color: '#002E5B' }}>{currentRoom.title}</h4>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Including Breakfast + GST</span>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#002E5B' }}>
                      Rs. {currentRoom.price} / Night
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Picker if user wants to change */}
              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">Change Room Type</label>
                <select
                  className="form-select"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                >
                  {rooms?.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title} — Rs. {r.price}/Night (Incl. Breakfast)
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Pickers */}
              <div className="form-row-2col" style={{ marginBottom: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Check-In Date *</label>
                  <input
                    type="date"
                    className="form-input"
                    value={checkIn}
                    min={today}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Check-Out Date *</label>
                  <input
                    type="date"
                    className="form-input"
                    value={checkOut}
                    min={checkIn || today}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Guest Information */}
              <div className="form-row-2col" style={{ marginBottom: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Primary Guest Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter full name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Number of Guests</label>
                  <select
                    className="form-select"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5">5+ Adults / Family</option>
                  </select>
                </div>
              </div>

              <div className="form-row-2col" style={{ marginBottom: '14px' }}>
                <div className="form-group">
                  <label className="form-label">Mobile / WhatsApp Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label className="form-label">Special Requests / Arrival Time</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Ground floor room, late check-in around 3 PM"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </div>

              {/* Price Calculation Box */}
              <div className="modal-price-calc-box">
                <div>
                  <span className="price-calc-note">
                    {nights} Night{nights > 1 ? 's' : ''} × Rs. {currentRoom.price}
                  </span>
                  <div className="price-calc-label">Total Tariff Payable:</div>
                </div>
                <div className="price-calc-amount">
                  Rs. {totalAmount}
                </div>
              </div>

              {/* Enquiry Action */}
              <div className="modal-actions-row">
                <button
                  type="submit"
                  className="btn btn-whatsapp btn-lg modal-submit-btn"
                >
                  <MessageCircle size={18} />
                  <span>Send Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
