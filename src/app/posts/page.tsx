import type { Metadata } from "next";
import { posts } from "@/data/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Posts | RITSA Electrónica",
  description:
    "Guías a fondo de RITSA Electrónica: video, esquemáticos, BOM interactivo, código y material descargable para cada proyecto.",
};

export default function PostsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-brand-900">Posts</h1>
        <p className="mt-3 text-brand-900/70">
          Guías completas de nuestros proyectos: video, esquemáticos, BOM interactivo,
          imágenes y código listo para descargar.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-10 text-center text-brand-900/60">
          Muy pronto publicaremos aquí nuestras guías.
        </p>
      )}
    </section>
  );
}
