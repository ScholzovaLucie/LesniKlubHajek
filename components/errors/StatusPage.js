import Link from "next/link";
import Image from "next/image";
import { assetPath } from "../../lib/assetPath";

export default function StatusPage({
  code,
  title,
  message,
  primary,
  secondary,
  children,
}) {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 180px)",
        display: "grid",
        placeItems: "center",
        padding: "7rem 1rem 3rem",
        background:
          "radial-gradient(80% 70% at 50% 10%, rgba(212,228,201,0.65), transparent 70%), #f3f1e8",
      }}
    >
      <section
        style={{
          width: "min(760px, 100%)",
          background: "#ffffff",
          border: "1px solid rgba(77,104,73,0.18)",
          borderRadius: 24,
          boxShadow: "0 18px 40px rgba(35,55,30,0.12)",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            margin: "0 auto 1rem",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(47,74,50,0.22)",
            background: "#fff",
          }}
        >
          <Image
            src={assetPath("/assets/hajek_logo.png")}
            alt="Lesní klub Hájek"
            width={64}
            height={64}
            style={{ width: "100%", height: "100%", objectFit: "contain", padding: 6 }}
          />
        </div>

        <div style={{ color: "#6f8f5f", fontWeight: 900, letterSpacing: "0.06em" }}>
          {code}
        </div>
        <h1 style={{ color: "#2f4a32", margin: "0.35rem 0 0.75rem", fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
          {title}
        </h1>
        <p style={{ color: "#5f6f5f", lineHeight: 1.7, margin: "0 auto", maxWidth: 560 }}>
          {message}
        </p>

        {children}

        <div style={{ marginTop: "1.4rem", display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          {primary ? (
            <Link
              href={primary.href}
              style={{
                background: "linear-gradient(135deg, #2f4a32, #6f8f5f)",
                color: "#fff",
                borderRadius: 999,
                padding: "0.72rem 1.25rem",
                fontWeight: 800,
                border: "none",
              }}
            >
              {primary.label}
            </Link>
          ) : null}

          {secondary ? (
            <Link
              href={secondary.href}
              style={{
                background: "transparent",
                color: "#2f4a32",
                borderRadius: 999,
                padding: "0.68rem 1.2rem",
                fontWeight: 800,
                border: "2px solid rgba(47,74,50,0.35)",
              }}
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </section>
    </main>
  );
}
