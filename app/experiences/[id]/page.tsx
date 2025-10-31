"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { getExperience } from "@/services/api";
import { Experience } from "@/types";
import SlotSelector from "@/components/SlotSelector";
import SummaryCard from "@/components/SummaryCard";
import { useBooking } from "@/store/booking";

export default function DetailsPage() {
  const { id } = useParams<{id:string}>();
  const router = useRouter();
  const [exp, setExp] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<string>();
  const [slot, setSlot] = useState<any>();
  const { setExperience, setDate: setStoreDate, setSlot: setStoreSlot, qty, setQty } = useBooking();

  useEffect(() => {
    (async () => {
      const data = await getExperience(id);
      setExp(data);
      setDate(data.days[0]?.date);
      setLoading(false);
    })();
  }, [id]);

  if (loading || !exp) return <div className="py-10">Loading…</div>;

  const proceed = () => {
    setExperience(exp);
    if (date) setStoreDate(date);
    if (slot) setStoreSlot(slot);
    router.push("/checkout");
  };

  return (
    <section className="py-6 grid md:grid-cols-[1fr_320px] gap-6">
      {/* left */}
      <div>
        <button onClick={() => history.back()} className="text-sm text-gray-500 mb-3">← Details</button>
        <div className="relative h-72 rounded-xl overflow-hidden">
          <Image src={exp.images[0]} alt={exp.title} fill className="object-cover" />
        </div>

        <div className="mt-6">
          <h1 className="text-2xl font-semibold">Kayaking</h1>
          <p className="text-gray-600 mt-2">{exp.description}</p>

          <div className="mt-6">
            <SlotSelector
              days={exp.days}
              selectedDate={date}
              setDate={setDate}
              selectedSlot={slot}
              setSlot={setSlot}
            />
          </div>

          <div className="mt-6">
            <h4 className="font-semibold mb-2">About</h4>
            <div className="bg-gray-100 rounded-md px-3 py-2 text-sm text-gray-500">
              Scenic routes, trained guides, and safety briefing. Minimum age 10.
            </div>
          </div>
        </div>
      </div>

      {/* right summary */}
      <div className="pt-10 md:pt-0">
        <SummaryCard price={exp.price} qty={qty} />
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center border rounded-md">
            <button onClick={()=>setQty(Math.max(1, qty-1))} className="px-3 py-1.5">−</button>
            <span className="px-3">{qty}</span>
            <button onClick={()=>setQty(qty+1)} className="px-3 py-1.5">+</button>
          </div>
          <button
            disabled={!slot}
            onClick={proceed}
            className="flex-1 h-10 rounded-md bg-[#FACC15] disabled:opacity-50 text-[#111827] font-medium"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
}