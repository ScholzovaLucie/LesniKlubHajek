"use client";

import { useState } from "react";
import { T } from "../constants";
import { HeroBar } from "../ui";

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

export function PageGalerie() {
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
