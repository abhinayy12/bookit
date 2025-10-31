"use client";
import { Day, Slot } from "@/types";

export default function SlotSelector({
  days, selectedDate, setDate, selectedSlot, setSlot
}:{
  days: Day[];
  selectedDate?: string;
  setDate: (d: string)=>void;
  selectedSlot?: Slot;
  setSlot: (s: Slot)=>void;
}) {
  const day = days.find(d => d.date === selectedDate) || days[0];

  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Choose date</h4>
        <div className="flex flex-wrap gap-2">
          {days.map(d => (
            <button key={d.date}
              onClick={() => setDate(d.date)}
              className={`px-3 py-1.5 rounded-md border text-sm ${
                d.date === (selectedDate ?? day.date)
                  ? "bg-[#FDE68A] border-[#F59E0B]"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              {new Date(d.date).toLocaleString("en-IN",{ month: "short", day: "2-digit"})}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Choose time</h4>
        <div className="flex flex-wrap gap-2">
          {day?.slots.map(s => {
            const disabled = s.soldOut || s.left === 0;
            const active = selectedSlot?.time === s.time;
            return (
              <button key={s.time}
                disabled={disabled}
                onClick={() => setSlot(s)}
                className={`px-3 py-1.5 rounded-md text-sm border relative
                  ${disabled ? "bg-gray-100 text-gray-400 border-gray-200" :
                  active ? "bg-[#FDE68A] border-[#F59E0B]" :
                  "bg-white border-gray-200 hover:border-gray-300"}`}
              >
                {s.time}
                {!disabled && s.left <= 2 && (
                  <span className="ml-2 text-[11px] text-[#ef4444]">{s.left} left</span>
                )}
                {disabled && <span className="ml-2 text-[11px] text-gray-500">Sold out</span>}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-gray-400 mt-2">All times are in IST (GMT +5:30)</p>
      </div>
    </div>
  );
}