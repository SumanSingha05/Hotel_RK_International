import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';

const ReviewModal = ({ isOpen, onClose, onReviewSubmitted, onShowToast }) => {
  if (!isOpen) return null;

  const [guestName, setGuestName] = useState('');
  const [designation, setDesignation] = useState('');
  const [roomType, setRoomType] = useState('Deluxe Room');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const reviewPayload = {
      guestName,
      designation: designation || 'Guest from Kolkata',
      roomType,
      rating: Number(rating),
      comment
    };

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewPayload)
      });
      const data = await res.json();
      if (data.success) {
        onShowToast('Thank you! Your review was successfully submitted.');
        if (onReviewSubmitted) onReviewSubmitted(data.data);
        onClose();
      } else {
        alert(data.message || 'Failed to submit review');
      }
    } catch {
      const fallbackRev = {
        _id: `rev-${Date.now()}`,
        ...reviewPayload,
        date: 'Just now'
      };
      onShowToast('Review received! Thank you for sharing your experience.');
      if (onReviewSubmitted) onReviewSubmitted(fallbackRev);
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Write a Review for Hotel RK International</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Suman Sengupta"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="form-group">
                <label className="form-label">Profession / City</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Teacher, Howrah"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Room Type Stayed In</label>
                <select
                  className="form-select"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                >
                  <option value="Deluxe Room">Deluxe Room</option>
                  <option value="Premium Deluxe Room">Premium Deluxe Room</option>
                  <option value="Three Bedded Deluxe Room">Three Bedded Deluxe</option>
                  <option value="Couple Suite Room">Couple Suite Room</option>
                  <option value="Family Suite Room">Family Suite Room</option>
                  <option value="Front Sea Facing Deluxe">Front Sea Facing Deluxe</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Rating</label>
              <div style={{ display: 'flex', gap: '8px', cursor: 'pointer', padding: '6px 0' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={28}
                    fill={rating >= star ? '#FFB703' : 'none'}
                    color={rating >= star ? '#FFB703' : '#cbd5e1'}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Your Review Comment *</label>
              <textarea
                rows="4"
                className="form-input"
                placeholder="Tell us about the room cleanliness, staff behavior, food quality, or overall stay..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-cyan btn-lg"
              disabled={submitting}
              style={{ width: '100%', marginTop: '8px' }}
            >
              <Send size={18} />
              <span>{submitting ? 'Submitting...' : 'Post Guest Review'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
