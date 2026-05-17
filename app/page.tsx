"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { STICKERS, type Sticker } from "@/lib/stickers";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import AuthModal from "@/components/AuthModal";

const STORAGE_KEY_MISSING = "panini_missing_input";
const STORAGE_KEY_DUPLICATES = "panini_duplicates_input";
const STORAGE_KEY_TOKEN = "panini_token";
const STORAGE_KEY_USERNAME = "panini_username";

const SYNC_DEBOUNCE_MS = 1500;

type DuplicateEntry = { sticker: Sticker; count: number };

function parseRawCodes(raw: string): string[] {
  return raw
    .split(/[\s,\n]+/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
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

// ── SVG decorations ──────────────────────────────────────────────────────────

function TrophySVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08"/>
      <polygon points="32,10 40,20 32,28 24,20" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.2"/>
      <path d="M40 20l14 4M24 20L10 24M32 28l4 14M32 28l-4 14M44 24l6 14M20 24l-6 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

// ── Background ───────────────────────────────────────────────────────────────

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

// ── Cloud sync indicator ─────────────────────────────────────────────────────

function SyncDot({ syncing }: { syncing: boolean }) {
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full transition-colors ${syncing ? "bg-amber-400 animate-pulse" : "bg-green-400"}`}
      title={syncing ? "Saving…" : "Saved"}
    />
  );
}

// ── Header ───────────────────────────────────────────────────────────────────

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
            <span className="text-xs text-foreground/80 font-medium">@{username}</span>
          </div>
          <button
            onClick={onLogout}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5"
          >
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

// ── Sticker row ──────────────────────────────────────────────────────────────

function StickerRow({ sticker, count }: { sticker: Sticker; count?: number }) {
  return (
    <div className="flex items-center gap-2.5 py-2.5 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-1.5 shrink-0">
        {sticker.foil && (
          <Badge className="text-[10px] px-1.5 py-0 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-bold border-0">
            FOIL
          </Badge>
        )}
        {sticker.special && !sticker.foil && (
          <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-violet-400/50 text-violet-300">
            SP
          </Badge>
        )}
      </div>
      <span className="font-mono text-sm font-bold text-amber-300 shrink-0 min-w-[3.5rem]">
        {sticker.code}{sticker.num}
      </span>
      <span className="text-sm text-foreground/90 flex-1 truncate">{sticker.name}</span>
      {count !== undefined && count > 1 && (
        <Badge className="bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-bold shrink-0">
          ×{count}
        </Badge>
      )}
    </div>
  );
}

// ── Section group ─────────────────────────────────────────────────────────────

function SectionGroup({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-1.5 px-1">
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</h3>
        <span className="text-xs text-muted-foreground/60 bg-white/5 px-1.5 py-0.5 rounded-full">{count}</span>
      </div>
      <Card className="bg-card/60 backdrop-blur-sm border-white/8">
        <CardContent className="px-3 py-0">{children}</CardContent>
      </Card>
    </div>
  );
}

function UnknownGroup({ codes }: { codes: string[] }) {
  return (
    <SectionGroup title="Not recognized" count={codes.length}>
      {codes.map((code) => (
        <div key={code} className="flex items-center gap-2 py-2.5 border-b border-white/5 last:border-0">
          <span className="font-mono text-sm text-red-400/80">{code}</span>
          <span className="text-xs text-muted-foreground">— unknown code</span>
        </div>
      ))}
    </SectionGroup>
  );
}

function EmptyState({ hint }: { hint: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3 text-center px-6">
      <BallSVG className="w-14 h-14 text-muted-foreground/20" />
      <p className="text-sm text-muted-foreground">{hint}</p>
    </div>
  );
}

function InputHint({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-muted-foreground mt-1.5 px-1">{children}</p>;
}

// ── Missing tab ───────────────────────────────────────────────────────────────

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
    <div className="space-y-4">
      <div>
        <Textarea
          className="font-mono text-sm bg-white/5 border-white/10 placeholder:text-muted-foreground/40 focus-visible:ring-amber-400/50 focus-visible:border-amber-400/30 resize-none h-28 text-foreground"
          placeholder={"FWC1, ARG3, MEX17\nOne code per line or comma-separated"}
          value={input}
          onChange={(e) => onInput(e.target.value)}
        />
        <InputHint>
          Case-insensitive · e.g.{" "}
          <span className="text-amber-300 font-mono">FWC1</span>,{" "}
          <span className="text-amber-300 font-mono">arg3</span>,{" "}
          <span className="text-amber-300 font-mono">MEX17</span>
        </InputHint>
      </div>
      {tokens.length === 0 ? (
        <EmptyState hint="Enter sticker codes above to see your missing stickers grouped by team." />
      ) : (
        <ScrollArea className="max-h-[55vh]">
          <div className="pr-1">
            {groups.map(([section, stickers]) => (
              <SectionGroup key={section} title={section} count={stickers.length}>
                {stickers.map((s) => <StickerRow key={s.id} sticker={s} />)}
              </SectionGroup>
            ))}
            {notRecognized.length > 0 && <UnknownGroup codes={notRecognized} />}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

// ── Duplicates tab ────────────────────────────────────────────────────────────

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
    <div className="space-y-4">
      <div>
        <Textarea
          className="font-mono text-sm bg-white/5 border-white/10 placeholder:text-muted-foreground/40 focus-visible:ring-violet-400/50 focus-visible:border-violet-400/30 resize-none h-28 text-foreground"
          placeholder={"ARG17x3, MEX2, FWC5x2\nAppend xN for the count"}
          value={input}
          onChange={(e) => onInput(e.target.value)}
        />
        <InputHint>
          Append <span className="text-violet-300 font-mono">x3</span> for duplicates ·{" "}
          <span className="text-violet-300 font-mono">ARG17x3</span> = 3 copies
        </InputHint>
      </div>
      {tokens.length === 0 ? (
        <EmptyState hint="Enter sticker codes above. Add a count suffix like ARG17x3 for 3 duplicates." />
      ) : (
        <ScrollArea className="max-h-[55vh]">
          <div className="pr-1">
            {groups.map(([section, entries]) => (
              <SectionGroup key={section} title={section} count={entries.length}>
                {entries.map((e) => <StickerRow key={e.sticker.id} sticker={e.sticker} count={e.count} />)}
              </SectionGroup>
            ))}
            {notRecognized.length > 0 && <UnknownGroup codes={notRecognized} />}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [missingInput, setMissingInput] = useState("");
  const [duplicatesInput, setDuplicatesInput] = useState("");
  const [syncing, setSyncing] = useState(false);
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hydrate from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem(STORAGE_KEY_TOKEN);
    const storedUser = localStorage.getItem(STORAGE_KEY_USERNAME);
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUsername(storedUser);
    } else {
      setMissingInput(localStorage.getItem(STORAGE_KEY_MISSING) ?? "");
      setDuplicatesInput(localStorage.getItem(STORAGE_KEY_DUPLICATES) ?? "");
    }
  }, []);

  // Load cloud data on login
  useEffect(() => {
    if (!token) return;
    fetch("/api/user/data", { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((data) => {
        if (data.missingList !== undefined) setMissingInput(data.missingList);
        if (data.duplicatesList !== undefined) setDuplicatesInput(data.duplicatesList);
      })
      .catch(() => {});
  }, [token]);

  // Debounced cloud save
  const scheduleSave = useCallback(
    (missing: string, duplicates: string) => {
      if (!token) return;
      if (syncTimer.current) clearTimeout(syncTimer.current);
      setSyncing(true);
      syncTimer.current = setTimeout(async () => {
        try {
          await fetch("/api/user/data", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ missingList: missing, duplicatesList: duplicates }),
          });
        } finally {
          setSyncing(false);
        }
      }, SYNC_DEBOUNCE_MS);
    },
    [token]
  );

  const handleMissingInput = useCallback(
    (v: string) => {
      setMissingInput(v);
      if (token) {
        scheduleSave(v, duplicatesInput);
      } else {
        localStorage.setItem(STORAGE_KEY_MISSING, v);
      }
    },
    [token, duplicatesInput, scheduleSave]
  );

  const handleDuplicatesInput = useCallback(
    (v: string) => {
      setDuplicatesInput(v);
      if (token) {
        scheduleSave(missingInput, v);
      } else {
        localStorage.setItem(STORAGE_KEY_DUPLICATES, v);
      }
    },
    [token, missingInput, scheduleSave]
  );

  function handleAuth(newToken: string, newUsername: string) {
    setToken(newToken);
    setUsername(newUsername);
    localStorage.setItem(STORAGE_KEY_TOKEN, newToken);
    localStorage.setItem(STORAGE_KEY_USERNAME, newUsername);
  }

  function handleLogout() {
    setToken(null);
    setUsername(null);
    setMissingInput("");
    setDuplicatesInput("");
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem(STORAGE_KEY_USERNAME);
    localStorage.removeItem(STORAGE_KEY_MISSING);
    localStorage.removeItem(STORAGE_KEY_DUPLICATES);
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
            <TabsList className="w-full h-11 bg-white/5 border border-white/10 p-1">
              <TabsTrigger
                value="missing"
                className="flex-1 text-sm font-semibold data-[state=active]:bg-amber-400 data-[state=active]:text-black data-[state=active]:shadow-none transition-all"
              >
                Missing
              </TabsTrigger>
              <TabsTrigger
                value="duplicates"
                className="flex-1 text-sm font-semibold data-[state=active]:bg-violet-500 data-[state=active]:text-white data-[state=active]:shadow-none transition-all"
              >
                Duplicates
              </TabsTrigger>
            </TabsList>

            <TabsContent value="missing" className="mt-4">
              <MissingTab input={missingInput} onInput={handleMissingInput} />
            </TabsContent>

            <TabsContent value="duplicates" className="mt-4">
              <DuplicatesTab input={duplicatesInput} onInput={handleDuplicatesInput} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
