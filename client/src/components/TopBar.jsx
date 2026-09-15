import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="topbar-left">
          <div className="topbar-item">
            <MapPin size={14} color="#20B7E3" className="topbar-pin-icon" />
            <span className="topbar-address-desktop">B1 Sector, Plot G-13, New Digha, Purba Midnapore, Pin - 721 463 (Near Jahaz Bari)</span>
            <span className="topbar-address-mobile">B1 Sector, Plot G-13, New Digha</span>
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
