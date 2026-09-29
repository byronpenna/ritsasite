"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { channel } from "@/data/channel";
import { CloseIcon, FacebookIcon, MenuIcon, YoutubeIcon } from "./icons";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/tutoriales", label: "Tutoriales" },
  { href: "/posts", label: "Posts" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpeg"
            alt="RITSA Electrónica"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-brand-900">
            RITSA <span className="text-brand-500">Electrónica</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-brand-900/80 transition hover:text-brand-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={channel.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de RITSA Electrónica"
            className="text-brand-700 transition hover:text-brand-500"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={channel.youtubeSubscribeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
          >
            <YoutubeIcon className="h-4 w-4" />
            Suscríbete
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-brand-900 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-brand-900 hover:bg-brand-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-t border-black/5 px-4 py-3">
            <a
              href={channel.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700"
              aria-label="Facebook de RITSA Electrónica"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a
              href={channel.youtubeSubscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white"
            >
              <YoutubeIcon className="h-4 w-4" />
              Suscríbete
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
