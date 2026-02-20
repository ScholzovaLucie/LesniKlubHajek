"use client";

import Image from "next/image";
import { assetPath } from "../../../lib/assetPath";
import { T } from "../constants";
import { Card, HeroBar, SLabel, STitle } from "../ui";

const LIDE = [
  {
    jmeno: "Lenka Scholzova",
    role: "Hlavní vedoucí",
    img: assetPath("/assets/lyska.png"),
    bio: "V lesním klubu mám na starost ekonomiku, účetnictví, naše zázemí, komunikaci s rodiči i okolím a vedení průvodců. Miluju zvířata a nedokážu si svůj život bez nich představit. Mám tři biologické děti a jedno v pěstounské péči. Mým posláním je pomáhat těm, kteří to potřebují.",
  },
  {
    jmeno: "Tereza Weinlichova",
    role: "Průvodkyně",
    img: assetPath("/assets/myval_3.png"),
    bio: "Ahoj, jsem Terka, holka, která má ráda zábavu, dobrodružství, práci s dětmi a poznávání nových věcí. Vystudovala jsem vysokou školu pedagogiky volného času a nyní studuji bezpečnostní složky. Vedu tábory, akce, lezecký a snowboardový kroužek.",
  },
  {
    jmeno: "Tereza Scholzova",
    role: "Průvodkyně",
    img: assetPath("/assets/jezecek.png"),
    bio: "Průvodkyně našeho lesního klubu. Společně s dětmi prožívá každý den v přírodě a pomáhá jim poznávat svět kolem nich.",
  },
];

export function PageLide() {
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
