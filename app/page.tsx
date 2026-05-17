"use client";

import { useState, useEffect, useCallback } from "react";
import { STICKERS, type Sticker } from "@/lib/stickers";

type Tab = "missing" | "duplicates";

type DuplicateEntry = { sticker: Sticker; count: number };

const STORAGE_KEY_MISSING = "panini_missing_input";
const STORAGE_KEY_DUPLICATES = "panini_duplicates_input";

function parseRawCodes(raw: string): string[] {
  return raw
    .split(/[\s,\n]+/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

function lookupSticker(token: string): Sticker | undefined {
  return STICKERS.find((s) => s.id.toLowerCase() === token);
}

function groupBySection<T>(items: T[], getSticker: (item: T) => Sticker): Record<string, T[]> {
  const groups: Record<string, T[]> = {};
  for (const item of items) {
    const sec = getSticker(item).section;
    if (!groups[sec]) groups[sec] = [];
    groups[sec].push(item);
  }
  return groups;
}

function FoilBadge() {
  return (
    <span className="inline-block text-xs font-semibold px-1.5 py-0.5 rounded bg-yellow-300 text-yellow-900 mr-1.5">
      FOIL
    </span>
  );
}

function StickerRow({ sticker }: { sticker: Sticker }) {
  return (
    <div className="flex items-center gap-2 py-1.5 border-b border-gray-100 last:border-0">
      {sticker.foil && <FoilBadge />}
      <span className="font-mono text-sm font-semibold text-blue-700 min-w-[4rem]">
        {sticker.code}{sticker.num}
      </span>
      <span className="text-sm text-gray-800 flex-1">{sticker.name}</span>
      <span className="text-xs text-gray-400">{sticker.section}</span>
    </div>
  );
}

function DuplicateRow({ entry }: { entry: DuplicateEntry }) {
  return (
    <div className="flex items-center gap-2 py-1.5 border-b border-gray-100 last:border-0">
      {entry.sticker.foil && <FoilBadge />}
      <span className="font-mono text-sm font-semibold text-purple-700 min-w-[4rem]">
        {entry.sticker.code}{entry.sticker.num}
      </span>
      <span className="text-sm text-gray-800 flex-1">{entry.sticker.name}</span>
      {entry.count > 1 && (
        <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
          ×{entry.count}
        </span>
      )}
      <span className="text-xs text-gray-400">{entry.sticker.section}</span>
    </div>
  );
}

function SectionGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 px-1">
        {title}
      </h3>
      <div className="bg-white rounded-lg border border-gray-200 px-3">{children}</div>
    </div>
  );
}

function MissingTab({ input, onInput }: { input: string; onInput: (v: string) => void }) {
  const tokens = parseRawCodes(input);
  const found: Sticker[] = [];
  const notRecognized: string[] = [];

  for (const token of tokens) {
    const s = lookupSticker(token);
    if (s) found.push(s);
    else notRecognized.push(token);
  }

  const sorted = [...found].sort((a, b) => a.albumPos - b.albumPos);
  const groups = groupBySection(sorted, (s) => s);

  return (
    <div>
      <textarea
        className="w-full h-32 rounded-lg border border-gray-300 p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none bg-gray-50"
        placeholder={"Enter sticker codes separated by commas, spaces, or newlines\ne.g. FWC1, ARG3, MEX17"}
        value={input}
        onChange={(e) => onInput(e.target.value)}
      />
      {tokens.length === 0 && (
        <p className="text-center text-gray-400 mt-8 text-sm">
          No codes entered yet — type some sticker codes above.
        </p>
      )}
      {Object.entries(groups).map(([section, stickers]) => (
        <SectionGroup key={section} title={section}>
          {stickers.map((s) => (
            <StickerRow key={s.id} sticker={s} />
          ))}
        </SectionGroup>
      ))}
      {notRecognized.length > 0 && (
        <SectionGroup title="Not recognized">
          {notRecognized.map((code) => (
            <div key={code} className="py-1.5 border-b border-gray-100 last:border-0">
              <span className="font-mono text-sm text-red-400">{code}</span>
            </div>
          ))}
        </SectionGroup>
      )}
    </div>
  );
}

function DuplicatesTab({ input, onInput }: { input: string; onInput: (v: string) => void }) {
  const tokens = parseRawCodes(input);
  const found: DuplicateEntry[] = [];
  const notRecognized: string[] = [];

  for (const token of tokens) {
    const match = token.match(/^(.+?)(?:x(\d+))?$/);
    if (!match) continue;
    const code = match[1];
    const count = match[2] ? parseInt(match[2], 10) : 1;
    const s = lookupSticker(code);
    if (s) found.push({ sticker: s, count });
    else notRecognized.push(token);
  }

  const sorted = [...found].sort((a, b) => a.sticker.albumPos - b.sticker.albumPos);
  const groups = groupBySection(sorted, (e) => e.sticker);

  return (
    <div>
      <textarea
        className="w-full h-32 rounded-lg border border-gray-300 p-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none bg-gray-50"
        placeholder={"Enter sticker codes, optionally with count suffix\ne.g. ARG17x3, MEX2, FWC5x2"}
        value={input}
        onChange={(e) => onInput(e.target.value)}
      />
      {tokens.length === 0 && (
        <p className="text-center text-gray-400 mt-8 text-sm">
          No codes entered yet — add sticker codes above. Append ×N for duplicates, e.g. ARG17x3.
        </p>
      )}
      {Object.entries(groups).map(([section, entries]) => (
        <SectionGroup key={section} title={section}>
          {entries.map((e) => (
            <DuplicateRow key={e.sticker.id} entry={e} />
          ))}
        </SectionGroup>
      ))}
      {notRecognized.length > 0 && (
        <SectionGroup title="Not recognized">
          {notRecognized.map((code) => (
            <div key={code} className="py-1.5 border-b border-gray-100 last:border-0">
              <span className="font-mono text-sm text-red-400">{code}</span>
            </div>
          ))}
        </SectionGroup>
      )}
    </div>
  );
}

export default function Home() {
  const [tab, setTab] = useState<Tab>("missing");
  const [missingInput, setMissingInput] = useState("");
  const [duplicatesInput, setDuplicatesInput] = useState("");

  useEffect(() => {
    setMissingInput(localStorage.getItem(STORAGE_KEY_MISSING) ?? "");
    setDuplicatesInput(localStorage.getItem(STORAGE_KEY_DUPLICATES) ?? "");
  }, []);

  const handleMissingInput = useCallback((v: string) => {
    setMissingInput(v);
    localStorage.setItem(STORAGE_KEY_MISSING, v);
  }, []);

  const handleDuplicatesInput = useCallback((v: string) => {
    setDuplicatesInput(v);
    localStorage.setItem(STORAGE_KEY_DUPLICATES, v);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Panini WC 2026 Tracker
          </h1>
          <p className="text-sm text-gray-500 mt-1">Track your missing stickers and duplicates</p>
        </header>

        <div className="flex rounded-lg border border-gray-200 overflow-hidden mb-6 bg-white">
          <button
            className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
              tab === "missing"
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setTab("missing")}
          >
            Missing
          </button>
          <button
            className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
              tab === "duplicates"
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => setTab("duplicates")}
          >
            Duplicates
          </button>
        </div>

        {tab === "missing" ? (
          <MissingTab input={missingInput} onInput={handleMissingInput} />
        ) : (
          <DuplicatesTab input={duplicatesInput} onInput={handleDuplicatesInput} />
        )}
      </div>
    </main>
  );
}
