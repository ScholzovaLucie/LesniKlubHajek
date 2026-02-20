"use client";

import { useState } from "react";
import { assetPath } from "../../../lib/assetPath";
import { T } from "../constants";
import { HeroBar } from "../ui";

const IMGS = [
  "img_1.webp",
  "img_2.webp",
  "img_3.webp",
  "img_4.webp",
  "img_5.webp",
  "img_6.webp",
  "img_7.webp",
  "img_8.webp",
  "img_9.webp",
  "img_10.webp",
  "img_11.webp",
  "img_12.webp",
  "img_13.webp",
  "img_14.webp",
  "img_15.webp",
  "img_16.webp",
  "img_17.webp",
  "img_18.jpg",
  "img_19.webp",
  "img_20.webp",
  "img_21.webp",
];

function GalleryThumb({ name, index, onClick }) {
  return (
    <div
      onClick={onClick}
      className="lk-gallery-item"
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
        src={assetPath(`/galery/${name}`)}
        alt={`Foto ${index + 1}`}
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}

function GalleryLightboxImage({ name }) {
  return (
    <img
      src={assetPath(`/galery/${name}`)}
      alt="foto"
      style={{
        maxWidth: "90vw",
        maxHeight: "90vh",
        borderRadius: 18,
        boxShadow: "0 20px 80px rgba(0,0,0,0.5)",
      }}
    />
  );
}

export function PageGalerie() {
  const [selIndex, setSelIndex] = useState(null);
  const selectedImg = selIndex === null ? null : IMGS[selIndex];

  const showPrev = (e) => {
    e.stopPropagation();
    if (selIndex === null) return;
    setSelIndex((selIndex - 1 + IMGS.length) % IMGS.length);
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (selIndex === null) return;
    setSelIndex((selIndex + 1) % IMGS.length);
  };

  return (
    <div>
      <HeroBar
        label="Fotogalerie"
        title="Naše momenty"
        sub="Podívej se, jak vypadá život v Lesním klubu Hájek."
      />

      <div style={{ background: T.bg, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="lk-gallery" style={{ columns: "4 200px", gap: "1rem" }}>
            {IMGS.map((img, i) => (
              <GalleryThumb
                key={img}
                name={img}
                index={i}
                onClick={() => setSelIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedImg && (
        <div
          onClick={() => setSelIndex(null)}
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
          <GalleryLightboxImage name={selectedImg} />
          <button
            onClick={showPrev}
            aria-label="Předchozí fotka"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.45)",
              background: "rgba(0,0,0,0.35)",
              color: "#fff",
              fontSize: "1.4rem",
              cursor: "pointer",
            }}
          >
            ‹
          </button>
          <button
            onClick={showNext}
            aria-label="Další fotka"
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.45)",
              background: "rgba(0,0,0,0.35)",
              color: "#fff",
              fontSize: "1.4rem",
              cursor: "pointer",
            }}
          >
            ›
          </button>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelIndex(null);
            }}
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
