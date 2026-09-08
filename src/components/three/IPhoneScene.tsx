"use client";

import { useRef } from "react";
import { useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

// The GLB model is authored at real-world scale (~0.16 units tall),
// so we scale it up dramatically to fill the viewport.
const MODEL_SCALE = 30;

// The model's screen faces -z, so a base rotation of PI turns it screen-facing
// toward the default camera (which sits at +z).
const SCREEN_FACING = Math.PI;

// The phone stays on the right side; its motion scrolls cleanly in place
// (gentle rock + vertical drift) instead of jumping between sides.
const X_POS = 3.2;

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

interface IPhoneModelProps {
  scrollProgress: number;
  coverPoint: number;
}

function IPhoneModel({ scrollProgress, coverPoint }: IPhoneModelProps) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/iphone.glb");
  const logoTexture = useTexture("/logo.png");

  // Build a bright screen texture: the TuniCash logo on a clean white sheet.
  const screenTexture = useMemo(() => {
    const img = logoTexture?.image as HTMLImageElement | undefined;
    if (!img || typeof document === "undefined") return null;

    const W = 960;
    const H = 2080;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);

    const size = Math.round(Math.min(W, H) * 0.5);

    // The model's display renders the canvas rotated 180°, so we pre-rotate
    // the drawn content to show the logo right-side up on the phone screen.
    ctx.save();
    ctx.translate(W, H);
    ctx.rotate(Math.PI);
    ctx.drawImage(img, Math.round((W - size) / 2), Math.round((H - size) / 2), size, size);
    ctx.restore();

    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [logoTexture]);

  // Emit the screen texture on the display materials so the screen is bright
  // and shows the logo regardless of the model's baked-in wallpaper.
  useEffect(() => {
    if (!screenTexture) return;

    const apply = (mat: THREE.Material) => {
      if (mat.name === "OLED" || mat.name === "OLED off") {
        const m = mat as THREE.MeshStandardMaterial;
        m.map = screenTexture;
        m.emissiveMap = screenTexture;
        m.color = new THREE.Color("#ffffff");
        m.emissive = new THREE.Color("#ffffff");
        m.emissiveIntensity = 1.1;
        m.needsUpdate = true;
      }
    };

    scene.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        const mat = (o as THREE.Mesh).material;
        if (Array.isArray(mat)) mat.forEach(apply);
        else apply(mat);
      }
    });
  }, [scene, screenTexture]);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    const p = clamp(scrollProgress, 0, 1);

    // The phone's turn finishes exactly when the Service section covers it,
    // so scale scroll progress against the measured coverage point.
    const pSpin = clamp(p / Math.max(0.01, coverPoint), 0, 1);

    // Gentle idle float
    const idleBob = Math.sin(t * 0.8) * 0.08;
    const idleSway = Math.sin(t * 0.4) * 0.05;

    // Scroll-driven motion: the phone starts facing the screen (viewer) and,
    // rotating a clean, eased 180° to finish facing its back just as the
    // Service section rolls over it and it fades away. It stays on the right
    // with a subtle rock and vertical drift — no side-hopping.
    const spin = 0.5 - 0.5 * Math.cos(pSpin * Math.PI);
    const rock = 0.08 * Math.sin(pSpin * Math.PI * 2);
    const tilt = 0.05 * Math.sin(pSpin * Math.PI * 1.5);
    const yDrift = 0.35 * Math.sin(pSpin * Math.PI);

    group.current.rotation.y = SCREEN_FACING + spin * Math.PI + idleSway + rock;
    group.current.rotation.x = 0.06 + tilt;
    group.current.position.x = X_POS + Math.sin(t * 0.5) * 0.03;
    group.current.position.y = idleBob + yDrift;
    group.current.scale.setScalar(
      MODEL_SCALE * (1 + pSpin * 0.06) * (1 + 0.02 * Math.sin(t * 0.6))
    );
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

interface IPhoneSceneProps {
  scrollProgress: number;
  coverPoint?: number;
}

export function IPhoneScene({ scrollProgress, coverPoint = 1 }: IPhoneSceneProps) {
  return (
    <>
      {/* Clean studio lighting for the light theme */}
      <ambientLight intensity={1.4} />
      <hemisphereLight intensity={0.6} color="#ffffff" groundColor="#dce8d0" />
      <directionalLight position={[8, 10, 10]} intensity={1.8} />
      <directionalLight position={[-6, -4, -6]} intensity={0.6} color="#eef2e8" />
      <spotLight
        position={[0, 12, 12]}
        intensity={2.4}
        angle={0.55}
        penumbra={1}
        color="#ffffff"
      />
      <pointLight position={[-8, 5, 6]} intensity={0.8} color="#f2e8d0" />
      <pointLight position={[8, -4, 5]} intensity={0.6} color="#c98a2d" />

      <IPhoneModel scrollProgress={scrollProgress} coverPoint={coverPoint} />
    </>
  );
}

export function preloadIPhone() {
  useGLTF.preload("/iphone.glb");
}