export const metadata = {
  title: "Lidé",
  description:
    "Poznejte tým Lesního klubu Hájek - průvodce, kteří se každý den starají o děti a jejich rozvoj v přírodě.",
};

const team = [
  { name: "Lenka Scholzova", role: "Hlavní vedoucí" },
  { name: "Tereza Weinlichova", role: "Průvodkyně" },
  { name: "Tereza Scholzova", role: "Průvodkyně" },
];

export default function Page() {
  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "8rem 2rem 4rem" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>Lidé</h1>
      <p style={{ lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
        Náš tým staví na respektu, bezpečí a partnerství s rodinami.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {team.map((p) => (
          <article key={p.name} style={{ background: "#fff", borderRadius: 14, padding: "1rem", border: "1px solid #e4e2d8" }}>
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>{p.name}</h2>
            <p style={{ color: "#5f6f5f" }}>{p.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
