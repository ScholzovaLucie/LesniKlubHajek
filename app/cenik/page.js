export const metadata = {
  title: "Ceník",
  description:
    "Aktuální ceník Lesního klubu Hájek včetně provozní doby, rozsahu docházky a důležitých platebních informací.",
};

const prices = [
  { days: 2, price: "2 400 Kč / měsíc" },
  { days: 3, price: "3 500 Kč / měsíc" },
  { days: 4, price: "4 400 Kč / měsíc" },
];

export default function Page() {
  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "8rem 2rem 4rem" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>Ceník</h1>
      <p style={{ lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
        Provozní doba je pondělí až čtvrtek, 8:00-16:00. Obědy se hradí zvlášť (45 Kč / den).
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
        {prices.map((p) => (
          <article key={p.days} style={{ background: "#fff", borderRadius: 14, padding: "1rem", border: "1px solid #e4e2d8" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.35rem" }}>{p.days} dny v týdnu</h2>
            <p style={{ color: "#5f6f5f" }}>{p.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
