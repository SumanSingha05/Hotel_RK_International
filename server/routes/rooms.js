import express from 'express';
import { dbService } from '../data/store.js';

const router = express.Router();

// GET all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await dbService.getRooms();
    res.json({ success: true, count: rooms.length, data: rooms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single room by ID
router.get('/:id', async (req, res) => {
  try {
    const room = await dbService.getRoomById(req.params.id);
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }
    res.json({ success: true, data: room });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
