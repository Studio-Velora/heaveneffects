export const CDN = "https://images.squarespace-cdn.com/content/v1/5db729e666d5206f322b3c21";

export type CatalogItem = {
  slug: string;
  title: string;
  text: string;
  img: string;
};

export type CatalogCategory = {
  slug: string;
  title: string;
  tagline: string;
  blurb: string;
  cover: string;
  items: CatalogItem[];
};

export const categories: CatalogCategory[] = [
  {
    slug: "stages",
    title: "Stages",
    tagline: "Het hart van uw event",
    blurb:
      "Imposante podia op maat — van klassiek elegant tot dramatisch sculpturaal. Het decor waarop uw verhaal zich ontvouwt.",
    cover: `${CDN}/1574807593099-BAIQR92RSA8DA0HADBIA/CAM14497.JPG`,
    items: [
      { slug: "classic-arch", title: "Classic Arch", text: "Symmetrisch podium met een sierlijke boog en florale accenten.", img: `${CDN}/1574807593099-BAIQR92RSA8DA0HADBIA/CAM14497.JPG` },
      { slug: "mirror-stage", title: "Mirror Stage", text: "Spiegelend oppervlak dat licht en bloemen verdubbelt.", img: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG` },
      { slug: "garden-of-eden", title: "Garden of Eden", text: "Een wand van groen, orchideeën en kaarsenlicht.", img: `${CDN}/6a43dcf1-faf3-48da-b4bb-27e5a936ec8b/d8b442ab-9b9f-4ea0-95f8-519c29b6a85d.JPG` },
    ],
  },
  {
    slug: "tables",
    title: "Tables",
    tagline: "Tafels van karakter",
    blurb:
      "Eik, marmer, spiegel en glas. Tafels die zelf al een statement zijn — en de basis vormen voor uw setting.",
    cover: `${CDN}/59337342-d089-4c6b-a419-c4a1086b7a40/IMG_6670.jpg`,
    items: [
      { slug: "oak-feast", title: "Oak Feast", text: "Lange eikenhouten feesttafels met natuurlijke nerf.", img: `${CDN}/59337342-d089-4c6b-a419-c4a1086b7a40/IMG_6670.jpg` },
      { slug: "marble-round", title: "Marble Round", text: "Ronde tafels met marmeren blad voor intieme diners.", img: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG` },
    ],
  },
  {
    slug: "table-setup",
    title: "Table Setup",
    tagline: "Tot in de millimeter verzorgd",
    blurb:
      "Servies, glaswerk, bestek, linnen en placeringen. Een gedekte tafel als kunstwerk — voor elke gast, op elke plek.",
    cover: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG`,
    items: [
      { slug: "ivory-gold", title: "Ivory & Gold", text: "Ivoorkleurig porselein met gouden randen en linnen servet.", img: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG` },
      { slug: "minimal-lin", title: "Minimal Linen", text: "Strak gevouwen linnen, helder glas, één bloem per couvert.", img: `${CDN}/59337342-d089-4c6b-a419-c4a1086b7a40/IMG_6670.jpg` },
    ],
  },
  {
    slug: "seating",
    title: "Seating",
    tagline: "Comfort met allure",
    blurb:
      "Van klassieke Chiavari-stoelen tot stoelen met gouden randen. Comfortabel, sierlijk en stijlvast.",
    cover: `${CDN}/1574876791074-DKGV24NGR198K3XXWA18/dcc-gold-rim-chairs-1.jpg`,
    items: [
      { slug: "gold-rim", title: "Gold Rim Chair", text: "Doorzichtige stoelen met gouden rand — licht en luxe.", img: `${CDN}/1574876791074-DKGV24NGR198K3XXWA18/dcc-gold-rim-chairs-1.jpg` },
      { slug: "ivory-lounge", title: "Ivory Lounge", text: "Loungesetjes in ivoor voor ceremonie of after-party.", img: `${CDN}/6a43dcf1-faf3-48da-b4bb-27e5a936ec8b/d8b442ab-9b9f-4ea0-95f8-519c29b6a85d.JPG` },
    ],
  },
  {
    slug: "decoration",
    title: "Decoration",
    tagline: "Sfeer in elk hoekje",
    blurb:
      "Florale composities, kaarslicht, draperieën en accessoires. De finishing touch die alles tot een geheel maakt.",
    cover: `${CDN}/6a43dcf1-faf3-48da-b4bb-27e5a936ec8b/d8b442ab-9b9f-4ea0-95f8-519c29b6a85d.JPG`,
    items: [
      { slug: "florals", title: "Floral Compositions", text: "Tafel-, podium- en pilaarstukken van seizoensbloemen.", img: `${CDN}/6a43dcf1-faf3-48da-b4bb-27e5a936ec8b/d8b442ab-9b9f-4ea0-95f8-519c29b6a85d.JPG` },
      { slug: "candle", title: "Candlelight", text: "Tientallen kaarsen in glas, op spiegels en in kandelaars.", img: `${CDN}/36f0fe81-04a7-47ec-887d-e2e3ad7e5e81/9199c61c-7389-4c4e-8dde-de947382bc16.JPG` },
    ],
  },
  {
    slug: "lights",
    title: "Lights",
    tagline: "Licht dat ruimtes laat ademen",
    blurb:
      "Sfeerverlichting, uplighting, kroonluchters en sterrenhemels. Lichtontwerp dat elke ruimte transformeert.",
    cover: `${CDN}/1575728892091-3JP9F7KGVW4CAR0NF4QH/1.+Sfeerverlichting+%2810%29.jpg`,
    items: [
      { slug: "ambiance", title: "Sfeerverlichting", text: "Warme uplighting langs wanden en zuilen.", img: `${CDN}/1575728892091-3JP9F7KGVW4CAR0NF4QH/1.+Sfeerverlichting+%2810%29.jpg` },
      { slug: "starry", title: "Starry Sky", text: "Een hemel vol lichtjes boven de dansvloer.", img: `${CDN}/5c14a3a5-3532-4c4b-942d-94fe442e5ea2/image00001+Groot.jpeg` },
    ],
  },
  {
    slug: "special-effects",
    title: "Special Effects",
    tagline: "Magische momenten",
    blurb:
      "Indoor vuurwerk, laser, laaghangende rook, confetti en bellenblaas. Wauw-momenten die niemand vergeet.",
    cover: `${CDN}/1574985674547-OA6L50MZ55T0Q2Z84AQG/IMG_1888.JPG`,
    items: [
      { slug: "indoor-firework", title: "Indoor Firework", text: "Vuurwerkspektakel voor taartsnijden, opkomst of dans.", img: `${CDN}/1574986767985-EL4TRY2UWRA5ZTG0QCW5/fireworks+%289%29.jpg` },
      { slug: "laser-show", title: "Laser Show", text: "Een lasershow als ultieme eyecatcher.", img: `${CDN}/5c14a3a5-3532-4c4b-942d-94fe442e5ea2/image00001+Groot.jpeg` },
      { slug: "low-smoke", title: "Laaghangende Rook", text: "Dikke pluimen rook voor een magisch moment.", img: `${CDN}/1574986886717-6SHQB0W4WWIFV5DQVLHO/Laaghangende+rook+%2826%29.jpg` },
      { slug: "fx-catwalk", title: "Special FX Catwalk", text: "Rook, kaarsen en bloemwerk op een spiegelpad.", img: `${CDN}/36f0fe81-04a7-47ec-887d-e2e3ad7e5e81/9199c61c-7389-4c4e-8dde-de947382bc16.JPG` },
      { slug: "confetti", title: "Confetti", text: "1 kg brandveilige confetti in goud, zilver of wit.", img: `${CDN}/1574987067335-RDDPITWFPPKJ70MME5OG/WeddingConfetti2.jpg` },
      { slug: "bubbles", title: "Bellenblaas", text: "Een wolk van zeepbellen — sprookjesachtig.", img: `${CDN}/1574987091444-6SRLMU99Y5B8WIVG9MI9/bellen.jpg` },
    ],
  },
  {
    slug: "accessoires",
    title: "Accessoires",
    tagline: "De finishing touch",
    blurb:
      "Welkomstborden, naamkaartjes, taartstandaarden, vazen en sierlijke details die alles afmaken.",
    cover: `${CDN}/b9e290c2-6d15-4363-9666-c4a4819d3593/IMG_3577.JPG`,
    items: [
      { slug: "signage", title: "Welkomstborden", text: "Op maat gekalligrafeerde borden in goud en ivoor.", img: `${CDN}/b9e290c2-6d15-4363-9666-c4a4819d3593/IMG_3577.JPG` },
      { slug: "stands", title: "Taartstandaarden", text: "Marmeren, spiegelende en gouden standaarden.", img: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG` },
    ],
  },
];
