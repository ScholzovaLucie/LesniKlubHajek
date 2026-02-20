export const routeMap = {
  uvod: "/",
  onas: "/o-nas",
  lide: "/lide",
  cenik: "/cenik",
  galerie: "/fotogalerie",
  kontakt: "/kontakt",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: "Lesní klub Hájek",
  description:
    "Lesní klub Hájek je lesní školka v Machově. Děti se učí hrou v přírodě a tráví většinu dne venku.",
  url: "https://www.lesniklubhajek.cz",
  telephone: "+420737787061",
  email: "lesni.klub.hajek@seznam.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Machov 58",
    postalCode: "549 63",
    addressLocality: "Machov",
    addressCountry: "CZ",
  },
};
