import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  time: String,
  left: Number
});

const daySchema = new mongoose.Schema({
  date: String,
  slots: [slotSchema]
});

const experienceSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  images: [String],
  description: String,
  days: [daySchema]
});

export default mongoose.model("Experience", experienceSchema);