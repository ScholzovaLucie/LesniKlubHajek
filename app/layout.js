import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { assetPath } from "../lib/assetPath";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lesniklubhajek.cz";

export const metadata = {
  title: {
    default: "Lesní klub Hájek | Lesní školka pro malé objevitele",
    template: "%s | Lesní klub Hájek",
  },
  description:
    "Lesní klub Hájek je lesní školka pro děti 2–6 let. Pobyt v přírodě, hry, dobrodružství a přátelské prostředí pro rozvoj dětí.",
  keywords: [
    "lesní klub",
    "lesní školka",
    "školka v přírodě",
    "děti 2–6 let",
    "Hájek",
    "předškolní vzdělávání",
    "přírodní školka",
  ],
  authors: [{ name: "Lesní klub Hájek" }],
  creator: "Lesní klub Hájek",
  publisher: "Lesní klub Hájek",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Lesní klub Hájek",
    description:
      "Lesní školka pro malé objevitele. Bezpečné a hravé prostředí v přírodě pro děti 2–6 let.",
    url: siteUrl,
    siteName: "Lesní klub Hájek",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: assetPath("/assets/hajek_logo.png"),
        width: 512,
        height: 512,
        alt: "Lesní klub Hájek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lesní klub Hájek",
    description:
      "Lesní školka pro malé objevitele. Bezpečné a hravé prostředí v přírodě pro děti 2–6 let.",
    images: [assetPath("/assets/hajek_logo.png")],
  },
  icons: {
    icon: assetPath("/assets/hajek_logo.png"),
    apple: assetPath("/assets/hajek_logo.png"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
