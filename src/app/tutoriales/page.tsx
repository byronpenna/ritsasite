import type { Metadata } from "next";
import TutorialesGrid from "@/components/TutorialesGrid";

export const metadata: Metadata = {
  title: "Tutoriales | RITSA Electrónica",
  description:
    "Todos los tutoriales de RITSA Electrónica: reparación de TVs y celulares, proyectos con Arduino y ESP32, y herramientas de taller.",
};

export default async function TutorialesPage(props: PageProps<"/tutoriales">) {
  const params = await props.searchParams;
  const categoria = Array.isArray(params.categoria)
    ? params.categoria[0]
    : params.categoria;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-brand-900">Tutoriales</h1>
        <p className="mt-3 text-brand-900/70">
          Filtra por tema y encuentra el tutorial que necesitas: reparación de equipos,
          proyectos DIY o herramientas de taller.
        </p>
      </div>

      <div className="mt-10">
        <TutorialesGrid initialCategory={categoria} />
      </div>
    </section>
  );
}
