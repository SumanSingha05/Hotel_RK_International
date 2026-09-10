import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import roomsRouter from './routes/rooms.js';
import bookingsRouter from './routes/bookings.js';
import reviewsRouter from './routes/reviews.js';
import contactsRouter from './routes/contacts.js';
import statsRouter from './routes/stats.js';
import { setMongoConnected, seedMongoIfEmpty } from './data/store.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hotel_rk_international';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rooms', roomsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/stats', statsRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    hotel: 'Hotel RK International, New Digha',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'MongoDB Connected' : 'In-Memory/Local Store Active'
  });
});

// Start listening immediately
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Hotel RK International API Server running at http://localhost:${PORT}`);
  });
}

// Connect to MongoDB asynchronously if available
if (process.env.MONGODB_URI || process.env.USE_MONGO === 'true') {
  mongoose
    .connect(MONGODB_URI, { serverSelectionTimeoutMS: 2000 })
    .then(async () => {
      console.log('MongoDB successfully connected at:', MONGODB_URI);
      setMongoConnected(true);
      await seedMongoIfEmpty();
    })
    .catch((err) => {
      console.log('MongoDB connection note: ' + err.message);
      console.log('Active storage: Fast in-memory & pre-seeded Hotel RK International data store.');
      setMongoConnected(false);
    });
} else {
  console.log('Active storage: Fast in-memory & pre-seeded Hotel RK International data store.');
  setMongoConnected(false);
}

export default app;
