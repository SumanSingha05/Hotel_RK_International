import React from 'react';
import { 
  Zap, 
  Bath, 
  Car, 
  Utensils, 
  Wifi, 
  Trees, 
  Sparkles, 
  Clock 
} from 'lucide-react';

const services = [
  {
    icon: <Zap size={28} />,
    title: '1. 24*7 High Tension Power Backup',
    desc: 'Never worry about coastal power outages. Our high-capacity generator guarantees uninterrupted AC and lighting 24/7.'
  },
  {
    icon: <Bath size={28} />,
    title: '2. Attached Luxury Bathroom',
    desc: 'Each room includes a modern attached bathroom with hot and cold geyser running water, fresh towels, and toiletries.'
  },
  {
    icon: <Car size={28} />,
    title: '3. Secure Car Parking Premises',
    desc: 'Ample on-premises car parking space with 24/7 CCTV surveillance and security guards for complete peace of mind.'
  },
  {
    icon: <Utensils size={28} />,
    title: '4. Multi-Cuisine Restaurant',
    desc: 'Savor freshly cooked authentic Bengali cuisine, sea fishes (Hilsa, Pomfret, Prawns), North Indian, and Chinese favorites.'
  },
  {
    icon: <Wifi size={28} />,
    title: '5. Free High-Speed Wi-Fi',
    desc: 'Stay connected with loved ones or finish urgent work with complimentary high-speed wireless internet across all floors.'
  },
  {
    icon: <Trees size={28} />,
    title: '6. Kids Play Area in the Lawn',
    desc: 'A lush green open lawn where kids can play freely and families can enjoy pleasant coastal evening breezes.'
  },
  {
    icon: <Sparkles size={28} />,
    title: '7. Regular Housekeeping Service',
    desc: 'Our housekeeping crew ensures pristine cleanliness, fresh sanitized bedsheets, and clean surroundings daily.'
  },
  {
    icon: <Clock size={28} />,
    title: '8. 24/7 Guest & Travel Assistance',
    desc: 'From early morning tea to arranging local Digha sightseeing cabs and Mandarmani day trips, our desk is always ready.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section section-bg-muted">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Services</span>
          <h2 className="section-title">
            Enjoy a Relaxing Stay at Hotel RK International
          </h2>
          <p className="section-desc">
            We focus on providing our guests with essential comforts, thoughtful hospitality, and peace of mind during their Digha vacation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-box">
                {s.icon}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
