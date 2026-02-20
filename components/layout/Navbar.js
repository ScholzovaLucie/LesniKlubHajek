"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetPath } from "../../lib/assetPath";

const T = {
  dark: "#2f4a32",
  mid: "#4d6849",
  pale: "#d7e4c9",
  white: "#ffffff",
};

const NAV_ITEMS = [
  { href: "/", label: "Úvod" },
  { href: "/o-nas", label: "O nás" },
  { href: "/lide", label: "Lidé" },
  { href: "/fotogalerie", label: "Fotogalerie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNavHref, setHoveredNavHref] = useState(null);
  const [hoveredMobileHref, setHoveredMobileHref] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solidNav = useMemo(
    () => pathname !== "/" || scrolled,
    [pathname, scrolled]
  );
  const isActivePath = (href) =>
    pathname === href || (href !== "/" && pathname?.startsWith(`${href}/`));

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: "all 0.3s",
          background: solidNav ? "rgba(30,58,10,0.96)" : "transparent",
          backdropFilter: solidNav ? "blur(14px)" : "none",
          boxShadow: solidNav ? "0 2px 24px rgba(0,0,0,0.15)" : "none",
          padding: solidNav ? "0.55rem 1rem" : "0.95rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.75)",
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.22)",
              }}
            >
              <Image
                src={assetPath("/assets/hajek_logo.png")}
                alt="Logo Lesní klub Hájek"
                width={42}
                height={42}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: 3,
                }}
              />
            </div>
            <div>
              <div
                style={{
                  color: T.white,
                  fontWeight: 900,
                  fontSize: "0.95rem",
                  lineHeight: 1.1,
                }}
              >
                Lesní klub
              </div>
              <div
                style={{
                  color: T.pale,
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "1px",
                }}
              >
                Hájek
              </div>
            </div>
          </Link>

          <div
            className="lk-nav-links"
            style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
          >
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`lk-nav-link${active ? " lk-nav-link--active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => setHoveredNavHref(item.href)}
                  onMouseLeave={() => setHoveredNavHref(null)}
                  style={{
                    background:
                      active
                        ? T.pale
                        : hoveredNavHref === item.href
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                    color: active ? T.dark : T.white,
                    border: `2px solid ${
                      active
                        ? T.pale
                        : hoveredNavHref === item.href
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(255,255,255,0.18)"
                    }`,
                    padding: "0.38rem 0.9rem",
                    borderRadius: 50,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    transition: "all 0.2s",
                    transform:
                      hoveredNavHref === item.href && !active
                        ? "translateY(-1px)"
                        : "none",
                    boxShadow: active
                      ? "0 8px 20px rgba(0,0,0,0.18)"
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="https://www.facebook.com/profile.php?id=100094171486836"
              target="_blank"
              rel="noreferrer"
              style={{
                marginLeft: 6,
                background: "rgba(255,255,255,0.1)",
                color: T.white,
                border: "2px solid rgba(255,255,255,0.18)",
                padding: "0.38rem 0.85rem",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: "0.75rem",
                transition: "all 0.2s",
              }}
            >
              FB
            </a>
            <a
              href="https://www.instagram.com/lesni_klub_hajek/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: T.white,
                border: "2px solid rgba(255,255,255,0.18)",
                padding: "0.38rem 0.85rem",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: "0.75rem",
                transition: "all 0.2s",
              }}
            >
              IG
            </a>
          </div>

          <button
            className="lk-mobile-toggle"
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.45)",
              background: "rgba(255,255,255,0.12)",
              color: T.white,
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.36)",
            zIndex: 240,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            className="lk-mobile-panel"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 320,
              height: "100%",
              background: `linear-gradient(165deg, ${T.dark} 0%, ${T.mid} 100%)`,
              padding: "1rem",
              color: T.white,
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.4rem",
              }}
            >
              <strong style={{ fontSize: "1rem" }}>Navigace</strong>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: T.white,
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`lk-mobile-nav-link${
                    active ? " lk-mobile-nav-link--active" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => setHoveredMobileHref(item.href)}
                  onMouseLeave={() => setHoveredMobileHref(null)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    border: active
                      ? `2px solid ${T.pale}`
                      : "1px solid rgba(255,255,255,0.25)",
                    background: active
                      ? T.pale
                      : hoveredMobileHref === item.href
                      ? "rgba(255,255,255,0.16)"
                      : "rgba(255,255,255,0.08)",
                    color: active ? T.dark : T.white,
                    borderRadius: 12,
                    padding: "0.75rem 0.8rem",
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    transform:
                      hoveredMobileHref === item.href && !active
                        ? "translateX(2px)"
                        : "none",
                    boxShadow: active
                      ? "0 8px 20px rgba(0,0,0,0.22)"
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <div style={{ marginTop: "0.6rem", display: "flex", gap: "0.6rem" }}>
              <a
                href="https://www.facebook.com/profile.php?id=100094171486836"
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "0.65rem 0.8rem",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  color: T.white,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/lesni_klub_hajek/"
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "0.65rem 0.8rem",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  color: T.white,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
