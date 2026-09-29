"use client";

import { useEffect, useState } from "react";
import { FileIcon, GithubIcon, StarIcon } from "./icons";

type RepoInfo = {
  description: string | null;
  stargazers_count: number;
  language: string | null;
};

const PREVIEW_LINES = 40;

export default function GithubCodeWidget({
  repo,
  branch = "main",
  file,
}: {
  repo: string; // "owner/name"
  branch?: string;
  file: string; // path within the repo, e.g. "900kh.ino"
}) {
  const [info, setInfo] = useState<RepoInfo | null>(null);
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data) setInfo(data);
      })
      .catch(() => {});

    fetch(`https://raw.githubusercontent.com/${repo}/${branch}/${file}`)
      .then((res) => (res.ok ? res.text() : Promise.reject()))
      .then((text) => {
        if (!cancelled) setCode(text);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [repo, branch, file]);

  const repoUrl = `https://github.com/${repo}`;
  const fileUrl = `${repoUrl}/blob/${branch}/${file}`;
  const previewLines = code?.split("\n").slice(0, PREVIEW_LINES) ?? [];
  const hasMore = (code?.split("\n").length ?? 0) > PREVIEW_LINES;

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-brand-900 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-5 py-4">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-accent-400"
        >
          <GithubIcon className="h-5 w-5" />
          <span className="font-semibold">{repo}</span>
        </a>
        <div className="flex items-center gap-4 text-sm text-white/60">
          {info && (
            <span className="inline-flex items-center gap-1">
              <StarIcon className="h-4 w-4" />
              {info.stargazers_count}
            </span>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/10"
          >
            Ver en GitHub ↗
          </a>
        </div>
      </div>

      {info?.description && (
        <p className="border-b border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/70">
          {info.description}
        </p>
      )}

      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-2 text-xs font-medium text-white/50">
        <FileIcon className="h-4 w-4" />
        {file}
      </div>

      <div className="relative">
        {error && (
          <p className="p-5 text-sm text-white/60">
            No se pudo cargar la vista previa del código.{" "}
            <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              Ábrelo directamente en GitHub
            </a>
            .
          </p>
        )}

        {!error && !code && (
          <p className="p-5 text-sm text-white/50">Cargando vista previa del código…</p>
        )}

        {!error && code && (
          <>
            <pre className="max-h-96 overflow-x-auto px-5 py-4 text-xs leading-relaxed text-white/85">
              <code>
                {previewLines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-8 shrink-0 select-none text-right text-white/30">
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">{line}</span>
                  </div>
                ))}
              </code>
            </pre>
            {hasMore && (
              <div className="border-t border-white/10 bg-gradient-to-b from-transparent to-brand-900 px-5 py-3 text-center">
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent-400 hover:text-accent-500"
                >
                  Ver archivo completo en GitHub →
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
