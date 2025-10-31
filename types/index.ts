export type Slot = { time: string; left: number; soldOut?: boolean };
export type Day = { date: string; slots: Slot[] };

export type Experience = {
  id: string;
  title: string;
  location: string;
  price: number;
  images: string[];
  description: string;
  days: Day[];
};