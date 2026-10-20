import type { Metadata } from "next";
import Link from "next/link";
import PostGallery from "@/components/PostGallery";
import SchematicExplorer from "@/components/pepew/SchematicExplorer";

export const metadata: Metadata = {
  title: "Explorador interactivo del esquemático | PEPEW Miner | RITSA Electrónica",
  description:
    "Explora en una pantalla interactiva los componentes y el pinout del esquemático del PEPEW Miner Carrier V1.0: TFT, OLED, botón, Ethernet y el módulo ESP32-S3-ETH.",
};

const referenceImages = [
  {
    src: "/posts/pepew-miner-esp32-s3/pepew-miner-esquematico.png",
    alt: "Esquemático completo del RITSA PEPEW Miner Carrier V1.0",
  },
  {
    src: "/posts/pepew-miner-esp32-s3/pepew-miner-conexiones.png",
    alt: "Diagrama de conexiones entre el ESP32-S3-ETH, la TFT GC9A01, la OLED SSD1306 y el botón",
  },
];

export default function PepewSchematicExplorerPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-brand-900/60">
        <Link href="/posts" className="hover:text-brand-600">
          Posts
        </Link>{" "}
        /{" "}
        <Link href="/posts/pepew-miner-esp32-s3" className="hover:text-brand-600">
          PEPEW Miner
        </Link>{" "}
        / <span className="text-brand-900/80">Esquemático interactivo</span>
      </nav>

      <header className="mt-4">
        <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
          Explorador interactivo
        </span>
        <h1 className="mt-3 text-3xl font-extrabold text-brand-900 sm:text-4xl">
          Componentes y pinout del PEPEW Miner Carrier V1.0
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-brand-900/70">
          Haz clic en cualquier bloque para ver su lista de pines y notas. Selecciona un
          periférico (OLED, TFT, botón, Ethernet, expansión...) y el módulo ESP32-S3-ETH resalta
          automáticamente los pines que usa para conectarse con él, igual que en el esquemático
          original.
        </p>
      </header>

      <section className="mt-10">
        <SchematicExplorer />
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-brand-900">Esquemático original</h2>
        <p className="mt-2 text-sm text-brand-900/70">
          Por si prefieres revisar las imágenes originales del diseño. Haz clic para verlas en
          grande.
        </p>
        <div className="mt-4">
          <PostGallery images={referenceImages} />
        </div>
      </section>

      <div className="mt-14 border-t border-black/5 pt-8">
        <Link
          href="/posts/pepew-miner-esp32-s3"
          className="text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          ← Volver al post del PEPEW Miner
        </Link>
      </div>
    </article>
  );
}
