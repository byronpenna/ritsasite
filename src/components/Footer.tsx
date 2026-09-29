import Image from "next/image";
import Link from "next/link";
import { channel } from "@/data/channel";
import { FacebookIcon, YoutubeIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-brand-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.jpeg"
              alt="RITSA Electrónica"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-bold">RITSA Electrónica</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/70">{channel.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Navegación
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/tutoriales" className="hover:text-white">
                Tutoriales
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-white">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-white">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Síguenos
          </h3>
          <div className="mt-3 flex gap-3">
            <a
              href={channel.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-red-600"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
            <a
              href={channel.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-500"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50 sm:px-6">
        © {new Date().getFullYear()} RITSA Electrónica. Todos los derechos reservados.
      </div>
    </footer>
  );
}
