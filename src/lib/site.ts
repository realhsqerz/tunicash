const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "https://tunicash.vercel.app");

export const SITE_NAME = "TuniCash";
export const SITE_TITLE = "TuniCash — Smart Money, Simplified";
export const SITE_DESCRIPTION =
  "TuniCash is the all-in-one digital finance app for payments, banking, and your digital wallet. Send money, pay bills, and manage your finances from one place.";
export const SITE_TAGLINE = "Smart money, simplified.";