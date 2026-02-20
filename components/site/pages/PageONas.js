"use client";

import Image from "next/image";
import { assetPath } from "../../../lib/assetPath";
import { T } from "../constants";
import { HeroBar, SLabel, STitle } from "../ui";

const FEATURES = [
  {
    img: assetPath("/assets/lyska_2.png"),
    t: "Za každého počasí",
    d: "Vybavení se řídí rčením: Není špatne počasí, pouze špatne oblečení. Nosíme několik vrstev vhodných pro ročni období.",
  },
  {
    img: assetPath("/assets/sova.png"),
    t: "Zimní otužování",
    d: "Na čerstvém vzduchu při proměnlivé teplotě se děti otužují a posilují imunitní systém.",
  },
  {
    img: assetPath("/assets/jelinek_2.png"),
    t: "Vzdělávací prostory učebna",
    d: "Děti tráví většinu času v přírodě, a součástí programu jsou i návštěvy kulturních akcí a veřejných institucí.",
  },
  {
    img: assetPath("/assets/myval_2.png"),
    t: "Tvořivost a fantazie",
    d: "V domečku najdete knihy, hry a materiály pro tvoření. Hlavní materiál pro hru nabízí prostředí lesa.",
  },
  {
    img: assetPath("/assets/kralicek2.png"),
    t: "Zázemí se zahradou",
    d: "Součástí je zahrada s pískovištěm v těsné blízkosti domácích i lesních zvířátek.",
  },
  {
    img: assetPath("/assets/medved_ptak.png"),
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

export function PageONas() {
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
            <STitle light>Základní výbava dítěte</STitle>
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
                t: "Batůžek + výbava",
                d: "Nepromokavý batůžek s lahví, karimatkový podsedák, krabička na svačinu, kapesníky a ubrousky.",
              },
              {
                e: "🧥",
                t: "Cibulové vrstvení",
                d: "Spodní vrstva hřejivá (termoprádlo), vrchní vrstva nepromokavá. Kvalitní nepromokavé boty.",
              },
              {
                e: "🧤",
                t: "Doplňky dle počasí",
                d: "Pokrývka hlavy, rukavice, repelent, opalovací krém.",
              },
              {
                e: "👕",
                t: "Náhradní oblečení",
                d: "Spodní prádlo, ponožky, tričko, tepláky a mikina uložené v zázemí.",
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
            Prosíme rodice, aby brali na vědomí, že se oblečení může během
            pobytu v přírodě zašpinit či poškodit.
          </p>
        </div>
      </div>
    </div>
  );
}
