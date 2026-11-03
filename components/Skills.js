"use client";
import { useState } from "react";

export default function Skills({ groups }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2">
        {groups.map(([name], i) => (
          <button key={name} role="tab" aria-selected={i === active} onClick={() => setActive(i)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${i === active ? "border-acc bg-acc text-bg" : "border-line hover:border-acc"}`}>
            {name}
          </button>
        ))}
      </div>
      <ul key={active} className="mt-6 flex flex-wrap gap-3">
        {groups[active][1].map((s) => (
          <li key={s} className="pop rounded-md border-2 border-ink bg-card px-4 py-2 font-display text-lg font-semibold">{s}</li>
        ))}
      </ul>
    </div>
  );
}
