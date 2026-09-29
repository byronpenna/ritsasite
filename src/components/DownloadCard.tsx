import type { PostDownload } from "@/data/posts";
import { DownloadIcon, FileIcon } from "./icons";

const badgeColors: Record<PostDownload["fileType"], string> = {
  PDF: "bg-red-100 text-red-700",
  HTML: "bg-brand-100 text-brand-700",
  ZIP: "bg-accent-400/20 text-accent-600",
};

export default function DownloadCard({ download }: { download: PostDownload }) {
  const isExternalViewer = download.fileType !== "ZIP";

  return (
    <a
      href={download.href}
      target={isExternalViewer ? "_blank" : undefined}
      rel={isExternalViewer ? "noopener noreferrer" : undefined}
      download={isExternalViewer ? undefined : true}
      className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <FileIcon className="h-6 w-6" />
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-brand-900">{download.label}</h3>
          <span
            className={`rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wide ${badgeColors[download.fileType]}`}
          >
            {download.fileType}
          </span>
        </div>
        <p className="mt-1 text-sm text-brand-900/70">{download.description}</p>
      </div>
      <DownloadIcon className="h-5 w-5 shrink-0 text-brand-900/40 transition group-hover:text-brand-600" />
    </a>
  );
}
