import { css, PageONas } from "../page";

export const metadata = {
  title: "O nás",
  description:
    "Zjistěte, jak funguje Lesní klub Hájek, jaké máme hodnoty a jak probíhá běžný den v přírodním vzdělávání.",
};

export default function Page() {
  return (
    <>
      <style>{css}</style>
      <PageONas />
    </>
  );
}
