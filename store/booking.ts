import { create } from "zustand";
import { Experience, Slot } from "@/types";

type State = {
  exp?: Experience;
  date?: string;
  slot?: Slot;
  qty: number;
  promo?: { code: string; discount: number }; // discount absolute
};
type Actions = {
  setExperience: (exp: Experience) => void;
  setDate: (date: string) => void;
  setSlot: (slot: Slot) => void;
  setQty: (n: number) => void;
  setPromo: (code: string, discount: number) => void;
  reset: () => void;
};

export const useBooking = create<State & Actions>((set) => ({
  qty: 1,
  setExperience: (exp) => set({ exp }),
  setDate: (date) => set({ date }),
  setSlot: (slot) => set({ slot }),
  setQty: (qty) => set({ qty }),
  setPromo: (code, discount) => set({ promo: { code, discount } }),
  reset: () => set({ exp: undefined, date: undefined, slot: undefined, qty: 1, promo: undefined }),
}));

export const computeTotals = (price: number, qty: number, promo?: {discount:number}) => {
  const subtotal = price * qty;
  const discount = promo?.discount ?? 0;
  const taxed = Math.round(subtotal * 0.06); // ~₹59 on ₹999
  const total = subtotal - discount + taxed;
  return { subtotal, taxes: taxed, total, discount };
};