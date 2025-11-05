import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0b0b12] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2 text-white/80">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-500">
            <Heart className="h-4 w-4" />
          </span>
          <span className="font-semibold">Loveroom</span>
          <span className="text-white/50">© {new Date().getFullYear()}</span>
        </div>
        <div className="text-sm text-white/60">
          Built with care for couples in long‑distance relationships.
        </div>
      </div>
    </footer>
  );
}
