import StatusPage from "../components/errors/StatusPage";

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      title="Tady jsme stezku nenašli"
      message="Stránka, kterou hledáte, už neexistuje nebo byla přesunuta. Vraťte se na úvod a pokračujte odtud."
      primary={{ href: "/", label: "Zpět na úvod" }}
      secondary={{ href: "/kontakt", label: "Kontakt" }}
    />
  );
}
