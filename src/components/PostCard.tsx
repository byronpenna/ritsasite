import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/data/posts";

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-brand-900">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded bg-brand-900/80 px-2 py-0.5 text-xs font-semibold text-white">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium text-brand-900/50">
          {formatDate(post.publishedAt)}
        </span>
        <h3 className="text-lg font-bold text-brand-900">{post.title}</h3>
        <p className="text-sm text-brand-900/70">{post.excerpt}</p>
      </div>
    </Link>
  );
}
