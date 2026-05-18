"use client";

import { useState } from "react";
import Image from "next/image";

const WC = {
  blue:  "#2A398D",
  red:   "#E61D25",
  green: "#3CAC3B",
  ink:   "#1C1F2E",
  paper: "#EEF0F7",
} as const;

type Mode = "login" | "register";
interface Props { onAuth: (token: string, username: string) => void; }

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop — show the paper background behind */}
      <div className="absolute inset-0" style={{ background: WC.paper }} />

      {/* Modal card */}
      <div className="relative w-full sm:max-w-sm sm:rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#fff" }}>

        {/* ── Blue header ── */}
        <div style={{ background: WC.blue }}>
          {/* Logo row */}
          <div className="flex items-center gap-3 px-5 pt-5 pb-3">
            <div style={{ mixBlendMode: "screen" }}>
              <Image src="/wc2026-logo-new.png" alt="FIFA World Cup 2026" width={64} height={64} className="object-contain" />
            </div>
            <div>
              <p
                className="text-2xl font-bold uppercase leading-tight text-white"
                style={{ fontFamily: "var(--font-barlow), var(--font-inter)" }}
              >
                Sticker Tracker
              </p>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "rgba(209,212,209,0.7)" }}>
                Panini · FIFA World Cup 2026
              </p>
            </div>
          </div>

          {/* Host nations bar */}
          <div className="flex h-[3px]">
            <div className="flex-1" style={{ background: "#002868" }} />
            <div className="flex-1" style={{ background: WC.green }} />
            <div className="flex-1" style={{ background: WC.red }} />
          </div>
        </div>

        {/* ── Form body ── */}
        <div className="px-5 py-5" style={{ background: WC.paper }}>

          {/* Mode toggle */}
          <div className="flex rounded-lg overflow-hidden mb-5 border" style={{ borderColor: "#D6DAE8" }}>
            {(["login", "register"] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => { setMode(m); setError(""); }}
                className="flex-1 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors"
                style={{
                  background: mode === m ? WC.blue : "transparent",
                  color: mode === m ? "#fff" : "#9CA3B0",
                  fontFamily: "var(--font-barlow), var(--font-inter)",
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
                <label className="text-xs font-bold uppercase tracking-wider mb-1.5 block" style={{ color: "#6B7080" }}>
                  {label}
                </label>
                <input
                  type={type}
                  autoComplete={autoComplete}
                  value={value}
                  onChange={(e) => set(e.target.value)}
                  placeholder={placeholder}
                  className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none border-2 transition-colors bg-white"
                  style={{
                    borderColor: "#D6DAE8",
                    color: WC.ink,
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = WC.blue)}
                  onBlur={e => (e.currentTarget.style.borderColor = "#D6DAE8")}
                  required
                />
              </div>
            ))}

            {mode === "register" && (
              <p className="text-xs" style={{ color: "#9CA3B0" }}>Minimum 6 characters · no email needed</p>
            )}

            {error && (
              <div className="rounded-lg px-4 py-3 border" style={{ background: `${WC.red}10`, borderColor: `${WC.red}30` }}>
                <p className="text-sm font-medium" style={{ color: WC.red }}>{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-sm font-bold uppercase tracking-widest text-white transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: WC.red, fontFamily: "var(--font-barlow), var(--font-inter)" }}
            >
              {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="text-[10px] tracking-widest uppercase" style={{ color: "#BCC0CC" }}>Official collection by</span>
            <div className="rounded overflow-hidden opacity-60">
              <Image src="/panini-logo.png" alt="Panini" width={48} height={12} className="object-contain" style={{ height: "auto" }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
