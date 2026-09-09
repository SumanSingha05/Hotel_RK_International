import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: { type: String },
    category: { type: String, default: 'Deluxe' },
    tag: { type: String },
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    priceNote: { type: String, default: 'Including Breakfast + GST' },
    capacity: { type: String, required: true },
    bedType: { type: String, required: true },
    view: { type: String },
    size: { type: String },
    images: [{ type: String }],
    features: [{ type: String }],
    description: { type: String },
    isAvailable: { type: Boolean, default: true },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.models.Room || mongoose.model('Room', roomSchema);
