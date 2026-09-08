"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Download() {
  return (
    <section id="download" className="relative z-30 scroll-mt-24 bg-beige px-6 py-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="glass-card mx-auto max-w-3xl relative overflow-hidden rounded-[2rem] p-12 text-center md:p-20"
      >
        <Image
          src="/logo.png"
          alt="TuniCash"
          width={80}
          height={80}
          className="mx-auto mb-8 animate-float rounded-3xl"
        />

        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Join <span className="text-brand">TuniCash</span> today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[#51695f]">
          Download the app and take control of your money. Free to start,
          delightful to use.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="flex items-center gap-3 rounded-2xl bg-brand-dark px-6 py-3 text-white transition-transform hover:scale-105"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-white/70">Download on the</div>
              <div className="font-semibold">App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-2xl bg-brand-dark px-6 py-3 text-white transition-transform hover:scale-105"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5V3.5c0-.85.65-1.3 1.2-.98l14.4 8.5c.56.33.56.93 0 1.26L4.2 20.78c-.55.32-1.2-.13-1.2-.28z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-white/70">Get it on</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}