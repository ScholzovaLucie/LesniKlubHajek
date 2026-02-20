"use client";

import { T } from "../constants";
import { Card, HeroBar, SLabel, STitle } from "../ui";

export function PageKontakt() {
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
                { e: "📞", t: "+420 737 787 061", d: "Volat pondělí - pátek" },
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
