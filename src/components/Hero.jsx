import React from 'react';
import Spline from '@splinetool/react-spline';
import { Heart, Play, Mic, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0b12] text-white">
      {/* Spline Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0b0b12]/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 sm:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-sm text-pink-300 backdrop-blur">
          <Heart className="h-4 w-4" />
          Built for long‑distance love
        </div>

        <h1 className="mt-6 text-center text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Stream YouTube together.
          <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Talk, laugh, and fall in love online.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-white/80">
          Create a private room to sync videos perfectly, open your mics, and chat in real‑time. Designed with a romantic vibe for couples who miss movie nights.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:scale-[1.02]">
            <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
            Create a Love Room
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">
            <Play className="h-5 w-5" />
            See how it works
          </button>
        </div>

        {/* Quick feature badges */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <Mic className="h-4 w-4 text-pink-300" /> Voice chat
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <MessageCircle className="h-4 w-4 text-fuchsia-300" /> Live chat
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <Play className="h-4 w-4 text-indigo-300" /> Perfect sync
          </div>
        </div>
      </div>
    </section>
  );
}
