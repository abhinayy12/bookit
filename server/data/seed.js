import mongoose from "mongoose";
import dotenv from "dotenv";
import Experience from "../models/Experience.js";

dotenv.config();

const data = [
  {
    title: "Kayaking",
    location: "Udupi, Karnataka",
    price: 999,
    images: ["/kayak1.png"],
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included. Helmet and life jackets along with an expert will accompany in kayaking.",
    days: [
      {
        date: "2025-10-30",
        slots: [
          { time: "07:00 am", left: 4 },
          { time: "09:00 am", left: 2 },
          { time: "11:00 am", left: 5 },
          { time: "01:00 pm", left: 0, soldOut: true },
        ],
      },
      {
        date: "2025-10-31",
        slots: [
          { time: "07:00 am", left: 3 },
          { time: "09:00 am", left: 4 },
          { time: "11:00 am", left: 2 },
        ],
      },
    ],
  },
  {
    title: "Nandi Hills Sunrise",
    location: "Bangalore",
    price: 899,
    images: ["/sunrise.png"],
    description:
      "Experience a serene sunrise from the top of Nandi Hills. Includes travel, breakfast, and guided trek.",
    days: [
      {
        date: "2025-10-30",
        slots: [
          { time: "04:00 am", left: 5 },
          { time: "05:30 am", left: 3 },
          { time: "07:00 am", left: 1 },
        ],
      },
    ],
  },
  {
    title: "Coffee Trail",
    location: "Coorg",
    price: 1299,
    images: ["/coffee1.png"],
    description:
      "Walk through aromatic coffee plantations in Coorg. Learn about the bean-to-brew process with local guides.",
    days: [
      {
        date: "2025-10-30",
        slots: [
          { time: "09:00 am", left: 2 },
          { time: "11:30 am", left: 3 },
          { time: "02:00 pm", left: 4 },
        ],
      },
    ],
  },
  {
    title: "Kayaking (Advanced)",
    location: "Udupi, Karnataka",
    price: 999,
    images: ["/kayak2.png"],
    description:
      "An adventurous kayaking experience with professional trainers and top safety gear.",
    days: [
      {
        date: "2025-10-31",
        slots: [
          { time: "07:00 am", left: 2 },
          { time: "09:00 am", left: 5 },
          { time: "11:00 am", left: 1 },
        ],
      },
    ],
  },
  {
    title: "Nandi Hills Sunrise (Weekend)",
    location: "Bangalore",
    price: 899,
    images: ["/sunrise2.png"],
    description:
      "Catch the sunrise from Nandi Hills with our guided group. Refreshments included.",
    days: [
      {
        date: "2025-11-01",
        slots: [
          { time: "04:00 am", left: 5 },
          { time: "05:30 am", left: 5 },
          { time: "07:00 am", left: 4 },
        ],
      },
    ],
  },
  {
    title: "Boat Cruise",
    location: "Sundarban",
    price: 999,
    images: ["/boat.png"],
    description:
      "Relax on a scenic boat ride through the beautiful mangrove forests of the Sundarbans.",
    days: [
      {
        date: "2025-10-31",
        slots: [
          { time: "10:00 am", left: 5 },
          { time: "12:00 pm", left: 2 },
          { time: "02:30 pm", left: 0, soldOut: true },
        ],
      },
    ],
  },
  {
    title: "Bungee Jumping",
    location: "Manali",
    price: 999,
    images: ["/bungee.png"],
    description:
      "Feel the adrenaline rush of bungee jumping from Manali’s tallest jump site.",
    days: [
      {
        date: "2025-10-30",
        slots: [
          { time: "09:00 am", left: 3 },
          { time: "10:30 am", left: 1 },
          { time: "12:00 pm", left: 2 },
        ],
      },
    ],
  },
  {
    title: "Coffee Trail (Estate Walk)",
    location: "Coorg",
    price: 1299,
    images: ["/coffee2.png"],
    description:
      "A relaxing nature walk through Coorg’s lush plantations with a tasting session at a local estate.",
    days: [
      {
        date: "2025-11-01",
        slots: [
          { time: "08:00 am", left: 4 },
          { time: "10:00 am", left: 3 },
          { time: "01:00 pm", left: 2 },
        ],
      },
    ],
  },
];

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  await Experience.deleteMany();
  await Experience.insertMany(data);
  console.log("✅ Data Seeded — 8 Experiences Inserted with Slots");
  process.exit();
}

run();