import StatusPage from "../components/errors/StatusPage";

export default function Forbidden() {
  return (
    <StatusPage
      code="403"
      title="Sem teď není přístup"
      message="K této části webu momentálně nemáte oprávnění. Pokud je to omyl, ozvěte se nám."
      primary={{ href: "/", label: "Zpět na úvod" }}
      secondary={{ href: "/kontakt", label: "Napsat nám" }}
    />
  );
}
