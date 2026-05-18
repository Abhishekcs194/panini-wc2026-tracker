"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { STICKERS } from "@/lib/stickers";

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

const KEY_TOKEN = "panini_token";
const KEY_USER  = "panini_username";

type TradeEntry = { id: string; count: number };

type TradeData = {
  owner: { username: string; duplicatesCount: number; missingCount: number };
  viewer: string | null;
  ownerCanGive: TradeEntry[];
  viewerCanGive: TradeEntry[];
};

function stickerLabel(id: string) {
  const s = STICKERS.find((x) => x.id.toLowerCase() === id.toLowerCase());
  return s ? `${s.code}${s.num}` : id.toUpperCase();
}

function stickerName(id: string) {
  const s = STICKERS.find((x) => x.id.toLowerCase() === id.toLowerCase());
  return s?.name ?? "";
}

function TradeList({
  entries,
  color,
  emptyText,
}: {
  entries: TradeEntry[];
  color: string;
  emptyText: string;
}) {
  if (entries.length === 0) {
    return <p className="text-sm py-3 text-center" style={{ color: "#9CA3B0" }}>{emptyText}</p>;
  }
  return (
    <div className="space-y-1.5 mt-2">
      {entries.map((e) => (
        <div
          key={e.id}
          className="flex items-center gap-2.5 bg-white rounded-lg px-3 py-2.5 border-l-4 shadow-sm"
          style={{ borderLeftColor: color, borderTop: "1px solid #EEF0F7", borderRight: "1px solid #EEF0F7", borderBottom: "1px solid #EEF0F7" }}
        >
          <span className="font-mono text-sm font-bold shrink-0 min-w-[4rem]" style={{ color: WC.dark }}>
            {stickerLabel(e.id)}
          </span>
          <span className="text-sm font-medium flex-1 truncate" style={{ color: WC.ink }}>
            {stickerName(e.id)}
          </span>
          {e.count > 1 && (
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full shrink-0"
              style={{ background: `${color}18`, color }}
            >
              ×{e.count}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function TradePage() {
  const { token } = useParams<{ token: string }>();
  const [data, setData] = useState<TradeData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewerUsername, setViewerUsername] = useState<string | null>(null);

  useEffect(() => {
    const jwt    = localStorage.getItem(KEY_TOKEN);
    const uname  = localStorage.getItem(KEY_USER);
    if (uname) setViewerUsername(uname);

    const headers: Record<string, string> = {};
    if (jwt) headers["Authorization"] = `Bearer ${jwt}`;

    fetch(`/api/trade/${token}`, { headers })
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Failed to load trade data"))
      .finally(() => setLoading(false));
  }, [token]);

  const isOwnLink = data?.owner.username === viewerUsername;

  return (
    <div className="min-h-screen" style={{ background: WC.paper }}>
      {/* Header */}
      <header>
        <div style={{ background: WC.blue }}>
          <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
            <div className="shrink-0" style={{ mixBlendMode: "screen" }}>
              <Image src="/wc2026-logo-new.png" alt="FIFA World Cup 2026" width={48} height={48} className="object-contain" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: `${WC.gray}90` }}>
                Panini Official
              </p>
              <h1
                className="text-xl font-bold uppercase leading-none tracking-wide text-white"
                style={{ fontFamily: "var(--font-barlow), var(--font-inter)" }}
              >
                Sticker Trade
              </h1>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: `${WC.gray}70` }}>
                FIFA World Cup 2026
              </p>
            </div>
          </div>
          <div className="flex h-[3px]">
            <div className="flex-1" style={{ background: "#002868" }} />
            <div className="flex-1" style={{ background: WC.green }} />
            <div className="flex-1" style={{ background: WC.red }} />
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-3 py-4 space-y-4">
        {loading && (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <p className="text-sm" style={{ color: "#9CA3B0" }}>Loading…</p>
          </div>
        )}

        {error && (
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <p className="text-sm font-semibold" style={{ color: WC.red }}>{error}</p>
            <p className="text-xs mt-1" style={{ color: "#9CA3B0" }}>This share link may be invalid or expired.</p>
          </div>
        )}

        {data && !error && (
          <>
            {/* Owner card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-4 py-3" style={{ background: WC.blue }}>
                <p className="text-[10px] font-bold tracking-widest uppercase text-white/70">Sticker collection</p>
                <p className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "var(--font-barlow)" }}>
                  @{data.owner.username}
                </p>
              </div>
              <div className="px-4 py-3 flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: WC.blue, fontFamily: "var(--font-barlow)" }}>
                    {data.owner.duplicatesCount}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#9CA3B0" }}>Duplicates</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: WC.red, fontFamily: "var(--font-barlow)" }}>
                    {data.owner.missingCount}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#9CA3B0" }}>Missing</p>
                </div>
              </div>
            </div>

            {/* Own link notice */}
            {isOwnLink && (
              <div className="bg-white rounded-xl shadow-sm px-4 py-3 border-l-4" style={{ borderLeftColor: WC.gold }}>
                <p className="text-sm font-semibold" style={{ color: WC.dark }}>This is your share link</p>
                <p className="text-xs mt-0.5" style={{ color: "#9CA3B0" }}>
                  Send it to a friend — when they open it while logged in, they&apos;ll see what you can trade.
                </p>
              </div>
            )}

            {/* Not logged in prompt */}
            {!viewerUsername && !isOwnLink && (
              <div className="bg-white rounded-xl shadow-sm px-4 py-4 text-center space-y-2">
                <p className="text-sm font-semibold" style={{ color: WC.ink }}>
                  Sign in to see what you can trade with @{data.owner.username}
                </p>
                <a
                  href="/"
                  className="inline-block px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white"
                  style={{ background: WC.blue, fontFamily: "var(--font-barlow)" }}
                >
                  Sign in
                </a>
              </div>
            )}

            {/* Logged in but not the owner — show match */}
            {viewerUsername && !isOwnLink && (
              <>
                {data.ownerCanGive.length === 0 && data.viewerCanGive.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-sm px-4 py-6 text-center">
                    <p className="text-2xl mb-2">🤝</p>
                    <p className="text-sm font-semibold" style={{ color: WC.dark }}>No matches right now</p>
                    <p className="text-xs mt-1 max-w-[220px] mx-auto leading-relaxed" style={{ color: "#9CA3B0" }}>
                      Neither of your duplicate lists overlap with the other&apos;s missing list yet.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Owner can give viewer */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: `${WC.blue}12`, borderBottom: `2px solid ${WC.blue}30` }}>
                        <span className="text-sm font-bold uppercase tracking-wider" style={{ color: WC.blue, fontFamily: "var(--font-barlow)" }}>
                          @{data.owner.username} → you
                        </span>
                        <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: WC.blue }}>
                          {data.ownerCanGive.length}
                        </span>
                      </div>
                      <div className="px-4 py-2">
                        <p className="text-xs" style={{ color: "#9CA3B0" }}>
                          Stickers they have spare that you&apos;re missing
                        </p>
                        <TradeList
                          entries={data.ownerCanGive}
                          color={WC.blue}
                          emptyText="No matches in this direction"
                        />
                      </div>
                    </div>

                    {/* Viewer can give owner */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: `${WC.red}12`, borderBottom: `2px solid ${WC.red}30` }}>
                        <span className="text-sm font-bold uppercase tracking-wider" style={{ color: WC.red, fontFamily: "var(--font-barlow)" }}>
                          You → @{data.owner.username}
                        </span>
                        <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: WC.red }}>
                          {data.viewerCanGive.length}
                        </span>
                      </div>
                      <div className="px-4 py-2">
                        <p className="text-xs" style={{ color: "#9CA3B0" }}>
                          Stickers you have spare that they&apos;re missing
                        </p>
                        <TradeList
                          entries={data.viewerCanGive}
                          color={WC.red}
                          emptyText="No matches in this direction"
                        />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}

            {/* Back to app */}
            <div className="text-center pb-2">
              <a
                href="/"
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: "#9CA3B0" }}
              >
                ← Back to my collection
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
