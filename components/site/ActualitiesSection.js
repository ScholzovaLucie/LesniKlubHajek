"use client";

import Image from "next/image";
import { assetPath } from "../../lib/assetPath";
import { T } from "./constants";
import { Card, SLabel, STitle } from "./ui";

function parseDateOnly(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function formatDate(value) {
  if (!value) return "Dlouhodobá informace";
  return parseDateOnly(value).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function sortByDateDesc(items) {
  return [...items].sort(
    (a, b) => parseDateOnly(b.date) - parseDateOnly(a.date)
  );
}

function splitActualities(items, now = new Date()) {
  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0,
    0
  );
  const upcoming = [];
  const past = [];
  const ongoing = [];

  for (const item of items) {
    if (!item.date) {
      ongoing.push(item);
    } else if (parseDateOnly(item.date) >= today) {
      upcoming.push(item);
    } else {
      past.push(item);
    }
  }

  return {
    ongoing,
    upcoming: sortByDateDesc(upcoming).reverse(),
    past: sortByDateDesc(past),
  };
}

function ActualityCard({ item, compact }) {
  return (
    <Card
      style={{
        height: "100%",
        padding: compact ? "1.5rem" : "1.2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!compact && item.posterLink ? (
        <a
          href={assetPath(item.posterLink)}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            marginBottom: "1rem",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 14px 30px rgba(47,74,50,0.12)",
          }}
        >
          <Image
            src={assetPath(item.posterLink)}
            alt={item.posterAlt || `Plakátek: ${item.title}`}
            width={900}
            height={1200}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              aspectRatio: "3 / 4",
              objectFit: "cover",
              background: T.bgAlt,
            }}
          />
        </a>
      ) : null}

      <div
        style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          background: T.bgAlt,
          color: T.dark,
          borderRadius: 999,
          padding: "0.38rem 0.82rem",
          fontSize: "0.78rem",
          fontWeight: 800,
          marginBottom: "0.9rem",
        }}
      >
        {formatDate(item.date)}
      </div>

      <h3
        style={{
          color: T.dark,
          fontSize: compact ? "1.22rem" : "1.25rem",
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: "0.85rem",
        }}
      >
        {item.title}
      </h3>

      {item.summary ? (
        <p
          style={{
            color: T.dark,
            lineHeight: compact ? 1.72 : 1.76,
            fontSize: compact ? "0.95rem" : "0.98rem",
            fontWeight: 700,
            marginBottom: "0.9rem",
          }}
        >
          {item.summary}
        </p>
      ) : null}

      {item.details?.length ? (
        <div
          style={{
            display: "grid",
            gap: "0.5rem",
            marginBottom: item.contact || item.posterLink ? "1rem" : 0,
          }}
        >
          {item.details.map((detail) => (
            <div
              key={detail}
              style={{
                color: T.textSoft,
                lineHeight: compact ? 1.7 : 1.75,
                fontSize: compact ? "0.9rem" : "0.93rem",
                display: "flex",
                gap: "0.55rem",
                alignItems: "flex-start",
              }}
            >
              <span style={{ color: T.bright, marginTop: 1 }}>•</span>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      ) : item.text ? (
        <p
          style={{
            color: T.textSoft,
            lineHeight: compact ? 1.75 : 1.8,
            fontSize: compact ? "0.92rem" : "0.94rem",
            marginBottom: item.posterLink ? "1rem" : 0,
          }}
        >
          {item.text}
        </p>
      ) : null}

      {item.contact ? (
        <div
          style={{
            background: T.bgAlt,
            color: T.dark,
            borderRadius: 14,
            padding: compact ? "0.8rem 0.9rem" : "0.9rem 1rem",
            lineHeight: 1.7,
            fontSize: compact ? "0.88rem" : "0.9rem",
            fontWeight: 700,
            marginBottom: item.posterLink ? "1rem" : 0,
          }}
        >
          {item.contact}
        </div>
      ) : null}

      {item.posterLink ? (
        <a
          href={assetPath(item.posterLink)}
          target="_blank"
          rel="noreferrer"
          style={{
            marginTop: "auto",
            alignSelf: "flex-start",
            color: T.dark,
            fontWeight: 800,
            textDecoration: "none",
            ...(compact
              ? {
                  background: T.bgAlt,
                  borderRadius: 999,
                  padding: "0.55rem 0.95rem",
                }
              : {
                  borderBottom: `2px solid ${T.bright}`,
                  paddingBottom: "0.15rem",
                }),
          }}
        >
          {compact ? "Zobrazit plakátek" : "Otevřít plakátek"}
        </a>
      ) : null}
    </Card>
  );
}

export function ActualitiesSection({
  items,
  compact = false,
  upcomingOnly = false,
}) {
  const { ongoing, upcoming, past } = splitActualities(items);
  const activeItems = [...ongoing, ...upcoming];
  const visibleUpcoming = upcomingOnly ? activeItems.slice(0, 3) : activeItems;

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <SLabel>Nadcházející akce</SLabel>
        <STitle>{compact ? "Co se u nás chystá?" : "Co je aktuální"}</STitle>
      </div>

      {visibleUpcoming.length ? (
        <div
          className="lk-grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "1.4rem",
            alignItems: "start",
          }}
        >
          {visibleUpcoming.map((item) => (
            <ActualityCard
              key={`${item.title}-${item.date || "ongoing"}`}
              item={item}
              compact={compact}
            />
          ))}
        </div>
      ) : (
        <Card style={{ textAlign: "center", padding: "1.8rem" }}>
          <p style={{ color: T.textSoft, lineHeight: 1.75 }}>
            Momentálně tu nemáme žádnou nadcházející akci. Níže najdete proběhlé
            akce nebo sem brzy doplníme nové termíny.
          </p>
        </Card>
      )}

      {!compact && past.length ? (
        <div style={{ marginTop: "4rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.3rem" }}>
            <SLabel>Proběhlé akce</SLabel>
            <STitle>Co už proběhlo</STitle>
          </div>
          <div
            className="lk-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1.4rem",
            }}
          >
            {past.map((item) => (
              <ActualityCard
                key={`${item.title}-${item.date || "past"}`}
                item={item}
                compact={false}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
