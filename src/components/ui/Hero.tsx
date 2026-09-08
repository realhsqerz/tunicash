"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative z-30 flex min-h-screen items-center overflow-hidden px-6 md:px-16">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-beige px-4 py-1.5 text-xs font-medium text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Now on iOS &amp; Android
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Money, <span className="text-brand">simplified.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg text-[#51695f] md:text-xl"
          >
            TuniCash brings your payments, banking, and digital wallet together in
            one gorgeous app. Send money, pay bills, and manage your finances — all
            from the palm of your hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#download"
              className="rounded-full bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark"
            >
              Get TuniCash Free
            </a>
            <a
              href="#features"
              className="rounded-full border border-brand/30 px-8 py-4 text-base font-semibold text-brand transition-colors hover:border-brand hover:bg-beige/60"
            >
              Explore Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center gap-2 text-xs text-[#7a8f86]"
          >
            <span>Scroll to see the magic</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block"
            >
              ↓
            </motion.span>
          </motion.div>
        </div>

        {/* Right column — the fixed iPhone floats over this area */}
        <div className="hidden md:block" aria-hidden />
      </div>
    </section>
  );
}