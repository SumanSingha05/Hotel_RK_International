import express from 'express';
import { dbService } from '../data/store.js';

const router = express.Router();

// GET all bookings (admin/management)
router.get('/', async (req, res) => {
  try {
    const bookings = await dbService.getBookings();
    res.json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST new booking
router.post('/', async (req, res) => {
  try {
    const {
      guestName,
      email,
      phone,
      roomId,
      roomTitle,
      checkIn,
      checkOut,
      guests,
      nights,
      totalAmount,
      specialRequests
    } = req.body;

    if (!guestName || !phone || !checkIn || !checkOut) {
      return res.status(400).json({
        success: false,
        message: 'Please provide guest name, phone, check-in and check-out dates.'
      });
    }

    const booking = await dbService.createBooking({
      guestName,
      email: email || 'guest@hotelrkinternational.com',
      phone,
      roomId: roomId || 'deluxe-room',
      roomTitle: roomTitle || 'Deluxe Room',
      checkIn,
      checkOut,
      guests: Number(guests) || 2,
      nights: Number(nights) || 1,
      totalAmount: Number(totalAmount) || 1800,
      specialRequests: specialRequests || ''
    });

    res.status(201).json({
      success: true,
      message: 'Booking successfully confirmed!',
      data: booking
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH update booking status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await dbService.updateBookingStatus(req.params.id, status);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.json({ success: true, message: 'Booking status updated', data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
