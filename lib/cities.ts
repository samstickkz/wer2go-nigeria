/**
 * Per-city content for the /[city] landing pages. Each entry is genuinely
 * distinct (real neighbourhoods, the actual airport, sample routes, local FAQs)
 * so the pages are useful local content, not thin doorway duplicates.
 */
export type CityFAQ = { q: string; a: string };

export type City = {
  slug: string;
  name: string;
  state: string;
  /** Short label used in <title>/H1 context, e.g. "Nigeria's capital". */
  descriptor: string;
  metaTitle: string;
  metaDescription: string;
  /** 1-2 sentence intro, unique per city. */
  intro: string;
  heroImage: string;
  heroAlt: string;
  /** Real neighbourhoods / districts we serve. */
  areas: string[];
  airport: { name: string; code: string; note: string };
  /** Sample popular routes ["From", "To"]. */
  routes: [string, string][];
  faqs: CityFAQ[];
};

export const CITIES: City[] = [
  {
    slug: "abuja",
    name: "Abuja",
    state: "Federal Capital Territory",
    descriptor: "Nigeria's capital",
    metaTitle: "Book a Ride in Abuja — Ride-Hailing App",
    metaDescription:
      "Book a ride in Abuja with wer2 GO — NIN-verified drivers, upfront fare estimates and in-app SOS. Serving the CBD, Maitama, Wuse II, Gwarinpa and the airport.",
    intro:
      "wer2 GO moves riders across the Federal Capital Territory — from the ministries of the Central Business District to the calm streets of Maitama and the fast-growing suburbs out toward Gwarinpa and Kubwa. Book in seconds, see your fare estimate before you ride, and travel with a driver verified by NIN and BVN.",
    heroImage: "/brand/ng-aso-rock.jpg",
    heroAlt: "Aso Rock, Abuja — wer2 GO rides across the Federal Capital Territory",
    areas: [
      "Maitama",
      "Asokoro",
      "Wuse II",
      "Wuse",
      "Garki",
      "Central Business District",
      "Gwarinpa",
      "Jabi",
      "Utako",
      "Life Camp",
      "Lugbe",
      "Kubwa",
    ],
    airport: {
      name: "Nnamdi Azikiwe International Airport",
      code: "ABV",
      note: "About 40 km — roughly 45 minutes — from the city centre. Book ahead for early flights and your driver meets you at the terminal.",
    },
    routes: [
      ["Wuse II", "Central Business District"],
      ["Maitama", "Jabi Lake Mall"],
      ["Gwarinpa", "Nnamdi Azikiwe Airport"],
      ["Garki", "Asokoro"],
    ],
    faqs: [
      {
        q: "How much does a wer2 GO ride cost in Abuja?",
        a: "You see an estimated fare before you book, based on the real road distance and current demand. There is no locked meter surprise at the end — the estimate is shown up front so you know roughly what to expect.",
      },
      {
        q: "Can I book an airport ride to Nnamdi Azikiwe (ABV)?",
        a: "Yes. Set your pickup anywhere in the FCT and your destination to the airport, book ahead for early flights, and your verified driver meets you for the run out to Bill Clinton Drive.",
      },
      {
        q: "Which parts of Abuja does wer2 GO cover?",
        a: "Across the FCT — from the Central Business District, Maitama, Asokoro and Wuse to the suburbs like Gwarinpa, Life Camp, Lugbe and Kubwa.",
      },
      {
        q: "Are wer2 GO drivers in Abuja verified?",
        a: "Every driver is verified with their NIN and BVN and onboarded in person before their first trip. You see the driver, vehicle and rating before they arrive, with an in-app SOS on every ride.",
      },
    ],
  },
  {
    slug: "port-harcourt",
    name: "Port Harcourt",
    state: "Rivers State",
    descriptor: "the Garden City",
    metaTitle: "Book a Ride in Port Harcourt — Ride App",
    metaDescription:
      "Book a ride in Port Harcourt with wer2 GO — verified drivers, upfront fare estimates and in-app SOS. From GRA and Trans-Amadi to D-Line and the airport.",
    intro:
      "In the Garden City, wer2 GO gets you door to door — from the offices of Old and New GRA to the workshops of Trans-Amadi and the busy junctions of Diobu. Beat the go-slow with an upfront fare estimate and a driver you can see before they arrive.",
    heroImage: "/brand/ng-port-harcourt.jpg",
    heroAlt: "Port Harcourt — wer2 GO rides across Rivers State's Garden City",
    areas: [
      "Old GRA",
      "New GRA",
      "Trans-Amadi",
      "D-Line",
      "Diobu (Mile 1–3)",
      "Rumuola",
      "Rumuokoro",
      "Woji",
      "Eliozu",
      "Ada George",
      "Elelenwo",
    ],
    airport: {
      name: "Port Harcourt International Airport",
      code: "PHC",
      note: "At Omagwa, about 30 km north of the city — allow around an hour in traffic. Book ahead so your driver is waiting.",
    },
    routes: [
      ["GRA", "Trans-Amadi"],
      ["Ada George", "Rumuokoro"],
      ["D-Line", "Port Harcourt Mall"],
      ["Woji", "Port Harcourt Airport"],
    ],
    faqs: [
      {
        q: "How much is a wer2 GO ride in Port Harcourt?",
        a: "You get an estimated fare before booking, worked out from the real road distance. During heavy go-slow the estimate reflects the longer trip, so there are no end-of-ride surprises.",
      },
      {
        q: "Can I get to Port Harcourt Airport (PHC) with wer2 GO?",
        a: "Yes. The airport at Omagwa is around 30 km north, so book ahead — your verified driver picks you up from anywhere in the city and takes you up the airport road.",
      },
      {
        q: "Does wer2 GO cover Trans-Amadi and the GRA phases?",
        a: "Yes — Old and New GRA, Trans-Amadi, D-Line, Diobu, Rumuola, Rumuokoro, Woji and out toward Eliozu and Elelenwo.",
      },
      {
        q: "Is it safe to ride at night in Port Harcourt?",
        a: "Every driver is NIN- and BVN-verified, you see their details before pickup, and each trip has an in-app SOS button that shares your live location.",
      },
    ],
  },
  {
    slug: "uyo",
    name: "Uyo",
    state: "Akwa Ibom State",
    descriptor: "Akwa Ibom's calm, fast-growing capital",
    metaTitle: "Book a Ride in Uyo — Ride-Hailing App",
    metaDescription:
      "Book a ride in Uyo with wer2 GO — verified drivers, upfront fare estimates and in-app SOS. From Ewet Housing and Ibom Plaza to Itam, Oron Road and the airport.",
    intro:
      "Uyo is calm, clean and growing fast, and wer2 GO grows with it — from Ewet Housing and Shelter Afrique to Ibom Plaza and the length of Oron and Ikot Ekpene Roads. Tap, see your fare estimate, and ride with a verified driver.",
    heroImage: "/brand/car-comfort.jpg",
    heroAlt: "A wer2 GO ride in Uyo, Akwa Ibom State",
    areas: [
      "Ewet Housing Estate",
      "Osongama",
      "Shelter Afrique",
      "Ikot Ekpene Road",
      "Oron Road",
      "Aka Road",
      "Itam",
      "Nwaniba Road",
      "Wellington Bassey Way",
      "Ibom Plaza",
    ],
    airport: {
      name: "Victor Attah International Airport",
      code: "QUO",
      note: "About 20 km from the city — roughly 30 minutes. Book ahead and your driver meets you at the terminal.",
    },
    routes: [
      ["Ewet Housing", "Ibom Plaza"],
      ["Itam", "Godswill Akpabio Stadium"],
      ["Oron Road", "University of Uyo"],
      ["Uyo", "Victor Attah Airport"],
    ],
    faqs: [
      {
        q: "How much does a wer2 GO ride cost in Uyo?",
        a: "You see an estimated fare before you confirm, based on the real distance across town — from a quick Ewet Housing run to a longer trip out to Itam or the airport.",
      },
      {
        q: "Can I book a ride to Victor Attah International Airport (QUO)?",
        a: "Yes. It's about 20 km out, so book ahead — your verified driver picks you up anywhere in Uyo and takes you straight to the terminal.",
      },
      {
        q: "Which areas of Uyo does wer2 GO serve?",
        a: "Across the city — Ewet Housing, Osongama, Shelter Afrique, along Oron Road, Aka Road and Ikot Ekpene Road, out to Itam and Nwaniba Road.",
      },
      {
        q: "Are wer2 GO drivers in Uyo verified?",
        a: "Yes — each driver is verified with NIN and BVN and onboarded in person, and every trip carries an in-app SOS button.",
      },
    ],
  },
  {
    slug: "kano",
    name: "Kano",
    state: "Kano State",
    descriptor: "the commercial heart of northern Nigeria",
    metaTitle: "Book a Ride in Kano — Ride-Hailing App",
    metaDescription:
      "Book a ride in Kano with wer2 GO — verified drivers, fare estimates, Hausa support and women-only Sannu rides. From Sabon Gari to Nassarawa GRA and the airport.",
    intro:
      "Kano is the commercial engine of the North, and wer2 GO keeps it moving — from the markets of Sabon Gari and Fagge to Bompai and the quiet of Nassarawa GRA. Book in Hausa or English, see your fare estimate up front, and ride with a verified driver — including women-only Sannu rides.",
    heroImage: "/brand/car-premium.jpg",
    heroAlt: "A wer2 GO ride in Kano, northern Nigeria",
    areas: [
      "Nassarawa GRA",
      "Bompai",
      "Sabon Gari",
      "Fagge",
      "Tarauni",
      "Hotoro",
      "Kano Municipal",
      "Farm Centre",
      "Zoo Road",
      "BUK Road",
      "Kumbotso",
    ],
    airport: {
      name: "Mallam Aminu Kano International Airport",
      code: "KAN",
      note: "Only about 8 km from the city — roughly 20 minutes. Book ahead and your driver meets you at the terminal.",
    },
    routes: [
      ["Sabon Gari", "Ado Bayero Mall"],
      ["Bompai", "Nassarawa GRA"],
      ["Zoo Road", "Bayero University Kano"],
      ["Kano", "Mallam Aminu Kano Airport"],
    ],
    faqs: [
      {
        q: "Does wer2 GO support Hausa in Kano?",
        a: "Yes. Our 24/7 support replies in Hausa as well as English, and the app is built for how Kano moves — from Sabon Gari to Nassarawa GRA.",
      },
      {
        q: "What is a Sannu (women-only) ride?",
        a: "Sannu is our women-only ride option — a woman rider matched with a woman driver — for passengers who prefer it. Choose it when you book.",
      },
      {
        q: "Can I get to Mallam Aminu Kano Airport (KAN) with wer2 GO?",
        a: "Yes, and it's close — about 8 km from the city. Book a few minutes ahead and your verified driver takes you straight to the terminal.",
      },
      {
        q: "How much is a wer2 GO ride in Kano?",
        a: "You see an estimated fare before booking, based on the real road distance — no surprise at the end of the trip.",
      },
    ],
  },
  {
    slug: "lagos",
    name: "Lagos",
    state: "Lagos State",
    descriptor: "Nigeria's largest city",
    metaTitle: "Book a Ride in Lagos — Ride-Hailing App",
    metaDescription:
      "Book a ride in Lagos with wer2 GO — verified drivers, upfront fare estimates and in-app SOS. Across the Island and Mainland, Lekki to Ikeja and the airport.",
    intro:
      "From the Island to the Mainland, wer2 GO takes on the Lagos go-slow — Victoria Island, Ikoyi and Lekki on one side, Ikeja, Surulere and Yaba on the other. See your fare estimate before you commit and ride with a driver you can check first.",
    heroImage: "/brand/ng-lekki-bridge.jpg",
    heroAlt: "Lekki-Ikoyi Link Bridge, Lagos — wer2 GO rides across the Island and Mainland",
    areas: [
      "Victoria Island",
      "Ikoyi",
      "Lekki Phase 1",
      "Ikate",
      "Ajah",
      "Ikeja",
      "Surulere",
      "Yaba",
      "Gbagada",
      "Maryland",
      "Festac",
      "Oshodi",
    ],
    airport: {
      name: "Murtala Muhammed International Airport",
      code: "LOS",
      note: "In Ikeja, serving both domestic and international terminals. In Lagos traffic, book well ahead of your flight.",
    },
    routes: [
      ["Ikate", "Victoria Island"],
      ["Lekki", "Ikeja"],
      ["Yaba", "Victoria Island"],
      ["Surulere", "Murtala Muhammed Airport"],
    ],
    faqs: [
      {
        q: "How much does a wer2 GO ride cost in Lagos?",
        a: "You see an estimated fare before booking, based on the real road distance. When there's go-slow, the estimate reflects the longer trip up front — no meter shock at the end.",
      },
      {
        q: "Does wer2 GO cover both the Island and the Mainland?",
        a: "Yes — Victoria Island, Ikoyi, Lekki and Ajah on the Island, and Ikeja, Surulere, Yaba, Gbagada and beyond on the Mainland.",
      },
      {
        q: "Can I book a ride to Murtala Muhammed Airport (LOS)?",
        a: "Yes, to both the domestic and international terminals in Ikeja. Given Lagos traffic, book well ahead and your verified driver gets you there.",
      },
      {
        q: "Is wer2 GO safe for late-night rides in Lagos?",
        a: "Every driver is NIN- and BVN-verified, you see their details before pickup, and each trip has an in-app SOS that shares your live location.",
      },
    ],
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
