"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getExperiences } from "@/services/api";
import ExperienceCard from "@/components/ExperienceCard";
import { Experience } from "@/types";

function PageContent() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [filtered, setFiltered] = useState<Experience[]>([]);
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    async function load() {
      const data = await getExperiences();
      setExperiences(data);
    }
    load();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(experiences);
    } else {
      const results = experiences.filter(
        (e) =>
          e.title.toLowerCase().includes(search) ||
          e.location.toLowerCase().includes(search) ||
          e.description.toLowerCase().includes(search)
      );
      setFiltered(results);
    }
  }, [search, experiences]);

  return (
    <section className="py-6">
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((e) => (
          <ExperienceCard key={e.id || (e as any)._id} exp={e} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No experiences found.
          </p>
        )}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading experiences...</p>}>
      <PageContent />
    </Suspense>
  );
}