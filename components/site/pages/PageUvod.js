import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../../../lib/assetPath";
import { T } from "../constants";
import { actualities, newsHighlights } from "../newsData";
import { ActualitiesSection } from "../ActualitiesSection";
import { Card, GreenBtn, SLabel, STitle, StatsStrip } from "../ui";

export function PageUvod() {
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
            <Link href="/o-nas" style={{ display: "inline-flex" }}>
              <GreenBtn as="span">Zjistit více &rarr;</GreenBtn>
            </Link>
            <Link href="/kontakt" style={{ display: "inline-flex" }}>
              <GreenBtn as="span" outline>
                Kontaktovat nás
              </GreenBtn>
            </Link>
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
          <Link href="/kontakt" style={{ display: "inline-flex" }}>
            <GreenBtn as="span">Mám zájem o členství &rarr;</GreenBtn>
          </Link>
        </div>
      </div>

      <div style={{ background: T.bg, padding: "4.5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ActualitiesSection items={actualities} compact upcomingOnly />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <Link href="/aktuality" style={{ display: "inline-flex" }}>
              <GreenBtn
                as="span"
                style={{ boxShadow: "0 8px 24px rgba(47,74,50,0.12)" }}
              >
                Zobrazit všechny aktuality &rarr;
              </GreenBtn>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ background: "#ece8da", padding: "4.2rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.2rem" }}>
            <SLabel>Novinky</SLabel>
            <STitle>Praktické informace na jednom místě</STitle>
          </div>
          <div
            className="lk-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1.4rem",
            }}
          >
            {newsHighlights.map((item) => (
              <Card key={item.id} style={{ height: "100%", padding: "1.6rem" }}>
                <h3
                  style={{
                    color: T.dark,
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: T.textSoft,
                    lineHeight: 1.75,
                    fontSize: "0.92rem",
                  }}
                >
                  {item.text}
                </p>
              </Card>
            ))}
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
          <Link href="/o-nas" style={{ display: "inline-flex" }}>
            <GreenBtn as="span">Přečíst více &rarr;</GreenBtn>
          </Link>
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
          <Link href="/kontakt" style={{ display: "inline-flex" }}>
            <GreenBtn
              as="span"
              style={{
                background: `linear-gradient(135deg, ${T.dark}, ${T.bright})`,
                color: T.white,
                border: "none",
                boxShadow: "0 6px 20px rgba(60,100,20,0.25)",
              }}
            >
              Kontaktovat nás
            </GreenBtn>
          </Link>
          <Link href="/cenik" style={{ display: "inline-flex" }}>
            <GreenBtn
              as="span"
              style={{
                background: "transparent",
                color: T.bright,
                border: `2px solid ${T.bright}`,
              }}
            >
              Zobrazit ceník
            </GreenBtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
