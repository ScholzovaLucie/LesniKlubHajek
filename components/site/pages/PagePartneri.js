"use client";

import Image from "next/image";
import Link from "next/link";
import { T } from "../constants";
import { Card, HeroBar, SLabel, STitle } from "../ui";

const PARTNERS = [
  {
    name: "Rodiny a místní komunita",
    description:
      "Největší oporou Lesního klubu Hájek jsou rodiny dětí a lidé z okolí, kteří pomáhají s provozem, zázemím i společnými akcemi.",
  },
  {
    name: "Dobrovolníci a přátelé klubu",
    description:
      "Děkujeme všem, kdo přikládají ruku k dílu, sdílí své zkušenosti a podporují klub časem, energií nebo praktickou pomocí.",
  },
  {
    name: "Ing. Ivana Petrovická (Daně bez starostí)",
    description: "Účetní a daňová podpora.",
    href: "https://danebezstarosti.cz",
    cta: "Přejít na web",
    logo: "/assets/logo_dane_bez_starosti.png",
    logoAlt: "Logo Daně bez starostí",
    logoBg: "#f5f3ef",
  },
  {
    name: "Ing. Lucie Nováková (S-weby)",
    description: "Technická a webová podpora prezentace Lesního klubu Hájek.",
    href: "https://s-weby.cz",
    cta: "Přejít na web",
    logo: "/assets/sweby_logo.png",
    logoAlt: "Logo S-weby",
    logoBg: "#5d705e",
  },
  {
    name: "Bc. Lucie Tarabová",
    description: "Tvorba sociálního obsahu a marketing.",
    href: "https://www.facebook.com/share/16zf9tUBA6/?mibextid=wwXIfr",
    cta: "Přejít na facebook",
  },
];

const SPONSORS = [
  {
    name: "MycoMedica",
    description: "Nákup vybavení do domečku.",
    href: "https://www.mycomedica.cz",
    cta: "Přejít na web",
    logo: "/assets/myco-logo-clean.svg",
    logoAlt: "Logo MycoMedica",
    logoBg: "#f2f0e9",
  },
  {
    name: "Damap-podlahové krytiny",
    description: "Dar v podobě koberce do domečku.",
    href: "https://www.damap-podlahy.cz/podlahove-krytiny/",
    cta: "Přejít na web",
    logo: "/assets/logo_damap.png",
    logoAlt: "Logo Damap-podlahové krytiny",
    logoBg: "#5f725f",
  },
  {
    name: "Nadační fond Zeměkvět",
    description: "Peněžní dar na domeček.",
    href: "http://zemekvet.cz/",
    cta: "Přejít na web",
    logo: "/assets/zemekvet_logo_topdown_green_brown.svg",
    logoAlt: "Logo Nadační fond Zeměkvět",
    logoBg: "#f1efe6",
  },
  {
    name: "Alprim CZ s.r.o.",
    description: "Příspěvek na vybavení šatny.",
    href: "https://www.alprim.cz",
    cta: "Přejít na web",
    logo: "/assets/alprim_logo.png",
    logoAlt: "Logo Alprim CZ s.r.o.",
    logoBg: "#6a5850",
  },
  {
    name: "Dárci a podporovatelé",
    description:
      "Další partnery a sponzory průběžně doplňujeme. Děkujeme všem, kteří klub podporují finančně, materiálně nebo konkrétní pomocí.",
  },
];

const WAYS_TO_HELP = [
  "materiální podpora pro zázemí a tvoření",
  "finanční dar na rozvoj aktivit pro děti",
  "partnerství při komunitních a vzdělávacích akcích",
];

function PartnerLogo({ src, alt, background }) {
  if (!src) {
    return null;
  }

  return (
    <div
      className="lk-partner-logo"
      style={{
        width: 96,
        minHeight: 64,
        borderRadius: 16,
        background: background || "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        padding: "0.45rem 0.5rem",
      }}
    >
      <Image
        src={src}
        alt={alt || "Logo partnera"}
        width={76}
        height={76}
        className="lk-partner-logo-image"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "78px",
          maxHeight: "54px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

function LogoLink({ item }) {
  if (!item.logo) {
    return null;
  }

  return (
    <div className="lk-partner-logo-shell">
      <PartnerLogo
        src={item.logo}
        alt={item.logoAlt || `Logo ${item.name}`}
        background={item.logoBg}
      />
    </div>
  );
}

function PartnerItemCard({ item, borderColor, background }) {
  const Wrapper = item.href ? "a" : "div";

  return (
    <Wrapper
      key={item.name}
      {...(item.href
        ? {
            href: item.href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": `${item.name} - ${item.cta || "přejít na web"}`,
          }
        : {})}
      className={`lk-partner-entry${item.href ? " lk-partner-entry--link" : ""}`}
      style={{
        padding: "1rem 1.1rem",
        borderRadius: 18,
        border: `1px solid ${borderColor}`,
        background,
        display: "block",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.9rem",
          alignItems: "flex-start",
        }}
      >
        {item.logo ? (
          <div
            style={{
              width: 110,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.55rem",
              flexShrink: 0,
            }}
          >
            <LogoLink item={item} />
          </div>
        ) : null}
        <div>
          <h3
            className="lk-partner-name"
            style={{
              color: T.dark,
              fontSize: "1rem",
              fontWeight: 800,
              marginBottom: "0.4rem",
            }}
          >
            {item.name}
          </h3>
          <p
            style={{
              color: T.textSoft,
              lineHeight: 1.75,
              fontSize: "0.92rem",
            }}
          >
            {item.description}
          </p>
          {item.href ? (
            <div
              className="lk-partner-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                marginTop: "0.75rem",
                color: T.dark,
                fontWeight: 800,
                fontSize: "0.82rem",
              }}
            >
              <span>{item.cta || "Přejít na web"}</span>
              <span aria-hidden="true">↗</span>
            </div>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
}

export function PagePartneri() {
  return (
    <div>
      <HeroBar
        label="Partneři a sponzoři"
        title="Děkujeme za podporu Lesního klubu Hájek"
        sub="Za každým bezpečným zázemím, společnou akcí i novým nápadem stojí lidé a organizace, které nám pomáhají růst."
      />

      <div style={{ background: T.bg, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="lk-grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            <Card>
              <SLabel>Partneři</SLabel>
              <STitle>Komunita, na které stojíme</STitle>
              <div style={{ display: "grid", gap: "1rem" }}>
                {PARTNERS.map((partner) => (
                  <PartnerItemCard
                    key={partner.name}
                    item={partner}
                    borderColor="rgba(106,176,48,0.18)"
                    background={T.bg}
                  />
                ))}
              </div>
            </Card>

            <Card>
              <SLabel>Sponzoři</SLabel>
              <STitle>Podpora, která je vidět</STitle>
              <div style={{ display: "grid", gap: "1rem" }}>
                {SPONSORS.map((sponsor) => (
                  <PartnerItemCard
                    key={sponsor.name}
                    item={sponsor}
                    borderColor="rgba(184,121,71,0.18)"
                    background="#fcfaf5"
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div style={{ background: T.white, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <SLabel>Spolupráce</SLabel>
            <STitle>Chcete se stát partnerem?</STitle>
            <p
              style={{
                color: T.textSoft,
                lineHeight: 1.8,
                fontSize: "0.96rem",
                maxWidth: 680,
                margin: "0 auto",
              }}
            >
              Uvítáme spolupráci, která pomůže dětem objevovat přírodu, tvořit,
              růst a trávit čas venku v bezpečném prostředí.
            </p>
          </div>

          <div
            className="lk-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {WAYS_TO_HELP.map((item) => (
              <div
                key={item}
                className="hlift"
                style={{
                  borderRadius: 20,
                  padding: "1.4rem",
                  background: T.bg,
                  border: "1px solid rgba(106,176,48,0.16)",
                  color: T.dark,
                  fontWeight: 800,
                  lineHeight: 1.55,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                padding: "0.9rem 1.4rem",
                background: T.accent,
                color: T.white,
                fontWeight: 800,
                fontSize: "0.92rem",
                boxShadow: "0 10px 24px rgba(184,121,71,0.22)",
              }}
            >
              Ozvat se ohledně spolupráce
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
