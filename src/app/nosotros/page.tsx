import type { Metadata } from "next";
import Image from "next/image";
import { channel } from "@/data/channel";
import { YoutubeIcon, FacebookIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Nosotros | RITSA Electrónica",
  description:
    "Conoce a RITSA Electrónica, la plataforma de tutoriales de reparación y proyectos de electrónica.",
};

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/images/logo.jpeg"
          alt="RITSA Electrónica"
          width={96}
          height={96}
          className="rounded-full shadow-md"
        />
        <h1 className="mt-6 text-4xl font-extrabold text-brand-900">RITSA Electrónica</h1>
        <p className="mt-4 text-lg text-brand-900/70">{channel.description}</p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image
            src="/images/proyecto-arduino.jpg"
            alt="Proyecto con Arduino de RITSA Electrónica"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image
            src="/images/taller-reparacion.jpg"
            alt="Reparación de una tarjeta electrónica en el taller"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-14 rounded-2xl bg-brand-50 p-8">
        <h2 className="text-2xl font-bold text-brand-900">Nuestra misión</h2>
        <p className="mt-3 text-brand-900/70">
          Queremos que la electrónica sea accesible para todos: desde quien quiere reparar su
          primer televisor hasta quien está armando su primer proyecto con Arduino. Por eso
          documentamos cada reparación y cada proyecto tal como sucede en el taller, con los
          aciertos y los errores incluidos.
        </p>
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold text-brand-900">Únete a la comunidad</h2>
        <div className="flex gap-4">
          <a
            href={channel.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <YoutubeIcon className="h-5 w-5" />
            YouTube
          </a>
          <a
            href={channel.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            <FacebookIcon className="h-5 w-5" />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
