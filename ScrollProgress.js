"use client";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      if (bar.current) bar.current.style.transform = `scaleX(${h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)})`;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div ref={bar} aria-hidden className="prog" />;
}
