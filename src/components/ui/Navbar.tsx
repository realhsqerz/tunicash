"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-brand/10 py-3" : "py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="TuniCash logo"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">Tuni<span className="text-brand">Cash</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#51695f] transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
        >
          Get the App
        </a>
      </nav>
    </header>
  );
}
