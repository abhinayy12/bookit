export const dynamic = "force-dynamic";

import { Suspense } from "react";
import ResultClient from "./ResultClient";

export default function ResultPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading result...</p>}>
      <ResultClient />
    </Suspense>
  );
}