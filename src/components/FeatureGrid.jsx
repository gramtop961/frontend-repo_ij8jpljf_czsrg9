import React from 'react';
import { Heart, Mic, MessageCircle, Play, Shield } from 'lucide-react';

const features = [
  {
    icon: Play,
    title: 'Perfectly Synced Playback',
    desc: 'Hit play once. Videos stay in lockstep for both of you—skips and pauses included.',
    color: 'from-indigo-500 to-sky-500',
  },
  {
    icon: Mic,
    title: 'Crystal‑clear Voice',
    desc: 'Talk naturally with low‑latency audio so it feels like you’re on the same couch.',
    color: 'from-pink-500 to-fuchsia-500',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat & Reactions',
    desc: 'Type sweet nothings or drop heart reactions without missing a scene.',
    color: 'from-rose-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Private Love Rooms',
    desc: 'End‑to‑end encrypted rooms that are invite‑only—just you and your person.',
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative w-full bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 p-2">
            <Heart className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Made for couples, crafted with love</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-pink-400/40 hover:bg-white/10">
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${f.color} p-3 text-white shadow-lg shadow-black/20`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/80">{f.desc}</p>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink-500/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
