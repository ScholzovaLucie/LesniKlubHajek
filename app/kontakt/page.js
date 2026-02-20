import { css, PageKontakt } from "../page";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Lesní klub Hájek. Najdete zde adresu, telefon, e-mail a sociální sítě.",
};

export default function Page() {
  return (
    <>
      <style>{css}</style>
      <PageKontakt />
    </>
  );
}
