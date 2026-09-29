import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import DownloadCard from "@/components/DownloadCard";
import { PlayIcon } from "@/components/icons";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/posts/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | RITSA Electrónica`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage(props: PageProps<"/posts/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <nav className="text-sm text-brand-900/60">
        <Link href="/posts" className="hover:text-brand-600">
          Posts
        </Link>{" "}
        / <span className="text-brand-900/80">{post.category}</span>
      </nav>

      <header className="mt-4">
        <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
          {post.category}
        </span>
        <h1 className="mt-3 text-3xl font-extrabold text-brand-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-brand-900/50">
          Publicado el {formatDate(post.publishedAt)}
        </p>
        <p className="mt-4 text-lg text-brand-900/70">{post.excerpt}</p>
      </header>

      {/* Video */}
      <div className="mt-8">
        {post.videoIsPlaceholder && (
          <p className="mb-3 rounded-lg bg-accent-400/15 px-4 py-2 text-sm font-medium text-accent-600">
            El video de este proyecto está en camino. Mientras tanto, disfruta el último
            video de nuestro canal.
          </p>
        )}
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-brand-900 shadow-lg">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
            title={post.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Specs */}
      {post.specs.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-900">Ficha técnica</h2>
          <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 rounded-2xl bg-brand-50 p-6 sm:grid-cols-2">
            {post.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 border-b border-brand-100 pb-2 sm:border-none sm:pb-0">
                <dt className="text-sm font-medium text-brand-900/60">{spec.label}</dt>
                <dd className="text-sm font-semibold text-brand-900">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Content */}
      <section className="prose prose-neutral mt-10 max-w-none">
        {post.content.map((paragraph, i) => (
          <p key={i} className="mt-4 text-brand-900/80 leading-relaxed first:mt-0">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Gallery */}
      {post.gallery.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-900">Imágenes</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {post.gallery.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition hover:scale-105"
                />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Downloads */}
      {post.downloads.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-900">Descargas y recursos</h2>
          <div className="mt-4 grid grid-cols-1 gap-4">
            {post.downloads.map((download) => (
              <DownloadCard key={download.href} download={download} />
            ))}
          </div>
        </section>
      )}

      {/* Related videos */}
      {post.relatedVideos.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-brand-900">Videos complementarios</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {post.relatedVideos.map((video) => (
              <a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-brand-900">
                  <Image
                    src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    sizes="(min-width: 640px) 33vw, 90vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-red-600">
                      <PlayIcon className="h-5 w-5" />
                    </span>
                  </div>
                </div>
                <p className="line-clamp-2 p-3 text-sm font-semibold text-brand-900">
                  {video.title}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}

      <div className="mt-14 border-t border-black/5 pt-8">
        <Link href="/posts" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
          ← Volver a todos los posts
        </Link>
      </div>
    </article>
  );
}
