"use client";

import Image from "next/image";
import { assetPath } from "../../../lib/assetPath";
import { T } from "../constants";
import { Card, GreenBtn, SLabel, STitle, StatsStrip } from "../ui";

export function PageUvod({ setPage }) {
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
            src={assetPath("/assets/deti_u_stromu.png")}
            alt=""
            aria-hidden="true"
            width={1400}
            height={900}
            className="lk-hero-bg-img"
            style={{
              height: "min(90vh, 1060px)",
              width: "auto",
              maxWidth: "128vw",
              objectFit: "contain",
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
              { img: assetPath("/assets/jezecek.png"), t: "Každý den venku" },
              { img: assetPath("/assets/lyska_kid.png"), t: "Přírodní učebna" },
              { img: assetPath("/assets/myval_kid.png"), t: "Tvořivost a hra" },
              {
                img: assetPath("/assets/kralicek2.png"),
                t: "Individuální přístup",
              },
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
            společenství a radost z prožívání.
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
                    src={assetPath("/assets/zazemi.jpg")}
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
            key={assetPath("/assets/animals.png")}
            style={{
              width: "min(520px, 92vw)",
            }}
          >
            <Image
              src={assetPath("/assets/animals.png")}
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
