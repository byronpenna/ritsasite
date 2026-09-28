"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { videos, type VideoCategory } from "@/data/videos";
import VideoCard from "./VideoCard";

const tabs: Array<VideoCategory | "Todos"> = [
  "Todos",
  "Reparación",
  "Proyectos DIY",
  "Herramientas",
  "Canal",
];

export default function TutorialesGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") ?? undefined;

  const initial =
    (tabs as string[]).includes(initialCategory ?? "") && initialCategory
      ? (initialCategory as VideoCategory | "Todos")
      : "Todos";

  const [active, setActive] = useState<VideoCategory | "Todos">(initial);

  const filtered = useMemo(
    () => (active === "Todos" ? videos : videos.filter((v) => v.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === tab
                ? "bg-brand-600 text-white"
                : "bg-brand-50 text-brand-900/70 hover:bg-brand-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-brand-900/60">
          Aún no hay videos en esta categoría.
        </p>
      )}
    </div>
  );
}
