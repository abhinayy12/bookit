export const dynamic = "force-dynamic";

import { Suspense } from "react";
import CheckoutClient from "./CheckoutClient";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading checkout...</p>}>
      <CheckoutClient />
    </Suspense>
  );
}