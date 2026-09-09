import React, { useState } from 'react';
import { Calendar, Users, Home, Search } from 'lucide-react';

const QuickBookingBar = ({ onOpenBookingWithParams }) => {
  // Set default dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [roomType, setRoomType] = useState('deluxe-room');
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenBookingWithParams({
      checkIn,
      checkOut,
      roomId: roomType,
      guests: Number(guests)
    });
  };

  return (
    <div className="container quick-booking-wrapper">
      <div className="quick-booking-card">
        <form onSubmit={handleSubmit} className="quick-booking-form">
          <div className="form-group">
            <label className="form-label">
              <Calendar size={14} color="#20B7E3" />
              <span>Check-In Date</span>
            </label>
            <input
              type="date"
              className="form-input"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Calendar size={14} color="#20B7E3" />
              <span>Check-Out Date</span>
            </label>
            <input
              type="date"
              className="form-input"
              value={checkOut}
              min={checkIn || formatDate(today)}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Home size={14} color="#20B7E3" />
              <span>Room Category</span>
            </label>
            <select
              className="form-select"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="deluxe-room">Deluxe Room (Rs. 1,800)</option>
              <option value="premium-deluxe-room">Premium Deluxe Room (Rs. 2,400)</option>
              <option value="three-bedded-deluxe-room">Three Bedded Deluxe (Rs. 2,800)</option>
              <option value="couple-suite-room">Couple Suite Room (Rs. 3,200)</option>
              <option value="family-suite-room">Family Suite Room (Rs. 4,500)</option>
              <option value="front-sea-facing-deluxe">Front Sea Facing Deluxe (Rs. 2,600)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              <Users size={14} color="#20B7E3" />
              <span>Guests</span>
            </label>
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

          <button type="submit" className="btn btn-cyan" style={{ height: '46px' }}>
            <Search size={16} />
            <span>Book Now</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickBookingBar;
