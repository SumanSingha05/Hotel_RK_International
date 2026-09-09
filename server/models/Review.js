import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    guestName: { type: String, required: true },
    designation: { type: String, default: 'Guest' },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    date: { type: String, default: () => new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) },
    roomType: { type: String, default: 'Deluxe Room' },
    comment: { type: String, required: true },
    verified: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model('Review', reviewSchema);
