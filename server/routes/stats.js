import express from 'express';
import { dbService } from '../data/store.js';

const router = express.Router();

// GET hotel statistics and overview
router.get('/', async (req, res) => {
  try {
    const stats = await dbService.getStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
