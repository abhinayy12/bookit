import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  expId: String,
  name: String,
  email: String,
  date: String,
  time: String,
  qty: Number,
  total: Number,
  ref: String
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);