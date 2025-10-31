export const dynamic = "force-dynamic";

import { Suspense } from "react";
import HomeClient from "./HomeClient";

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading experiences...</p>}>
      <HomeClient />
    </Suspense>
  );
}