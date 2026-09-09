import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle } from 'lucide-react';

const ReviewsSection = ({ reviews, onOpenAddReview }) => {
  return (
    <section id="reviews" className="section section-bg-muted">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Reviews</span>
          <h2 className="section-title">
            Guests Feedback and Review
          </h2>
          <p className="section-desc">
            We value every guest who chooses Hotel RK International for their New Digha vacation. Here is what our travelers say about our rooms, warm hospitality, and food.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <div key={rev.id || rev._id || idx} className="review-card">
              <div>
                <div className="review-stars">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFB703" color="#FFB703" />
                  ))}
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
                    {rev.designation || 'Verified Guest'} • {rev.roomType || 'Deluxe Room'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '45px' }}>
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
