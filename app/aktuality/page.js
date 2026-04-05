import { ActualitiesSection, Card, HeroBar, SLabel, STitle, T, css } from "../../components/site";
import { actualities, newsHighlights } from "../../components/site/newsData";

export const metadata = {
  title: "Aktuality",
  description:
    "Sledujte aktuality Lesního klubu Hájek - nadcházející akce, novinky a důležité informace pro rodiče i zájemce o docházku.",
};

export default function Page() {
  return (
    <>
      <style>{css}</style>
      <HeroBar
        label="Aktuality"
        title="Akce, novinky a důležité informace"
        sub="Tady najdete přehled toho, co se v Lesním klubu Hájek právě děje a co se chystá pro děti, rodiče i nové zájemce."
      />

      <section style={{ background: T.bg, padding: "4.5rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ActualitiesSection items={actualities} />
        </div>
      </section>

      <section style={{ background: "#ece8da", padding: "4.2rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.2rem" }}>
            <SLabel>Novinky</SLabel>
            <STitle>Co je dobré vědět</STitle>
          </div>
          <div
            className="lk-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1.4rem",
            }}
          >
            {newsHighlights.map((item) => (
              <Card key={item.id} style={{ height: "100%", padding: "1.6rem" }}>
                <h3
                  style={{
                    color: T.dark,
                    fontSize: "1.08rem",
                    fontWeight: 800,
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: T.textSoft,
                    lineHeight: 1.75,
                    fontSize: "0.93rem",
                  }}
                >
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
