"use client";

import { useEffect, useMemo, useState } from "react";

type SectionItem = {
  id: string;
  label: string;
};

export function SectionDots({ sections }: { sections: SectionItem[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  const validSections = useMemo(
    () => sections.filter((section) => section.id.trim().length > 0),
    [sections]
  );

  useEffect(() => {
    if (!validSections.length) return;

    let rafId = 0;

    const updateActive = () => {
      const middleY = window.innerHeight * 0.5;
      let bestId = validSections[0].id;
      let bestDistance = Number.POSITIVE_INFINITY;

      validSections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - middleY);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = section.id;
        }
      });

      setActiveId(bestId);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActive();
      });
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [validSections]);

  if (!validSections.length) return null;

  return (
    <nav
      aria-label="Navegação por seções"
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:flex"
    >
      <ul className="flex flex-col items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-2 py-3 shadow-lg backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60">
        {validSections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-label={section.label}
                title={section.label}
                className={`block h-3 w-3 rounded-full border transition ${
                  isActive
                    ? "scale-125 border-emerald-300 bg-emerald-500 dark:border-emerald-200 dark:bg-emerald-400"
                    : "border-slate-400 bg-slate-200 hover:bg-slate-300 dark:border-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
