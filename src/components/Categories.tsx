import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="bg-brand-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-brand-900">¿Qué vas a aprender?</h2>
          <p className="mt-2 text-brand-900/70">
            Contenido pensado para quienes están empezando y para técnicos que quieren afinar
            su diagnóstico.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition hover:shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent" />
              <div className="relative p-5">
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                <p className="mt-1 text-sm text-white/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
