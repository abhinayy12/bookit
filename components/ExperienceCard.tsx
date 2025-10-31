import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/types";

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="relative h-40">
        <Image src={exp.images[0]} alt={exp.title} fill className="object-cover" />
        <span className="absolute right-2 top-2 text-[11px] bg-gray-200/90 rounded px-2 py-0.5">
          {exp.location}
        </span>
      </div>
      <div className="p-3 space-y-2">
        <h3 className="font-semibold">{exp.title}</h3>
        <p className="text-[13px] text-gray-600">
          Curated small-group experience. Certified guide. Safety first with gear included.
        </p>
        <div className="flex items-center justify-between pt-1">
          <div className="text-sm">
            <span className="text-gray-500 mr-1">From</span>
            <span className="font-semibold">₹{exp.price}</span>
          </div>
          <Link
            href={`/experiences/${exp.id}`}
            className="text-sm bg-[#FACC15] hover:bg-[#f5c20a] text-[#111827] font-medium px-3 py-1.5 rounded-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}