import React from 'react';
import { X, ShieldAlert } from 'lucide-react';

const PolicyModal = ({ policyType, onClose }) => {
  if (!policyType) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      text: (
        <>
          <p>At <strong>Hotel RK International, New Digha</strong>, we are committed to safeguarding the privacy and personal data of our guests and online website visitors.</p>
          <h4 style={{ marginTop: '14px', marginBottom: '6px', color: '#0F3B2E' }}>1. Information Collected</h4>
          <p>We only collect information necessary to process room bookings, inquiries, and customer feedback—such as name, phone number, email address, arrival and departure dates.</p>
          <h4 style={{ marginTop: '14px', marginBottom: '6px', color: '#0F3B2E' }}>2. Use of Information</h4>
          <p>Your details are used exclusively for confirming reservations, providing customer assistance, generating check-in invoices, and communicating stay-related updates. We never sell or share your information with third-party telemarketers.</p>
          <h4 style={{ marginTop: '14px', marginBottom: '6px', color: '#0F3B2E' }}>3. Data Security</h4>
          <p>We employ administrative and electronic security protocols to keep your contact and booking data confidential and protected.</p>
        </>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      text: (
        <>
          <h4 style={{ marginBottom: '6px', color: '#0F3B2E' }}>1. Check-in & Check-out Policies</h4>
          <p>Standard check-in time is 11:00 AM and check-out time is 10:00 AM. Early check-in or late check-out is subject to room availability and prior front desk approval.</p>
          <h4 style={{ marginTop: '14px', marginBottom: '6px', color: '#0F3B2E' }}>2. Identity Verification</h4>
          <p>As per government guidelines, all Indian adult guests must present a valid government-issued photo ID (Aadhar Card, Driving License, Voter ID, or Passport) upon arrival. PAN cards are not accepted as address proof.</p>
          <h4 style={{ marginTop: '14px', marginBottom: '6px', color: '#0F3B2E' }}>3. Tariff & Payments</h4>
          <p>Tariffs are stated in Indian Rupees (INR) including complimentary breakfast and GST. Room charges can be settled via UPI, Cash, or Credit/Debit cards at the reception desk.</p>
          <h4 style={{ marginTop: '14px', marginBottom: '6px', color: '#0F3B2E' }}>4. Property Rules</h4>
          <p>We strive to provide a safe, family-friendly atmosphere. Unruly behavior or illegal activities on the hotel premises will result in immediate cancellation of stay without refund.</p>
        </>
      )
    },
    disclaimer: {
      title: 'Disclaimer',
      text: (
        <>
          <p>The information, room specifications, tariffs, and amenities displayed on this website are provided for guest reference by <strong>Hotel RK International</strong>.</p>
          <h4 style={{ marginTop: '14px', marginBottom: '6px', color: '#0F3B2E' }}>Peak Season Variations</h4>
          <p>Room tariffs and holiday package rates may vary during special festive periods such as Durga Puja, Christmas, New Year, and long weekends in Digha. Guests are advised to verify peak season rates with our reservations team on +91 8910119231.</p>
          <h4 style={{ marginTop: '14px', marginBottom: '6px', color: '#0F3B2E' }}>External Links</h4>
          <p>This site may contain links to external maps, WhatsApp messaging, and navigation tools. We are not responsible for third-party platform terms or policies.</p>
        </>
      )
    }
  };

  const activeContent = contentMap[policyType] || contentMap.privacy;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{activeContent.title}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>
        <div className="modal-body" style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.7' }}>
          {activeContent.text}
          <div style={{ marginTop: '24px', textAlign: 'right' }}>
            <button onClick={onClose} className="btn btn-navy btn-sm">
              <span>Understood & Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
