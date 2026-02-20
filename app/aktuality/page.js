export const metadata = {
  title: "Aktuality",
  description:
    "Sledujte aktuální dění v Lesním klubu Hájek - novinky, změny v provozu a důležité informace pro rodiče.",
};

const updates = [
  "Aktivně nabíráme nové členy.",
  "Provozní doba: pondělí až čtvrtek, 8:00-16:00.",
  "Program probíhá převážně venku, v souladu s počasím.",
];

export default function Page() {
  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "8rem 2rem 4rem" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>Aktuality</h1>
      <div style={{ display: "grid", gap: "0.8rem" }}>
        {updates.map((item) => (
          <article key={item} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e4e2d8", padding: "0.9rem 1rem" }}>
            {item}
          </article>
        ))}
      </div>
    </section>
  );
}
