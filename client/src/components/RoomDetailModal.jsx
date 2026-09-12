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
          <div style={{ marginBottom: '20px' }}>
            <img
              src={room.images[activeImgIndex] || room.images[0]}
              alt={room.title}
              style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '10px', marginBottom: '10px' }}
            />
            {room.images.length > 1 && (
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                {room.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx}`}
                    onClick={() => setActiveImgIndex(idx)}
                    style={{
                      width: '70px',
                      height: '50px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: activeImgIndex === idx ? '2px solid #10B981' : '2px solid transparent',
                      opacity: activeImgIndex === idx ? 1 : 0.65
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Seabird Tariff Bar */}
          <div className="room-tariff-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="tariff-note">{room.priceNote || 'Including Breakfast + GST'}</span>
              <span className="tariff-price">RS.{room.price}/NIGHT</span>
            </div>
            {room.originalPrice && (
              <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '0.95rem' }}>
                Rs. {room.originalPrice}
              </span>
            )}
          </div>

          {/* Key Quick Specs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', margin: '18px 0', padding: '14px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Users size={16} color="#10B981" />
              <span>{room.capacity}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Bed size={16} color="#10B981" />
              <span>{room.bedType}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Eye size={16} color="#10B981" />
              <span>{room.view || 'Pleasant View'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Maximize size={16} color="#10B981" />
              <span>{room.size || 'Spacious Layout'}</span>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1rem', color: '#0F3B2E', marginBottom: '6px' }}>Description</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
              {room.description}
            </p>
          </div>

          {/* Features List */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1rem', color: '#0F3B2E', marginBottom: '10px' }}>Room Amenities & Facilities</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
              {room.features?.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#334155' }}>
                  <Check size={15} color="#16a34a" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(room);
              }}
              className="btn btn-cyan btn-lg"
              style={{ flex: 1 }}
            >
              <Calendar size={18} />
              <span>Book This Room Now</span>
            </button>
            <button onClick={onClose} className="btn btn-outline">
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailModal;
