import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="topbar-left">
          <div className="topbar-item">
            <MapPin size={14} color="#20B7E3" />
            <span>G/13, B-1 Sector, New Digha, West Bengal 721463</span>
          </div>
        </div>

        <div className="topbar-right">
          <div className="topbar-item">
            <Phone size={14} color="#20B7E3" />
            <a href="tel:+918910119231">+91 8910119231</a>
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
