"use client";
import { useEffect, useState } from "react";
import { ticket, profile } from "@/data/content";

const checks = ["Requirements gathered", "Features tested", "Bugs reported", "Team coordinated"];
const status = [
  { label: "Open", cls: "bg-bad" },
  { label: "Testing", cls: "bg-acc" },
  { label: "Resolved", cls: "bg-good" },
];

export default function Ticket() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(0);

  useEffect(() => {
    if (step !== 1) return;
    const t = setTimeout(() => (done >= checks.length ? setStep(2) : setDone((d) => d + 1)), done >= checks.length ? 500 : 650);
    return () => clearTimeout(t);
  }, [step, done]);

  const run = () => { setDone(0); setStep(1); };
  const reset = () => { setDone(0); setStep(0); };

  return (
    <aside aria-label="Candidate ticket" className="rotate-1 rounded-lg border-2 border-ink bg-card p-5 shadow-[8px_8px_0_var(--acc)] transition-transform hover:rotate-0">
      <div className="mb-4 flex items-center justify-between border-b border-dashed border-line pb-3 text-sm">
        <span className="font-semibold">HZ-001</span>
        <span className="flex items-center gap-2 font-medium" aria-live="polite">
          <span className={`h-2.5 w-2.5 rounded-full ${status[step].cls} ${step === 0 ? "pulse" : ""}`} />
          {status[step].label}
        </span>
      </div>

      <dl className="space-y-3 text-sm">
        {ticket.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[88px_1fr] gap-3">
            <dt className="text-mute">{k}</dt>
            <dd className="font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      {step > 0 && (
        <ul className="mt-5 space-y-1.5 border-t border-dashed border-line pt-4 text-sm">
          {checks.slice(0, done).map((c) => (
            <li key={c} className="pop flex items-center gap-2"><span className="text-good" aria-hidden>✓</span>{c}</li>
          ))}
        </ul>
      )}

      {step === 2 && (
        <p className="pop mt-4 rounded bg-soft p-3 text-sm font-medium">
          Resolution: ready to join your team.{" "}
          <a className="text-acc underline underline-offset-4" href={`mailto:${profile.email}`}>Email me</a>
        </p>
      )}

      <div className="mt-5">
        {step === 0 && <button onClick={run} className="w-full rounded-md bg-ink px-4 py-2.5 font-medium text-bg transition hover:opacity-85">Run tests</button>}
        {step === 1 && <button disabled className="w-full rounded-md border border-line px-4 py-2.5 text-mute">Running…</button>}
        {step === 2 && <button onClick={reset} className="w-full rounded-md border border-line px-4 py-2.5 font-medium transition hover:border-acc">Reset ticket</button>}
      </div>
    </aside>
  );
}
