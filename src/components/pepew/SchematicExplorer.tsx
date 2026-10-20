"use client";

import { useState } from "react";
import {
  categoryColors,
  esp32Module,
  esp32PinGroups,
  schematicModules,
  type SchematicModule,
} from "@/data/pepewSchematic";

const allModules: SchematicModule[] = [...schematicModules, esp32Module];

function ModuleCard({
  module,
  selected,
  onSelect,
}: {
  module: SchematicModule;
  selected: boolean;
  onSelect: () => void;
}) {
  const accent = module.category ? categoryColors[module.category] : "border-brand-200 bg-white text-brand-900";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full flex-col items-start gap-1 rounded-2xl border-2 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        selected
          ? "border-brand-600 bg-brand-600 text-white shadow-lg"
          : `${module.category ? accent : "border-black/10 bg-white"}`
      }`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
          selected ? "bg-white/20 text-white" : "bg-black/5 text-brand-900/60"
        }`}
      >
        {module.number}
      </span>
      <h3 className={`text-sm font-bold ${selected ? "text-white" : "text-brand-900"}`}>
        {module.title}
      </h3>
      <p className={`text-xs leading-snug ${selected ? "text-white/80" : "text-brand-900/60"}`}>
        {module.summary}
      </p>
      {module.pins.length > 0 && (
        <span
          className={`mt-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
            selected ? "bg-white/20 text-white" : "bg-black/5 text-brand-900/50"
          }`}
        >
          {module.pins.length} {module.pins.length === 1 ? "pin" : "pines"}
        </span>
      )}
    </button>
  );
}

function Esp32Card({
  selectedId,
  onSelectCategory,
  onSelectSelf,
  selected,
}: {
  selectedId: string | null;
  onSelectCategory: (id: string) => void;
  onSelectSelf: () => void;
  selected: boolean;
}) {
  const selectedCategory = allModules.find((m) => m.id === selectedId)?.category;

  return (
    <div
      className={`flex flex-col gap-3 rounded-2xl border-2 p-4 shadow-sm transition ${
        selected ? "border-brand-600 bg-brand-50" : "border-black/10 bg-white"
      }`}
    >
      <button type="button" onClick={onSelectSelf} className="text-left">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/5 text-[11px] font-bold text-brand-900/60">
          {esp32Module.number}
        </span>
        <h3 className="mt-1 text-sm font-bold text-brand-900">{esp32Module.title}</h3>
        <p className="text-xs leading-snug text-brand-900/60">{esp32Module.summary}</p>
      </button>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {esp32PinGroups.map((group) => {
          // Find the peripheral module that corresponds to this ESP32 pin group,
          // so the two cards stay in sync no matter which one is clicked.
          const peripheral = schematicModules.find((m) => m.category === group.category);
          const isHighlighted = selectedCategory === group.category;
          return (
            <button
              key={group.category}
              type="button"
              onClick={() => peripheral && onSelectCategory(peripheral.id)}
              className={`rounded-xl border p-2.5 text-left transition ${
                isHighlighted
                  ? `${categoryColors[group.category]} ring-2 ring-offset-1`
                  : "border-black/10 bg-brand-50/50 hover:bg-brand-50"
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-brand-900/70">
                {group.label}
              </p>
              <p className="mt-0.5 text-xs text-brand-900/60">
                {group.pins.map((p) => p.pin).join(" · ")}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DetailPanel({ module }: { module: SchematicModule | null }) {
  if (!module) {
    return (
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-brand-900">Explora el PEPEW Miner Carrier V1.0</h3>
        <p className="mt-2 text-sm text-brand-900/70">
          Haz clic en cualquier bloque del diagrama para ver sus pines y notas. Si seleccionas un
          periférico (OLED, TFT, botón, Ethernet...), el módulo ESP32-S3-ETH resalta
          automáticamente los pines que usa para conectarse con él.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
          {module.number}
        </span>
        <h3 className="text-lg font-bold text-brand-900">{module.title}</h3>
      </div>
      <p className="mt-2 text-sm text-brand-900/70">{module.summary}</p>

      {module.pins.length > 0 && (
        <div className="mt-4 overflow-hidden rounded-xl border border-black/5">
          <table className="w-full text-sm">
            <thead className="bg-brand-50 text-xs uppercase tracking-wide text-brand-900/50">
              <tr>
                <th className="px-3 py-2 text-left">Pin</th>
                <th className="px-3 py-2 text-left">Señal</th>
                <th className="px-3 py-2 text-left">Nota</th>
              </tr>
            </thead>
            <tbody>
              {module.pins.map((pin) => (
                <tr key={`${pin.pin}-${pin.signal}`} className="border-t border-black/5">
                  <td className="px-3 py-2 font-semibold text-brand-900">{pin.pin}</td>
                  <td className="px-3 py-2 text-brand-900/80">{pin.signal}</td>
                  <td className="px-3 py-2 text-brand-900/50">{pin.note ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {module.notes && module.notes.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-brand-900/70">
          {module.notes.map((note) => (
            <li key={note} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
              {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function SchematicExplorer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedModule = allModules.find((m) => m.id === selectedId) ?? null;

  return (
    <div className="lg:flex lg:items-start lg:gap-6">
      <div className="lg:flex-1">
        <Esp32Card
          selectedId={selectedId}
          selected={selectedId === "esp32"}
          onSelectSelf={() => setSelectedId((id) => (id === "esp32" ? null : "esp32"))}
          onSelectCategory={(id) => setSelectedId(id)}
        />

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {schematicModules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              selected={selectedId === module.id}
              onSelect={() => setSelectedId((id) => (id === module.id ? null : module.id))}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 lg:sticky lg:top-24 lg:mt-0 lg:w-96 lg:shrink-0">
        <DetailPanel module={selectedModule} />
      </div>
    </div>
  );
}
