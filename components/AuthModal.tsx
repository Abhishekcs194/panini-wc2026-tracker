"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const WC = { blue: "#2A398D", red: "#E61D25", green: "#3CAC3B", gold: "#F0A500" } as const;

type Mode = "login" | "register";
interface Props { onAuth: (token: string, username: string) => void; }

type SVGProps = { className?: string; style?: React.CSSProperties };
function TrophySVG({ className, style }: SVGProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 64 80" fill="none">
      <rect x="14" y="72" width="36" height="5" rx="2.5" fill="currentColor" opacity="0.55"/>
      <rect x="19" y="66" width="26" height="8" rx="2" fill="currentColor" opacity="0.7"/>
      <rect x="27" y="53" width="10" height="15" rx="1" fill="currentColor" opacity="0.85"/>
      <circle cx="32" cy="38" r="16" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M16 38 Q24 33 32 38 Q40 43 48 38" stroke="currentColor" strokeWidth="0.9" opacity="0.45" fill="none"/>
      <ellipse cx="32" cy="38" rx="7" ry="16" stroke="currentColor" strokeWidth="0.9" opacity="0.4" fill="none"/>
      <path d="M14 42 C10 34 13 24 20 22 C22 21 24 23 25 28 L26 40" fill="currentColor" opacity="0.8"/>
      <path d="M50 42 C54 34 51 24 44 22 C42 21 40 23 39 28 L38 40" fill="currentColor" opacity="0.8"/>
      <path d="M25 28 C27 23 29 21 32 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.85"/>
      <path d="M39 28 C37 23 35 21 32 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.85"/>
      <circle cx="32" cy="22" r="2.5" fill="currentColor" opacity="0.6"/>
    </svg>
  );
}

function StarSVG({ className, style }: SVGProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>
  );
}

function PaniniBadge() {
  return (
    <svg viewBox="0 0 90 28" fill="none" className="h-5 w-auto opacity-70">
      <rect x="1" y="1" width="88" height="26" rx="4" fill="#1a0a00" stroke="#E61D25" strokeWidth="1.4"/>
      <rect x="1" y="1" width="6" height="26" rx="4" fill="#E61D25"/>
      <rect x="5" y="1" width="3" height="26" fill="#E61D25"/>
      <rect x="80" y="1" width="9" height="26" rx="4" fill="#F0A500"/>
      <rect x="80" y="1" width="4" height="26" fill="#F0A500"/>
      <text x="45" y="19" textAnchor="middle" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="13" letterSpacing="2" fill="white">PANINI</text>
      <text x="12" y="19" textAnchor="middle" fontFamily="Arial" fontSize="11" fill="white">★</text>
    </svg>
  );
}

export default function AuthModal({ onAuth }: Props) {
  const [mode, setMode] = useState<Mode>("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(mode === "login" ? "/api/auth/login" : "/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error ?? "Something went wrong");
      else onAuth(data.token, data.username);
    } catch {
      setError("Network error — please try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <Card className="relative w-full max-w-sm border shadow-2xl" style={{ background: "#07091C", borderColor: `${WC.blue}44` }}>
        <CardContent className="pt-7 pb-7 px-6">

          {/* Trophy + title */}
          <div className="flex flex-col items-center gap-1 mb-6">
            <TrophySVG className="w-14 h-16" style={{ color: WC.gold }} />
            <div className="flex gap-1 mb-1">
              {[0,1,2].map((i) => <StarSVG key={i} className="w-3.5 h-3.5" style={{ color: WC.gold }} />)}
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              Panini <span style={{ color: WC.gold }}>WC 2026</span>
            </h1>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: `${WC.blue}BB` }}>
              Sticker Tracker
            </p>
          </div>

          {/* Host nations bar */}
          <div className="flex h-0.5 rounded-full overflow-hidden gap-px mb-6">
            <div className="flex-1 rounded-l-full" style={{ background: WC.blue }} />
            <div className="flex-1" style={{ background: WC.green }} />
            <div className="flex-1 rounded-r-full" style={{ background: WC.red }} />
          </div>

          {/* Mode toggle */}
          <div className="flex rounded-xl overflow-hidden mb-5 border" style={{ borderColor: `${WC.blue}44` }}>
            {(["login", "register"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => { setMode(m); setError(""); }}
                className="flex-1 h-11 text-base font-bold capitalize transition-colors"
                style={{
                  background: mode === m ? WC.blue : "transparent",
                  color: mode === m ? "white" : "rgba(255,255,255,0.4)",
                }}
              >
                {m === "login" ? "Sign in" : "Register"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-4">
            {[
              { label: "Username", type: "text", autoComplete: "username", value: username, set: setUsername, placeholder: "e.g. panini_king" },
              { label: "Password", type: "password", autoComplete: mode === "login" ? "current-password" : "new-password", value: password, set: setPassword, placeholder: "••••••••" },
            ].map(({ label, type, autoComplete, value, set, placeholder }) => (
              <div key={label}>
                <label className="text-sm font-semibold text-white/60 mb-2 block">{label}</label>
                <input
                  type={type}
                  autoComplete={autoComplete}
                  value={value}
                  onChange={(e) => set(e.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-xl px-4 py-3.5 text-base text-white placeholder:text-white/25 focus:outline-none border transition-colors"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                  required
                />
              </div>
            ))}

            {mode === "register" && (
              <p className="text-sm text-white/35">Minimum 6 characters · no email needed</p>
            )}

            {error && (
              <div className="rounded-xl px-4 py-3 border" style={{ background: `${WC.red}15`, borderColor: `${WC.red}40` }}>
                <p className="text-sm font-medium text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-base font-bold text-white transition-opacity disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              style={{ background: WC.blue }}
            >
              {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>

          {/* Panini homage */}
          <div className="flex flex-col items-center gap-1.5 mt-5">
            <p className="text-xs text-white/20 tracking-wider">Official sticker collection by</p>
            <PaniniBadge />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
