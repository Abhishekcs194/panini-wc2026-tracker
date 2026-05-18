"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { STICKERS, type Sticker } from "@/lib/stickers";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import AuthModal from "@/components/AuthModal";

// ── Types ─────────────────────────────────────────────────────────────────────

type DuplicateEntry = { id: string; count: number };

// ── Constants ─────────────────────────────────────────────────────────────────

const KEY_TOKEN  = "panini_token";
const KEY_USER   = "panini_username";
const SYNC_DELAY = 1200;

// Official FIFA World Cup 2026 palette
const WC = {
  blue:  "#2A398D",
  red:   "#E61D25",
  green: "#3CAC3B",
  gold:  "#F0A500",
} as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

function parseRawCodes(raw: string): string[] {
  return raw.split(/[\s,\n]+/).map((s) => s.trim().toLowerCase()).filter(Boolean);
}

function lookupSticker(token: string): Sticker | undefined {
  return STICKERS.find((s) => s.id.toLowerCase() === token);
}

function groupBySection<T>(items: T[], getSticker: (item: T) => Sticker): [string, T[]][] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const sec = getSticker(item).section;
    if (!map.has(sec)) map.set(sec, []);
    map.get(sec)!.push(item);
  }
  return Array.from(map.entries());
}

// ── SVG Illustrations ─────────────────────────────────────────────────────────

type SVGProps = { className?: string; style?: React.CSSProperties };

/** FIFA World Cup Trophy — two figures holding the globe */
function TrophySVG({ className, style }: SVGProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base plates */}
      <rect x="14" y="72" width="36" height="5" rx="2.5" fill="currentColor" opacity="0.55"/>
      <rect x="19" y="66" width="26" height="8" rx="2" fill="currentColor" opacity="0.7"/>
      {/* Stem */}
      <rect x="27" y="53" width="10" height="15" rx="1" fill="currentColor" opacity="0.85"/>
      {/* Globe */}
      <circle cx="32" cy="38" r="16" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.6"/>
      {/* Globe latitude line */}
      <path d="M16 38 Q24 33 32 38 Q40 43 48 38" stroke="currentColor" strokeWidth="0.9" opacity="0.45" fill="none"/>
      {/* Globe longitude arc */}
      <ellipse cx="32" cy="38" rx="7" ry="16" stroke="currentColor" strokeWidth="0.9" opacity="0.4" fill="none"/>
      {/* Left figure */}
      <path d="M14 42 C10 34 13 24 20 22 C22 21 24 23 25 28 L26 40" fill="currentColor" opacity="0.8"/>
      {/* Right figure */}
      <path d="M50 42 C54 34 51 24 44 22 C42 21 40 23 39 28 L38 40" fill="currentColor" opacity="0.8"/>
      {/* Arms reaching up */}
      <path d="M25 28 C27 23 29 21 32 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.85"/>
      <path d="M39 28 C37 23 35 21 32 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.85"/>
      {/* Hands at top of globe */}
      <circle cx="32" cy="22" r="2.5" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

/** Adidas Conext25 — the official WC2026 match ball, geometric panels */
function BallSVG({ className, style }: SVGProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.06"/>
      {/* Central pentagon */}
      <polygon points="32,18 41,25 38,36 26,36 23,25" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="0.9"/>
      {/* Top panel */}
      <path d="M32 4 L41 25 L32 18 L23 25 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="0.8"/>
      {/* Top-right panel */}
      <path d="M41 25 L58 22 L54 38 L38 36 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.8"/>
      {/* Bottom-right panel */}
      <path d="M38 36 L54 38 L44 56 L28 48 Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="0.8"/>
      {/* Bottom-left panel */}
      <path d="M26 36 L28 48 L20 56 L10 38 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.8"/>
      {/* Top-left panel */}
      <path d="M23 25 L6 22 L10 38 L26 36 Z" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="0.8"/>
      {/* Top seam */}
      <path d="M32 18 L32 4" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

/** WC2026 "26 ★" mark — stylized numeral badge */
function WC26SVG({ className, style }: SVGProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="28" cy="28" r="26" stroke="currentColor" strokeWidth="1.2" opacity="0.3"/>
      {/* Star */}
      <path d="M28 8 L29.8 14H36L31 17.5 L32.8 23.5 L28 20 L23.2 23.5 L25 17.5 L20 14 H26.2Z" fill="currentColor" opacity="0.9"/>
      {/* "26" rendered as bold stroked paths */}
      {/* "2" */}
      <path d="M10 29 C10 24 13 22 17 22 C21 22 24 24 24 28 C24 32 20 34 16 38 L10 38" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* "6" */}
      <path d="M46 26 C46 22 43 20 39 20 C35 20 32 22 32 26 L32 38 C32 42 35 44 39 44 C43 44 46 42 46 38 C46 34 43 32 39 32 C35 32 32 34 32 38" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

/** Five-pointed star */
function StarSVG({ className, style }: SVGProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>
  );
}

/** Panini sticker-style badge — homage to the official sticker provider */
function PaniniBadge({ className, style }: SVGProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sticker frame */}
      <rect x="1" y="1" width="88" height="26" rx="4" fill="#1a0a00" stroke="#E61D25" strokeWidth="1.4"/>
      {/* Red accent bar left */}
      <rect x="1" y="1" width="6" height="26" rx="4" fill="#E61D25"/>
      <rect x="5" y="1" width="3" height="26" fill="#E61D25"/>
      {/* Gold accent bar right */}
      <rect x="80" y="1" width="9" height="26" rx="4" fill="#F0A500"/>
      <rect x="80" y="1" width="4" height="26" fill="#F0A500"/>
      {/* PANINI text */}
      <text x="45" y="19" textAnchor="middle" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="13" letterSpacing="2" fill="white">PANINI</text>
      {/* Tiny star */}
      <text x="12" y="19" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="white">★</text>
    </svg>
  );
}

// ── Background ─────────────────────────────────────────────────────────────────

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Base: deep WC-blue tinted dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06091E] via-[#080D28] to-[#06091A]" />
      {/* WC Blue glow — top right */}
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full blur-[130px]" style={{ background: `${WC.blue}22` }} />
      {/* WC Red glow — bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[460px] h-[460px] rounded-full blur-[110px]" style={{ background: `${WC.red}18` }} />
      {/* WC Green glow — mid */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[200px] rounded-full blur-[90px]" style={{ background: `${WC.green}0E` }} />
      {/* Decorative SVGs */}
      <TrophySVG className="absolute top-4 right-4 w-24 h-28 opacity-10" style={{ color: WC.gold }} />
      <WC26SVG   className="absolute bottom-16 left-3 w-20 h-20 opacity-8" style={{ color: WC.blue }} />
      <BallSVG   className="absolute top-1/3 right-3 w-16 h-16 opacity-6" style={{ color: WC.red }} />
      <StarSVG   className="absolute top-24 left-6 w-4 h-4 opacity-20" style={{ color: WC.gold }} />
      <StarSVG   className="absolute top-40 left-14 w-2.5 h-2.5 opacity-15" style={{ color: WC.gold }} />
      <StarSVG   className="absolute bottom-36 right-8 w-3 h-3 opacity-15" style={{ color: WC.gold }} />
      <StarSVG   className="absolute bottom-52 right-20 w-2 h-2 opacity-10" style={{ color: WC.gold }} />
    </div>
  );
}

// ── Panini footer strip ────────────────────────────────────────────────────────

function PaniniStrip() {
  return (
    <div className="flex items-center justify-center gap-2 py-1 mt-2 mb-1">
      <span className="text-xs text-white/20 tracking-wider uppercase">Official sticker collection by</span>
      <PaniniBadge className="h-5 w-auto opacity-60" />
    </div>
  );
}

// ── Header ─────────────────────────────────────────────────────────────────────

function SyncDot({ syncing }: { syncing: boolean }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full transition-colors"
      style={{ background: syncing ? WC.gold : WC.green, opacity: syncing ? 1 : 0.9 }}
    />
  );
}

function Header({ username, syncing, onLogout }: { username: string; syncing: boolean; onLogout: () => void }) {
  return (
    <header className="px-4 pt-6 pb-2">
      {/* Top row: logo + user chip */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <TrophySVG className="w-10 h-12 shrink-0" style={{ color: WC.gold }} />
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <StarSVG className="w-3 h-3" style={{ color: WC.gold }} />
              <StarSVG className="w-3 h-3" style={{ color: WC.gold }} />
              <StarSVG className="w-3 h-3" style={{ color: WC.gold }} />
            </div>
            <h1 className="text-xl font-extrabold leading-tight tracking-tight text-white">
              Panini WC<span className="ml-1" style={{ color: WC.gold }}>2026</span>
            </h1>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: `${WC.blue}CC` }}>
              Sticker Tracker
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5 pt-1">
          <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border" style={{ background: `${WC.blue}22`, borderColor: `${WC.blue}44` }}>
            <SyncDot syncing={syncing} />
            <span className="text-sm font-semibold text-white/90">@{username}</span>
          </div>
          <button
            onClick={onLogout}
            className="text-sm font-medium px-3 py-1.5 rounded-lg transition-colors text-white/40 hover:text-white/80 hover:bg-white/5 active:bg-white/10"
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Host nations colour bar: USA blue | Mexico green | Canada red */}
      <div className="flex h-1 rounded-full overflow-hidden gap-px">
        <div className="flex-1 rounded-l-full" style={{ background: WC.blue }} />
        <div className="flex-1" style={{ background: WC.green }} />
        <div className="flex-1 rounded-r-full" style={{ background: WC.red }} />
      </div>
    </header>
  );
}

// ── Add panel ──────────────────────────────────────────────────────────────────

function AddPanel({
  accent,
  placeholder,
  hint,
  onSave,
  onCancel,
}: {
  accent: "blue" | "red";
  placeholder: string;
  hint: React.ReactNode;
  onSave: (raw: string) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState("");
  const color = accent === "blue" ? WC.blue : WC.red;

  function handleSave() {
    onSave(value);
    setValue("");
  }

  return (
    <Card className="mb-4 border" style={{ background: `${color}15`, borderColor: `${color}33` }}>
      <CardContent className="pt-3 pb-3 px-3 space-y-2">
        <Textarea
          autoFocus
          className="font-mono text-base bg-white/5 border-white/10 placeholder:text-white/30 resize-none h-28 text-white focus-visible:ring-0 focus-visible:border-white/25"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="text-sm text-white/45 px-0.5">{hint}</p>
        <div className="flex gap-2 pt-1">
          <button
            onClick={handleSave}
            disabled={!value.trim()}
            className="flex-1 py-3 rounded-xl text-base font-bold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: color }}
          >
            Save to list
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-3 rounded-xl text-base font-semibold transition-colors border text-white/55 hover:text-white hover:bg-white/5 active:bg-white/10"
            style={{ borderColor: `${color}44` }}
          >
            Cancel
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

// ── Search input ───────────────────────────────────────────────────────────────

function SearchInput({ value, onChange, accent }: { value: string; onChange: (v: string) => void; accent: "blue" | "red" }) {
  const color = accent === "blue" ? WC.blue : WC.red;
  return (
    <div
      className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 mb-3 border transition-all"
      style={{ background: "rgba(255,255,255,0.04)", borderColor: value ? `${color}66` : "rgba(255,255,255,0.1)" }}
    >
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0 text-white/35">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by code, name or team..."
        className="flex-1 bg-transparent text-base text-white placeholder:text-white/30 focus:outline-none min-w-0"
      />
      {value && (
        <button onClick={() => onChange("")} className="text-white/30 hover:text-white/60 transition-colors shrink-0">
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}

// ── Add button ─────────────────────────────────────────────────────────────────

function AddButton({ accent, onClick }: { accent: "blue" | "red"; onClick: () => void }) {
  const color = accent === "blue" ? WC.blue : WC.red;
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-dashed text-base font-bold transition-all mb-4 text-white/70 hover:text-white active:opacity-80"
      style={{ borderColor: `${color}55`, background: `${color}0D` }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
      Add stickers
    </button>
  );
}

// ── Sticker row ────────────────────────────────────────────────────────────────

function StickerRow({ sticker, count, onRemove }: { sticker: Sticker; count?: number; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-2.5 py-3 border-b border-white/6 last:border-0">
      <div className="flex items-center gap-1.5 shrink-0">
        {sticker.foil && (
          <Badge
            className="text-xs px-1.5 py-0.5 font-bold border-0"
            style={{ background: `linear-gradient(135deg, ${WC.gold}, #FFD700)`, color: "#1a0800" }}
          >
            FOIL
          </Badge>
        )}
        {sticker.special && !sticker.foil && (
          <Badge
            variant="outline"
            className="text-xs px-1.5 py-0.5"
            style={{ borderColor: `${WC.green}88`, color: WC.green }}
          >
            SP
          </Badge>
        )}
      </div>
      <span className="font-mono text-base font-bold shrink-0 min-w-[4.5rem]" style={{ color: WC.gold }}>
        {sticker.code}{sticker.num}
      </span>
      <span className="text-base text-white flex-1 truncate">{sticker.name}</span>
      {count !== undefined && count > 1 && (
        <Badge
          className="text-sm font-bold shrink-0 border"
          style={{ background: `${WC.red}25`, color: "#FF6B6B", borderColor: `${WC.red}44` }}
        >
          ×{count}
        </Badge>
      )}
      <button
        onClick={onRemove}
        className="ml-1 w-8 h-8 flex items-center justify-center rounded-full transition-colors shrink-0 text-white/25 hover:text-red-400 hover:bg-red-400/10 active:bg-red-400/20"
        aria-label="Remove"
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}

// ── Section group ──────────────────────────────────────────────────────────────

function SectionGroup({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-1.5 px-1">
        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: WC.blue }} />
        <h3 className="text-sm font-bold uppercase tracking-wider text-white/55">{title}</h3>
        <span
          className="text-xs font-semibold px-1.5 py-0.5 rounded-full text-white/40"
          style={{ background: `${WC.blue}25` }}
        >
          {count}
        </span>
      </div>
      <Card className="border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
        <CardContent className="px-3 py-0">{children}</CardContent>
      </Card>
    </div>
  );
}

// ── Confirm modal ──────────────────────────────────────────────────────────────

function ConfirmModal({
  sticker,
  type,
  onConfirm,
  onCancel,
}: {
  sticker: Sticker;
  type: "missing" | "duplicate";
  onConfirm: (neverAsk: boolean) => void;
  onCancel: () => void;
}) {
  const [neverAsk, setNeverAsk] = useState(false);
  const color = type === "missing" ? WC.blue : WC.red;
  const message = type === "missing"
    ? "Did you receive this sticker? Confirming will remove it from your missing list."
    : "Remove this sticker from your duplicates list?";

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-6 sm:pb-0">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <Card className="relative z-10 w-full max-w-sm border" style={{ background: "#0b1028", borderColor: `${color}55` }}>
        <CardContent className="pt-5 pb-4 px-4 space-y-4">
          <div>
            <span className="font-mono text-lg font-bold" style={{ color: WC.gold }}>
              {sticker.code}{sticker.num}
            </span>
            <p className="text-sm text-white/70 mt-0.5">{sticker.name}</p>
          </div>
          <p className="text-sm text-white/55 leading-relaxed">{message}</p>
          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={neverAsk}
              onChange={(e) => setNeverAsk(e.target.checked)}
              className="w-4 h-4 rounded cursor-pointer"
              style={{ accentColor: color }}
            />
            <span className="text-xs text-white/40">Never ask me to confirm again</span>
          </label>
          <div className="flex gap-2 pt-1">
            <button
              onClick={onCancel}
              className="flex-1 py-2.5 rounded-xl text-sm font-semibold border text-white/50 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.12)" }}
            >
              Keep
            </button>
            <button
              onClick={() => onConfirm(neverAsk)}
              className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white transition-colors active:opacity-80"
              style={{ background: color }}
            >
              Remove
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ── Empty state ────────────────────────────────────────────────────────────────

function EmptyState({ hint }: { hint: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-14 gap-4 text-center px-6">
      <BallSVG className="w-16 h-16 opacity-15" style={{ color: WC.blue }} />
      <p className="text-sm text-white/35">{hint}</p>
    </div>
  );
}

// ── Missing tab ────────────────────────────────────────────────────────────────

function MissingTab({ items, onAdd, onRemove, confirmRemove, onNeverAskAgain }: {
  items: Sticker[];
  onAdd: (s: Sticker[]) => void;
  onRemove: (id: string) => void;
  confirmRemove: boolean;
  onNeverAskAgain: () => void;
}) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [pendingRemove, setPendingRemove] = useState<Sticker | null>(null);

  function handleRemoveClick(sticker: Sticker) {
    if (confirmRemove) { setPendingRemove(sticker); } else { onRemove(sticker.id); }
  }

  function handleConfirm(neverAsk: boolean) {
    if (!pendingRemove) return;
    onRemove(pendingRemove.id);
    if (neverAsk) onNeverAskAgain();
    setPendingRemove(null);
  }

  function handleSave(raw: string) {
    const tokens = parseRawCodes(raw);
    const existingIds = new Set(items.map((s) => s.id));
    const next: Sticker[] = [];
    for (const token of tokens) {
      const s = lookupSticker(token);
      if (s && !existingIds.has(s.id)) next.push(s);
    }
    if (next.length > 0) onAdd(next);
    setPanelOpen(false);
  }

  const q = query.trim().toLowerCase();
  const filtered = [...items]
    .filter((s) => !q || s.id.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.section.toLowerCase().includes(q))
    .sort((a, b) => a.albumPos - b.albumPos);
  const groups = groupBySection(filtered, (s) => s);

  return (
    <div>
      {pendingRemove && (
        <ConfirmModal
          sticker={pendingRemove}
          type="missing"
          onConfirm={handleConfirm}
          onCancel={() => setPendingRemove(null)}
        />
      )}
      {panelOpen ? (
        <AddPanel
          accent="blue"
          placeholder={"FWC1, ARG3, MEX17\nOne code per line or comma-separated"}
          hint={<>Case-insensitive · e.g. <span className="font-mono" style={{ color: WC.gold }}>FWC1</span>, <span className="font-mono" style={{ color: WC.gold }}>arg3</span></>}
          onSave={handleSave}
          onCancel={() => setPanelOpen(false)}
        />
      ) : (
        <AddButton accent="blue" onClick={() => setPanelOpen(true)} />
      )}

      {items.length === 0 ? (
        <EmptyState hint={'No missing stickers yet. Tap "Add stickers" to start tracking.'} />
      ) : (
        <>
          <SearchInput value={query} onChange={setQuery} accent="blue" />
          {filtered.length === 0 ? (
            <EmptyState hint={`No results for "${query}"`} />
          ) : (
            <ScrollArea className="max-h-[55vh]">
              <div className="pr-1">
                {groups.map(([section, stickers]) => (
                  <SectionGroup key={section} title={section} count={stickers.length}>
                    {stickers.map((s) => <StickerRow key={s.id} sticker={s} onRemove={() => handleRemoveClick(s)} />)}
                  </SectionGroup>
                ))}
              </div>
            </ScrollArea>
          )}
        </>
      )}
    </div>
  );
}

// ── Duplicates tab ─────────────────────────────────────────────────────────────

function DuplicatesTab({ items, onAdd, onRemove, confirmRemove, onNeverAskAgain }: {
  items: DuplicateEntry[];
  onAdd: (e: DuplicateEntry[]) => void;
  onRemove: (id: string) => void;
  confirmRemove: boolean;
  onNeverAskAgain: () => void;
}) {
  const [panelOpen, setPanelOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [pendingRemove, setPendingRemove] = useState<Sticker | null>(null);

  function handleRemoveClick(sticker: Sticker) {
    if (confirmRemove) { setPendingRemove(sticker); } else { onRemove(sticker.id); }
  }

  function handleConfirm(neverAsk: boolean) {
    if (!pendingRemove) return;
    onRemove(pendingRemove.id);
    if (neverAsk) onNeverAskAgain();
    setPendingRemove(null);
  }

  function handleSave(raw: string) {
    const tokens = parseRawCodes(raw);
    const next: DuplicateEntry[] = [];
    for (const token of tokens) {
      const match = token.match(/^(.+?)(?:x(\d+))?$/);
      if (!match) continue;
      const s = lookupSticker(match[1]);
      if (s) next.push({ id: s.id, count: match[2] ? parseInt(match[2], 10) : 1 });
    }
    if (next.length > 0) onAdd(next);
    setPanelOpen(false);
  }

  const q = query.trim().toLowerCase();
  const resolved = items
    .map((e) => ({ entry: e, sticker: STICKERS.find((s) => s.id === e.id)! }))
    .filter((x) => x.sticker)
    .filter(({ sticker: s }) => !q || s.id.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.section.toLowerCase().includes(q))
    .sort((a, b) => a.sticker.albumPos - b.sticker.albumPos);
  const groups = groupBySection(resolved, (x) => x.sticker);

  return (
    <div>
      {pendingRemove && (
        <ConfirmModal
          sticker={pendingRemove}
          type="duplicate"
          onConfirm={handleConfirm}
          onCancel={() => setPendingRemove(null)}
        />
      )}
      {panelOpen ? (
        <AddPanel
          accent="red"
          placeholder={"ARG17x3, MEX2, FWC5x2\nAppend xN for the count"}
          hint={<>Append <span className="font-mono" style={{ color: WC.red }}>x3</span> for count · e.g. <span className="font-mono" style={{ color: WC.red }}>ARG17x3</span></>}
          onSave={handleSave}
          onCancel={() => setPanelOpen(false)}
        />
      ) : (
        <AddButton accent="red" onClick={() => setPanelOpen(true)} />
      )}

      {items.length === 0 ? (
        <EmptyState hint={'No duplicates yet. Tap "Add stickers" to log your extras.'} />
      ) : (
        <>
          <SearchInput value={query} onChange={setQuery} accent="red" />
          {resolved.length === 0 ? (
            <EmptyState hint={`No results for "${query}"`} />
          ) : (
            <ScrollArea className="max-h-[55vh]">
              <div className="pr-1">
                {groups.map(([section, entries]) => (
                  <SectionGroup key={section} title={section} count={entries.length}>
                    {entries.map(({ entry, sticker }) => (
                      <StickerRow key={sticker.id} sticker={sticker} count={entry.count} onRemove={() => handleRemoveClick(sticker)} />
                    ))}
                  </SectionGroup>
                ))}
              </div>
            </ScrollArea>
          )}
        </>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  const [token, setToken]           = useState<string | null>(null);
  const [username, setUsername]     = useState<string | null>(null);
  const [missing, setMissing]       = useState<Sticker[]>([]);
  const [dupes, setDupes]           = useState<DuplicateEntry[]>([]);
  const [confirmRemove, setConfirmRemove] = useState(true);
  const [syncing, setSyncing]       = useState(false);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = localStorage.getItem(KEY_TOKEN);
    const u = localStorage.getItem(KEY_USER);
    if (t && u) { setToken(t); setUsername(u); }
  }, []);

  useEffect(() => {
    if (!token) return;
    fetch("/api/user/data", { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((data) => {
        const missingIds: string[] = data.missing ?? [];
        const dupesRaw: DuplicateEntry[] = data.duplicates ?? [];
        setMissing(missingIds.map((id) => STICKERS.find((s) => s.id.toLowerCase() === id.toLowerCase())!).filter(Boolean));
        setDupes(dupesRaw);
        setConfirmRemove(data.confirmRemove !== false);
      })
      .catch(() => {});
  }, [token]);

  const scheduleSave = useCallback((m: Sticker[], d: DuplicateEntry[]) => {
    if (!token) return;
    if (syncTimer.current) clearTimeout(syncTimer.current);
    setSyncing(true);
    syncTimer.current = setTimeout(async () => {
      try {
        await fetch("/api/user/data", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ missing: m.map((s) => s.id), duplicates: d }),
        });
      } finally { setSyncing(false); }
    }, SYNC_DELAY);
  }, [token]);

  function addMissing(stickers: Sticker[]) {
    setMissing((prev) => { const next = [...prev, ...stickers]; scheduleSave(next, dupes); return next; });
  }
  function removeMissing(id: string) {
    setMissing((prev) => { const next = prev.filter((s) => s.id !== id); scheduleSave(next, dupes); return next; });
  }
  function addDupes(entries: DuplicateEntry[]) {
    setDupes((prev) => {
      const next = [...prev];
      for (const e of entries) {
        const ex = next.find((x) => x.id === e.id);
        if (ex) ex.count += e.count; else next.push(e);
      }
      scheduleSave(missing, next);
      return next;
    });
  }
  function removeDupe(id: string) {
    setDupes((prev) => {
      const next = prev.map((e) => e.id === id ? { ...e, count: e.count - 1 } : e).filter((e) => e.count > 0);
      scheduleSave(missing, next);
      return next;
    });
  }

  function handleNeverAskAgain() {
    setConfirmRemove(false);
    if (!token) return;
    fetch("/api/user/data", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ confirmRemove: false }),
    });
  }

  function handleAuth(newToken: string, newUsername: string) {
    setToken(newToken); setUsername(newUsername);
    localStorage.setItem(KEY_TOKEN, newToken);
    localStorage.setItem(KEY_USER, newUsername);
  }
  function handleLogout() {
    setToken(null); setUsername(null); setMissing([]); setDupes([]);
    localStorage.removeItem(KEY_TOKEN); localStorage.removeItem(KEY_USER);
  }

  return (
    <>
      <Background />
      {!token && <AuthModal onAuth={handleAuth} />}
      <main className="min-h-screen">
        <div className="max-w-lg mx-auto px-4 pb-6">
          {token && username && (
            <Header username={username} syncing={syncing} onLogout={handleLogout} />
          )}

          <Tabs defaultValue="missing" className="mt-4">
            <TabsList className="w-full h-13 p-1 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.09)" }}>
              <TabsTrigger
                value="missing"
                className="flex-1 text-base font-bold text-white/50 data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
                style={{ "--tw-bg-active": WC.blue } as React.CSSProperties}
              >
                <span className="data-[state=active]:hidden" />
                Missing
                {missing.length > 0 && (
                  <span className="ml-2 text-sm font-bold bg-black/20 px-2 py-0.5 rounded-full">{missing.length}</span>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="duplicates"
                className="flex-1 text-base font-bold text-white/50 data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
              >
                Duplicates
                {dupes.length > 0 && (
                  <span className="ml-2 text-sm font-bold bg-white/20 px-2 py-0.5 rounded-full">{dupes.length}</span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="missing" className="mt-4">
              <MissingTab items={missing} onAdd={addMissing} onRemove={removeMissing} confirmRemove={confirmRemove} onNeverAskAgain={handleNeverAskAgain} />
            </TabsContent>
            <TabsContent value="duplicates" className="mt-4">
              <DuplicatesTab items={dupes} onAdd={addDupes} onRemove={removeDupe} confirmRemove={confirmRemove} onNeverAskAgain={handleNeverAskAgain} />
            </TabsContent>
          </Tabs>

          <PaniniStrip />
        </div>
      </main>
    </>
  );
}
