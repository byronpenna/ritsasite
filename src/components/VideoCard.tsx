import Image from "next/image";
import type { Video } from "@/data/videos";
import { EyeIcon, PlayIcon } from "./icons";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-brand-900">
        <Image
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-red-600">
            <PlayIcon className="h-6 w-6" />
          </span>
        </div>
        <span className="absolute left-2 top-2 rounded bg-brand-900/80 px-2 py-0.5 text-xs font-semibold text-white">
          {video.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-brand-900">
          {video.title}
        </h3>
        <div className="mt-auto flex items-center gap-3 text-xs text-brand-900/60">
          <span className="inline-flex items-center gap-1">
            <EyeIcon className="h-3.5 w-3.5" />
            {video.views}
          </span>
          <span>·</span>
          <span>{video.published}</span>
        </div>
      </div>
    </a>
  );
}
