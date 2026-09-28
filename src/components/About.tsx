import Image from "next/image";
import { channel } from "@/data/channel";
import { YoutubeIcon } from "./icons";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/taller-reparacion.jpg"
            alt="Taller de reparación electrónica de RITSA"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-500">
            Sobre nosotros
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-900">
            Una comunidad para quienes aman la electrónica
          </h2>
          <p className="mt-4 text-brand-900/70">{channel.description}</p>
          <p className="mt-4 text-brand-900/70">
            Cada video nace de una reparación o un proyecto real de taller: mostramos el
            diagnóstico, las herramientas que usamos y los errores más comunes para que
            aprendas con casos de la vida real, no solo teoría.
          </p>

          <a
            href={channel.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <YoutubeIcon className="h-5 w-5" />
            Conoce el canal
          </a>
        </div>
      </div>
    </section>
  );
}
