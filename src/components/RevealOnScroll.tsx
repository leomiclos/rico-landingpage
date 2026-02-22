"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    let rafId = 0;
    const clamp = (value: number, min: number, max: number) =>
      Math.min(max, Math.max(min, value));

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;

      const start = viewportHeight * 0.95;
      const end = viewportHeight * 0.58;
      const raw = (start - rect.top) / (start - end);

      const stagger = clamp(delayMs / 1200, 0, 0.45);
      const normalized = clamp((raw - stagger) / (1 - stagger), 0, 1);

      setProgress((prev) => {
        const next = Math.max(prev, normalized);
        return Math.abs(prev - next) > 0.01 ? next : prev;
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={cn("reveal-card", className)}
      style={
        {
          "--reveal-progress": progress,
          "--reveal-opacity": progress,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
