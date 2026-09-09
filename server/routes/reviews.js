import express from 'express';
import { dbService } from '../data/store.js';

const router = express.Router();

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await dbService.getReviews();
    res.json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST submit a review
router.post('/', async (req, res) => {
  try {
    const { guestName, designation, rating, roomType, comment } = req.body;
    if (!guestName || !comment) {
      return res.status(400).json({
        success: false,
        message: 'Guest name and review comment are required.'
      });
    }

    const review = await dbService.createReview({
      guestName,
      designation: designation || 'Verified Guest',
      rating: Number(rating) || 5,
      roomType: roomType || 'Deluxe Room',
      comment
    });

    res.status(201).json({
      success: true,
      message: 'Review successfully submitted! Thank you for your feedback.',
      data: review
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
