import { channel } from "@/data/channel";
import { FacebookIcon, YoutubeIcon } from "./icons";

export default function SocialSection() {
  return (
    <section className="bg-brand-900 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Síguenos y no te pierdas nada</h2>
          <p className="mx-auto mt-2 max-w-xl text-white/70">
            Nuevos tutoriales cada semana en YouTube y actualizaciones diarias en Facebook.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
              <YoutubeIcon className="h-7 w-7" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-white">{channel.handle}</h3>
            <p className="mt-2 text-sm text-white/70">
              Tutoriales de reparación y proyectos de electrónica explicados paso a paso.
            </p>
            <a
              href={channel.youtubeSubscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Suscribirme al canal
            </a>
          </div>

          <div className="flex flex-col items-center rounded-2xl bg-white p-4">
            <div className="flex items-center gap-2 self-start px-4 pt-2 text-brand-900">
              <FacebookIcon className="h-5 w-5" />
              <span className="text-sm font-semibold">RITSA en Facebook</span>
            </div>
            <div className="mt-2 w-full overflow-hidden rounded-xl">
              <iframe
                title="Página de Facebook de RITSA Electrónica"
                src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                  channel.facebookUrl
                )}&tabs=timeline&width=500&height=360&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                width="100%"
                height="360"
                style={{ border: "none", overflow: "hidden" }}
                loading="lazy"
                allow="encrypted-media"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
