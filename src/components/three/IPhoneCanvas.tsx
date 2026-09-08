"use client";

import { useMemo, useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { IPhoneScene } from "./IPhoneScene";
import { useScrollProgress } from "@/hooks/useScrollProgress";

interface IPhoneCanvasProps {
  className?: string;
}

/**
 * A fixed full-screen Three.js canvas that renders an iPhone model
 * and animates it based on page scroll position for an Apple-style effect.
 *
 * The phone is visible from the top of the page, then slips under the
 * "Service" section (#services) — everything from that section onward sits
 * above the canvas in the z-order, so the phone is hidden once it arrives.
 */
export function IPhoneCanvas({ className = "" }: IPhoneCanvasProps) {
  const rawProgress = useScrollProgress();
  const smoothedRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [coverPoint, setCoverPoint] = useState(0.55);

  // Measure where the Service section starts (as a scroll fraction) so the
  // phone can rhythm its 180° turn to finish exactly as that section covers it.
  useEffect(() => {
    const measure = () => {
      const el = document.querySelector("#features");
      const vh = window.innerHeight;
      const total = document.documentElement.scrollHeight - vh;
      if (!el || total <= 0) return;
      const absTop = el.getBoundingClientRect().top + window.scrollY;
      setCoverPoint(Math.min(0.95, Math.max(0.15, (absTop - vh * 0.25) / total)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Smoothly interpolate scroll progress for buttery Apple-like motion
  useEffect(() => {
    let rafId = 0;
    const target = rawProgress;

    const tick = () => {
      const current = smoothedRef.current;
      const diff = target - current;
      // Easing — move towards target
      const next = current + diff * 0.08;
      if (Math.abs(diff) > 0.0005) {
        smoothedRef.current = next;
        setProgress(next);
        rafId = requestAnimationFrame(tick);
      } else {
        smoothedRef.current = target;
        setProgress(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [rawProgress]);

  const canvasProps = useMemo(
    () => ({
      camera: { position: [0, 0, 9] as [number, number, number], fov: 45, near: 0.1, far: 200 },
      dpr: [1, 2] as [number, number],
      gl: { antialias: true, alpha: true, preserveDrawingBuffer: true },
    }),
    []
  );

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-20 ${className}`}
      aria-hidden
    >
      <Canvas flat {...canvasProps}>
        <Suspense fallback={null}>
          <IPhoneScene scrollProgress={progress} coverPoint={coverPoint} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
