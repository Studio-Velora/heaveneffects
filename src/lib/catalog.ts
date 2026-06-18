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
    tagline: "Heaven will give you a fairytale feeling",
    blurb:
      "Onze design stages worden door eigen designers ontworpen tot een prachtig eindresultaat. Geleverd met bruidsbank, ondervloer, verlichting en accessoires.",
    cover: `${CDN}/0c2ddfdb-a0b1-42d5-938f-d2706108a15f/0J1A0926+2.JPG`,
    items: [
      { slug: "essential-of-heaven", title: "Essential of Heaven", text: "Klassiek podium met bruidsbank, witte ondervloer en sierlijke verlichting.", img: `${CDN}/b1be03c8-7e89-46de-9c78-ebca8633c76c/b1303884-063b-4444-bade-aa3023fe74af.JPG` },
      { slug: "petit-arch-of-heaven", title: "Petit Arch of Heaven", text: "Een sierlijke boog als hart van het podium.", img: `${CDN}/f38f957f-4bcd-49af-bc9c-86dbc22afc2c/66d438f6-f447-41f7-a61c-cafd48ec3ae9.JPG` },
      { slug: "less-is-heaven", title: "Less is Heaven", text: "Minimaal en strak — voor wie houdt van rust en lijn.", img: `${CDN}/6be5209f-f67b-429b-98a1-09d8157c5708/tempImageihAHqy.jpg` },
      { slug: "silence-of-heaven", title: "Silence of Heaven", text: "Pilaren, gordijnen en bloemen in zachte tinten.", img: `${CDN}/da86b0ae-0d72-43fd-89a8-49d237e60dcb/totallylove-5689.jpg` },
      { slug: "silence-of-heaven-2", title: "Silence of Heaven II", text: "Bredere variant tot 8M — voor grotere zalen.", img: `${CDN}/5bbfb8e3-c619-4620-a387-232ca03cd0d9/image00004.jpeg` },
      { slug: "tradition-of-heaven", title: "Tradition of Heaven", text: "Klassieke vormen, rijke bloemen, warme uitstraling.", img: `${CDN}/38a189b9-5da3-4d08-b74b-5c8d4b4c3649/3F2A0324.jpg` },
      { slug: "beldi-of-heaven", title: "Beldi of Heaven", text: "Marokkaans geïnspireerd met sierlijke ornamenten.", img: `${CDN}/77583589-4b2e-442c-88aa-21dc06aa2bc8/IMG_9114.jpg` },
      { slug: "taqlidi-of-heaven", title: "Taqlidi of Heaven", text: "Traditioneel decor met luxe afwerking.", img: `${CDN}/ffa4b2fc-b303-4a1e-8c54-3773507bdc5a/image00009.jpeg` },
      { slug: "fes-el-bali", title: "Fes el Bali of Heaven", text: "Oosters geïnspireerde stage met rijke details.", img: `${CDN}/1c0821a6-bc32-4e75-a889-6f3c19da7000/tempImagezB40jH.jpg` },
      { slug: "alhambra", title: "Alhambra of Heaven", text: "Geometrische bogen geïnspireerd op het Alhambra.", img: `${CDN}/937dae6a-ea0b-4d1a-bbc9-2e0b175d3949/tempImage3v05Fm.jpg` },
      { slug: "white-qasr", title: "White Qasr of Heaven", text: "Een wit paleis — sereen en verstild.", img: `${CDN}/913d2aa9-fa91-439b-9467-cc0fc503fbf6/3E5A8967.jpg` },
      { slug: "emar", title: "Emar of Heaven", text: "Statige bogen, kandelaars en bloemwerk.", img: `${CDN}/ee68fe11-924d-48c9-9cc2-85ec407a46d7/DSC_1314.png` },
      { slug: "eufraat", title: "Eufraat of Heaven", text: "Vloeiende vormen — een eerbetoon aan de rivier.", img: `${CDN}/cb75c3f8-4009-4f3c-9f53-109102b342cd/65ca737e-3217-40e9-84fa-afe20ea1910c.png` },
      { slug: "velvet", title: "Velvet of Heaven", text: "Fluweel in groen of beige — rijk en warm.", img: `${CDN}/8acb9633-d8ef-44e6-9cc6-6984b2862259/7d343684-21f4-4f41-bb78-d722ee1862a0+kopie.png` },
      { slug: "seventh-heaven", title: "Seventh Heaven", text: "Hemels podium met overvloed aan bloemen.", img: `${CDN}/cfa40cee-c455-4ee5-8d43-152f769f9b6b/tempImagezmDKet.jpg` },
      { slug: "superiority", title: "Superiority of Heaven", text: "Spectaculair 12M podium voor grote zalen.", img: `${CDN}/7a03fa25-49df-4723-b809-0434da882b87/0J1A0926.JPG` },
      { slug: "creation-crystal", title: "Creation of Heaven (crystal)", text: "Kristallen accenten die het licht laten dansen.", img: `${CDN}/bee2faf9-8c4c-4391-9a51-7e60cab30731/tempImagefNk0tO.jpg` },
      { slug: "creation", title: "Creation of Heaven", text: "Een ontwerp waarin alles samenkomt.", img: `${CDN}/4993b6cc-8deb-498f-b233-aac87dcd9278/3F2A9590.JPG` },
      { slug: "queendome", title: "Queendome of Heaven", text: "Voor wie als koningin de zaal binnenkomt.", img: `${CDN}/276594d3-023a-463f-9ac2-8e46d9c85def/IMG_1863.jpg` },
    ],
  },
  {
    slug: "tables",
    title: "Tables",
    tagline: "We create beautiful memories",
    blurb:
      "Groepstafels, taarttafels, welkomstafels, bruidstroontafels — voor elk gezelschap een passende tafel, op maat ontworpen.",
    cover: `${CDN}/1574813906103-IRQ49Y7T05S4B2RV01I1/American+Dinner+table6.PNG`,
    items: [
      { slug: "folding-round", title: "Folding Table (rond)", text: "1.20 (8p) · 1.50 (10p) · 1.80 (12p)", img: `${CDN}/d498d39c-93e0-4367-b69e-04edaf9f6996/bolero-inklapbare-buffettafel-rond-153cm.jpg` },
      { slug: "folding-rect", title: "Folding Table (rechthoek)", text: "Formaat 2M × 0.80M.", img: `${CDN}/1051e7ef-74a5-4439-a5ce-7b3c08f8e25c/1847_008485741_0.jpg` },
      { slug: "riviera", title: "Riviera Table", text: "1.50 voor 10 personen. Optioneel met spiegelplaat.", img: `${CDN}/f0dd15bb-0619-4298-8562-acd5f01c075b/DSC00815.jpg` },
      { slug: "dubai", title: "Dubai Table", text: "Voor 10 personen — luxe en statig.", img: `${CDN}/1574814690466-VSL0JN7TJDWKNKPE2Q3J/IMG_1065.JPG` },
      { slug: "dior", title: "Dior Table", text: "1.20 (6–8p) of 1.50 (10p).", img: `${CDN}/e7b90ca0-2fbc-4dee-a9f9-58107ea13a14/IMG_1180.jpg` },
      { slug: "santropez", title: "Santropez Table", text: "1.50 voor 10 personen.", img: `${CDN}/5adacad7-dde7-4d7f-8a5e-0265891b0a30/IMG_6674.jpg` },
      { slug: "santropez-dinner", title: "Santropez Dinner Table", text: "2.40 × 1.20 met centrepieces en flowerwaterfall.", img: `${CDN}/8d668ddd-e0ef-4db9-9cc1-b53583c00295/a1c8153f-8ecf-4c20-a2e9-eede994aea86.jpg` },
      { slug: "american-dinner", title: "American Dinner Table", text: "Op maat met bekleding, centrepieces en stoelen.", img: `${CDN}/f02a97df-3be6-42cb-beb9-d10420755337/0J1A1765.JPG` },
      { slug: "custom-dinner", title: "Custom Dinner Table", text: "Voor 10 personen, met custom logo of design.", img: `${CDN}/c2709690-9170-44ba-ba63-9255476322c5/b6af8251-3434-45b1-b7b1-b248a7c84488.jpg` },
      { slug: "blossom-dinner", title: "Blossom Dinner Table", text: "Blossomtree boven tafel — voor 8 tot 12 personen.", img: `${CDN}/1574812212304-8GOY4VGMJ0MIT45BPK14/Blossem+dinner+table3.jpeg` },
      { slug: "shape-dinner", title: "Shape Dinner Table", text: "Voor 10 personen met flowerwaterfall.", img: `${CDN}/bdeb0031-b8d0-44fa-8ba1-24629cb4e204/2c6ba92d-158b-4dca-843b-24448d00d643.JPG` },
      { slug: "reflection-gold", title: "Reflection of Heaven (Gold)", text: "Spiegelende tafel met gouden onderstuk.", img: `${CDN}/1574812558689-89MRIGL6LEFYLAVBMA7L/DSC00789.jpg` },
      { slug: "reflection-silver", title: "Reflection of Heaven (Silver)", text: "Zilveren variant met luxe stoelen naar keuze.", img: `${CDN}/1574813003804-VGS24EHKCPJUQWJVJSYJ/DSC00671.jpg` },
      { slug: "dior-dinner", title: "Dior Dinner Table", text: "Voor 10 personen met mastercentrepiece.", img: `${CDN}/5bd423e2-89a1-427a-b0ff-b5b1f486d9b6/IMG_7733.jpg` },
      { slug: "kids-dinner", title: "Kids Dinner Table", text: "Voor 12 kinderen — met roze stoelen.", img: `${CDN}/fd542179-9908-4416-9b8b-3c65bf635e91/c0fdf889-abc7-49bd-8e68-5ac578d728a2.jpg` },
      { slug: "dubai-dinner", title: "Dubai Dinner Table", text: "8–16 personen, transparante Chiavari stoelen.", img: `${CDN}/1574813281854-YBR0MBI942UTWO222VQG/Dubai+Dinner+table1.JPG` },
      { slug: "snow-cake", title: "Snow Cake Table", text: "1.10M taarttafel in winters wit.", img: `${CDN}/38175123-c772-4fa7-8176-a961f3ce3567/e30d3186-a101-4cd3-91b8-28f00359e9e1+2.png` },
      { slug: "american-cake", title: "American Cake Table", text: "Met logo of namen op maat.", img: `${CDN}/5edc3ad1-46f3-4d25-8b75-c71af1aeda32/BBA5A551-4809-4927-AFD7-30DC4678EAF5.jpg` },
      { slug: "invisible-cake", title: "The Invisible Cake Table", text: "1.10M transparante taarttafel.", img: `${CDN}/1574814878307-AMOQJXK5CKD8H2TBBW74/The+invisble+cake+table.jpg` },
    ],
  },
  {
    slug: "table-setup",
    title: "Table Setup",
    tagline: "Verzorgd tot in het kleinste detail",
    blurb:
      "Servies, glaswerk, bestek, linnen en placeringen. Een gedekte tafel als kunstwerk — voor elke gast, op elke plek.",
    cover: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG`,
    items: [
      { slug: "ivory-gold", title: "Ivory & Gold", text: "Ivoorkleurig porselein met gouden randen en linnen servet.", img: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG` },
      { slug: "minimal-linen", title: "Minimal Linen", text: "Strak gevouwen linnen, helder glas, één bloem per couvert.", img: `${CDN}/59337342-d089-4c6b-a419-c4a1086b7a40/IMG_6670.jpg` },
      { slug: "mirror-setup", title: "Mirror Setup", text: "Spiegelende ondergrond die kaarsen en bloemen verdubbelt.", img: `${CDN}/1574812558689-89MRIGL6LEFYLAVBMA7L/DSC00789.jpg` },
    ],
  },
  {
    slug: "seating",
    title: "Seating",
    tagline: "Comfort met allure",
    blurb:
      "Van klassieke Chiavari-stoelen tot transparante stoelen met gouden randen. Comfortabel, sierlijk en stijlvast.",
    cover: `${CDN}/1574876791074-DKGV24NGR198K3XXWA18/dcc-gold-rim-chairs-1.jpg`,
    items: [
      { slug: "gold-rim", title: "Gold Rim Chair", text: "Transparante stoelen met gouden rand — licht en luxe.", img: `${CDN}/1574876791074-DKGV24NGR198K3XXWA18/dcc-gold-rim-chairs-1.jpg` },
      { slug: "chiavari-clear", title: "Chiavari Transparant", text: "Doorzichtige Chiavari stoelen voor een zwevende setting.", img: `${CDN}/1574813281854-YBR0MBI942UTWO222VQG/Dubai+Dinner+table1.JPG` },
      { slug: "kids-pink", title: "Kids Seating (Pink)", text: "Speelse roze stoeltjes voor de kindertafel.", img: `${CDN}/fd542179-9908-4416-9b8b-3c65bf635e91/c0fdf889-abc7-49bd-8e68-5ac578d728a2.jpg` },
    ],
  },
  {
    slug: "decoration",
    title: "Decoration",
    tagline: "Create your universe",
    blurb:
      "Trapdecoratie, welkomstborden, bogen, onderborden en sierlijke stukken — alles om uw locatie helemaal af te maken.",
    cover: `${CDN}/1202f1b6-4d3c-4f62-9192-eb338952a046/PQ7A9093.JPG`,
    items: [
      { slug: "greatest-entry", title: "The Greatest Entry", text: "Statige entree met verlichting, plafondbloemen en gordijnen.", img: `${CDN}/2890fa16-34f3-4bed-9e1e-a70cd133f3c8/38202d2b-eec0-41bd-bc4e-7264c5fd7b3f.JPG` },
      { slug: "greatest-entry-2", title: "The Greatest Entry #2", text: "Variatie met champagne of rose gordijnen.", img: `${CDN}/0909b04a-b1a0-46ba-b485-424ccfa8da76/tempImage1FnWOB.jpg` },
      { slug: "greatest-entry-3", title: "The Greatest Entry #3", text: "Met vierkante bloemenpoort in gewenste kleur.", img: `${CDN}/b7ab8bf4-d5be-4a18-ba43-7dc1615e52a2/tempImageUH2hlN.jpg` },
      { slug: "greatest-entry-4", title: "The Greatest Entry #4", text: "Met sierlijke bloemenpoort en kaarsen.", img: `${CDN}/d0ceaa4b-c0e7-487e-a2e6-e661ab5817f8/tempImage9oyjoR.jpg` },
      { slug: "greatest-entry-5", title: "The Greatest Entry #5", text: "Met Arabische tapijten en loper in gewenste kleur.", img: `${CDN}/18c9822e-bf2e-4872-8350-a6a4689eee5c/IMG_3113.JPG` },
      { slug: "greatest-entry-6", title: "The Greatest Entry #6", text: "Verlichting, plafondbloemen en gordijnen op maat.", img: `${CDN}/8d66923b-d6bb-4b43-94ae-ed5b8bac252f/ee6dadbe-7202-4151-87a2-6c7533917a30.png` },
      { slug: "triple-gate", title: "Triple Gate Entry", text: "Drievoudige poort met bloemen in elke kleur.", img: `${CDN}/68f32d5a-b37b-4317-b138-498190d4c4d2/tempImageovSkLg.jpg` },
      { slug: "triple-monarch", title: "Triple Monarch Entry", text: "Monumentale entree met loper en bloemen op maat.", img: `${CDN}/059449ad-6ad0-40fd-9033-75fd52bf99f0/image00010.jpg` },
      { slug: "gheit-entry", title: "Gheit From Heaven Entry", text: "Arabische hanglampen en sierlijke loper.", img: `${CDN}/e8ba9dd0-9bb4-4700-96ca-bbfbbb67bcd5/IMG_3224.jpg` },
      { slug: "welkomstbord-1", title: "Welkomstbord #1", text: "Welkomstbord met bloemstuk in themakleur.", img: `${CDN}/2b1e9bfa-d6d3-4e59-8c6b-8311df3b7ede/tempImageaal0OU.jpg` },
      { slug: "welkomstbord-2", title: "Welkomstbord #2", text: "Met stickers en bloemstuk in themakleur.", img: `${CDN}/16f08398-d5b0-4464-9620-da4a8bf3bce1/IMG_2181.jpg` },
      { slug: "welkomstbord-3", title: "Welkomstbord #3", text: "Met stickers, kaarsen en bloemstuk in themakleur.", img: `${CDN}/aed75897-ab3e-4015-a7f1-f151f3325bc1/743fafe3-8fa2-4622-8772-d716cce9dd8c.JPG` },
      { slug: "welkomstbord-4", title: "Welkomstbord #4", text: "Stickers met bloemstuk in themakleur.", img: `${CDN}/90b80e53-105f-4c79-a318-ee2e824f298a/b00cef37-d0e7-41a0-8bff-ec6ea53c8d1c.png` },
      { slug: "welkomstbord-5", title: "Welkomstbord #5", text: "Acrylbord met bloemstuk in themakleur.", img: `${CDN}/a8920416-4c68-4a55-af9f-ad8a452c034b/IMG_2731.png` },
      { slug: "welkomstbord-6", title: "Welkomstbord #6", text: "Stickers met bloemstuk in themakleur.", img: `${CDN}/188fb75b-bc21-4c2b-a913-aa6ebebb6d86/IMG_8892.jpg` },
      { slug: "welkomstbord-7", title: "Welkomstbord #7", text: "Stickers met bloemstuk in themakleur.", img: `${CDN}/f5858f3a-2132-480c-9395-c8b75ba9043e/F2E7B56F-A6F8-40E1-88C1-6B6D597C636F.jpg` },
      { slug: "welkomstbord-8", title: "Welkomstbord #8", text: "Spiegel met stickers en bloemstuk.", img: `${CDN}/04fcb595-3127-410a-beba-188bc833a0e4/image00014.png` },
      { slug: "welkomstbord-9", title: "Welkomstbord #9", text: "Stickers, bloemstuk en verlichting.", img: `${CDN}/9774c377-4509-4710-98a0-47236603c26c/image00009+Groot.jpeg` },
    ],
  },
  {
    slug: "lights",
    title: "Lights",
    tagline: "Licht dat ruimtes laat ademen",
    blurb:
      "Sfeerverlichting, uplighting en sterrenhemels. Lichtontwerp dat elke ruimte transformeert tot een wereld op zich.",
    cover: `${CDN}/1575728892091-3JP9F7KGVW4CAR0NF4QH/1.+Sfeerverlichting+%2810%29.jpg`,
    items: [
      { slug: "ambiance", title: "Sfeerverlichting", text: "Warme uplighting langs wanden en zuilen.", img: `${CDN}/1575728892091-3JP9F7KGVW4CAR0NF4QH/1.+Sfeerverlichting+%2810%29.jpg` },
      { slug: "starry", title: "Starry Sky", text: "Een hemel vol lichtjes boven de dansvloer.", img: `${CDN}/5c14a3a5-3532-4c4b-942d-94fe442e5ea2/image00001+Groot.jpeg` },
      { slug: "stage-light", title: "Stage Lighting", text: "Podiumverlichting die kleuren tot leven brengt.", img: `${CDN}/4993b6cc-8deb-498f-b233-aac87dcd9278/3F2A9590.JPG` },
    ],
  },
  {
    slug: "special-effects",
    title: "Special Effects",
    tagline: "This is proof enough to believe in Heaven",
    blurb:
      "Indoor vuurwerk, laser, laaghangende rook, confetti en bellenblaas. Wauw-momenten die niemand vergeet — binnen én buiten inzetbaar.",
    cover: `${CDN}/1574985674547-OA6L50MZ55T0Q2Z84AQG/IMG_1888.JPG`,
    items: [
      { slug: "indoor-firework", title: "Indoor Firework", text: "Vuurwerkspektakel voor taartsnijden, opkomst of dans.", img: `${CDN}/1574986767985-EL4TRY2UWRA5ZTG0QCW5/fireworks+%289%29.jpg` },
      { slug: "laser-show", title: "Laser Show", text: "Een lasershow als ultieme eyecatcher.", img: `${CDN}/5c14a3a5-3532-4c4b-942d-94fe442e5ea2/image00001+Groot.jpeg` },
      { slug: "low-smoke", title: "Laaghangende Rook", text: "Dikke pluimen rook voor een magisch moment.", img: `${CDN}/1574986886717-6SHQB0W4WWIFV5DQVLHO/Laaghangende+rook+%2826%29.jpg` },
      { slug: "fx-catwalk", title: "Special FX Catwalk", text: "Rook, kaarsen en bloemwerk op een spiegelpad.", img: `${CDN}/36f0fe81-04a7-47ec-887d-e2e3ad7e5e81/9199c61c-7389-4c4e-8dde-de947382bc16.JPG` },
      { slug: "confetti", title: "Confetti Blaster", text: "1 kg brandveilige confetti in goud, zilver of wit.", img: `${CDN}/1574987067335-RDDPITWFPPKJ70MME5OG/WeddingConfetti2.jpg` },
      { slug: "bubbles", title: "Bellenblaas", text: "Een wolk van zeepbellen — sprookjesachtig.", img: `${CDN}/1574987091444-6SRLMU99Y5B8WIVG9MI9/bellen.jpg` },
    ],
  },
  {
    slug: "accessoires",
    title: "Accessoires",
    tagline: "De finishing touch",
    blurb:
      "Welkomstborden, naamkaartjes, taartstandaarden, vazen en sierlijke details die uw event helemaal afmaken.",
    cover: `${CDN}/b9e290c2-6d15-4363-9666-c4a4819d3593/IMG_3577.JPG`,
    items: [
      { slug: "signage", title: "Welkomstborden", text: "Op maat gekalligrafeerde borden in goud en ivoor.", img: `${CDN}/b9e290c2-6d15-4363-9666-c4a4819d3593/IMG_3577.JPG` },
      { slug: "stands", title: "Taartstandaarden", text: "Marmeren, spiegelende en gouden standaarden.", img: `${CDN}/22049ff6-1d68-452b-833d-6d6a9caf05af/IMG_8881.JPG` },
      { slug: "candle-pillars", title: "Kaars Pilaren", text: "Slanke pilaren met kaarsen voor sfeer in elke hoek.", img: `${CDN}/36f0fe81-04a7-47ec-887d-e2e3ad7e5e81/9199c61c-7389-4c4e-8dde-de947382bc16.JPG` },
    ],
  },
];
