"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PostImage } from "@/data/posts";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  CpuIcon,
  ZoomIcon,
} from "./icons";

export default function PostGallery({ images }: { images: PostImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      }
    };

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, images.length]);

  const current = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {images.map((img, i) => (
          <div key={img.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Ampliar imagen: ${img.alt}`}
              className="group relative block aspect-video w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-900">
                  <ZoomIcon className="h-5 w-5" />
                </span>
              </span>
            </button>

            {img.exploreLink && (
              <Link
                href={img.exploreLink.href}
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-400/15 px-3 py-1.5 text-sm font-semibold text-accent-600 transition hover:bg-accent-400/25"
              >
                <CpuIcon className="h-4 w-4" />
                {img.exploreLink.label}
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                }}
                aria-label="Imagen anterior"
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-4"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
                }}
                aria-label="Imagen siguiente"
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element -- lightbox needs an unconstrained intrinsic size, unlike the fixed-aspect thumbnails above */}
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
          />

          <p
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-4 left-1/2 max-w-[90vw] -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-center text-xs text-white/80"
          >
            {current.alt}
            {images.length > 1 && ` · ${openIndex! + 1}/${images.length}`}
          </p>
        </div>
      )}
    </>
  );
}
