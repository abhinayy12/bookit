import { v4 as uuid } from "uuid";
import Experience from "../models/Experience.js";
import Booking from "../models/Booking.js";

export async function createBooking(req, res) {
  try {
    const { expId, name, email, date, time, qty, total } = req.body;

    const exp = await Experience.findById(expId);
    if (!exp) return res.status(404).json({ message: "Experience not found" });

    const day = exp.days.find(d => d.date === date);
    const slot = day.slots.find(s => s.time === time);

    if (!slot || slot.left < qty)
      return res.status(400).json({ message: "Slot Sold Out" });

    slot.left -= qty;
    await exp.save();

    const ref = uuid().slice(0, 8).toUpperCase();
    const booking = await Booking.create({ expId, name, email, date, time, qty, total, ref });

    res.json({ message: "Success", ref });
  } catch (err) {
    res.status(500).json({ message: "Booking Failed" });
  }
}