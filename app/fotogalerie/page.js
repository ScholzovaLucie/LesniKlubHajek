import { css, PageGalerie } from "../page";

export const metadata = {
  title: "Fotogalerie",
  description:
    "Fotogalerie Lesního klubu Hájek - momenty z pobytu dětí v přírodě a z každodenního programu.",
};

export default function Page() {
  return (
    <>
      <style>{css}</style>
      <PageGalerie />
    </>
  );
}
