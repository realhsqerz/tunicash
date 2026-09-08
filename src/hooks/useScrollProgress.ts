"use client";

import { useEffect, useState } from "react";

/**
 * Returns a normalized scroll progress value 0 → 1
 * across the height of the given section, or the whole page if no ref.
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(
  containerRef?: React.RefObject<T | null>
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const el = containerRef?.current;
      let scrollTop = 0;
      let scrollHeight = 0;

      if (el) {
        scrollTop = el.scrollTop;
        scrollHeight = el.scrollHeight - el.clientHeight;
      } else {
        scrollTop = window.scrollY;
        scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      }

      const p = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();

    const el = containerRef?.current;
    if (el) {
      el.addEventListener("scroll", onScroll, { passive: true });
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      const target = containerRef?.current;
      if (target) {
        target.removeEventListener("scroll", onScroll);
      } else {
        window.removeEventListener("scroll", onScroll);
      }
      window.removeEventListener("resize", onScroll);
    };
  }, [containerRef]);

  return progress;
}
