import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import RoomsSection from './components/RoomsSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import RoomDetailModal from './components/RoomDetailModal';
import ReviewModal from './components/ReviewModal';
import PolicyModal from './components/PolicyModal';
import AdminDashboard from './components/AdminDashboard';
import CorporateBookingPage from './components/CorporateBookingPage';
import AboutUsPage from './components/AboutUsPage';
import SectionPageShell from './components/SectionPageShell';
import { CheckCircle } from 'lucide-react';

// Fallback initial rooms if backend is starting
const fallbackRooms = [
  {
    id: "deluxe-room",
    title: "Deluxe Room",
    subtitle: "Comfortable & Cozy Stay for Couples & Solo Travelers",
    category: "Deluxe",
    tag: "BESTSELLER",
    price: 2000,
    originalPrice: 2500,
    priceNote: "Including GST",
    capacity: "2 Adults + 1 Child",
    bedType: "1 Queen Size Bed",
    view: "Garden & City View",
    size: "220 sq ft",
    images: [
      "/RK International/Deluxe/WhatsApp Image 2026-11-06 at 9.41.30 AM.jpeg",
      "/RK International/Deluxe/WhatsApp Image 2026-11-06 at 9.41.30 AM (1).jpeg",
      "/RK International/Deluxe/WhatsApp Image 2026-11-06 at 9.41.30 AM (2).jpeg",
      "/RK International/Deluxe/WhatsApp Image 2026-11-06 at 9.41.30 AM (3).jpeg"
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
    price: 2200,
    originalPrice: 2800,
    priceNote: "Including GST",
    capacity: "2-3 Adults",
    bedType: "1 King Size Bed + Extra Mattress Option",
    view: "Resort Greenery & Open View",
    size: "280 sq ft",
    images: [
      "/RK International/Premium Deluxe/WhatsApp Image 2026-11-06 at 9.38.44 AM.jpeg",
      "/RK International/Premium Deluxe/WhatsApp Image 2026-11-06 at 9.38.55 AM.jpeg",
      "/RK International/Premium Deluxe/WhatsApp Image 2026-11-06 at 9.39.05 AM.jpeg",
      "/RK International/Premium Deluxe/WhatsApp Image 2026-11-06 at 9.39.39 AM.jpeg",
      "/RK International/Premium Deluxe/WhatsApp Image 2026-11-06 at 9.39.39 AM (1).jpeg"
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
    price: 2500,
    originalPrice: 3200,
    priceNote: "Including GST",
    capacity: "3 Adults + 1 Child",
    bedType: "1 Double Bed + 1 Single Bed",
    view: "Open Skyline View",
    size: "320 sq ft",
    images: [
      "/RK International/ThreeBedRoom/WhatsApp Image 2026-11-06 at 9.44.37 AM.jpeg",
      "/RK International/ThreeBedRoom/WhatsApp Image 2026-11-06 at 9.44.37 AM (1).jpeg",
      "/RK International/ThreeBedRoom/WhatsApp Image 2026-11-06 at 9.44.37 AM (2).jpeg",
      "/RK International/ThreeBedRoom/WhatsApp Image 2026-11-06 at 9.44.37 AM (3).jpeg"
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
    price: 5000,
    originalPrice: 6200,
    priceNote: "Including GST",
    capacity: "2 Adults",
    bedType: "Royal King Bed with Velvet Headboard",
    view: "Panoramic View with Balcony",
    size: "350 sq ft",
    images: [
      "/RK International/CoupleRoom/WhatsApp Image 2026-11-06 at 9.51.48 AM.jpeg",
      "/RK International/CoupleRoom/WhatsApp Image 2026-11-06 at 9.51.48 AM (1).jpeg",
      "/RK International/CoupleRoom/WhatsApp Image 2026-11-06 at 9.51.48 AM (2).jpeg",
      "/RK International/CoupleRoom/WhatsApp Image 2026-11-06 at 9.51.48 AM (3).jpeg",
      "/RK International/CoupleRoom/WhatsApp Image 2026-11-06 at 9.51.48 AM (4).jpeg",
      "/RK International/CoupleRoom/WhatsApp Image 2026-11-06 at 9.51.48 AM (5).jpeg",
      "/RK International/CoupleRoom/WhatsApp Image 2026-11-06 at 9.51.48 AM (6).jpeg",
      "/RK International/CoupleRoom/WhatsApp Image 2026-11-06 at 9.51.48 AM (7).jpeg"
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
    priceNote: "Including GST",
    capacity: "4-5 Adults + 2 Children",
    bedType: "2 Queen Beds or Interconnected Rooms",
    view: "Garden & Beachside Vista",
    size: "480 sq ft",
    images: [
      "/RK International/FamilySuiteRoom/WhatsApp Image 2026-11-06 at 9.48.51 AM.jpeg",
      "/RK International/FamilySuiteRoom/WhatsApp Image 2026-11-06 at 9.48.51 AM (1).jpeg",
      "/RK International/FamilySuiteRoom/WhatsApp Image 2026-11-06 at 9.48.51 AM (2).jpeg",
      "/RK International/FamilySuiteRoom/WhatsApp Image 2026-11-06 at 9.48.51 AM (3).jpeg",
      "/RK International/FamilySuiteRoom/WhatsApp Image 2026-11-06 at 9.48.51 AM (4).jpeg"
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
    comment: "Best budget luxury hotel in New Digha near the sea beach. Clean sparkling washrooms, prompt room service, and great hospitality made our stay memorable."
  },
  {
    guestName: "Rajesh Banerjee",
    designation: "Doctor, Durgapur",
    rating: 5,
    roomType: "Family Suite Room",
    comment: "Stayed here with my parents and children for 3 nights. Superb hospitality, authentic Bengali thali in the dining restaurant, and very safe car parking facility."
  },
  {
    guestName: "Priyanka Chakraborty",
    designation: "Bank Officer, Siliguri",
    rating: 5,
    roomType: "Premium Deluxe Room",
    comment: "Morning sea breeze from the balcony was surreal. 24/7 power backup and hot water geyser worked seamlessly. Highly recommended for couples and families visiting New Digha!"
  },
  {
    guestName: "Amitabh Sen",
    designation: "Architect, Midnapore",
    rating: 5,
    roomType: "Premium Deluxe Room",
    comment: "Modern aesthetic interior, clean white linens, and extremely polite front desk staff. Online check-in process was very fast and completely hassle-free."
  }
];

function App() {
  const [rooms, setRooms] = useState(fallbackRooms);
  const [reviews, setReviews] = useState(fallbackReviews);

  // Routing State
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    if (decodeURIComponent(window.location.pathname).toLowerCase() === '/corporate booking') {
      window.history.replaceState({}, '', '/corporate-booking');
      setCurrentPath('/corporate-booking');
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path, targetHash = null) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    if (targetHash) {
      setTimeout(() => {
        const element = document.querySelector(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const normalizedPath = typeof currentPath === 'string'
    ? decodeURIComponent(currentPath).toLowerCase().replace(/\/$/, '') || '/'
    : '/';
  const isCorporateRoute = normalizedPath === '/corporate-booking';
  const isAboutRoute = normalizedPath === '/about-us';
  const isServicesRoute = normalizedPath === '/services-amenities';
  const isRoomsRoute = normalizedPath === '/rooms-tariff';
  const isGalleryRoute = normalizedPath === '/photo-gallery';
  const isReviewsRoute = normalizedPath === '/guest-reviews';

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
        currentPath={currentPath}
        onNavigate={navigateTo}
      />

      {/* Conditional Route Rendering */}
      {isCorporateRoute ? (
        /* Dedicated Corporate Booking Page */
        <CorporateBookingPage
          onNavigate={navigateTo}
          onShowToast={showToast}
          onOpenBooking={handleOpenBooking}
        />
      ) : isAboutRoute ? (
        <AboutUsPage
          onNavigate={navigateTo}
          onOpenBooking={handleOpenBooking}
        />
      ) : isServicesRoute ? (
        <SectionPageShell
          title="Services & Amenities"
          tagline="Everything you need for a comfortable, convenient stay in New Digha."
          path="/services-amenities"
          metaTitle="Hotel Services & Amenities | Hotel RK International New Digha"
          metaDescription="Explore Wi-Fi, room service, power backup, dining, swimming pool, parking, AC rooms, hot water, and housekeeping at Hotel RK International."
          onNavigate={navigateTo}
        >
          <ServicesSection pageLayout />
        </SectionPageShell>
      ) : isRoomsRoute ? (
        <SectionPageShell
          title="Rooms & Tariff"
          tagline="Compare our AC rooms and suites, view tariffs, and send your booking enquiry."
          path="/rooms-tariff"
          metaTitle="Rooms & Tariff | Hotel RK International New Digha"
          metaDescription="View rooms, suites, facilities, capacity, and tariffs at Hotel RK International near New Digha Sea Beach."
          onNavigate={navigateTo}
        >
          <RoomsSection
            rooms={rooms}
            onOpenBooking={handleOpenBooking}
            onOpenRoomDetail={handleOpenRoomDetail}
            pageLayout
          />
        </SectionPageShell>
      ) : isGalleryRoute ? (
        <SectionPageShell
          title="Photo Gallery"
          tagline="Explore our rooms, interiors, dining spaces, and hotel surroundings."
          path="/photo-gallery"
          metaTitle="Hotel Photo Gallery | Hotel RK International New Digha"
          metaDescription="Browse photos of Hotel RK International rooms, interiors, dining, and facilities in New Digha."
          onNavigate={navigateTo}
        >
          <GallerySection pageLayout />
        </SectionPageShell>
      ) : isReviewsRoute ? (
        <SectionPageShell
          title="Guest Reviews"
          tagline="Read what guests say about their rooms, dining, service, and stay with us."
          path="/guest-reviews"
          metaTitle="Guest Reviews | Hotel RK International New Digha"
          metaDescription="Read guest feedback about rooms, hospitality, food, and stays at Hotel RK International in New Digha."
          onNavigate={navigateTo}
        >
          <ReviewsSection
            reviews={reviews}
            onOpenAddReview={() => setReviewModalOpen(true)}
            pageLayout
          />
        </SectionPageShell>
      ) : (
        /* Main Home Landing Sections */
        <>
          {/* 3. Hero Section */}
          <Hero onOpenBooking={handleOpenBooking} />

          {/* 4. About Section */}
          <AboutSection onOpenBooking={handleOpenBooking} />

          {/* 6. Services & Amenities Section */}
          <ServicesSection />

          {/* 7. Rooms & Tariff Section */}
          <RoomsSection
            rooms={rooms}
            onOpenBooking={handleOpenBooking}
            onOpenRoomDetail={handleOpenRoomDetail}
          />

          {/* 8. Photo Gallery with Lightbox */}
          <GallerySection />

          {/* 10. Guest Feedback & Reviews */}
          <ReviewsSection
            reviews={reviews}
            onOpenAddReview={() => setReviewModalOpen(true)}
          />
        </>
      )}

      {/* 13. Footer */}
      <Footer
        onOpenPolicy={(type) => setPolicyType(type)}
        onOpenAdmin={() => setAdminOpen(true)}
        onNavigate={navigateTo}
        currentPath={currentPath}
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
