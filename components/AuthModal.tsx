"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Mode = "login" | "register";

interface Props {
  onAuth: (token: string, username: string) => void;
}

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

    const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
      } else {
        onAuth(data.token, data.username);
      }
    } catch {
      setError("Network error — please try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <Card className="relative w-full max-w-sm bg-[#0d1535]/95 border-white/10 shadow-2xl">
        <CardContent className="pt-8 pb-6 px-6">
          {/* logo */}
          <div className="flex flex-col items-center gap-2 mb-7">
            <TrophySVG className="w-12 h-12 text-amber-400" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
              Panini WC 2026
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Sticker Tracker</p>
          </div>

          {/* mode toggle */}
          <div className="flex rounded-lg border border-white/10 overflow-hidden mb-6">
            <button
              type="button"
              onClick={() => { setMode("login"); setError(""); }}
              className={`flex-1 py-2 text-sm font-semibold transition-colors ${mode === "login" ? "bg-amber-400 text-black" : "text-muted-foreground hover:text-foreground"}`}
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => { setMode("register"); setError(""); }}
              className={`flex-1 py-2 text-sm font-semibold transition-colors ${mode === "register" ? "bg-amber-400 text-black" : "text-muted-foreground hover:text-foreground"}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={submit} className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Username</label>
              <input
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. panini_king"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/30"
                required
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Password</label>
              <input
                type="password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/30"
                required
              />
              {mode === "register" && (
                <p className="text-xs text-muted-foreground mt-1.5">Minimum 6 characters</p>
              )}
            </div>

            {error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2">
                <p className="text-xs text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-1 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>

          {mode === "register" && (
            <p className="text-center text-xs text-muted-foreground mt-4">
              No email needed · just username &amp; password
            </p>
          )}

          <div className="flex justify-center mt-5">
            <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground">
              980 stickers · FIFA World Cup 2026
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
