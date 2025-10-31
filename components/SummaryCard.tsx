import { computeTotals } from "@/store/booking";

export default function SummaryCard({
  price, qty, promoLabel, discount
}: { price: number; qty: number; promoLabel?: string; discount?: number }) {
  const { subtotal, taxes, total } = computeTotals(price, qty, discount ? {discount} : undefined);

  return (
    <aside className="bg-[#F3F4F6] rounded-xl p-4 w-full">
      <div className="text-sm grid grid-cols-2 gap-y-2">
        <span className="text-gray-500">Starts at</span><span className="text-right">₹{price}</span>
        <span className="text-gray-500">Quantity</span><span className="text-right">{qty}</span>
        <span className="text-gray-500">Subtotal</span><span className="text-right">₹{subtotal}</span>
        <span className="text-gray-500">Taxes</span><span className="text-right">₹{taxes}</span>
        {discount ? (<><span className="text-gray-500">Promo {promoLabel}</span><span className="text-right">−₹{discount}</span></>) : null}
        <div className="col-span-2 border-t pt-3 mt-2 flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">₹{total}</span>
        </div>
      </div>
    </aside>
  );
}