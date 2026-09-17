import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f2e8d0",
          color: "#1c2f28",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "22px",
              backgroundColor: "#1f7a5c",
              color: "#ffffff",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            T$
          </div>
          <div style={{ display: "flex", fontSize: "44px", fontWeight: 800, letterSpacing: -1 }}>
            Tuni<span style={{ color: "#1f7a5c" }}>Cash</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "88px",
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Money, <span style={{ color: "#1f7a5c", marginLeft: "18px" }}>simplified.</span>
          </div>
          <div
            style={{
              marginTop: "28px",
              fontSize: "36px",
              color: "#51695f",
              lineHeight: 1.4,
              maxWidth: "880px",
            }}
          >
            Payments, banking, and your digital wallet — all in one gorgeous app.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "26px",
            fontWeight: 600,
            color: "#14503c",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "999px",
              backgroundColor: "rgba(31, 122, 92, 0.14)",
              padding: "14px 26px",
            }}
          >
            Send money
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "999px",
              backgroundColor: "rgba(201, 138, 45, 0.18)",
              padding: "14px 26px",
            }}
          >
            Pay bills
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "999px",
              backgroundColor: "rgba(31, 122, 92, 0.14)",
              padding: "14px 26px",
            }}
          >
            Digital wallet
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}