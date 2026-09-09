import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, default: 'General Inquiry' },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ['New', 'In Progress', 'Resolved'],
      default: 'New'
    }
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
