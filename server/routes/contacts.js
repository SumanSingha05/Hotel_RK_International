import express from 'express';
import { dbService } from '../data/store.js';

const router = express.Router();

// GET all contact inquiries (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await dbService.getContacts();
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST submit contact message / booking inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone number, and message are required.'
      });
    }

    const contact = await dbService.createContact({
      name,
      email: email || 'guest@hotelrkinternational.com',
      phone,
      subject: subject || 'General Inquiry',
      message
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry successfully received! Our reservations team will contact you shortly.',
      data: contact
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
