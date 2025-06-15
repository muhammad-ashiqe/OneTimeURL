import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: Date,
  oneClickDestroy: {
    type: Boolean,
    default: false
  },
  clicked: {
    type: Boolean,
    default: false
  },
  clicks: {
    type: Number,
    default: 0
  }
});

// Add TTL index for automatic expiration cleanup
shortUrlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);