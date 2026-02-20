"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const T = {
  dark: "#2f4a32",
  mid: "#4d6849",
  bright: "#6f8f5f",
  light: "#b6c8a8",
  pale: "#d7e4c9",
  bg: "#f3f1e8",
  bgAlt: "#e9e5d8",
  white: "#ffffff",
  text: "#2c3a2d",
  textSoft: "#5f6f5f",
  accent: "#b87947",
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Nunito', sans-serif; background: #f3f1e8; color: #2c3a2d; }
  a { text-decoration: none; color: inherit; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up  { animation: fadeUp 0.55s ease both; }
  .fade-up2 { animation: fadeUp 0.55s 0.1s ease both; }
  .fade-up3 { animation: fadeUp 0.55s 0.2s ease both; }
  .hlift { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
  .hlift:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(60,100,20,0.18) !important; }
  .lk-mobile-toggle { display: none; }
  input, textarea { font-family: 'Nunito', sans-serif; }
  input:focus, textarea:focus { outline: none; border-color: #6f8f5f !important; box-shadow: 0 0 0 3px rgba(111,143,95,0.18); }
  button:hover { opacity: 0.9; }

  @media (max-width: 1024px) {
    .lk-grid-2 { grid-template-columns: 1fr !important; }
    .lk-grid-3 { grid-template-columns: 1fr 1fr !important; }
    .lk-grid-4 { grid-template-columns: 1fr 1fr !important; }
    .lk-footer-grid { grid-template-columns: 1fr 1fr !important; }
  }

  @media (max-width: 700px) {
    body { overflow-x: hidden; }
    .lk-nav-links { display: none !important; }
    .lk-mobile-toggle { display: inline-flex !important; }
    .lk-mobile-panel { width: min(90vw, 340px) !important; }
    .lk-grid-3 { grid-template-columns: 1fr !important; }
    .lk-grid-4 { grid-template-columns: 1fr !important; }
    .lk-footer-grid { grid-template-columns: 1fr !important; }
    .lk-hero-actions { flex-direction: column; align-items: center; }
    .lk-card { padding: 1.25rem !important; border-radius: 16px !important; }
    .lk-stats { flex-direction: column; gap: 0.7rem !important; }
    .lk-main { overflow-x: hidden; }
    .lk-hero-home { padding-top: 118px !important; min-height: auto !important; padding-bottom: 2rem !important; }
    .lk-home-content { max-width: 96vw !important; padding: 0 1rem !important; }
    .lk-hero-badge {
      font-size: 0.62rem !important;
      letter-spacing: 0.14em !important;
      padding: 0.38rem 0.8rem !important;
      display: inline-block;
      max-width: calc(100vw - 130px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .lk-hero-title { font-size: clamp(2.3rem, 12vw, 3.5rem) !important; line-height: 1.02 !important; }
    .lk-hero-text { font-size: 0.9rem !important; line-height: 1.7 !important; margin-bottom: 1.6rem !important; }
    .lk-hero-chips { gap: 0.55rem !important; }
    .lk-hero-chip { font-size: 0.74rem !important; padding: 0.52rem 0.72rem !important; }
    .lk-hero-bg { opacity: 0.17 !important; align-items: flex-end !important; }
    .lk-hero-bg-img { width: min(980px, 170vw) !important; }
  }
`;

const PAGES = [
  { id: "uvod", label: "Úvod" },
  { id: "onas", label: "O nás" },
  { id: "lide", label: "Lidé" },
  { id: "cenik", label: "Ceník" },
  { id: "galerie", label: "Fotogalerie" },
  { id: "kontakt", label: "Kontakt" },
];

const QUICK_STATS = [
  { n: "4", l: "dny / týden" },
  { n: "8-16", l: "provozní doba" },
  { n: "1h", l: "angličtiny" },
];

function SLabel({ children }) {
  return (
    <div
      style={{
        color: T.bright,
        fontWeight: 800,
        fontSize: "0.78rem",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        marginBottom: "0.6rem",
      }}
    >
      {children}
    </div>
  );
}

function STitle({ children, light }) {
  return (
    <h2
      style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
        fontWeight: 900,
        color: light ? T.white : T.dark,
        letterSpacing: "-0.5px",
        lineHeight: 1.1,
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  );
}

function Card({ children, style, className }) {
  return (
    <div
      className={`lk-card${className ? ` ${className}` : ""}`}
      style={{
        background: T.white,
        borderRadius: 24,
        boxShadow: "0 4px 24px rgba(60,100,20,0.08)",
        border: "1px solid rgba(106,176,48,0.14)",
        padding: "2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function GreenBtn({ children, onClick, outline, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "inherit",
        fontWeight: 800,
        fontSize: "0.92rem",
        padding: "0.78rem 1.9rem",
        borderRadius: 50,
        cursor: "pointer",
        border: outline ? "2px solid rgba(255,255,255,0.45)" : "none",
        background: outline ? "transparent" : T.pale,
        color: outline ? T.white : T.dark,
        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        transition: "all 0.2s",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function StatsStrip({ soft }) {
  return (
    <div
      className="lk-stats"
      style={{
        display: "flex",
        gap: "1rem",
        textAlign: "center",
        background: soft ? "rgba(255,255,255,0.08)" : T.white,
        borderRadius: 16,
        padding: "1rem 1.2rem",
        border: soft
          ? "1px solid rgba(255,255,255,0.16)"
          : "1px solid rgba(47,74,50,0.1)",
      }}
    >
      {QUICK_STATS.map((s) => (
        <div key={s.l} style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.9rem",
              color: soft ? T.pale : T.bright,
            }}
          >
            {s.n}
          </div>
          <div
            style={{
              color: soft ? "rgba(255,255,255,0.78)" : T.textSoft,
              fontSize: "0.77rem",
              fontWeight: 700,
              marginTop: 2,
            }}
          >
            {s.l}
          </div>
        </div>
      ))}
    </div>
  );
}

function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navigateTo = (id) => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: "all 0.35s",
          background: scrolled ? "rgba(30,58,10,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.15)" : "none",
          padding: scrolled ? "0.55rem 1rem" : "0.95rem 1rem",
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
          <div
            onClick={() => navigateTo("uvod")}
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
                src="/assets/hajek_logo.png"
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
                  fontFamily: "'Nunito', sans-serif",
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
          </div>

          <div
            className="lk-nav-links"
            style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
          >
            {PAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => navigateTo(p.id)}
                style={{
                  background: page === p.id ? T.pale : "transparent",
                  color: page === p.id ? T.dark : T.white,
                  border: `2px solid ${
                    page === p.id ? T.pale : "rgba(255,255,255,0.18)"
                  }`,
                  padding: "0.38rem 0.9rem",
                  borderRadius: 50,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  transition: "all 0.2s",
                }}
              >
                {p.label}
              </button>
            ))}
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
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "0.75rem",
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
                fontFamily: "inherit",
                fontWeight: 700,
                fontSize: "0.75rem",
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
              background: "linear-gradient(165deg, #2f4a32 0%, #4d6849 100%)",
              padding: "1rem",
              color: T.white,
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
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
            {PAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => navigateTo(p.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  border: page === p.id ? `2px solid ${T.pale}` : "1px solid rgba(255,255,255,0.25)",
                  background: page === p.id ? T.pale : "rgba(255,255,255,0.08)",
                  color: page === p.id ? T.dark : T.white,
                  borderRadius: 12,
                  padding: "0.75rem 0.8rem",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                }}
              >
                {p.label}
              </button>
            ))}
            <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.6rem" }}>
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

function HeroBar({ label, title, sub }) {
  return (
    <div
      style={{
        background: `linear-gradient(155deg, ${T.dark} 0%, ${T.mid} 55%, ${T.bright} 100%)`,
        paddingTop: 120,
        paddingBottom: 0,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          paddingBottom: "3.5rem",
        }}
      >
        <SLabel>{label}</SLabel>
        <STitle light>{title}</STitle>
        {sub && (
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}

function PageUvod({ setPage }) {
  return (
    <div>
      <div
        className="lk-hero-home"
        style={{
          minHeight: "100vh",
          background: `linear-gradient(150deg, ${T.dark} 0%, ${T.mid} 42%, ${T.bright} 82%, #8da786 100%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 10,
        }}
      >
        {[
          { s: 380, t: -100, l: -120, o: 0.05 },
          { s: 240, t: 50, r: -50, o: 0.06 },
          { s: 160, b: 90, l: "12%", o: 0.04 },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: c.s,
              height: c.s,
              borderRadius: "50%",
              background: "#fff",
              opacity: c.o,
              top: c.t,
              left: c.l,
              right: c.r,
              bottom: c.b,
            }}
          />
        ))}
        <div
          className="lk-hero-bg"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.24,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/assets/deti_u_stromu.png"
            alt=""
            aria-hidden="true"
            width={1400}
            height={900}
            className="lk-hero-bg-img"
            style={{
              width: "min(1240px, 140vw)",
              height: "auto",
              filter: "saturate(0.85) contrast(0.95)",
            }}
            priority
          />
        </div>

        <div
          className="lk-home-content"
          style={{
            textAlign: "center",
            zIndex: 2,
            padding: "0 2rem",
            maxWidth: 700,
          }}
        >
          <div className="fade-up" style={{ marginBottom: "1.2rem" }}>
            <span
              className="lk-hero-badge"
              style={{
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: T.white,
                padding: "0.45rem 1.3rem",
                borderRadius: 50,
                fontWeight: 800,
                fontSize: "0.78rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Přírodní mateřská škola
            </span>
          </div>
          <h1
            className="fade-up2 lk-hero-title"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              color: T.white,
              lineHeight: 0.95,
              textShadow: "0 4px 24px rgba(0,0,0,0.2)",
              marginBottom: "0.3rem",
            }}
          >
            Lesní klub
          </h1>
          <h2
            className="fade-up2 lk-hero-title"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              color: T.pale,
              lineHeight: 0.95,
              textShadow: "0 4px 24px rgba(0,0,0,0.2)",
              marginBottom: "2rem",
            }}
          >
            Hájek
          </h2>
          <p
            className="fade-up3 lk-hero-text"
            style={{
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              fontWeight: 600,
            }}
          >
            Děti patří do přírody. Učíme hrou, zvídavostí a svobodou - každý den
            venku, za každého počasí. Machov 58, okres Náchod.
          </p>
          <div
            className="fade-up3 lk-hero-actions"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            <GreenBtn
              onClick={() => {
                setPage("onas");
                window.scrollTo(0, 0);
              }}
            >
              Zjistit více &rarr;
            </GreenBtn>
            <GreenBtn
              outline
              onClick={() => {
                setPage("kontakt");
                window.scrollTo(0, 0);
              }}
            >
              Kontaktovat nás
            </GreenBtn>
          </div>
          <div
            className="lk-hero-chips"
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { img: "/assets/jezecek.png", t: "Každý den venku" },
              { img: "/assets/lyska_kid.png", t: "Přírodní učebna" },
              { img: "/assets/myval_kid.png", t: "Tvořivost a hra" },
              { img: "/assets/kralicek2.png", t: "Individuální přístup" },
            ].map((b) => (
              <div
                key={b.t}
                className="lk-hero-chip"
                style={{
                  background: "rgba(255,255,255,0.13)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 14,
                  padding: "0.7rem 1.1rem",
                  color: T.white,
                  fontWeight: 700,
                  fontSize: "0.83rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                <Image src={b.img} alt={b.t} width={26} height={26} /> {b.t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, ${T.dark}, ${T.mid})`,
          padding: "3.6rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SLabel>Aktivně nabíráme</SLabel>
          <STitle light>Přidej se k nám</STitle>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.85,
              maxWidth: 620,
              margin: "0 auto 1.6rem",
              fontSize: "1rem",
            }}
          >
            Hledáme rodiny, které sdílí naše hodnoty - respekt k přírodě,
            společenství a radost z prožívání. Momentálně budujeme zázemí a
            rozrůstáme se.
          </p>
          <div style={{ maxWidth: 520, margin: "0 auto 1.6rem" }}>
            <StatsStrip soft />
          </div>
          <GreenBtn
            onClick={() => {
              setPage("kontakt");
              window.scrollTo(0, 0);
            }}
          >
            Mám zájem o členství &rarr;
          </GreenBtn>
        </div>
      </div>

      <div style={{ background: T.bg, padding: "4.5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <SLabel>Aktuality</SLabel>
            <STitle>Co je u nás nového?</STitle>
          </div>
          <div
            className="lk-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            <Card>
              <div style={{ fontSize: "2.2rem", marginBottom: "0.8rem" }}>
                🎉
              </div>
              <h3
                style={{
                  color: T.dark,
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  marginBottom: "0.8rem",
                }}
              >
                Velký krok kupředu!
              </h3>
              <p
                style={{
                  color: T.textSoft,
                  lineHeight: 1.85,
                  fontSize: "0.93rem",
                  marginBottom: "1rem",
                }}
              >
                V novém roce vám všem přejeme hlavně hodně štěstí, zdraví a
                lásky. Nastal čas na zhodnocení roku minulého, který pro nás
                klub znamenal velký krok kupředu. Podařilo se nám, hlavně díky
                sponzorům, vybudovat domeček.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.55rem",
                  marginBottom: "1.3rem",
                }}
              >
                {[
                  {
                    e: "🏗",
                    t: "Díky nadačnímu fondu Zeměkvět jsme mohli pořídit stavební buňky.",
                  },
                  {
                    e: "🪑",
                    t: "Firma MycoMedica nám koupila skříňky, stolečky a židličky.",
                  },
                  {
                    e: "🟫",
                    t: "Firma Damap-podlahové krytiny nám darovala ohromný koberec.",
                  },
                  {
                    e: "🧸",
                    t: "Také nám lidé z okolí věnovali spoustu hraček.",
                  },
                ].map((item) => (
                  <div
                    key={item.t}
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{ fontSize: "1rem", flexShrink: 0, marginTop: 2 }}
                    >
                      {item.e}
                    </span>
                    <span
                      style={{
                        color: T.textSoft,
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.t}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: `linear-gradient(135deg, ${T.bgAlt}, #d7e1c8)`,
                  borderRadius: 14,
                  padding: "1.1rem",
                  borderLeft: `4px solid ${T.bright}`,
                }}
              >
                <p
                  style={{
                    color: T.dark,
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                  }}
                >
                  Náš úplně největší dík patří rodičům, kteří nám dali důvěru a
                  svěřili nám své děti. Vaše děti jsou našimi učiteli. 🌱
                </p>
              </div>
            </Card>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.3rem",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #d6dfc6, #bcc9a7)",
                  borderRadius: 22,
                  padding: "1rem",
                  textAlign: "center",
                  boxShadow: "0 8px 32px rgba(45,70,45,0.15)",
                }}
              >
                <div
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    marginBottom: "0.6rem",
                  }}
                >
                  <Image
                    src="/assets/zazemi.jpg"
                    alt="Nové zázemí pro děti"
                    width={1000}
                    height={650}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <p
                  style={{
                    color: T.dark,
                    fontWeight: 800,
                    fontSize: "1.05rem",
                    marginTop: "0.8rem",
                  }}
                >
                  Náš nový domeček
                </p>
                <p
                  style={{
                    color: T.textSoft,
                    fontSize: "0.82rem",
                    marginTop: "0.3rem",
                  }}
                >
                  Nové zázemí pro děti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, ${T.dark}, ${T.mid})`,
          padding: "5rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -60,
            top: -60,
            fontSize: "16rem",
            opacity: 0.04,
          }}
        >
          🌲
        </div>
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <SLabel>O nas</SLabel>
          <STitle light>Co je lesní klub?</STitle>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              marginBottom: "1.4rem",
            }}
          >
            Jsme lesní klub zaměřený na vzdělávání v přírodním prostředí. Děti u
            nás objevují svět přírody prostřednictvím her a průzkumu. Díky
            menšímu počtu dětí můžeme nabídnout individuální přístup.
          </p>
          <div style={{ marginBottom: "1.9rem" }}>
            <StatsStrip soft />
          </div>
          <GreenBtn
            onClick={() => {
              setPage("onas");
              window.scrollTo(0, 0);
            }}
          >
            Přečíst více &rarr;
          </GreenBtn>
        </div>
      </div>

      <div
        style={{ background: T.bg, padding: "4rem 2rem", textAlign: "center" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.8rem",
          }}
        >
          <div
            key="/assets/animals.png"
            style={{
              width: "min(520px, 92vw)",
            }}
          >
            <Image
              src="/assets/animals.png"
              alt="Zvířátko lesního klubu"
              width={900}
              height={220}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        <h3
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.7rem",
            color: T.dark,
            marginBottom: "0.8rem",
          }}
        >
          Zajímá vás náš lesní klub?
        </h3>
        <p
          style={{
            color: T.textSoft,
            marginBottom: "1.8rem",
            fontSize: "0.95rem",
          }}
        >
          Napište nám nebo zavolejte. Rádi vám odpovíme na všechny otázky.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => {
              setPage("kontakt");
              window.scrollTo(0, 0);
            }}
            style={{
              background: `linear-gradient(135deg, ${T.dark}, ${T.bright})`,
              color: T.white,
              border: "none",
              padding: "0.78rem 1.9rem",
              borderRadius: 50,
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 800,
              fontSize: "0.92rem",
              boxShadow: "0 6px 20px rgba(60,100,20,0.25)",
            }}
          >
            Kontaktovat nás
          </button>
          <button
            onClick={() => {
              setPage("cenik");
              window.scrollTo(0, 0);
            }}
            style={{
              background: "transparent",
              color: T.bright,
              border: `2px solid ${T.bright}`,
              padding: "0.78rem 1.9rem",
              borderRadius: 50,
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 800,
              fontSize: "0.92rem",
            }}
          >
            Zobrazit ceník
          </button>
        </div>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    img: "/assets/lyska_2.png",
    t: "Za každého počasí",
    d: "Vybaveni se ridi rcenim: Neni spatne počasí, pouze spatne oblečení. Nosime nekolik vrstev vhodnych pro rocni obdobi.",
  },
  {
    img: "/assets/sova.png",
    t: "Zimni otuzovani",
    d: "Na cerstvem vzduchu pri promenlive teplote se děti ucinne otuzuji a posiluji imunitni system.",
  },
  {
    img: "/assets/jelinek_2.png",
    t: "Lesní učebna",
    d: "Děti netráví celý rok jen v lese. Součástí programu jsou návštěvy kulturních akcí a veřejných institucí.",
  },
  {
    img: "/assets/myval_2.png",
    t: "Tvořivost a fantazie",
    d: "V maringotce najdete knihy, hry a materiály pro tvoření. Hlavní materiál pro hru nabízí prostředí lesa.",
  },
  {
    img: "/assets/kralicek2.png",
    t: "Zázemí se zahradou",
    d: "Součástí je zahrada s pískovištěm v těsné blízkosti domácích i lesních zvířátek.",
  },
  {
    img: "/assets/medved_ptak.png",
    t: "Individuální vzdělávání",
    d: "Děti tu mohou plnit povinný předškolní rok v režimu individuálního vzdělávání.",
  },
];

const HODNOTY = [
  "Chováme se k sobě s respektem, tolerancí a láskou.",
  "Nasloucháme si a dáváme dětem i rodičům prostor pro vyjádření.",
  "Jsme ohleduplní ke všem formám života - zvířatům, stromům, mechům i květinám.",
  "Odpadky si odnášíme z přírody s sebou a odpad třídíme.",
  "Chráníme přírodu a snažíme se být v lese tiše.",
  "Vzájemně si pomáháme a podporujeme se.",
];

const RYTMUS = [
  { c: "8:00 - 9:00", p: "Scházení dětí, volná hra" },
  { c: "9:00 - 9:30", p: "Ranní kruh, společné přivítání a plán dne" },
  {
    c: "9:30 - 11:30",
    p: "Program v lese, vzdělávací činnost, volná hra, dopolední svačina",
  },
  { c: "11:30 - 12:00", p: "Návrat z lesa, hygiena, příprava na oběd" },
  { c: "12:00 - 12:30", p: "Společný oběd" },
  { c: "12:30 - 13:00", p: "Hygiena, příprava na odpočinek" },
  { c: "13:00 - 14:00", p: "Odpočinek, četba pohádek" },
  {
    c: "14:00 - 15:30",
    p: "Volná hra, individuální program, odpolední svačina",
  },
  { c: "15:30 - 16:00", p: "Vyzvedávání dětí, zhodnocení dne" },
];

function PageONas() {
  return (
    <div>
      <HeroBar
        label="O nás"
        title="Co je lesní klub Hájek?"
        sub="Jsme lesní klub zaměřený na vzdělávání v přírodním prostředí. Naším cílem je poskytnout dětem možnost rozvíjet se v kontaktu s přírodou a zvířaty. Díky menšímu počtu dětí můžeme nabídnout individuální přístup."
      />

      <div style={{ background: T.bg, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="lk-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            <div>
              <SLabel>Jak to funguje</SLabel>
              <STitle>Vzdělávání v lese</STitle>
              <p
                style={{
                  color: T.textSoft,
                  lineHeight: 1.85,
                  marginBottom: "1.1rem",
                  fontSize: "0.95rem",
                }}
              >
                Lesní klub je formou předškolního vzdělávání, která není
                definovaná zákonem. Děti tu mohou plnit povinný předškolní rok v
                režimu tzv. individuálního vzdělávání.
              </p>
              <p
                style={{
                  color: T.textSoft,
                  lineHeight: 1.85,
                  marginBottom: "1.1rem",
                  fontSize: "0.95rem",
                }}
              >
                Lesní klub je hrazen pouze ze soukromých prostředků (příspěvky
                rodičů). Platby se nedají odečíst ze základu daně.
              </p>
              <p
                style={{
                  color: T.textSoft,
                  lineHeight: 1.85,
                  fontSize: "0.95rem",
                }}
              >
                Děti tráví většinu dne venku. Do zázemí si chodí jen odpočívat
                po obědě nebo když počasí nedovoluje být venku.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              {[
                {
                  e: "🌿",
                  t: "4 dny v týdnu, 8:00 - 16:00",
                  d: "Pondělí až čtvrtek",
                },
                {
                  e: "📍",
                  t: "Machov 58, okres Náchod",
                  d: "V krásné přírodě Broumovska",
                },
                {
                  e: "🇬🇧",
                  t: "Angličtina v ceně",
                  d: "1 hodina angličtiny týdně",
                },
                {
                  e: "🍽",
                  t: "Oběd ze školní jídelny",
                  d: "Dovážíme z Police nad Metují, 45 Kč/den",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="hlift"
                  style={{
                    background: T.white,
                    borderRadius: 16,
                    padding: "1.1rem 1.4rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    boxShadow: "0 3px 14px rgba(60,100,20,0.07)",
                    border: "1px solid rgba(106,176,48,0.14)",
                  }}
                >
                  <div style={{ fontSize: "1.9rem", flexShrink: 0 }}>
                    {item.e}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: T.dark,
                        fontSize: "0.92rem",
                      }}
                    >
                      {item.t}
                    </div>
                    <div
                      style={{
                        color: T.textSoft,
                        fontSize: "0.8rem",
                        marginTop: 2,
                      }}
                    >
                      {item.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: T.white, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <SLabel>Náš přístup</SLabel>
            <STitle>Jak pracujeme s dětmi</STitle>
          </div>
          <div
            className="lk-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.4rem",
            }}
          >
            {FEATURES.map((f) => (
              <div
                key={f.t}
                className="hlift"
                style={{
                  background: T.bg,
                  borderRadius: 20,
                  padding: "1.7rem",
                  border: "2px solid rgba(106,176,48,0.11)",
                }}
              >
                <div style={{ marginBottom: "0.8rem" }}>
                  <Image src={f.img} alt={f.t} width={44} height={44} />
                </div>
                <h4
                  style={{
                    color: T.dark,
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {f.t}
                </h4>
                <p
                  style={{
                    color: T.textSoft,
                    fontSize: "0.86rem",
                    lineHeight: 1.7,
                  }}
                >
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: T.bgAlt, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.2rem" }}>
            <SLabel>Hodnoty</SLabel>
            <STitle>Naše hodnoty</STitle>
          </div>
          <div
            className="lk-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {HODNOTY.map((h, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                  background: T.white,
                  borderRadius: 14,
                  padding: "1.1rem 1.3rem",
                  boxShadow: "0 2px 10px rgba(60,100,20,0.06)",
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: T.pale,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: T.dark,
                    fontWeight: 900,
                    fontSize: "0.75rem",
                  }}
                >
                  {i + 1}
                </div>
                <p
                  style={{
                    color: T.textSoft,
                    fontSize: "0.87rem",
                    lineHeight: 1.65,
                  }}
                >
                  {h}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: T.white, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.2rem" }}>
            <SLabel>Jak vypadá den</SLabel>
            <STitle>Denní rytmus</STitle>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}
          >
            {RYTMUS.map((r, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  background: i % 2 === 0 ? T.bg : T.white,
                  borderRadius: 12,
                  padding: "0.9rem 1.3rem",
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(135deg, ${T.dark}, ${T.bright})`,
                    color: T.white,
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    padding: "0.35rem 0.8rem",
                    borderRadius: 50,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {r.c}
                </div>
                <p
                  style={{
                    color: T.textSoft,
                    fontSize: "0.88rem",
                    lineHeight: 1.55,
                  }}
                >
                  {r.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: `linear-gradient(135deg, ${T.dark}, ${T.mid})`,
          padding: "4rem 2rem",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.2rem" }}>
            <SLabel>Doporučení</SLabel>
            <STitle light>Základní vybava dítěte</STitle>
          </div>
          <div
            className="lk-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {[
              {
                e: "🎒",
                t: "Batůžek + vybava",
                d: "Nepromokavý batuzek s lahví, karimatkovy podsedak, krabičku na svacinu, kapesníky a ubrousky.",
              },
              {
                e: "🧥",
                t: "Cibulové vrstvení",
                d: "Spodní vrstva hřejivá (termoprádlo), vrchní vrstva nepromokava. Kvalitní nepromokave kotníkové boty.",
              },
              {
                e: "🧤",
                t: "Doplňky dle počasí",
                d: "Pokryvka hlavy, rukavice pod 10°C, repelent, opalovací krem.",
              },
              {
                e: "👕",
                t: "Náhradní oblečení",
                d: "Spodní prádlo, ponožky, tričko, teplaky a mikina uložené v zázemí.",
              },
            ].map((item) => (
              <div
                key={item.t}
                style={{
                  background: "rgba(255,255,255,0.09)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.13)",
                  borderRadius: 18,
                  padding: "1.4rem",
                }}
              >
                <div style={{ fontSize: "1.9rem", marginBottom: "0.6rem" }}>
                  {item.e}
                </div>
                <div
                  style={{
                    color: T.pale,
                    fontWeight: 800,
                    fontSize: "0.92rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.t}
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.83rem",
                    lineHeight: 1.65,
                  }}
                >
                  {item.d}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.78rem",
              textAlign: "center",
              marginTop: "1.3rem",
              fontStyle: "italic",
            }}
          >
            Prosíme rodice, aby brali na vědomí, ze se oblečení může během
            pobytu v přírodě zašpinit ci poškodit.
          </p>
        </div>
      </div>
    </div>
  );
}

const LIDE = [
  {
    jmeno: "Lenka Scholzova",
    role: "Hlavní vedoucí",
    img: "/assets/lyska.png",
    bio: "V lesním klubu mám na starost ekonomiku, účetnictví, naše zázemí, komunikaci s rodiči i okolím a vedení průvodců. Miluju zvířata a nedokážu si svůj život bez nich představit. Mám tři biologické děti a jedno v pěstounské péči. Mým posláním je pomáhat těm, kteří to potřebují.",
  },
  {
    jmeno: "Tereza Weinlichova",
    role: "Průvodkyně",
    img: "/assets/myval_3.png",
    bio: "Ahoj, jsem Terka, holka, která má ráda zábavu, dobrodružství, práci s dětmi a poznávání nových věcí. Vystudovala jsem vysokou školu pedagogiky volného času a nyní studuji bezpečnostní složky. Vedu tábory, akce, lezecký a snowboardový kroužek.",
  },
  {
    jmeno: "Tereza Scholzova",
    role: "Průvodkyně",
    img: "/assets/jezecek.png",
    bio: "Průvodkyně našeho lesního klubu. Společně s dětmi prožívá každý den v přírodě a pomáhá jim poznávat svět kolem nich.",
  },
];

function PageLide() {
  return (
    <div>
      <HeroBar
        label="Náš tým"
        title="Lidé za Lesním klubem"
        sub="Poznejte lidi, kteří každý den s láskou pečují o vaše děti a starají se o chod našeho klubu."
      />

      <div style={{ background: T.bg, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="lk-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {LIDE.map((l) => (
              <Card
                key={l.jmeno}
                className="hlift"
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${T.pale}, ${T.light})`,
                    margin: "0 auto 1.1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 6px 22px rgba(60,100,20,0.15)",
                  }}
                >
                  <Image
                    src={l.img}
                    alt={l.jmeno}
                    fill
                    sizes="84px"
                    style={{ objectFit: "contain", padding: 6 }}
                  />
                </div>
                <h3
                  style={{
                    color: T.dark,
                    fontWeight: 900,
                    fontSize: "1.05rem",
                    marginBottom: "0.3rem",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {l.jmeno}
                </h3>
                <div
                  style={{
                    background: T.pale,
                    color: T.dark,
                    fontWeight: 800,
                    fontSize: "0.72rem",
                    padding: "0.28rem 0.85rem",
                    borderRadius: 50,
                    display: "inline-block",
                    marginBottom: "1rem",
                  }}
                >
                  {l.role}
                </div>
                <p
                  style={{
                    color: T.textSoft,
                    fontSize: "0.86rem",
                    lineHeight: 1.75,
                  }}
                >
                  {l.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: T.white, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <SLabel>Jak pracujeme</SLabel>
          <STitle>Každý den s dětmi v přírodě</STitle>
          <p
            style={{
              color: T.textSoft,
              lineHeight: 1.85,
              maxWidth: 700,
              margin: "0 auto 2rem",
              fontSize: "0.95rem",
            }}
          >
            Náš tým provází děti bezpečně a s respektem. Stavíme na klidu,
            důvěře a spolupráci s rodinami, aby se děti cítily jistě a mohly
            růst vlastním tempem.
          </p>
          <div
            className="lk-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {[
              {
                t: "Respektující přístup",
                d: "Každé dítě vnímáme individuálně a citlivě reagujeme na jeho potřeby.",
              },
              {
                t: "Bezpečné prostředí",
                d: "Jasná pravidla a zkušený tým dávají dětem jistotu každý den.",
              },
              {
                t: "Úzká spolupráce s rodiči",
                d: "Pravidelně sdílíme průběh dne a podporujeme otevřenou komunikaci.",
              },
            ].map((item) => (
              <Card
                key={item.t}
                style={{ padding: "1.3rem", textAlign: "left" }}
              >
                <h4
                  style={{
                    color: T.dark,
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    marginBottom: "0.45rem",
                  }}
                >
                  {item.t}
                </h4>
                <p
                  style={{
                    color: T.textSoft,
                    fontSize: "0.86rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.d}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CENY = [
  { dni: 2, cena: 2400 },
  { dni: 3, cena: 3500 },
  { dni: 4, cena: 4400 },
];

function PageCenik() {
  return (
    <div>
      <HeroBar
        label="Ceník"
        title="Ceny a podmínky"
        sub="Platný od září 2024. Lesní klub Hájek je provozován jako nezisková organizace."
      />

      <div style={{ background: T.bg, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div
            className="lk-grid-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.4rem",
              marginBottom: "2.5rem",
            }}
          >
            {CENY.map((c, i) => (
              <div
                key={c.dni}
                className="hlift"
                style={{
                  background:
                    i === 2
                      ? `linear-gradient(135deg, ${T.dark}, ${T.mid})`
                      : T.white,
                  borderRadius: 22,
                  padding: "1.8rem",
                  textAlign: "center",
                  boxShadow: "0 6px 28px rgba(60,100,20,0.1)",
                  border: i === 2 ? "none" : "2px solid rgba(106,176,48,0.14)",
                  position: "relative",
                }}
              >
                {i === 2 && (
                  <div
                    style={{
                      position: "absolute",
                      top: -11,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: T.accent,
                      color: T.white,
                      fontWeight: 800,
                      fontSize: "0.68rem",
                      padding: "0.25rem 0.9rem",
                      borderRadius: 50,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Nejoblíbenější
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "2.7rem",
                    color: i === 2 ? T.pale : T.bright,
                    marginBottom: "0.2rem",
                  }}
                >
                  {c.dni}
                </div>
                <div
                  style={{
                    color: i === 2 ? "rgba(255,255,255,0.65)" : T.textSoft,
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    marginBottom: "1.1rem",
                  }}
                >
                  dní v týdnu
                </div>
                <div
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "1.9rem",
                    color: i === 2 ? T.white : T.dark,
                    marginBottom: "0.25rem",
                  }}
                >
                  {c.cena.toLocaleString("cs-CZ")} Kc
                </div>
                <div
                  style={{
                    color: i === 2 ? "rgba(255,255,255,0.55)" : T.textSoft,
                    fontSize: "0.75rem",
                  }}
                >
                  měsíčně
                </div>
              </div>
            ))}
          </div>

          <div
            className="lk-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.4rem",
              marginBottom: "1.5rem",
            }}
          >
            <Card>
              <div style={{ fontSize: "1.9rem", marginBottom: "0.8rem" }}>
                🍽
              </div>
              <h4
                style={{
                  color: T.dark,
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  marginBottom: "0.6rem",
                }}
              >
                Oběd
              </h4>
              <p
                style={{
                  color: T.textSoft,
                  fontSize: "0.87rem",
                  lineHeight: 1.7,
                }}
              >
                Obědy jsou hrazeny zvlášť - 45 Kč/den. Dovážíme ze školní
                jídelny v Polici nad Metují. Svaciny si děti nosi z domu.
              </p>
            </Card>
            <Card>
              <div style={{ fontSize: "1.9rem", marginBottom: "0.8rem" }}>
                🏦
              </div>
              <h4
                style={{
                  color: T.dark,
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  marginBottom: "0.6rem",
                }}
              >
                Číslo účtu
              </h4>
              <p
                style={{
                  color: T.textSoft,
                  fontSize: "0.87rem",
                  lineHeight: 1.7,
                  marginBottom: "0.7rem",
                }}
              >
                Platby prosime zasilat na nase cislo uctu:
              </p>
              <div
                style={{
                  background: T.bg,
                  borderRadius: 10,
                  padding: "0.7rem 1rem",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: T.dark,
                  fontSize: "0.95rem",
                  letterSpacing: "0.04em",
                }}
              >
                131-996420207/0100
              </div>
            </Card>
          </div>

          <Card
            style={{
              background: `linear-gradient(135deg, ${T.bgAlt}, #d7e1c8)`,
              border: "none",
            }}
          >
            <div
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <div style={{ fontSize: "1.9rem", flexShrink: 0 }}>ℹ️</div>
              <div>
                <h4
                  style={{
                    color: T.dark,
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Důležitá informace
                </h4>
                <p
                  style={{
                    color: T.textSoft,
                    fontSize: "0.87rem",
                    lineHeight: 1.75,
                  }}
                >
                  Lesní klub Hájek je provozován jako nezisková organizace a
                  není zapsán v rejstříku materskych škol MSMT. Tyto organizace
                  nejsou finančně dotovany státem. Z vybranych peněz jsou
                  hrazeny odmeny lektorum, program, provozni náklady a úrazové
                  pojištění děti.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const IMGS = [
  "20180607_190103",
  "20180731_203421",
  "20180801_165939",
  "20180927_172507",
  "398143177_17864197971021087_8529967800552644252_n",
  "399971843_17865348903021087_4841354095303879689_n",
  "425000563_17879170674021087_8619105073618412139_n",
  "425313226_17879170374021087_1891974142378282599_n",
  "kocky",
  "prase",
  "anci",
  "deti_baliky",
  "lili",
  "cici",
  "kobilka",
  "osmak",
  "tabor",
  "tabor2",
  "modelina",
];

function PageGalerie() {
  const [sel, setSel] = useState(null);
  return (
    <div>
      <HeroBar
        label="Fotogalerie"
        title="Naše momenty"
        sub="Podívej se, jak vypadá život v Lesním klubu Hájek."
      />

      <div style={{ background: T.bg, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ columns: "4 200px", gap: "1rem" }}>
            {IMGS.map((img, i) => (
              <div
                key={img}
                onClick={() => setSel(img)}
                className="hlift"
                style={{
                  breakInside: "avoid",
                  marginBottom: "1rem",
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(60,100,20,0.1)",
                }}
              >
                <img
                  src={`https://www.lesniklubhajek.cz/img/galerie/${img}.webp`}
                  alt={`Foto ${i + 1}`}
                  style={{ width: "100%", display: "block" }}
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {sel && (
        <div
          onClick={() => setSel(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <img
            src={`https://www.lesniklubhajek.cz/img/galerie/${sel}.webp`}
            alt="foto"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 18,
              boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 22,
              right: 28,
              color: "#fff",
              fontSize: "2.2rem",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            &times;
          </div>
        </div>
      )}
    </div>
  );
}

function PageKontakt() {
  return (
    <div>
      <HeroBar
        label="Kontakt"
        title="Napište nám"
        sub="Máte zájem o lesní vzdělávání pro vaše dítě? Rádi zodpovíme všechny vaše dotazy."
      />

      <div style={{ background: T.bg, padding: "4rem 2rem" }}>
        <div
          className="lk-grid-2"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <div>
            <SLabel>Kde nás najdete</SLabel>
            <STitle>Kontaktní údaje</STitle>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1.8rem",
              }}
            >
              {[
                {
                  e: "🏢",
                  t: "Lesní klub Hájek, z.s.",
                  d: "Machov 58, 549 63",
                },
                { e: "📞", t: "+420 737 787 061", d: "Volat pondeli - pátek" },
                {
                  e: "✉️",
                  t: "lesni.klub.hajek@seznam.cz",
                  d: "Odpovíme do 24 hodin",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    background: T.white,
                    borderRadius: 16,
                    padding: "1.1rem 1.4rem",
                    boxShadow: "0 3px 12px rgba(60,100,20,0.07)",
                    border: "1px solid rgba(106,176,48,0.14)",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${T.pale}, ${T.light})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.35rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.e}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: T.dark,
                        fontSize: "0.93rem",
                      }}
                    >
                      {item.t}
                    </div>
                    <div
                      style={{
                        color: T.textSoft,
                        fontSize: "0.79rem",
                        marginTop: 2,
                      }}
                    >
                      {item.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{ display: "flex", gap: "0.9rem", marginTop: "1.8rem" }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100094171486836"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    background: "#3b5998",
                    color: T.white,
                    border: "none",
                    padding: "0.7rem 1.4rem",
                    borderRadius: 50,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                  }}
                >
                  Facebook
                </button>
              </a>
              <a
                href="https://www.instagram.com/lesni_klub_hajek/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    background: "#c13584",
                    color: T.white,
                    border: "none",
                    padding: "0.7rem 1.4rem",
                    borderRadius: 50,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                  }}
                >
                  Instagram
                </button>
              </a>
            </div>
          </div>

          <Card style={{ padding: "2.2rem" }}>
            <h3
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: T.dark,
                fontSize: "1.3rem",
                marginBottom: "1.4rem",
              }}
            >
              Odeslat zprávu
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              {[
                {
                  label: "Vaše jméno",
                  type: "text",
                  placeholder: "Jana Novakova",
                },
                {
                  label: "E-mail",
                  type: "email",
                  placeholder: "jana@email.cz",
                },
                {
                  label: "Předmět",
                  type: "text",
                  placeholder: "Dotaz na přihlášení",
                },
              ].map((f) => (
                <div key={f.label}>
                  <label
                    style={{
                      display: "block",
                      color: T.dark,
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.95rem",
                      borderRadius: 11,
                      border: "2px solid rgba(106,176,48,0.22)",
                      background: T.bg,
                      fontSize: "0.92rem",
                      color: T.dark,
                      transition: "all 0.2s",
                    }}
                  />
                </div>
              ))}
              <div>
                <label
                  style={{
                    display: "block",
                    color: T.dark,
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  Zpráva
                </label>
                <textarea
                  placeholder="Napište nám..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.95rem",
                    borderRadius: 11,
                    border: "2px solid rgba(106,176,48,0.22)",
                    background: T.bg,
                    fontSize: "0.92rem",
                    color: T.dark,
                    resize: "vertical",
                    transition: "all 0.2s",
                  }}
                />
              </div>
              <button
                style={{
                  background: `linear-gradient(135deg, ${T.dark}, ${T.bright})`,
                  color: T.white,
                  border: "none",
                  padding: "0.85rem",
                  borderRadius: 50,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  boxShadow: "0 6px 20px rgba(60,100,20,0.25)",
                }}
              >
                Odeslat zprávu 🌿
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer
      style={{
        background: `linear-gradient(135deg, ${T.dark}, #1a3a08)`,
        padding: "2.8rem 2rem",
        fontFamily: "inherit",
      }}
    >
      <div
        className="lk-footer-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: "0.9rem",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.75)",
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 5px 12px rgba(0,0,0,0.22)",
              }}
            >
              <Image
                src="/assets/hajek_logo.png"
                alt="Logo Lesní klub Hájek"
                width={34}
                height={34}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: 2,
                }}
              />
            </div>
            <div
              style={{
                color: T.white,
                fontWeight: 900,
                fontFamily: "'Nunito', sans-serif",
                fontSize: "1.05rem",
              }}
            >
              Lesní klub Hájek
            </div>
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.48)",
              fontSize: "0.82rem",
              lineHeight: 1.75,
            }}
          >
            Přírodní mateřská škola v Machove. Vzdelavani hrou v přírodě pro
            děti od 3 do 7 let.
          </p>
        </div>
        <div>
          <div
            style={{
              color: T.pale,
              fontWeight: 800,
              fontSize: "0.73rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            Navigace
          </div>
          {PAGES.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                setPage(p.id);
                window.scrollTo(0, 0);
              }}
              style={{
                color: "rgba(255,255,255,0.52)",
                fontSize: "0.83rem",
                marginBottom: "0.45rem",
                cursor: "pointer",
              }}
            >
              {p.label}
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              color: T.pale,
              fontWeight: 800,
              fontSize: "0.73rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            Kontakt
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.52)",
              fontSize: "0.82rem",
              lineHeight: 1.75,
            }}
          >
            Machov 58, 549 63
            <br />
            +420 737 787 061
            <br />
            lesni.klub.hajek@seznam.cz
          </p>
        </div>
        <div>
          <div
            style={{
              color: T.pale,
              fontWeight: 800,
              fontSize: "0.73rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            Sociální sítě
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=100094171486836"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              color: "rgba(255,255,255,0.52)",
              fontSize: "0.82rem",
              marginBottom: "0.45rem",
            }}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/lesni_klub_hajek/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              color: "rgba(255,255,255,0.52)",
              fontSize: "0.82rem",
            }}
          >
            Instagram
          </a>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          marginTop: "2rem",
          paddingTop: "1.3rem",
          textAlign: "center",
          color: "rgba(255,255,255,0.22)",
          fontSize: "0.75rem",
        }}
      >
        © 2024 Lesní klub Hájek, z.s. - Všechna práva vyhrazena.
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("uvod");
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: "Lesní klub Hájek",
    description:
      "Lesní klub Hájek je lesní školka v Machově. Děti se učí hrou v přírodě a tráví většinu dne venku.",
    url: "https://www.lesniklubhajek.cz",
    telephone: "+420737787061",
    email: "lesni.klub.hajek@seznam.cz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Machov 58",
      postalCode: "549 63",
      addressLocality: "Machov",
      addressCountry: "CZ",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const render = {
    uvod: <PageUvod setPage={setPage} />,
    onas: <PageONas />,
    lide: <PageLide />,
    cenik: <PageCenik />,
    galerie: <PageGalerie />,
    kontakt: <PageKontakt />,
  };

  return (
    <div>
      <style>{css}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar page={page} setPage={setPage} />
      <main className="lk-main">{render[page] || render.uvod}</main>
      <Footer setPage={setPage} />
    </div>
  );
}
