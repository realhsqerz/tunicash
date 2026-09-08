"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Send & Receive Money",
    description:
      "Transfer funds instantly to anyone — no bank account required. QR codes make it effortless to pay in seconds.",
    icon: "⇄",
    tint: "bg-brand-light/40",
  },
  {
    title: "Digital Wallet",
    description:
      "Store your cards, loyalty programs, and rewards in a beautifully organized wallet that lives in your pocket.",
    icon: "▰",
    tint: "bg-gold/20",
  },
  {
    title: "Banking Services",
    description:
      "Open an account in minutes, pay your bills, and track your spending with rich insights — all from one app.",
    icon: "◈",
    tint: "bg-beige",
  },
];

export function Features() {
  return (
    <section id="features" className="relative z-30 scroll-mt-24 bg-beige px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-brand">
            Everything in one place
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            One app. <span className="text-brand">Endless possibilities.</span>
          </h2>
          <p className="mt-4 text-lg text-[#51695f]">
            Stop juggling multiple apps. TuniCash brings your entire financial
            life together with a clean, intuitive experience.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:border-brand/40 hover:shadow-[0_20px_60px_rgba(31,122,92,0.12)]"
            >
              <div className="relative">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${f.tint} text-2xl text-brand-dark`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-[#51695f]">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}