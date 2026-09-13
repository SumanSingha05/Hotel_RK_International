import React from 'react';
import { UtensilsCrossed, Fish, Coffee, Clock, Sparkles } from 'lucide-react';

const DiningSection = ({ onOpenBooking }) => {
  return (
    <section id="dining" className="section section-bg-muted">
      <div className="container">
        <div className="dining-grid">
          {/* Left Column: Image Stack */}
          <div className="dining-img-stack">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
              alt="Restaurant Dining Hotel RK International"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
              alt="Fresh Seafood in Digha"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
              alt="Cozy Ambience"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
              alt="Bengali Thali"
              loading="lazy"
            />
          </div>

          {/* Right Column: Culinary Details */}
          <div className="dining-content">
            <span className="section-tag">Dining</span>
            <h2 className="section-title">
              Multi-Cuisine Restaurant & Seafood Delights
            </h2>
            <p className="section-desc">
              Food is at the heart of any memorable coastal trip. At Hotel RK International's multi-cuisine restaurant, our skilled chefs prepare mouth-watering delicacies using fresh local catches from the Digha fish harbor and organic spices.
            </p>

            <ul className="dining-features-list">
              <li className="dining-feature-item">
                <Fish size={20} />
                <span><strong>Fresh Coastal Seafood:</strong> Daily fresh Hilsa (Ilish), Pomfret, Jumbo Prawns, Crab, and Bhetki fry.</span>
              </li>
              <li className="dining-feature-item">
                <UtensilsCrossed size={20} />
                <span><strong>Authentic Bengali Dishes:</strong> Traditional Bengali thali, mutton kosha, macher jhol, and seasonal vegetables.</span>
              </li>
              <li className="dining-feature-item">
                <Sparkles size={20} />
                <span><strong>North Indian & Chinese:</strong> Butter chicken, paneer butter masala, crispy chilli chicken, hakka noodles.</span>
              </li>
              <li className="dining-feature-item">
                <Coffee size={20} />
                <span><strong>Complimentary Breakfast:</strong> Hot puri-sabzi, bread-butter-eggs, tea/coffee served fresh daily.</span>
              </li>
              <li className="dining-feature-item">
                <Clock size={20} />
                <span><strong>Prompt Room Service:</strong> Enjoy piping hot meals served directly in the comfort of your room.</span>
              </li>
            </ul>

            <div className="dining-btn-row">
              <button
                onClick={() => onOpenBooking(null)}
                className="btn btn-cyan"
              >
                <span>Book Stay with Breakfast</span>
              </button>
              <a
                href="tel:+918910119231"
                className="btn btn-outline"
              >
                <span>Call for Food Orders</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
