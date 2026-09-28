import Link from "next/link";
import { featuredVideos } from "@/data/videos";
import { channel } from "@/data/channel";
import VideoCard from "./VideoCard";

export default function FeaturedVideos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-extrabold text-brand-900">Tutoriales destacados</h2>
          <p className="mt-2 max-w-xl text-brand-900/70">
            Directo de nuestro canal de YouTube: reparaciones reales y proyectos que puedes
            replicar en casa o en el taller.
          </p>
        </div>
        <a
          href={channel.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Ver canal completo →
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/tutoriales"
          className="rounded-full border border-brand-600 px-6 py-3 text-sm font-semibold text-brand-600 transition hover:bg-brand-600 hover:text-white"
        >
          Ver todos los tutoriales
        </Link>
      </div>
    </section>
  );
}
