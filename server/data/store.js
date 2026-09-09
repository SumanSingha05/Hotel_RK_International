import Room from '../models/Room.js';
import Booking from '../models/Booking.js';
import Review from '../models/Review.js';
import Contact from '../models/Contact.js';
import { initialRooms, initialReviews, hotelInfo } from './seedData.js';

let isMongoConnected = false;

// Fallback in-memory stores initialized with seed data
let memRooms = [...initialRooms];
let memReviews = [...initialReviews];
let memBookings = [
  {
    _id: "book-sample-1",
    bookingId: "HRK-8921",
    guestName: "Arindam Ghosh",
    email: "arindam.ghosh@example.com",
    phone: "+91 9830123456",
    roomId: "deluxe-room",
    roomTitle: "Deluxe Room",
    checkIn: "2026-09-15",
    checkOut: "2026-09-17",
    guests: 2,
    nights: 2,
    totalAmount: 3600,
    specialRequests: "Quiet corner room please",
    status: "Confirmed",
    paymentMethod: "Pay at Hotel",
    createdAt: new Date("2026-09-08T10:30:00Z").toISOString()
  },
  {
    _id: "book-sample-2",
    bookingId: "HRK-8922",
    guestName: "Priyanka Banik",
    email: "priyanka.b@example.com",
    phone: "+91 9831987654",
    roomId: "couple-suite-room",
    roomTitle: "Couple Suite Room",
    checkIn: "2026-09-20",
    checkOut: "2026-09-22",
    guests: 2,
    nights: 2,
    totalAmount: 6400,
    specialRequests: "Anniversary celebration setup",
    status: "Confirmed",
    paymentMethod: "Pay at Hotel",
    createdAt: new Date("2026-09-09T08:15:00Z").toISOString()
  }
];
let memContacts = [
  {
    _id: "cnt-sample-1",
    name: "Ramesh Sen",
    email: "ramesh@example.com",
    phone: "+91 9433221100",
    subject: "Group Booking for 15 persons in October",
    message: "Hello Hotel RK International, we are planning a corporate retreat for 15 people in mid-October. Can you offer customized package rates including dining?",
    status: "New",
    createdAt: new Date("2026-09-09T09:00:00Z").toISOString()
  }
];

export const setMongoConnected = (status) => {
  isMongoConnected = status;
};

export const getMongoConnected = () => isMongoConnected;

// Seed MongoDB if connected and empty
export const seedMongoIfEmpty = async () => {
  if (!isMongoConnected) return;
  try {
    const roomCount = await Room.countDocuments();
    if (roomCount === 0) {
      await Room.insertMany(initialRooms);
      console.log('Seeded initial rooms into MongoDB');
    }
    const reviewCount = await Review.countDocuments();
    if (reviewCount === 0) {
      await Review.insertMany(initialReviews);
      console.log('Seeded initial reviews into MongoDB');
    }
  } catch (err) {
    console.error('Error seeding MongoDB:', err.message);
  }
};

// Data Access API
export const dbService = {
  // Rooms
  async getRooms() {
    if (isMongoConnected) {
      try {
        const rooms = await Room.find().sort({ price: 1 });
        if (rooms.length > 0) return rooms;
      } catch (e) {
        console.warn('MongoDB query failed, falling back to memory store');
      }
    }
    return memRooms;
  },

  async getRoomById(id) {
    if (isMongoConnected) {
      try {
        const room = await Room.findOne({ id });
        if (room) return room;
      } catch (e) {
        console.warn('MongoDB query failed, falling back to memory store');
      }
    }
    return memRooms.find((r) => r.id === id);
  },

  // Bookings
  async getBookings() {
    if (isMongoConnected) {
      try {
        return await Booking.find().sort({ createdAt: -1 });
      } catch (e) {
        console.warn('MongoDB query failed, falling back to memory store');
      }
    }
    return memBookings;
  },

  async createBooking(bookingData) {
    const bookingId = `HRK-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullData = {
      ...bookingData,
      bookingId,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    if (isMongoConnected) {
      try {
        const doc = await Booking.create(fullData);
        return doc;
      } catch (e) {
        console.warn('MongoDB create failed, saving to memory store:', e.message);
      }
    }

    const newBooking = { _id: `book-${Date.now()}`, ...fullData };
    memBookings.unshift(newBooking);
    return newBooking;
  },

  async updateBookingStatus(id, status) {
    if (isMongoConnected) {
      try {
        const updated = await Booking.findByIdAndUpdate(id, { status }, { new: true });
        if (updated) return updated;
      } catch (e) {
        console.warn('MongoDB update failed, saving to memory store:', e.message);
      }
    }
    const idx = memBookings.findIndex((b) => b._id === id || b.bookingId === id);
    if (idx !== -1) {
      memBookings[idx].status = status;
      return memBookings[idx];
    }
    return null;
  },

  // Reviews
  async getReviews() {
    if (isMongoConnected) {
      try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        if (reviews.length > 0) return reviews;
      } catch (e) {
        console.warn('MongoDB query failed, falling back to memory store');
      }
    }
    return memReviews;
  },

  async createReview(reviewData) {
    const fullData = {
      ...reviewData,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      verified: true,
      createdAt: new Date().toISOString()
    };

    if (isMongoConnected) {
      try {
        const doc = await Review.create(fullData);
        return doc;
      } catch (e) {
        console.warn('MongoDB review insert failed, using memory store');
      }
    }

    const newRev = { _id: `rev-${Date.now()}`, ...fullData };
    memReviews.unshift(newRev);
    return newRev;
  },

  // Contacts
  async getContacts() {
    if (isMongoConnected) {
      try {
        return await Contact.find().sort({ createdAt: -1 });
      } catch (e) {
        console.warn('MongoDB contacts query failed, using memory store');
      }
    }
    return memContacts;
  },

  async createContact(contactData) {
    const fullData = {
      ...contactData,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    if (isMongoConnected) {
      try {
        const doc = await Contact.create(fullData);
        return doc;
      } catch (e) {
        console.warn('MongoDB contact create failed, using memory store');
      }
    }

    const newContact = { _id: `cnt-${Date.now()}`, ...fullData };
    memContacts.unshift(newContact);
    return newContact;
  },

  // Stats
  async getStats() {
    const bookings = await this.getBookings();
    const reviews = await this.getReviews();
    const rooms = await this.getRooms();
    const contacts = await this.getContacts();

    return {
      totalBookings: bookings.length,
      confirmedBookings: bookings.filter((b) => b.status === 'Confirmed').length,
      totalRooms: rooms.length,
      totalReviews: reviews.length,
      inquiriesCount: contacts.length,
      hotelInfo
    };
  }
};
