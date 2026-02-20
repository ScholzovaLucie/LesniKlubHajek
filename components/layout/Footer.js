import Image from "next/image";
import Link from "next/link";
import { assetPath } from "../../lib/assetPath";

const T = {
  dark: "#2f4a32",
  pale: "#d7e4c9",
  white: "#ffffff",
};

const NAV_ITEMS = [
  { href: "/", label: "Úvod" },
  { href: "/o-nas", label: "O nás" },
  { href: "/lide", label: "Lidé" },
  { href: "/cenik", label: "Ceník" },
  { href: "/fotogalerie", label: "Fotogalerie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: `linear-gradient(135deg, ${T.dark}, #1a3a08)`,
        padding: "2.8rem 2rem",
        fontFamily: "inherit",
      }}
    >
      <div
        className="lk-footer-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: "0.9rem",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.75)",
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 5px 12px rgba(0,0,0,0.22)",
              }}
            >
              <Image
                src={assetPath("/assets/hajek_logo.png")}
                alt="Logo Lesní klub Hájek"
                width={34}
                height={34}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: 2,
                }}
              />
            </div>
            <div
              style={{ color: T.white, fontWeight: 900, fontSize: "1.05rem" }}
            >
              Lesní klub Hájek
            </div>
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.48)",
              fontSize: "0.82rem",
              lineHeight: 1.75,
            }}
          >
            Přírodní mateřská škola v Machově. Vzdělávání hrou v přírodě pro
            děti od 2 do 6 let.
          </p>
        </div>

        <div>
          <div
            style={{
              color: T.pale,
              fontWeight: 800,
              fontSize: "0.73rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            Navigace
          </div>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.52)",
                fontSize: "0.83rem",
                marginBottom: "0.45rem",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <div
            style={{
              color: T.pale,
              fontWeight: 800,
              fontSize: "0.73rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            Kontakt
          </div>
          <p
            style={{
              color: "rgba(255,255,255,0.52)",
              fontSize: "0.82rem",
              lineHeight: 1.75,
            }}
          >
            Machov 58, 549 63
            <br />
            +420 737 787 061
            <br />
            lesni.klub.hajek@seznam.cz
          </p>
        </div>

        <div>
          <div
            style={{
              color: T.pale,
              fontWeight: 800,
              fontSize: "0.73rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.9rem",
            }}
          >
            Sociální sítě
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=100094171486836"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              color: "rgba(255,255,255,0.52)",
              fontSize: "0.82rem",
              marginBottom: "0.45rem",
            }}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/lesni_klub_hajek/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              color: "rgba(255,255,255,0.52)",
              fontSize: "0.82rem",
            }}
          >
            Instagram
          </a>
          <a
            href="https://s-weby.cz"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              borderRadius: 10,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            <Image
              src={assetPath("/assets/sweby_logo.png")}
              alt="Logo Ing. Lucie Nováková"
              width={30}
              height={6}
              style={{ width: "30px", height: "auto", display: "block" }}
            />
          </a>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          marginTop: "2rem",
          paddingTop: "1.3rem",
          textAlign: "center",
          color: "rgba(255,255,255,0.22)",
          fontSize: "0.75rem",
        }}
      >
        © 2024 Lesní klub Hájek, z.s. - Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
