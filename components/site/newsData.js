// Sem jen přidávejte další aktuality.
// Povinné: title, posterLink
// Volitelné: date, posterAlt, summary, details, contact
// Pokud date nevyplníte, bere se položka jako dlouhodobá informace.
// Formát date: YYYY-MM-DD
export const actualities = [
  {
    title: "Den Země",
    date: "2026-04-22",
    summary:
      "Oslavte s námi Den Země a udělejme společně něco hezkého pro naši krajinu.",
    details: [
      "Ve středu 22. 4. 2026 se vydáme uklidit studánku a kousek lesa a projdeme se přírodou.",
      "Sraz: Machov 58",
      "Začínáme v 16:00",
      "Po práci nás čeká společné opékání buřtů.",
      "Těšíme se na všechny malé i velké pomocníky.",
    ],
    contact: "Rezervace předem: 737 787 061 nebo lesni.klub.hajek@seznam.cz",
    posterLink: "/actuality/den_zeme.jpg",
    posterAlt: "Plakát akce Den Země",
  },
  {
    title: "Velikonoční program",
    date: "2026-04-01",
    summary: "Těšíme se na vás na velikonočním vyrábění v přírodě.",
    details: [
      "Čeká vás výroba velikonoční výzdoby, hry na čerstvém vzduchu a možnost pohladit si zvířátka.",
      "Kdy: 1. 4. od 15:00",
      "Kde: Machov 58",
      "Za drobný příspěvek budeme vděční.",
    ],
    contact:
      "Prosíme o rezervaci místa předem, stačí napsat do zprávy nebo do komentáře.",
    posterLink: "/actuality/velikonocni_plakat.jpg",
    posterAlt: "Velikonoční plakát Lesního klubu Hájek",
  },
  {
    title: "Nábor nových dětí",
    summary: "Chcete pro své dítě víc než jen klasickou školku?",
    details: [
      "Děti od 2 do 6 let u nás tráví každý den venku, objevují přírodu a učí se hrou.",
      "Každodenní pobyt v přírodě",
      "Rozvoj samostatnosti a fantazie",
      "Přátelské prostředí a nová kamarádství",
      "Pokud jste z Machova a okolí, přijďte se podívat, jak to u nás funguje.",
      "Kapacita je omezená.",
    ],
    contact:
      "Kontakt: 737 787 061, lesni.klub.hajek@seznam.cz, www.lesniklubhajek.cz",
    posterLink: "/actuality/nabor.jpg",
    posterAlt: "Náborový plakát Lesního klubu Hájek",
  },
];

export const newsHighlights = [
  {
    id: "aktuality-web",
    title: "Nová stránka Aktuality",
    text: "Na tomto místě budeme sdílet nadcházející akce, setkání pro zájemce a další praktické informace pro rodiče.",
  },
  {
    id: "nabor-info",
    title: "Aktivně přijímáme nové zájemce",
    text: "Pokud vás oslovuje přírodní vzdělávání a každodenní pobyt venku, rádi se s vámi spojíme a představíme vám, jak klub funguje.",
  },
  {
    id: "social-info",
    title: "Sledujte nás i na sociálních sítích",
    text: "Nejčerstvější momentky z dění v klubu sdílíme také na Facebooku a Instagramu. Na webu pak zůstanou přehledně uvedené termíny a důležité novinky.",
  },
];
