import { css, PagePartneri } from "../../components/site";

export const metadata = {
  title: "Partneři a sponzoři",
  description:
    "Přehled partnerů a sponzorů Lesního klubu Hájek a možnosti spolupráce na podpoře dětí a přírodního vzdělávání.",
};

export default function Page() {
  return (
    <>
      <style>{css}</style>
      <PagePartneri />
    </>
  );
}
