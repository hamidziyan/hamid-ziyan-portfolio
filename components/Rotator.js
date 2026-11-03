"use client";
import { useEffect, useState } from "react";

export default function Rotator({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-1.5 text-sm font-medium">
      <span className="text-mute">Open to</span>
      <span key={i} className="pop font-semibold text-acc">{words[i]}</span>
    </p>
  );
}
