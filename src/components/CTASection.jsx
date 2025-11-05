import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b12] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pink-500/10 via-fuchsia-500/10 to-indigo-500/10" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-sm text-pink-300">
          <Sparkles className="h-4 w-4" />
          Date‑night ready in seconds
        </div>
        <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
          Start a room, send a link, press play.
        </h2>
        <p className="mt-3 text-white/80">
          No installs. Works in the browser. Designed for a cozy, romantic vibe so your time together feels special—no matter the distance.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Paste a YouTube URL"
            className="w-full flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-0 backdrop-blur focus:border-pink-400/50"
          />
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.01] sm:w-auto">
            <Heart className="h-5 w-5" />
            Create Room
          </button>
        </div>
      </div>
    </section>
  );
}
