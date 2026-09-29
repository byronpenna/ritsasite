import { DownloadIcon, FileIcon } from "./icons";

export default function PdfViewerWidget({
  label,
  href,
  pages,
}: {
  label: string;
  href: string;
  pages?: number;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-brand-50 px-5 py-4">
        <div className="flex items-center gap-2 text-brand-900">
          <FileIcon className="h-5 w-5 text-red-600" />
          <span className="font-semibold">{label}</span>
          {pages && (
            <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-red-700">
              PDF · {pages} páginas
            </span>
          )}
        </div>
        <a
          href={href}
          download
          className="inline-flex items-center gap-1.5 rounded-full border border-brand-600 px-3 py-1 text-xs font-semibold text-brand-600 transition hover:bg-brand-600 hover:text-white"
        >
          <DownloadIcon className="h-3.5 w-3.5" />
          Descargar
        </a>
      </div>

      <div className="relative aspect-[4/5] w-full bg-brand-900/5 sm:aspect-[16/10]">
        <iframe
          src={`${href}#view=FitH`}
          title={label}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <p className="border-t border-black/5 px-5 py-3 text-center text-xs text-brand-900/50">
        ¿No se ve el PDF?{" "}
        <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-600">
          Ábrelo en una pestaña nueva
        </a>
        .
      </p>
    </div>
  );
}
