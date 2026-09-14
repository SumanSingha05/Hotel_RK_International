import React, { useState } from 'react';
import { X, Check, Bed, Users, Eye, Maximize, Bath, Wifi, Calendar, Sparkles } from 'lucide-react';

const RoomDetailModal = ({ isOpen, onClose, room, onOpenBooking }) => {
  if (!isOpen || !room) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '750px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">{room.title}</h3>
            <span style={{ fontSize: '0.82rem', color: '#0284c7', fontWeight: '600' }}>
              {room.subtitle}
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {/* Main Photo & Thumbnails */}
          <div className="room-modal-gallery">
            <img
              src={room.images[activeImgIndex] || room.images[0]}
              alt={room.title}
              className="room-modal-main-img"
            />
            {room.images.length > 1 && (
              <div className="room-modal-thumbnails">
                {room.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`room-modal-thumb ${activeImgIndex === idx ? 'active' : ''}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Seabird Tariff Bar */}
          <div className="room-tariff-bar room-modal-tariff">
            <div>
              <span className="tariff-note">{room.priceNote || 'Including Breakfast + GST'}</span>
              <span className="tariff-price">RS.{room.price}/NIGHT</span>
            </div>
            {room.originalPrice && (
              <span className="room-modal-orig-price">
                Rs. {room.originalPrice}
              </span>
            )}
          </div>

          {/* Key Quick Specs */}
          <div className="room-modal-specs-grid">
            <div className="room-spec-item">
              <Users size={16} color="#20B7E3" />
              <span>{room.capacity}</span>
            </div>
            <div className="room-spec-item">
              <Bed size={16} color="#20B7E3" />
              <span>{room.bedType}</span>
            </div>
            <div className="room-spec-item">
              <Eye size={16} color="#20B7E3" />
              <span>{room.view || 'Pleasant View'}</span>
            </div>
            <div className="room-spec-item">
              <Maximize size={16} color="#20B7E3" />
              <span>{room.size || 'Spacious Layout'}</span>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1rem', color: '#002E5B', marginBottom: '6px' }}>Description</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
              {room.description}
            </p>
          </div>

          {/* Features List */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1rem', color: '#002E5B', marginBottom: '10px' }}>Room Amenities & Facilities</h4>
            <div className="room-modal-amenities-grid">
              {room.features?.map((f, i) => (
                <div key={i} className="room-modal-amenity-item">
                  <Check size={15} color="#16a34a" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="modal-actions-row">
            <button
              onClick={() => {
                onClose();
                onOpenBooking(room);
              }}
              className="btn btn-cyan btn-lg modal-submit-btn"
            >
              <Calendar size={18} />
              <span>Book This Room Now</span>
            </button>
            <button onClick={onClose} className="btn btn-outline modal-close-action-btn">
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailModal;
