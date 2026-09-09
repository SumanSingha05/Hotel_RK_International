import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="topbar-left">
          <div className="topbar-item">
            <MapPin size={14} color="#20B7E3" />
            <span>G/13, B-1 Sector, New Digha, West Bengal 721463</span>
          </div>
          <div className="topbar-item">
            <Clock size={14} color="#20B7E3" />
            <span>24/7 Front Desk Assistance</span>
          </div>
        </div>

        <div className="topbar-right">
          <div className="topbar-item">
            <Phone size={14} color="#20B7E3" />
            <a href="tel:+916289276600">+91 6289276600</a>
            <span>/</span>
            <a href="tel:+917605822905">+91 7605822905</a>
          </div>
          <div className="topbar-item">
            <Mail size={14} color="#20B7E3" />
            <a href="mailto:info@hotelrkinternational.com">info@hotelrkinternational.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
