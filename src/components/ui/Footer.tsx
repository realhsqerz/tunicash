"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-30 border-t border-brand/10 bg-background px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="TuniCash"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold tracking-tight text-foreground">
                Tuni<span className="text-brand">Cash</span>
              </span>
            </a>
            <p className="max-w-xs text-center text-sm text-[#7a8f86] md:text-left">
              Smart money, simplified. Bringing bank-grade finance to everyone.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 text-sm">
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Product</h4>
              <ul className="space-y-3 text-[#51695f]">
                <li><a href="#features" className="transition-colors hover:text-brand">Features</a></li>
                <li><a href="#services" className="transition-colors hover:text-brand">How it works</a></li>
                <li><a href="#download" className="transition-colors hover:text-brand">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Company</h4>
              <ul className="space-y-3 text-[#51695f]">
                <li><a href="#" className="transition-colors hover:text-brand">About</a></li>
                <li><a href="#" className="transition-colors hover:text-brand">Contact</a></li>
                <li><a href="#" className="transition-colors hover:text-brand">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand/10 pt-8 text-sm text-[#7a8f86] md:flex-row">
          <p>© {new Date().getFullYear()} TuniCash. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-brand">Privacy</a>
            <a href="#" className="transition-colors hover:text-brand">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}