"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Image from "next/image";
import { STICKERS, type Sticker } from "@/lib/stickers";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthModal from "@/components/AuthModal";

// ── Types ─────────────────────────────────────────────────────────────────────

type DuplicateEntry = { id: string; count: number };

// ── Constants ─────────────────────────────────────────────────────────────────

const KEY_TOKEN  = "panini_token";
const KEY_USER   = "panini_username";
const SYNC_DELAY = 1200;

// Official FIFA World Cup 2026 palette (United 2026 bid)
const WC = {
  blue:  "#2A398D",
  red:   "#E61D25",
  green: "#3CAC3B",
  gray:  "#D1D4D1",
  dark:  "#474A4A",
  gold:  "#F0A500",
  paper: "#EEF0F7",
  ink:   "#1C1F2E",
} as const;

// Cycles section headers through WC brand colors for visual variety
const SECTION_PALETTE = [WC.blue, WC.red, WC.green, "#7B3FA0", "#D97706", "#0891B2", "#BE185D"];
function sectionAccent(section: string): string {
  const hash = section.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return SECTION_PALETTE[hash % SECTION_PALETTE.length];
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function groupBySection<T>(items: T[], getSticker: (item: T) => Sticker): [string, T[]][] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const sec = getSticker(item).section;
    if (!map.has(sec)) map.set(sec, []);
    map.get(sec)!.push(item);
  }
  return Array.from(map.entries());
}

// ── Sync indicator ─────────────────────────────────────────────────────────────

function SyncDot({ syncing }: { syncing: boolean }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full transition-colors shrink-0"
      style={{ background: syncing ? WC.gold : WC.green }}
    />
  );
}

// ── Header ─────────────────────────────────────────────────────────────────────

function Header({ username, syncing, token, onLogout }: { username: string; syncing: boolean; token: string; onLogout: () => void }) {
  const [shareState, setShareState] = useState<"idle" | "loading" | "copied">("idle");

  async function handleShare() {
    setShareState("loading");
    try {
      const res = await fetch("/api/share/create", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      const url = `${window.location.origin}/trade/${data.shareToken}`;
      if (navigator.share) {
        await navigator.share({ title: "Trade Panini stickers with me!", url });
        setShareState("idle");
      } else {
        await navigator.clipboard.writeText(url);
        setShareState("copied");
        setTimeout(() => setShareState("idle"), 2500);
      }
    } catch {
      setShareState("idle");
    }
  }

  return (
    <header>
      {/* Main header bar — WC blue, full bleed */}
      <div style={{ background: WC.blue }}>
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between gap-3">
          {/* Logo + title */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="shrink-0" style={{ mixBlendMode: "screen" }}>
              <Image src="/wc2026-logo-new.png" alt="FIFA World Cup 2026" width={56} height={56} className="object-contain" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: `${WC.gray}90` }}>
                Panini Official
              </p>
              <h1
                className="text-2xl font-bold uppercase leading-none tracking-wide text-white truncate"
                style={{ fontFamily: "var(--font-barlow), var(--font-inter)" }}
              >
                Sticker Tracker
              </h1>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: `${WC.gray}70` }}>
                FIFA World Cup 2026
              </p>
            </div>
          </div>

          {/* User chip + share */}
          <div className="flex flex-col items-end gap-1 shrink-0">
            <div
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
              style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <SyncDot syncing={syncing} />
              <span className="text-sm font-semibold text-white">@{username}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                disabled={shareState === "loading"}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider transition-all active:scale-95 disabled:opacity-50"
                style={{
                  background: shareState === "copied" ? WC.green : "#fff",
                  color: shareState === "copied" ? "#fff" : WC.blue,
                  fontFamily: "var(--font-barlow)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                {shareState === "idle" && (
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 shrink-0">
                    <circle cx="12" cy="3" r="1.8" stroke="currentColor" strokeWidth="1.6"/>
                    <circle cx="12" cy="13" r="1.8" stroke="currentColor" strokeWidth="1.6"/>
                    <circle cx="4" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="M10.3 4.2L5.7 6.9M10.3 11.8L5.7 9.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                )}
                {shareState === "loading" ? "…" : shareState === "copied" ? "Copied!" : "Share"}
              </button>
              <button
                onClick={onLogout}
                className="text-xs px-2 py-0.5 rounded transition-colors hover:bg-white/10"
                style={{ color: `${WC.gray}70` }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        {/* Host nations bar: USA · Mexico · Canada */}
        <div className="flex h-[3px]">
          <div className="flex-1" style={{ background: "#002868" }} />
          <div className="flex-1" style={{ background: WC.green }} />
          <div className="flex-1" style={{ background: WC.red }} />
        </div>
      </div>

      {/* Sub-header: Panini branding strip */}
      <div className="max-w-lg mx-auto px-4 py-1.5 flex items-center gap-2" style={{ background: WC.ink }}>
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: `${WC.gray}55` }}>
          Official Sticker Collection ·
        </span>
        <div className="rounded overflow-hidden">
          <Image src="/panini-logo.png" alt="Panini" width={52} height={13} className="object-contain" style={{ height: "auto" }} />
        </div>
      </div>
    </header>
  );
}

// ── Sticker picker ─────────────────────────────────────────────────────────────

function StickerPicker({ accent, onSave, onCancel }: {
  accent: "blue" | "red";
  onSave: (entries: Array<{ sticker: Sticker; count: number }>) => void;
  onCancel: () => void;
}) {
  const [prefix, setPrefix] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [counts, setCounts] = useState<Record<string, number>>({});
  const color = accent === "blue" ? WC.blue : WC.red;
  const showCounts = accent === "red";

  const matches = useMemo(() => {
    const p = prefix.trim().toUpperCase();
    if (!p) return [];
    return STICKERS.filter((s) => s.code.toUpperCase() === p).sort((a, b) => {
      const an = typeof a.num === "number" ? a.num : 999;
      const bn = typeof b.num === "number" ? b.num : 999;
      return an - bn;
    });
  }, [prefix]);

  const teamName = matches[0]?.section;

  function toggle(sticker: Sticker) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(sticker.id)) {
        next.delete(sticker.id);
        setCounts((c) => { const n = { ...c }; delete n[sticker.id]; return n; });
      } else {
        next.add(sticker.id);
        setCounts((c) => ({ ...c, [sticker.id]: 1 }));
      }
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === matches.length) {
      setSelected(new Set());
      setCounts({});
    } else {
      setSelected(new Set(matches.map((s) => s.id)));
      setCounts(Object.fromEntries(matches.map((s) => [s.id, counts[s.id] ?? 1])));
    }
  }

  function adjustCount(id: string, delta: number) {
    setCounts((prev) => ({ ...prev, [id]: Math.max(1, (prev[id] ?? 1) + delta) }));
  }

  const selectedStickers = matches.filter((s) => selected.has(s.id));

  return (
    <div className="mb-4 rounded-xl border-2 overflow-hidden" style={{ borderColor: color }}>
      {/* Header */}
      <div className="px-3 py-2" style={{ background: color }}>
        <p className="text-xs font-bold uppercase tracking-widest text-white" style={{ fontFamily: "var(--font-barlow)" }}>
          {accent === "blue" ? "Add Missing Stickers" : "Add Duplicates"}
        </p>
      </div>

      <div className="bg-white p-3 space-y-3">
        {/* Two-column picker */}
        <div className="flex gap-3 items-start">
          {/* Left: team code input */}
          <div className="w-24 shrink-0 flex flex-col gap-1">
            <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#6B7080" }}>Team</p>
            <input
              autoFocus
              type="text"
              value={prefix}
              onChange={(e) => { setPrefix(e.target.value); setSelected(new Set()); setCounts({}); }}
              placeholder="POR"
              maxLength={6}
              className="w-full rounded-lg border-2 px-2 py-3 text-center text-xl font-bold uppercase focus:outline-none transition-colors bg-[#F8F9FC]"
              style={{
                borderColor: prefix.trim() ? color : "#D6DAE8",
                color: WC.ink,
                fontFamily: "var(--font-mono)",
              }}
            />
            {teamName && (
              <p className="text-[10px] text-center font-semibold leading-tight mt-0.5" style={{ color }}>
                {teamName}
              </p>
            )}
          </div>

          {/* Right: number chips */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#6B7080" }}>Stickers</p>
              {matches.length > 0 && (
                <button
                  type="button"
                  onClick={toggleAll}
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full transition-all active:scale-95 border"
                  style={{
                    color,
                    borderColor: `${color}50`,
                    background: `${color}10`,
                  }}
                >
                  {selected.size === matches.length ? "None" : "All"}
                </button>
              )}
            </div>

            {!prefix.trim() ? (
              <p className="text-xs pt-2 leading-relaxed" style={{ color: "#BCC0CC" }}>
                Type a code on the left
              </p>
            ) : matches.length === 0 ? (
              <p className="text-xs pt-2" style={{ color: "#BCC0CC" }}>
                No stickers found for &ldquo;{prefix.trim().toUpperCase()}&rdquo;
              </p>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {matches.map((s) => {
                  const on = selected.has(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggle(s)}
                      className="min-w-[2.25rem] h-9 px-1 rounded-lg text-sm font-bold transition-all active:scale-90 select-none"
                      style={{
                        background: on ? color : "#F0F2F7",
                        color: on ? "#fff" : WC.dark,
                      }}
                    >
                      {s.num}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Selected preview — with count steppers for duplicates */}
        {selectedStickers.length > 0 && (
          <div className={showCounts ? "space-y-1.5" : "flex flex-wrap gap-1"}>
            {selectedStickers.map((s) => {
              const count = counts[s.id] ?? 1;
              return showCounts ? (
                <div
                  key={s.id}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5"
                  style={{ background: `${color}0F` }}
                >
                  {/* Sticker code */}
                  <span
                    className="font-mono text-xs font-bold w-14 shrink-0"
                    style={{ color }}
                  >
                    {s.code}{s.num}
                  </span>
                  {/* Sticker name */}
                  <span className="text-xs flex-1 truncate" style={{ color: "#6B7080" }}>
                    {s.name}
                  </span>
                  {/* Count stepper */}
                  <div className="flex items-center gap-0 rounded-lg overflow-hidden shrink-0 border" style={{ borderColor: `${color}40` }}>
                    <button
                      type="button"
                      onClick={() => adjustCount(s.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-base font-bold transition-colors active:scale-90"
                      style={{ color, background: `${color}12` }}
                    >
                      −
                    </button>
                    <span
                      className="w-7 text-center text-sm font-bold tabular-nums"
                      style={{ color: WC.ink }}
                    >
                      {count}
                    </span>
                    <button
                      type="button"
                      onClick={() => adjustCount(s.id, +1)}
                      className="w-8 h-8 flex items-center justify-center text-base font-bold transition-colors active:scale-90"
                      style={{ color, background: `${color}12` }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : (
                <span
                  key={s.id}
                  className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded"
                  style={{ background: `${color}18`, color }}
                >
                  {s.code}{s.num}
                </span>
              );
            })}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (selectedStickers.length > 0)
                onSave(selectedStickers.map((s) => ({ sticker: s, count: counts[s.id] ?? 1 })));
            }}
            disabled={selected.size === 0}
            className="flex-1 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            style={{ background: color, fontFamily: "var(--font-barlow)" }}
          >
            {selected.size > 0 ? `Add ${selected.size} sticker${selected.size > 1 ? "s" : ""}` : "Select stickers"}
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold border transition-colors text-[#6B7080] hover:text-[#1C1F2E] hover:bg-[#F0F2F7]"
            style={{ borderColor: "#D6DAE8" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Search input ───────────────────────────────────────────────────────────────

function SearchInput({ value, onChange, accent }: { value: string; onChange: (v: string) => void; accent: "blue" | "red" }) {
  const color = accent === "blue" ? WC.blue : WC.red;
  return (
    <div
      className="flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 mb-3 border transition-all bg-white"
      style={{ borderColor: value ? color : "#D6DAE8" }}
    >
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 shrink-0" style={{ color: "#9CA3B0" }}>
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by code, name or team..."
        className="flex-1 bg-transparent text-sm text-[#1C1F2E] placeholder:text-[#9CA3B0] focus:outline-none min-w-0"
      />
      {value && (
        <button onClick={() => onChange("")} className="transition-colors shrink-0" style={{ color: "#9CA3B0" }}>
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
      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold uppercase tracking-widest text-white mb-4 transition-all active:scale-[0.98]"
      style={{ background: color, fontFamily: "var(--font-barlow)" }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
      Add Stickers
    </button>
  );
}

// ── Sticker row ────────────────────────────────────────────────────────────────

function StickerRow({ sticker, count, sectionColor, onRemove }: { sticker: Sticker; count?: number; sectionColor: string; onRemove: () => void }) {
  return (
    <div
      className="flex items-center gap-2.5 bg-white rounded-lg mb-1.5 px-3 py-2.5 border-l-4 shadow-sm"
      style={{ borderLeftColor: sectionColor, borderTop: "1px solid #EEF0F7", borderRight: "1px solid #EEF0F7", borderBottom: "1px solid #EEF0F7" }}
    >
      {/* Badges */}
      {(sticker.foil || sticker.special) && (
        <div className="shrink-0">
          {sticker.foil && (
            <Badge
              className="text-[10px] px-1.5 py-0 font-bold border-0 leading-5"
              style={{ background: `linear-gradient(135deg, ${WC.gold}, #FFD700)`, color: "#5C3D00" }}
            >
              FOIL
            </Badge>
          )}
          {sticker.special && !sticker.foil && (
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 font-bold leading-5"
              style={{ borderColor: `${WC.green}88`, color: WC.green }}
            >
              SP
            </Badge>
          )}
        </div>
      )}
      {/* Sticker code */}
      <span
        className="font-mono text-sm font-bold shrink-0 min-w-[4rem]"
        style={{ color: WC.dark, fontFamily: "var(--font-mono)" }}
      >
        {sticker.code}{sticker.num}
      </span>
      {/* Name */}
      <span className="text-sm font-medium flex-1 truncate" style={{ color: WC.ink }}>
        {sticker.name}
      </span>
      {/* Count badge for duplicates */}
      {count !== undefined && count > 1 && (
        <Badge
          className="text-xs font-bold shrink-0 border"
          style={{ background: `${WC.red}15`, color: WC.red, borderColor: `${WC.red}30` }}
        >
          ×{count}
        </Badge>
      )}
      {/* Remove button */}
      <button
        onClick={onRemove}
        className="ml-auto w-7 h-7 flex items-center justify-center rounded-full transition-colors shrink-0"
        style={{ color: "#BCC0CC" }}
        onMouseEnter={e => (e.currentTarget.style.color = WC.red)}
        onMouseLeave={e => (e.currentTarget.style.color = "#BCC0CC")}
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
  const color = sectionAccent(title);
  return (
    <div className="mb-4">
      <div
        className="flex items-center gap-2 mb-2 pb-1.5 border-b-2"
        style={{ borderColor: color }}
      >
        <h3
          className="text-base font-bold uppercase tracking-widest leading-none"
          style={{ color, fontFamily: "var(--font-barlow)" }}
        >
          {title}
        </h3>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded-full text-white leading-5"
          style={{ background: color }}
        >
          {count}
        </span>
      </div>
      <div>{children}</div>
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
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl">
        {/* Colored header bar */}
        <div className="px-4 py-3" style={{ background: color }}>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
            {type === "missing" ? "Missing List" : "Duplicates"}
          </p>
          <p className="font-bold text-lg text-white leading-tight" style={{ fontFamily: "var(--font-barlow)" }}>
            {sticker.code}{sticker.num} — {sticker.name}
          </p>
        </div>
        {/* Body */}
        <div className="px-4 py-4 space-y-4">
          <p className="text-sm leading-relaxed" style={{ color: WC.dark }}>{message}</p>
          <label className="flex items-center gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={neverAsk}
              onChange={(e) => setNeverAsk(e.target.checked)}
              className="w-4 h-4 rounded cursor-pointer"
              style={{ accentColor: color }}
            />
            <span className="text-xs" style={{ color: "#9CA3B0" }}>Never ask me to confirm again</span>
          </label>
          <div className="flex gap-2 pt-1">
            <button
              onClick={onCancel}
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold border transition-colors hover:bg-[#F0F2F7]"
              style={{ borderColor: "#D6DAE8", color: WC.dark }}
            >
              Keep
            </button>
            <button
              onClick={() => onConfirm(neverAsk)}
              className="flex-1 py-2.5 rounded-lg text-sm font-bold text-white transition-colors active:opacity-80"
              style={{ background: color, fontFamily: "var(--font-barlow)" }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Empty state ────────────────────────────────────────────────────────────────

function EmptyState({ hint, type }: { hint: string; type: "missing" | "duplicate" }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4 text-center px-6">
      <div className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-md opacity-60">
        <Image src="/stickers.jpeg" alt="" fill sizes="112px" loading="eager" className="object-cover" />
      </div>
      <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: "#9CA3B0" }}>{hint}</p>
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

  const q = query.trim().toLowerCase();
  const filtered = [...items]
    .filter((s) => !q || s.id.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.section.toLowerCase().includes(q))
    .sort((a, b) => a.albumPos - b.albumPos);
  const groups = groupBySection(filtered, (s) => s);

  return (
    <div>
      {pendingRemove && (
        <ConfirmModal sticker={pendingRemove} type="missing" onConfirm={handleConfirm} onCancel={() => setPendingRemove(null)} />
      )}
      {panelOpen ? (
        <StickerPicker
          accent="blue"
          onSave={(entries) => {
            const existingIds = new Set(items.map((s) => s.id));
            const next = entries.map((e) => e.sticker).filter((s) => !existingIds.has(s.id));
            if (next.length > 0) onAdd(next);
            setPanelOpen(false);
          }}
          onCancel={() => setPanelOpen(false)}
        />
      ) : (
        <AddButton accent="blue" onClick={() => setPanelOpen(true)} />
      )}

      {items.length === 0 ? (
        <EmptyState type="missing" hint='No missing stickers yet. Tap "Add Stickers" to start tracking.' />
      ) : (
        <>
          <SearchInput value={query} onChange={setQuery} accent="blue" />
          {filtered.length === 0 ? (
            <EmptyState type="missing" hint={`No results for "${query}"`} />
          ) : (
            <div className="overflow-y-auto max-h-[55vh] pr-1">
              {groups.map(([section, stickers]) => (
                <SectionGroup key={section} title={section} count={stickers.length}>
                  {stickers.map((s) => (
                    <StickerRow key={s.id} sticker={s} sectionColor={sectionAccent(section)} onRemove={() => handleRemoveClick(s)} />
                  ))}
                </SectionGroup>
              ))}
            </div>
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
        <ConfirmModal sticker={pendingRemove} type="duplicate" onConfirm={handleConfirm} onCancel={() => setPendingRemove(null)} />
      )}
      {panelOpen ? (
        <StickerPicker
          accent="red"
          onSave={(entries) => {
            onAdd(entries.map((e) => ({ id: e.sticker.id, count: e.count })));
            setPanelOpen(false);
          }}
          onCancel={() => setPanelOpen(false)}
        />
      ) : (
        <AddButton accent="red" onClick={() => setPanelOpen(true)} />
      )}

      {items.length === 0 ? (
        <EmptyState type="duplicate" hint='No duplicates yet. Tap "Add Stickers" to log your extras.' />
      ) : (
        <>
          <SearchInput value={query} onChange={setQuery} accent="red" />
          {resolved.length === 0 ? (
            <EmptyState type="duplicate" hint={`No results for "${query}"`} />
          ) : (
            <div className="overflow-y-auto max-h-[55vh] pr-1">
              {groups.map(([section, entries]) => (
                <SectionGroup key={section} title={section} count={entries.length}>
                  {entries.map(({ entry, sticker }) => (
                    <StickerRow
                      key={sticker.id}
                      sticker={sticker}
                      count={entry.count}
                      sectionColor={sectionAccent(section)}
                      onRemove={() => handleRemoveClick(sticker)}
                    />
                  ))}
                </SectionGroup>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  const [token, setToken]               = useState<string | null>(null);
  const [username, setUsername]         = useState<string | null>(null);
  const [missing, setMissing]           = useState<Sticker[]>([]);
  const [dupes, setDupes]               = useState<DuplicateEntry[]>([]);
  const [confirmRemove, setConfirmRemove] = useState(true);
  const [syncing, setSyncing]           = useState(false);
  const [activeTab, setActiveTab]       = useState<"missing" | "duplicates">("missing");
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
      {!token && <AuthModal onAuth={handleAuth} />}
      <div className="min-h-screen" style={{ background: WC.paper }}>
        {token && username && (
          <Header username={username} syncing={syncing} token={token} onLogout={handleLogout} />
        )}

        <main className="max-w-lg mx-auto">
          {/* Album content area — white sheet */}
          <div className="bg-white mx-3 mt-3 mb-4 rounded-xl shadow-md overflow-hidden">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "missing" | "duplicates")}>
              {/* Tab bar */}
              <TabsList
                className="w-full h-auto p-0 rounded-none grid grid-cols-2"
                style={{ background: "#fff", borderBottom: `2px solid #E8EAF0` }}
              >
                {(["missing", "duplicates"] as const).map((tab) => {
                  const active = activeTab === tab;
                  const color  = tab === "missing" ? WC.blue : WC.red;
                  const count  = tab === "missing" ? missing.length : dupes.length;
                  return (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="flex items-center justify-center gap-2 rounded-none py-3 text-sm font-bold uppercase tracking-wider transition-all data-[state=active]:shadow-none"
                      style={{
                        background: "#fff",
                        color: active ? color : "#B0B5C4",
                        borderBottom: active ? `3px solid ${color}` : "3px solid transparent",
                        marginBottom: -2,
                      }}
                    >
                      {tab === "missing" ? "Missing" : "Duplicates"}
                      {count > 0 && (
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full transition-colors"
                          style={{
                            background: active ? color : "#E8EAF0",
                            color: active ? "#fff" : "#B0B5C4",
                          }}
                        >
                          {count}
                        </span>
                      )}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              <TabsContent value="missing" className="mt-0 p-4">
                <MissingTab
                  items={missing}
                  onAdd={addMissing}
                  onRemove={removeMissing}
                  confirmRemove={confirmRemove}
                  onNeverAskAgain={handleNeverAskAgain}
                />
              </TabsContent>
              <TabsContent value="duplicates" className="mt-0 p-4">
                <DuplicatesTab
                  items={dupes}
                  onAdd={addDupes}
                  onRemove={removeDupe}
                  confirmRemove={confirmRemove}
                  onNeverAskAgain={handleNeverAskAgain}
                />
              </TabsContent>
            </Tabs>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 py-2 px-4">
            <span className="text-[10px] tracking-widest uppercase" style={{ color: "#9CA3B0" }}>
              Unofficial fan tracker · not affiliated with
            </span>
            <div className="rounded overflow-hidden opacity-50">
              <Image src="/panini-logo.png" alt="Panini" width={44} height={11} className="object-contain" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
