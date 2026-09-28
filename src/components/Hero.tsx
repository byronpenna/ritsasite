import Image from "next/image";
import Link from "next/link";
import { channel } from "@/data/channel";
import { YoutubeIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <Image
        src="/images/banner.jpg"
        alt="Reparación de electrónicos en el taller de RITSA"
        fill
        priority
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/60 via-brand-900/80 to-brand-900" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 sm:py-32">
        <span className="inline-flex items-center rounded-full bg-accent-500/20 px-4 py-1 text-sm font-semibold text-accent-400">
          Aprende electrónica haciendo
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Tutoriales de reparación y proyectos de electrónica, explicados paso a paso
        </h1>
        <p className="max-w-xl text-lg text-white/80">{channel.description}</p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/tutoriales"
            className="rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-brand-900 shadow-lg shadow-accent-500/20 transition hover:bg-accent-400"
          >
            Ver tutoriales
          </Link>
          <a
            href={channel.youtubeSubscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            <YoutubeIcon className="h-5 w-5" />
            Suscríbete en YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
