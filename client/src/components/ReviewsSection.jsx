import React from 'react';
import { Star, MessageSquarePlus, Quote } from 'lucide-react';

const ReviewsSection = ({ reviews, onOpenAddReview }) => {
  // Duplicate reviews for continuous infinite marquee loop
  const marqueeReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="section section-bg-muted reviews-section-wrapper">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <span className="section-tag">Reviews</span>
          <h2 className="section-title">
            Guests Feedback and Review
          </h2>
          <p className="section-desc">
            We value every guest who chooses Hotel RK International for their New Digha vacation. Here is what our travelers say about our rooms, warm hospitality, and food.
          </p>
        </div>
      </div>

      {/* Infinite Moving Single-Row Carousel (Moving to the left) */}
      <div className="reviews-marquee-viewport">
        <div className="reviews-marquee-track">
          {marqueeReviews.map((rev, idx) => (
            <div key={`${rev.id || rev._id || 'rev'}-${idx}`} className="review-card reviews-marquee-card">
              <div>
                <div className="review-stars-quote-row">
                  <div className="review-stars">
                    {[...Array(rev.rating || 5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFB703" color="#FFB703" />
                    ))}
                  </div>
                  <Quote size={20} className="review-quote-icon" />
                </div>
                <p className="review-text">
                  "{rev.comment}"
                </p>
              </div>

              <div className="review-author-info">
                <div className="review-avatar">
                  {rev.guestName ? rev.guestName.charAt(0).toUpperCase() : 'G'}
                </div>
                <div>
                  <h4 className="review-name">{rev.guestName}</h4>
                  <p className="review-meta">
                    {rev.designation || 'Verified Guest'} • <span className="review-room-tag">{rev.roomType || 'Deluxe Room'}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            onClick={onOpenAddReview}
            className="btn btn-outline"
            style={{ backgroundColor: '#ffffff' }}
          >
            <MessageSquarePlus size={18} color="#20B7E3" />
            <span>Share Your Stay Experience / Write a Review</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
