"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Sign up in seconds with just your phone number. No paperwork, no waiting.",
  },
  {
    number: "02",
    title: "Add money to your wallet",
    description:
      "Top up instantly from your bank card, mobile money, or cash at any partner.",
  },
  {
    number: "03",
    title: "Pay, send & manage",
    description:
      "Send money to friends, pay bills, shop with QR codes, and watch your money grow with insights.",
  },
];

const highlights = [
  { stat: "<1s", label: "Average transfer time" },
  { stat: "0", label: "Hidden fees" },
  { stat: "24/7", label: "Support, always" },
  { stat: "99.9%", label: "Uptime reliability" },
];

export function HowItWorks() {
  return (
    <section id="services" className="relative z-30 bg-background px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-brand">
            How it works
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Up and running <span className="text-brand">in minutes</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="text-6xl font-bold text-brand/30">
                {s.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-[#51695f]">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="glass-card mt-16 grid grid-cols-2 gap-8 rounded-3xl p-10 md:grid-cols-4"
        >
          {highlights.map((h, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-gold md:text-4xl">
                {h.stat}
              </div>
              <div className="mt-2 text-sm text-[#51695f]">{h.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}