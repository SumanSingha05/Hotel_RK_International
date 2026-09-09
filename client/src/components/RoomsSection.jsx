import React, { useState } from 'react';
import { Users, Bed, Wifi, Tv, Bath, Check, ArrowRight } from 'lucide-react';

const RoomsSection = ({ rooms, onOpenBooking, onOpenRoomDetail }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Deluxe', 'Suite', 'Family'];

  const filteredRooms = activeFilter === 'All'
    ? rooms
    : rooms.filter((r) => r.category === activeFilter);

  return (
    <section id="rooms" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Rooms</span>
          <h2 className="section-title">
            Fascinating Rooms & Suites at New Digha
          </h2>
          <p className="section-desc">
            Choose from our comfortable, well-appointed AC rooms and suites. All tariffs include complimentary breakfast, GST, and 24*7 power backup.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="room-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat === 'All' ? 'All Accommodations' : `${cat} Rooms`}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {filteredRooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-img-container">
                <img
                  src={room.images[0]}
                  alt={room.title}
                  className="room-img"
                  loading="lazy"
                />
                {room.tag && (
                  <span className={`room-tag ${room.tag.toLowerCase().includes('sea') ? 'sea-view' : ''}`}>
                    {room.tag}
                  </span>
                )}
              </div>

              <div className="room-card-body">
                <h3 className="room-card-title">{room.title}</h3>
                <p className="room-card-subtitle">{room.subtitle}</p>

                {/* Seabird Digha Signature Tariff Bar */}
                <div className="room-tariff-bar">
                  <span className="tariff-note">{room.priceNote || 'Including Breakfast + GST'}</span>
                  <span className="tariff-price">RS.{room.price}/NIGHT</span>
                </div>

                {/* Key Specs */}
                <div className="room-specs-list">
                  <div className="room-spec-item">
                    <Users size={15} />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="room-spec-item">
                    <Bed size={15} />
                    <span>{room.bedType}</span>
                  </div>
                  <div className="room-spec-item">
                    <Bath size={15} />
                    <span>Attached Bath</span>
                  </div>
                  <div className="room-spec-item">
                    <Wifi size={15} />
                    <span>Free Wi-Fi</span>
                  </div>
                </div>

                <div className="room-card-actions">
                  <button
                    onClick={() => onOpenBooking(room)}
                    className="btn btn-cyan btn-sm"
                  >
                    <span>Book Now</span>
                  </button>
                  <button
                    onClick={() => onOpenRoomDetail(room)}
                    className="btn btn-outline btn-sm"
                  >
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
