import { css, PageLide } from "../../components/site";

export const metadata = {
  title: "Lidé",
  description:
    "Poznejte tým Lesního klubu Hájek - průvodce, kteří se každý den starají o děti a jejich rozvoj v přírodě.",
};

export default function Page() {
  return (
    <>
      <style>{css}</style>
      <PageLide />
    </>
  );
}
