import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickBookingBar from './components/QuickBookingBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RoomsSection from './components/RoomsSection';
import ExperienceBanner from './components/ExperienceBanner';
import DiningSection from './components/DiningSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';
import ReviewModal from './components/ReviewModal';
import PolicyModal from './components/PolicyModal';
import AdminDashboard from './components/AdminDashboard';
import { CheckCircle } from 'lucide-react';

// Fallback initial rooms if backend is starting
const fallbackRooms = [
  {
    id: "deluxe-room",
    title: "Deluxe Room",
    subtitle: "Comfortable & Cozy Stay for Couples & Solo Travelers",
    category: "Deluxe",
    tag: "BESTSELLER",
    price: 1800,
    originalPrice: 2200,
    priceNote: "Including Breakfast + GST",
    capacity: "2 Adults + 1 Child",
    bedType: "1 Queen Size Bed",
    view: "Garden & City View",
    size: "220 sq ft",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Air Conditioned (Split AC)",
      "Attached Luxury Bathroom with Geyser",
      "Complimentary High-Speed Wi-Fi",
      "32\" LED HD Color TV with Satellite Channels",
      "Intercom Facility & 24/7 Room Service",
      "Daily Housekeeping & Fresh Linen"
    ],
    description: "The Deluxe Room at Hotel RK International is thoughtfully designed to provide maximum relaxation after a memorable day on New Digha Sea Beach.",
    isAvailable: true,
    featured: true
  },
  {
    id: "premium-deluxe-room",
    title: "Premium Deluxe Room",
    subtitle: "Upgraded Comfort with Enhanced Space and Premium Amenities",
    category: "Deluxe",
    tag: "POPULAR",
    price: 2400,
    originalPrice: 2900,
    priceNote: "Including Breakfast + GST",
    capacity: "2-3 Adults",
    bedType: "1 King Size Bed + Extra Mattress Option",
    view: "Resort Greenery & Open View",
    size: "280 sq ft",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Spacious King Size Bedding",
      "Energy-Efficient Silent AC",
      "Modern Bathroom with Hot & Cold Water",
      "High-Speed Free Wi-Fi",
      "40\" Smart LED TV",
      "Work Desk & Seating Corner"
    ],
    description: "Experience enhanced luxury in our Premium Deluxe Room with expanded floor space and plush king-size bedding.",
    isAvailable: true,
    featured: true
  },
  {
    id: "three-bedded-deluxe-room",
    title: "Three Bedded Deluxe Room",
    subtitle: "Spacious Accommodation for Trios and Small Families",
    category: "Family",
    tag: "FAMILY CHOICE",
    price: 2800,
    originalPrice: 3400,
    priceNote: "Including Breakfast + GST",
    capacity: "3 Adults + 1 Child",
    bedType: "1 Double Bed + 1 Single Bed",
    view: "Open Skyline View",
    size: "320 sq ft",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Triple Bed Layout (Double + Single)",
      "High-Capacity Split AC",
      "Attached Bathroom with Modern Sanitaryware",
      "Free High-Speed Wi-Fi",
      "Color Television Set with Cable",
      "24/7 High-Tension Generator Backup"
    ],
    description: "Designed specifically for traveling trios or parents traveling with a teenager, eliminating the hassle of extra beds.",
    isAvailable: true,
    featured: true
  },
  {
    id: "couple-suite-room",
    title: "Couple Suite Room",
    subtitle: "Romantic Ambiance & Elegant Décor for Honeymooners",
    category: "Suite",
    tag: "ROMANTIC",
    price: 3200,
    originalPrice: 3900,
    priceNote: "Including Breakfast + GST",
    capacity: "2 Adults",
    bedType: "Royal King Bed with Velvet Headboard",
    view: "Panoramic View with Balcony",
    size: "350 sq ft",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Romantic Mood Lighting & Curated Décor",
      "Private Balcony with Outdoor Seating",
      "Attached Luxury Bath with Rain Shower",
      "43\" Smart TV with Streaming Support",
      "Mini Refrigerator & Electric Kettle"
    ],
    description: "Indulge in romantic comfort with our Couple Suite. Crafted for couples and honeymooners seeking privacy and luxury.",
    isAvailable: true,
    featured: true
  },
  {
    id: "family-suite-room",
    title: "Family Suite Room",
    subtitle: "Multi-Room Comfort for Large Families & Vacation Groups",
    category: "Suite",
    tag: "LUXURY SUITE",
    price: 4500,
    originalPrice: 5500,
    priceNote: "Including Breakfast + GST",
    capacity: "4-5 Adults + 2 Children",
    bedType: "2 Queen Beds or Interconnected Rooms",
    view: "Garden & Beachside Vista",
    size: "480 sq ft",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Interconnected Space for Privacy and Togetherness",
      "Dual Air Conditioning Units",
      "Two Attached Bathrooms with Geysers",
      "Large Seating Lounge Area with Sofa Set",
      "Two LED Televisions"
    ],
    description: "The premier family accommodation in New Digha with interconnected quarters and multiple washrooms.",
    isAvailable: true,
    featured: true
  },
  {
    id: "front-sea-facing-deluxe",
    title: "Front Sea Facing Deluxe",
    subtitle: "Spectacular Coastal Breezes & Partial Sea Views",
    category: "Deluxe",
    tag: "SEA VIEW",
    price: 2600,
    originalPrice: 3200,
    priceNote: "Including Breakfast + GST",
    capacity: "2 Adults + 1 Child",
    bedType: "1 King Size Bed",
    view: "Sea Breeze & Bay View",
    size: "260 sq ft",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    features: [
      "Sea Facing Balcony with Morning Sun View",
      "Whisper-Quiet Inverter AC",
      "Attached Bathroom with 24/7 Hot Water",
      "High-Speed Free Wi-Fi",
      "Tea/Coffee Maker & Fresh Linens"
    ],
    description: "Wake up to refreshing coastal breezes in our Front Sea Facing Deluxe Room with a private balcony.",
    isAvailable: true,
    featured: true
  }
];

const fallbackReviews = [
  {
    guestName: "Surajit Mondal",
    designation: "Software Engineer, Kolkata",
    rating: 5,
    roomType: "Premium Deluxe Room",
    comment: "Very nice ambience, family friendly and superb service. All staffs are very nice and makes you feel that you are in home. I would highly recommend Hotel RK International. Very friendly management who welcomes guests warmly."
  },
  {
    guestName: "Dip Kumar Roy",
    designation: "Business Analyst, Howrah",
    rating: 5,
    roomType: "Couple Suite Room",
    comment: "I had a wonderful experience at Hotel RK International. Every staff member I encountered, from the valet to the check-in desk to the cleaning staff, were delightful and eager to help! The rooms are spacious and food is awesome."
  },
  {
    guestName: "Ananya Sengupta",
    designation: "School Teacher, Burdwan",
    rating: 5,
    roomType: "Deluxe Room",
    comment: "Best budget luxury hotel in New Digha near the sea beach. Clean sparkling washrooms, prompt room service, and the lawn area was great for my kids to play in the evening."
  }
];

function App() {
  const [rooms, setRooms] = useState(fallbackRooms);
  const [reviews, setReviews] = useState(fallbackReviews);

  // Modal States
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState(null);
  const [bookingParams, setBookingParams] = useState(null);

  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState(null);

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState(null);
  const [adminOpen, setAdminOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  // Fetch Rooms & Reviews from Backend API
  useEffect(() => {
    fetch('/api/rooms')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setRooms(data.data);
        }
      })
      .catch((err) => console.log('Using local rooms data:', err));

    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setReviews(data.data);
        }
      })
      .catch((err) => console.log('Using local reviews data:', err));
  }, []);

  const handleOpenBooking = (room) => {
    setSelectedRoomForBooking(room);
    setBookingParams(null);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithParams = (params) => {
    const matchedRoom = rooms.find((r) => r.id === params.roomId) || rooms[0];
    setSelectedRoomForBooking(matchedRoom);
    setBookingParams(params);
    setBookingModalOpen(true);
  };

  const handleOpenRoomDetail = (room) => {
    setSelectedRoomForDetail(room);
    setDetailModalOpen(true);
  };

  const handleReviewSubmitted = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="app-wrapper">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Sticky Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
      />

      {/* 3. Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 4. Quick Booking Availability Bar */}
      <QuickBookingBar onOpenBookingWithParams={handleOpenBookingWithParams} />

      {/* 5. About Section */}
      <AboutSection onOpenBooking={handleOpenBooking} />

      {/* 6. Services & Amenities Section */}
      <ServicesSection />

      {/* 7. Rooms & Tariff Section (Exact Seabird Digha layout) */}
      <RoomsSection
        rooms={rooms}
        onOpenBooking={handleOpenBooking}
        onOpenRoomDetail={handleOpenRoomDetail}
      />

      {/* 8. Experience & Counters Banner */}
      <ExperienceBanner onOpenBooking={handleOpenBooking} />

      {/* 9. Multi-Cuisine Restaurant & Dining */}
      <DiningSection onOpenBooking={handleOpenBooking} />

      {/* 10. Photo Gallery with Lightbox */}
      <GallerySection />

      {/* 11. Guest Feedback & Reviews */}
      <ReviewsSection
        reviews={reviews}
        onOpenAddReview={() => setReviewModalOpen(true)}
      />

      {/* 12. Contact & Booking Inquiry Section + Google Map */}
      <ContactSection onShowToast={showToast} />

      {/* 13. Footer */}
      <Footer
        onOpenPolicy={(type) => setPolicyType(type)}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* 14. Floating WhatsApp and Call Action Buttons */}
      <FloatingActions />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedRoom={selectedRoomForBooking}
        initialParams={bookingParams}
        rooms={rooms}
        onBookingSuccess={(booking) => {
          showToast(`Booking ${booking.bookingId} confirmed! Check-in details sent.`);
        }}
      />

      <RoomDetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        room={selectedRoomForDetail}
        onOpenBooking={handleOpenBooking}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
        onShowToast={showToast}
      />

      <PolicyModal
        policyType={policyType}
        onClose={() => setPolicyType(null)}
      />

      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast">
          <CheckCircle size={20} color="#20B7E3" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
