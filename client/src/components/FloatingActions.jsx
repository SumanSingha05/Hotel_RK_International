import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingActions = () => {
  const whatsappUrl = "https://wa.me/916289276600?text=Hello%20Hotel%20RK%20International%2C%20I%20would%20like%20to%20inquire%20about%20room%20booking%20in%20New%20Digha.";

  return (
    <div className="floating-actions">
      {/* Floating Call Button */}
      <a
        href="tel:+916289276600"
        className="floating-btn floating-call"
        title="Call Hotel RK International"
        aria-label="Direct Phone Call"
      >
        <Phone size={24} />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        title="Chat on WhatsApp"
        aria-label="WhatsApp Booking Assistance"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default FloatingActions;
