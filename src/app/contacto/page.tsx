import type { Metadata } from "next";
import { channel } from "@/data/channel";
import { FacebookIcon, YoutubeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto | RITSA Electrónica",
  description: "Ponte en contacto con RITSA Electrónica a través de YouTube o Facebook.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-brand-900">Contacto</h1>
        <p className="mt-3 text-brand-900/70">
          ¿Tienes una pregunta sobre un tutorial o quieres proponer un tema? Escríbenos por
          cualquiera de estos canales, ahí respondemos más rápido.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={channel.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-start gap-3 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
            <YoutubeIcon className="h-6 w-6" />
          </span>
          <h2 className="text-lg font-bold text-brand-900">Comenta en YouTube</h2>
          <p className="text-sm text-brand-900/70">
            Déjanos tu pregunta en los comentarios de cualquier video de {channel.handle}.
          </p>
        </a>

        <a
          href={channel.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-start gap-3 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
            <FacebookIcon className="h-6 w-6" />
          </span>
          <h2 className="text-lg font-bold text-brand-900">Escríbenos por Facebook</h2>
          <p className="text-sm text-brand-900/70">
            Envíanos un mensaje directo a nuestra página para consultas o soporte.
          </p>
        </a>
      </div>

      <div className="mt-14 overflow-hidden rounded-2xl border border-black/5">
        <iframe
          title="Página de Facebook de RITSA Electrónica"
          src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
            channel.facebookUrl
          )}&tabs=timeline,messages&width=700&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
          width="100%"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          loading="lazy"
          allow="encrypted-media"
        />
      </div>
    </section>
  );
}
