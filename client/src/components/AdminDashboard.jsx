import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Calendar, Mail, CheckCircle, Clock, XCircle, Users, DollarSign } from 'lucide-react';

const AdminDashboard = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [bRes, cRes] = await Promise.all([
        fetch('/api/bookings'),
        fetch('/api/contacts')
      ]);
      const bData = await bRes.json();
      const cData = await cRes.json();
      if (bData.success) setBookings(bData.data);
      if (cData.success) setContacts(cData.data);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/bookings/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.success) {
        setBookings(bookings.map((b) => (b._id === id || b.bookingId === id ? { ...b, status } : b)));
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  };

  const totalRevenue = bookings.reduce((sum, b) => sum + (b.totalAmount || 0), 0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '950px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 className="modal-title">Hotel RK International — Manager Portal</h3>
            <span style={{ fontSize: '0.75rem', background: '#20B7E3', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
              ADMIN
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={fetchData}
              className="btn btn-outline btn-sm"
              disabled={loading}
              title="Refresh Data"
            >
              <RefreshCw size={14} className={loading ? 'spin' : ''} />
              <span>Refresh</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close">
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          {/* Quick Metrics */}
          <div className="admin-metrics-grid">
            <div style={{ backgroundColor: '#f0f9fc', border: '1px solid #bce8f5', padding: '16px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0284c7', fontSize: '0.82rem', fontWeight: '600' }}>
                <Calendar size={16} /> Total Bookings
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#002E5B', marginTop: '4px' }}>
                {bookings.length}
              </div>
            </div>

            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '16px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a', fontSize: '0.82rem', fontWeight: '600' }}>
                <CheckCircle size={16} /> Confirmed
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#166534', marginTop: '4px' }}>
                {bookings.filter((b) => b.status === 'Confirmed').length}
              </div>
            </div>

            <div style={{ backgroundColor: '#fefce8', border: '1px solid #fef08a', padding: '16px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ca8a04', fontSize: '0.82rem', fontWeight: '600' }}>
                <Mail size={16} /> Inquiries
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#854d0e', marginTop: '4px' }}>
                {contacts.length}
              </div>
            </div>

            <div style={{ backgroundColor: '#faf5ff', border: '1px solid #e9d5ff', padding: '16px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9333ea', fontSize: '0.82rem', fontWeight: '600' }}>
                <DollarSign size={16} /> Est. Value
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#6b21a8', marginTop: '4px' }}>
                Rs. {totalRevenue.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="admin-nav-tabs">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`admin-tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
            >
              Room Bookings ({bookings.length})
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`admin-tab-btn ${activeTab === 'contacts' ? 'active' : ''}`}
            >
              Contact Messages ({contacts.length})
            </button>
          </div>

          {/* Bookings View */}
          {activeTab === 'bookings' && (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Guest Details</th>
                    <th>Room</th>
                    <th>Dates</th>
                    <th>Tariff</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b._id || b.bookingId}>
                      <td style={{ fontWeight: '700', color: '#002E5B' }}>{b.bookingId}</td>
                      <td>
                        <strong>{b.guestName}</strong>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{b.phone}</div>
                        {b.email && <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{b.email}</div>}
                      </td>
                      <td>
                        {b.roomTitle}
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{b.guests} Guests</div>
                      </td>
                      <td>
                        {b.checkIn} to {b.checkOut}
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>({b.nights} nights)</div>
                      </td>
                      <td style={{ fontWeight: '700', color: '#002E5B' }}>
                        Rs. {b.totalAmount}
                      </td>
                      <td>
                        <span className={`badge-status ${b.status === 'Confirmed' ? 'badge-confirmed' : b.status === 'Cancelled' ? 'badge-cancelled' : 'badge-pending'}`}>
                          {b.status}
                        </span>
                      </td>
                      <td>
                        <select
                          value={b.status}
                          onChange={(e) => handleUpdateStatus(b._id, e.target.value)}
                          style={{ padding: '4px 6px', fontSize: '0.8rem', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Checked-In">Checked-In</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Contact Inquiries View */}
          {activeTab === 'contacts' && (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Sender</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c, i) => (
                    <tr key={c._id || i}>
                      <td>
                        <strong>{c.name}</strong>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{c.phone}</div>
                        <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{c.email}</div>
                      </td>
                      <td style={{ fontWeight: '600' }}>{c.subject}</td>
                      <td style={{ maxWidth: '300px', fontSize: '0.85rem' }}>{c.message}</td>
                      <td style={{ fontSize: '0.78rem', color: '#64748b' }}>
                        {c.createdAt ? new Date(c.createdAt).toLocaleDateString() : 'Recent'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
