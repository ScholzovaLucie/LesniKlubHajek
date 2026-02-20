export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Lesní klub Hájek. Najdete zde adresu, telefon, e-mail a sociální sítě.",
};

export default function Page() {
  return (
    <section style={{ maxWidth: 960, margin: "0 auto", padding: "8rem 2rem 4rem" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>Kontakt</h1>
      <p style={{ lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.2rem" }}>
        Máte dotaz nebo zájem o členství? Ozvěte se nám.
      </p>
      <ul style={{ lineHeight: 1.9, fontSize: "1.02rem", color: "#2c3a2d", paddingLeft: "1.2rem" }}>
        <li>Lesní klub Hájek, z.s., Machov 58, 549 63</li>
        <li>Telefon: +420 737 787 061</li>
        <li>E-mail: lesni.klub.hajek@seznam.cz</li>
      </ul>
    </section>
  );
}
