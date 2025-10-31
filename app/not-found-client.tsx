"use client";

import { Suspense } from "react";

export default function NotFoundClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">404 – Page Not Found</h1>
          <p className="text-gray-500 mb-6">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <a
            href="/"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-medium px-5 py-2 rounded-md"
          >
            Back to Home
          </a>
        </div>
      </main>
    </Suspense>
  );
}