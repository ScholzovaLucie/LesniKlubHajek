import { T, QUICK_STATS } from "./constants";

export function SLabel({ children }) {
  return (
    <div
      style={{
        color: T.bright,
        fontWeight: 800,
        fontSize: "0.78rem",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        marginBottom: "0.6rem",
      }}
    >
      {children}
    </div>
  );
}

export function STitle({ children, light }) {
  return (
    <h2
      style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
        fontWeight: 900,
        color: light ? T.white : T.dark,
        letterSpacing: "-0.5px",
        lineHeight: 1.1,
        marginBottom: "1rem",
      }}
    >
      {children}
    </h2>
  );
}

export function Card({ children, style, className }) {
  return (
    <div
      className={`lk-card${className ? ` ${className}` : ""}`}
      style={{
        background: T.white,
        borderRadius: 24,
        boxShadow: "0 4px 24px rgba(60,100,20,0.08)",
        border: "1px solid rgba(106,176,48,0.14)",
        padding: "2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function GreenBtn({ children, onClick, outline, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "inherit",
        fontWeight: 800,
        fontSize: "0.92rem",
        padding: "0.78rem 1.9rem",
        borderRadius: 50,
        cursor: "pointer",
        border: outline ? "2px solid rgba(255,255,255,0.45)" : "none",
        background: outline ? "transparent" : T.pale,
        color: outline ? T.white : T.dark,
        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
        transition: "all 0.2s",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function StatsStrip({ soft }) {
  return (
    <div
      className="lk-stats"
      style={{
        display: "flex",
        gap: "1rem",
        textAlign: "center",
        background: soft ? "rgba(255,255,255,0.08)" : T.white,
        borderRadius: 16,
        padding: "1rem 1.2rem",
        border: soft
          ? "1px solid rgba(255,255,255,0.16)"
          : "1px solid rgba(47,74,50,0.1)",
      }}
    >
      {QUICK_STATS.map((s) => (
        <div key={s.l} style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1.9rem",
              color: soft ? T.pale : T.bright,
            }}
          >
            {s.n}
          </div>
          <div
            style={{
              color: soft ? "rgba(255,255,255,0.78)" : T.textSoft,
              fontSize: "0.77rem",
              fontWeight: 700,
              marginTop: 2,
            }}
          >
            {s.l}
          </div>
        </div>
      ))}
    </div>
  );
}

export function HeroBar({ label, title, sub }) {
  return (
    <div
      style={{
        background: `linear-gradient(155deg, ${T.dark} 0%, ${T.mid} 55%, ${T.bright} 100%)`,
        paddingTop: 120,
        paddingBottom: "3.5rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <SLabel>{label}</SLabel>
        <STitle light>{title}</STitle>
        {sub && (
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
