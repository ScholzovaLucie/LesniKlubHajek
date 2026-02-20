import Image from "next/image";

export const metadata = {
  title: "Fotogalerie",
  description:
    "Fotogalerie Lesního klubu Hájek - momenty z pobytu dětí v přírodě a z každodenního programu.",
};

const images = [
  "/assets/deti_u_stromu.png",
  "/assets/animals.png",
  "/assets/hajek_logo.png",
];

export default function Page() {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "8rem 2rem 4rem" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>Fotogalerie</h1>
      <p style={{ lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.4rem" }}>
        Ukázka momentů z Lesního klubu Hájek.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {images.map((src) => (
          <div key={src} style={{ borderRadius: 12, overflow: "hidden", background: "#fff", border: "1px solid #e4e2d8" }}>
            <Image src={src} alt="Fotografie z Lesního klubu Hájek" width={900} height={600} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
