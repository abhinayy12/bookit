"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ResultClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ref = searchParams.get("ref") || "HUF56S0";

  return (
    <section className="py-16 text-center">
      <div className="mx-auto w-16 h-16 rounded-lg bg-green-500 grid place-content-center text-white text-3xl">
        ✓
      </div>
      <h1 className="text-2xl font-semibold mt-6">Booking Confirmed</h1>
      <p className="text-gray-600 mt-2">Ref ID: {ref}</p>
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-4 h-10 rounded-md bg-gray-100 text-gray-700"
      >
        Back to Home
      </button>
    </section>
  );
}