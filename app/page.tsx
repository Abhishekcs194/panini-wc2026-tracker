"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { STICKERS, type Sticker } from "@/lib/stickers";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import AuthModal from "@/components/AuthModal";

// ── Types ────────────────────────────────────────────────────────────────────

type DuplicateEntry = { id: string; count: number };

// ── Storage keys ─────────────────────────────────────────────────────────────

const KEY_TOKEN = "panini_token";
const KEY_USER  = "panini_username";

const SYNC_DELAY = 1200;

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

// ── SVGs ─────────────────────────────────────────────────────────────────────

function TrophySVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <path d="M32 4C24 4 18 10 18 18c0 10 8 18 14 22v6h-6v4h24v-4h-6v-6c6-4 14-12 14-22C58 10 52 4 44 4H32z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M18 12H8c0 0 0 12 10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M46 12h10c0 0 0 12-10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="22" y="52" width="20" height="4" rx="2" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

function StarSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>
  );
}

function BallSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
      <polygon points="32,10 40,20 32,28 24,20" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2"/>
      <path d="M40 20l14 4M24 20L10 24M32 28l4 14M32 28l-4 14M44 24l6 14M20 24l-6 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

// ── Background ────────────────────────────────────────────────────────────────

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#030718] via-[#06102e] to-[#0a0520]" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-600/5 blur-[80px]" />
      <TrophySVG className="absolute top-6 right-6 w-20 h-20 text-amber-400/20" />
      <BallSVG className="absolute bottom-10 left-4 w-24 h-24 text-white/5" />
      <BallSVG className="absolute top-1/3 right-2 w-14 h-14 text-amber-400/8" />
      <StarSVG className="absolute top-20 left-8 w-5 h-5 text-amber-400/25" />
      <StarSVG className="absolute top-36 left-16 w-3 h-3 text-amber-300/20" />
      <StarSVG className="absolute bottom-40 right-10 w-4 h-4 text-amber-400/20" />
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────

function SyncDot({ syncing }: { syncing: boolean }) {
  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full transition-colors ${syncing ? "bg-amber-400 animate-pulse" : "bg-green-400"}`} />
  );
}

function Header({ username, syncing, onLogout }: { username: string; syncing: boolean; onLogout: () => void }) {
  return (
    <header className="px-4 pt-6 pb-3">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <TrophySVG className="w-8 h-8 text-amber-400 shrink-0" />
          <div>
            <h1 className="text-lg font-bold leading-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Panini WC 2026
            </h1>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Sticker Tracker</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
            <SyncDot syncing={syncing} />
            <span className="text-sm text-foreground/90 font-semibold">@{username}</span>
          </div>
          <button onClick={onLogout} className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-white/5 active:bg-white/10">
            Sign out
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 mt-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarSVG key={i} className="w-2.5 h-2.5 text-amber-400/50" />
        ))}
      </div>
    </header>
  );
}

// ── Add panel ─────────────────────────────────────────────────────────────────

function AddPanel({
  accent,
  placeholder,
  hint,
  onSave,
  onCancel,
}: {
  accent: "amber" | "violet";
  placeholder: string;
  hint: React.ReactNode;
  onSave: (raw: string) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState("");
  const ring = accent === "amber" ? "focus-visible:ring-amber-400/50 focus-visible:border-amber-400/30" : "focus-visible:ring-violet-400/50 focus-visible:border-violet-400/30";
  const btn  = accent === "amber" ? "bg-amber-400 hover:bg-amber-300 text-black" : "bg-violet-500 hover:bg-violet-400 text-white";

  function handleSave() {
    onSave(value);
    setValue("");
  }

  return (
    <Card className="bg-white/5 border-white/10 mb-4">
      <CardContent className="pt-3 pb-3 px-3 space-y-2">
        <Textarea
          autoFocus
          className={`font-mono text-base bg-white/5 border-white/10 placeholder:text-muted-foreground/50 resize-none h-28 text-foreground ${ring}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="text-sm text-foreground/50 px-0.5">{hint}</p>
        <div className="flex gap-2 pt-1">
          <button
            onClick={handleSave}
            disabled={!value.trim()}
            className={`flex-1 py-3 rounded-lg text-base font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${btn}`}
          >
            Save to list
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-3 rounded-lg text-base font-semibold text-foreground/60 hover:text-foreground transition-colors border border-white/15 hover:bg-white/5 active:bg-white/10"
          >
            Cancel
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

// ── Sticker row ───────────────────────────────────────────────────────────────

function StickerRow({
  sticker,
  count,
  onRemove,
}: {
  sticker: Sticker;
  count?: number;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-2.5 py-3 border-b border-white/8 last:border-0 group">
      <div className="flex items-center gap-1.5 shrink-0">
        {sticker.foil && (
          <Badge className="text-xs px-1.5 py-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold border-0">
            FOIL
          </Badge>
        )}
        {sticker.special && !sticker.foil && (
          <Badge variant="outline" className="text-xs px-1.5 py-0.5 border-violet-400/60 text-violet-200">
            SP
          </Badge>
        )}
      </div>
      <span className="font-mono text-base font-bold text-amber-300 shrink-0 min-w-[4.5rem]">
        {sticker.code}{sticker.num}
      </span>
      <span className="text-base text-foreground flex-1 truncate">{sticker.name}</span>
      {count !== undefined && count > 1 && (
        <Badge className="bg-violet-500/30 text-violet-200 border border-violet-400/40 text-sm font-bold shrink-0">
          ×{count}
        </Badge>
      )}
      <button
        onClick={onRemove}
        className="ml-1 w-8 h-8 flex items-center justify-center rounded-full text-foreground/30 hover:text-red-400 hover:bg-red-400/10 active:bg-red-400/20 transition-colors shrink-0"
        aria-label="Remove"
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
          <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}

// ── Section group ─────────────────────────────────────────────────────────────

function SectionGroup({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-1.5 px-1">
        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/60">{title}</h3>
        <span className="text-xs font-semibold text-foreground/40 bg-white/8 px-1.5 py-0.5 rounded-full">{count}</span>
      </div>
      <Card className="bg-card/60 backdrop-blur-sm border-white/8">
        <CardContent className="px-3 py-0">{children}</CardContent>
      </Card>
    </div>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────

function EmptyState({ hint }: { hint: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-14 gap-3 text-center px-6">
      <BallSVG className="w-14 h-14 text-muted-foreground/20" />
      <p className="text-sm text-muted-foreground">{hint}</p>
    </div>
  );
}

// ── Add button ────────────────────────────────────────────────────────────────

function AddButton({ accent, onClick }: { accent: "amber" | "violet"; onClick: () => void }) {
  const cls = accent === "amber"
    ? "border-amber-400/20 text-amber-400 hover:bg-amber-400/10"
    : "border-violet-400/20 text-violet-400 hover:bg-violet-400/10";
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-dashed text-base font-bold transition-colors mb-4 ${cls}`}
    >
      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      Add stickers
    </button>
  );
}

// ── Missing tab ───────────────────────────────────────────────────────────────

function MissingTab({
  items,
  onAdd,
  onRemove,
}: {
  items: Sticker[];
  onAdd: (stickers: Sticker[]) => void;
  onRemove: (id: string) => void;
}) {
  const [panelOpen, setPanelOpen] = useState(false);

  function handleSave(raw: string) {
    const tokens = parseRawCodes(raw);
    const newStickers: Sticker[] = [];
    const existingIds = new Set(items.map((s) => s.id));
    for (const token of tokens) {
      const s = lookupSticker(token);
      if (s && !existingIds.has(s.id)) newStickers.push(s);
    }
    if (newStickers.length > 0) onAdd(newStickers);
    setPanelOpen(false);
  }

  const sorted = [...items].sort((a, b) => a.albumPos - b.albumPos);
  const groups = groupBySection(sorted, (s) => s);

  return (
    <div>
      {panelOpen ? (
        <AddPanel
          accent="amber"
          placeholder={"FWC1, ARG3, MEX17\nOne code per line or comma-separated"}
          hint={<>Case-insensitive · e.g. <span className="text-amber-300 font-mono">FWC1</span>, <span className="text-amber-300 font-mono">arg3</span></>}
          onSave={handleSave}
          onCancel={() => setPanelOpen(false)}
        />
      ) : (
        <AddButton accent="amber" onClick={() => setPanelOpen(true)} />
      )}

      {items.length === 0 ? (
        <EmptyState hint={'No missing stickers yet. Tap “Add stickers” to log what you need.'} />
      ) : (
        <ScrollArea className="max-h-[62vh]">
          <div className="pr-1">
            {groups.map(([section, stickers]) => (
              <SectionGroup key={section} title={section} count={stickers.length}>
                {stickers.map((s) => (
                  <StickerRow key={s.id} sticker={s} onRemove={() => onRemove(s.id)} />
                ))}
              </SectionGroup>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

// ── Duplicates tab ────────────────────────────────────────────────────────────

function DuplicatesTab({
  items,
  onAdd,
  onRemove,
}: {
  items: DuplicateEntry[];
  onAdd: (entries: DuplicateEntry[]) => void;
  onRemove: (id: string) => void;
}) {
  const [panelOpen, setPanelOpen] = useState(false);

  function handleSave(raw: string) {
    const tokens = parseRawCodes(raw);
    const newEntries: DuplicateEntry[] = [];
    for (const token of tokens) {
      const match = token.match(/^(.+?)(?:x(\d+))?$/);
      if (!match) continue;
      const code = match[1];
      const count = match[2] ? parseInt(match[2], 10) : 1;
      const s = lookupSticker(code);
      if (s) newEntries.push({ id: s.id, count });
    }
    if (newEntries.length > 0) onAdd(newEntries);
    setPanelOpen(false);
  }

  const resolved = items
    .map((e) => ({ entry: e, sticker: STICKERS.find((s) => s.id === e.id)! }))
    .filter((x) => x.sticker)
    .sort((a, b) => a.sticker.albumPos - b.sticker.albumPos);

  const groups = groupBySection(resolved, (x) => x.sticker);

  return (
    <div>
      {panelOpen ? (
        <AddPanel
          accent="violet"
          placeholder={"ARG17x3, MEX2, FWC5x2\nAppend xN for the count"}
          hint={<>Append <span className="text-violet-300 font-mono">x3</span> for count · e.g. <span className="text-violet-300 font-mono">ARG17x3</span></>}
          onSave={handleSave}
          onCancel={() => setPanelOpen(false)}
        />
      ) : (
        <AddButton accent="violet" onClick={() => setPanelOpen(true)} />
      )}

      {items.length === 0 ? (
        <EmptyState hint={'No duplicates yet. Tap "Add stickers" to log your extras.'} />
      ) : (
        <ScrollArea className="max-h-[62vh]">
          <div className="pr-1">
            {groups.map(([section, entries]) => (
              <SectionGroup key={section} title={section} count={entries.length}>
                {entries.map(({ entry, sticker }) => (
                  <StickerRow
                    key={sticker.id}
                    sticker={sticker}
                    count={entry.count}
                    onRemove={() => onRemove(sticker.id)}
                  />
                ))}
              </SectionGroup>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [token, setToken]       = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [missing, setMissing]   = useState<Sticker[]>([]);
  const [dupes, setDupes]       = useState<DuplicateEntry[]>([]);
  const [syncing, setSyncing]   = useState(false);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hydrate auth from localStorage
  useEffect(() => {
    const t = localStorage.getItem(KEY_TOKEN);
    const u = localStorage.getItem(KEY_USER);
    if (t && u) { setToken(t); setUsername(u); }
  }, []);

  // Load cloud data after login
  useEffect(() => {
    if (!token) return;
    fetch("/api/user/data", { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((data) => {
        const missingIds: string[] = data.missing ?? [];
        const dupesRaw: DuplicateEntry[] = data.duplicates ?? [];
        setMissing(missingIds.map((id) => STICKERS.find((s) => s.id === id)!).filter(Boolean));
        setDupes(dupesRaw);
      })
      .catch(() => {});
  }, [token]);

  // Debounced cloud save
  const scheduleSave = useCallback(
    (m: Sticker[], d: DuplicateEntry[]) => {
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
        } finally {
          setSyncing(false);
        }
      }, SYNC_DELAY);
    },
    [token]
  );

  function addMissing(stickers: Sticker[]) {
    setMissing((prev) => {
      const next = [...prev, ...stickers];
      scheduleSave(next, dupes);
      return next;
    });
  }

  function removeMissing(id: string) {
    setMissing((prev) => {
      const next = prev.filter((s) => s.id !== id);
      scheduleSave(next, dupes);
      return next;
    });
  }

  function addDupes(entries: DuplicateEntry[]) {
    setDupes((prev) => {
      const next = [...prev];
      for (const entry of entries) {
        const existing = next.find((e) => e.id === entry.id);
        if (existing) existing.count += entry.count;
        else next.push(entry);
      }
      scheduleSave(missing, next);
      return next;
    });
  }

  function removeDupe(id: string) {
    setDupes((prev) => {
      const next = prev
        .map((e) => e.id === id ? { ...e, count: e.count - 1 } : e)
        .filter((e) => e.count > 0);
      scheduleSave(missing, next);
      return next;
    });
  }

  function handleAuth(newToken: string, newUsername: string) {
    setToken(newToken);
    setUsername(newUsername);
    localStorage.setItem(KEY_TOKEN, newToken);
    localStorage.setItem(KEY_USER, newUsername);
  }

  function handleLogout() {
    setToken(null); setUsername(null);
    setMissing([]); setDupes([]);
    localStorage.removeItem(KEY_TOKEN);
    localStorage.removeItem(KEY_USER);
  }

  return (
    <>
      <Background />
      {!token && <AuthModal onAuth={handleAuth} />}
      <main className="min-h-screen">
        <div className="max-w-lg mx-auto px-4 pb-10">
          {token && username && (
            <Header username={username} syncing={syncing} onLogout={handleLogout} />
          )}

          <Tabs defaultValue="missing" className="mt-4">
            <TabsList className="w-full h-13 bg-white/5 border border-white/10 p-1">
              <TabsTrigger
                value="missing"
                className="flex-1 text-base font-bold data-[state=active]:bg-amber-400 data-[state=active]:text-black data-[state=active]:shadow-none transition-all"
              >
                Missing
                {missing.length > 0 && (
                  <span className="ml-2 text-sm font-bold bg-black/20 px-2 py-0.5 rounded-full">{missing.length}</span>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="duplicates"
                className="flex-1 text-base font-bold data-[state=active]:bg-violet-500 data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
              >
                Duplicates
                {dupes.length > 0 && (
                  <span className="ml-2 text-sm font-bold bg-white/20 px-2 py-0.5 rounded-full">{dupes.length}</span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="missing" className="mt-4">
              <MissingTab items={missing} onAdd={addMissing} onRemove={removeMissing} />
            </TabsContent>

            <TabsContent value="duplicates" className="mt-4">
              <DuplicatesTab items={dupes} onAdd={addDupes} onRemove={removeDupe} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
