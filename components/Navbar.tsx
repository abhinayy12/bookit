"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const q = params.get("search");
    if (q) setQuery(q);
  }, [params]);

  const handleLiveSearch = (value: string) => {
    setQuery(value);
    const url = value.trim()
      ? `/?search=${encodeURIComponent(value.trim())}`
      : "/";
    router.replace(url);
  };

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-4 md:px-6 h-14">
        <button onClick={() => router.push("/")} className="flex items-center gap-2">
          <div className="relative w-22 h-14">
            <Image src="/logo-hd.png" alt="logo" fill />
          </div>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:block w-[320px]">
            <input
              placeholder="Search experiences"
              value={query}
              onChange={(e) => handleLiveSearch(e.target.value)}
              className="w-full h-9 rounded-md bg-gray-100 px-3 text-sm outline-none"
            />
          </div>
          <button
            onClick={() => handleLiveSearch(query)}
            className="h-9 px-4 rounded-md bg-[#FACC15] hover:bg-[#f5c20a] text-[#111827] text-sm font-medium"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}