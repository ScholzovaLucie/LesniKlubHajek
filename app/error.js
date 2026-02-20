"use client";

import StatusPage from "../components/errors/StatusPage";

export default function Error({ reset }) {
  return (
    <StatusPage
      code="500"
      title="Něco se nepovedlo"
      message="Nastala neočekávaná chyba. Zkuste stránku načíst znovu, případně nás kontaktujte."
      primary={{ href: "/", label: "Zpět na úvod" }}
      secondary={{ href: "/kontakt", label: "Kontakt" }}
    >
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={reset}
          style={{
            background: "rgba(47,74,50,0.1)",
            border: "1px solid rgba(47,74,50,0.25)",
            color: "#2f4a32",
            borderRadius: 999,
            padding: "0.5rem 1rem",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Zkusit znovu
        </button>
      </div>
    </StatusPage>
  );
}
