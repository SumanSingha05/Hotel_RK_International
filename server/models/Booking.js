import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true },
    guestName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    roomId: { type: String, required: true },
    roomTitle: { type: String, required: true },
    checkIn: { type: String, required: true },
    checkOut: { type: String, required: true },
    guests: { type: Number, default: 2 },
    nights: { type: Number, default: 1 },
    totalAmount: { type: Number, required: true },
    specialRequests: { type: String, default: '' },
    status: {
      type: String,
      enum: ['Confirmed', 'Pending', 'Cancelled', 'Checked-In'],
      default: 'Confirmed'
    },
    paymentMethod: { type: String, default: 'Pay at Hotel' }
  },
  { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
