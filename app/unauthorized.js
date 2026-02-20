import StatusPage from "../components/errors/StatusPage";

export default function Unauthorized() {
  return (
    <StatusPage
      code="401"
      title="Nejste přihlášeni"
      message="Pro pokračování je potřeba přihlášení. Vraťte se prosím zpět nebo nás kontaktujte."
      primary={{ href: "/", label: "Zpět na úvod" }}
      secondary={{ href: "/kontakt", label: "Kontakt" }}
    />
  );
}
