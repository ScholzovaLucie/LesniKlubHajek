import { css, PageCenik } from "../page";

export const metadata = {
  title: "Ceník",
  description:
    "Aktuální ceník Lesního klubu Hájek včetně provozní doby, rozsahu docházky a důležitých platebních informací.",
};

export default function Page() {
  return (
    <>
      <style>{css}</style>
      <PageCenik />
    </>
  );
}
