"use client";

import { T } from "../constants";
import { Card, HeroBar } from "../ui";

const CENY = [
  { dni: 2, cena: 2400 },
  { dni: 3, cena: 3500 },
  { dni: 4, cena: 4400 },
  { dni: 5, cena: 5100 },
];

export function PageCenik() {
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
                jídelny v Polici nad Metují. Svačiny si děti nosí z domu.
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
                Platby prosime zasilat na nase číslo účtu:
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
                  není zapsán v rejstříku mateřských škol MSMT. Tyto organizace
                  nejsou finančně dotovány státem. Z vybraných peněz jsou
                  hrazeny odměny lektorům, program, provozní náklady a úrazové
                  pojištění dětí.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
