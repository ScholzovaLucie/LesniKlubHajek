export const metadata = {
  title: "O nás",
  description:
    "Zjistěte, jak funguje Lesní klub Hájek, jaké máme hodnoty a jak probíhá běžný den v přírodním vzdělávání.",
};

export default function Page() {
  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "8rem 2rem 4rem" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>O nás</h1>
      <p style={{ lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1rem" }}>
        Lesní klub Hájek je bezpečné a respektující prostředí, kde děti tráví většinu dne venku.
        Vedeme je k samostatnosti, spolupráci a vztahu k přírodě.
      </p>
      <p style={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
        Důraz klademe na menší skupinu dětí, individuální přístup a pravidelnou komunikaci s rodiči.
      </p>
    </section>
  );
}
