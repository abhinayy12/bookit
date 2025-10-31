"use client";
import { useRouter } from "next/navigation";
import { useBooking, computeTotals } from "@/store/booking";
import SummaryCard from "@/components/SummaryCard";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const { exp, qty, setQty, promo, setPromo } = useBooking();
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("test@test.com");
  const [code, setCode] = useState("");
  const [agree, setAgree] = useState(true);

  if (!exp) return <div className="py-10">No experience selected.</div>;

  const apply = () => {
    // mock: SAVE10 => 10% of subtotal, FLAT100 => 100
    if (code.toUpperCase() === "FLAT100") setPromo("FLAT100", 100);
    else if (code.toUpperCase() === "SAVE10") setPromo("SAVE10", Math.round(exp.price * qty * 0.1));
    else setPromo("", 0);
  };

  const { total } = computeTotals(exp.price, qty, promo);
  const pay = () => {
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !agree) return alert("Fill the form correctly.");
    // normally call POST /bookings → on success:
    router.push(`/result?ref=HUF56S0`);
  };

  return (
    <section className="py-6 grid md:grid-cols-[1fr_320px] gap-6">
      {/* left form */}
      <div>
        <button onClick={() => history.back()} className="text-sm text-gray-500 mb-3">← Checkout</button>

        <div className="bg-[#F3F4F6] rounded-xl p-4 space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-600">Full name</label>
              <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full h-10 rounded-md bg-white px-3 border" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full h-10 rounded-md bg-white px-3 border" placeholder="you@email.com" />
            </div>
          </div>

          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label className="text-sm text-gray-600">Promo code</label>
              <input value={code} onChange={e=>setCode(e.target.value)} className="mt-1 w-full h-10 rounded-md bg-white px-3 border" placeholder="SAVE10 / FLAT100" />
            </div>
            <button onClick={apply} className="h-10 px-4 rounded-md bg-[#111827] text-white">Apply</button>
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} />
            I agree to the terms and safety policy
          </label>
        </div>
      </div>

      {/* right summary */}
      <div className="pt-8 md:pt-0">
        <SummaryCard
          price={exp.price}
          qty={qty}
          promoLabel={promo?.code}
          discount={promo?.discount}
        />
        <button onClick={pay} className="w-full h-10 mt-4 rounded-md bg-[#FACC15] text-[#111827] font-medium">
          Pay and Confirm (₹{total})
        </button>
      </div>
    </section>
  );
}