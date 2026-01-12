export const locales = ["sv", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sv";

export const siteContent: Record<
  Locale,
  {
    meta: { title: string; description: string };
    nav: { about: string; services: string; gallery: string; contact: string };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      cta: string;
      image: string;
    };
    heroSlider: {
      button: string;
      items: { title: string; image: string }[];
    };
    heroSecondary: {
      eyebrow: string;
      title: string;
      text: string;
      cta: string;
      image: string;
    };
    heroTertiary: {
      eyebrow: string;
      title: string;
      text: string;
      cta: string;
      image: string;
    };
    about: { title: string; lead: string; body: string; highlightsTitle: string };
    highlights: { title: string; text: string }[];
    services: {
      title: string;
      revealTitle: string;
      revealHover: string;
      items: { eyebrow: string; title: string; text: string; image: string }[];
    };
    productGroups: { title: string; items: string[] }[];
    gallery: { title: string; items: { src: string; alt: string }[] };
    cta: { title: string; text: string; button: string; image: string };
    contact: {
      title: string;
      lead: string;
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
      orgLabel: string;
      address: string;
      phone: string;
      email: string;
      orgNumber: string;
      formTitle: string;
      form: {
        name: string;
        email: string;
        phone: string;
        message: string;
        submit: string;
      };
    };
  }
> = {
  sv: {
    meta: {
      title: "MM Persienner Stockholm",
      description:
        "M.M Persienner Stockholm \u00e4r ett dynamiskt, professionellt f\u00f6retag som \u00e4r specialiserat p\u00e5 sol- och insynsskydd som persienner, markiser och balkongskydd. Hj\u00e4rtligt v\u00e4lkommen som kund.",
    },
    nav: {
      about: "Om oss",
      services: "Tj\u00e4nster",
      gallery: "Projekt",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Sol- och insynsskydd i Storstockholm",
      title: "M.M PERSIENNER STOCKHOLM ST\u00c5R F\u00d6R SMAK OCH STIL INNE OCH I UTERUMMET",
      subtitle:
        "M.M Persienner Stockholm \u00e4r ett dynamiskt, professionellt f\u00f6retag som \u00e4r specialiserat p\u00e5 sol- och insynsskydd som persienner, markiser och balkongskydd.",
      cta: "Boka kostnadsfritt hembes\u00f6k",
      image: "/legacy/site/Persienner-Stockholm-8.jpg",
    },
    heroSlider: {
      button: "Kontakta oss",
      items: [
        {
          title: "Persienner Stockholm",
          image: "/legacy/site/Persienner-Stockholm-8.jpg",
        },
        {
          title: "Markiser Stockholm",
          image: "/legacy/site/Markiser-Stockholm-1.jpg",
        },
        {
          title: "Balkongskydd",
          image: "/legacy/site/MM-Persienner-Stockholm.jpg",
        },
        {
          title: "Persienner i Stockholm",
          image: "/legacy/site/Persienner-Stockholm.jpg",
        },
        {
          title: "Persienner detalj",
          image: "/legacy/site/Persienner-Stockholm-1.jpg",
        },
        {
          title: "Persienner hemma",
          image: "/legacy/site/Persienner-Stockholm-2.jpg",
        },
        {
          title: "Tr\u00e4persienner",
          image: "/legacy/site/Persienner-Stockholm-4.jpg",
        },
        {
          title: "Aluminiumpersienner",
          image: "/legacy/site/Persienner-Stockholm-5.jpg",
        },
        {
          title: "Specialm\u00e5tt",
          image: "/legacy/site/Persienner-stockholm-019.jpg",
        },
        {
          title: "H\u00e5llbara svenska produkter",
          image: "/legacy/site/renew.jpg",
        },
      ],
    },
    heroSecondary: {
      eyebrow: "MM Persienner Stockholm",
      title: "Dynamiskt, professionellt och n\u00e4ra kunden",
      text:
        "Vi \u00e4r specialister p\u00e5 solskydd som persienner och markiser i en m\u00e4ngd utf\u00f6randen. Vi har v\u00e5r bas i \u00c4lvsj\u00f6 men servar kunder i hela Storstockholmsomr\u00e5det.",
      cta: "Kontakta oss",
      image: "/legacy/site/MM-Persienner-Stockholm.jpg",
    },
    heroTertiary: {
      eyebrow: "5 \u00e5rs garanti",
      title: "Skriftlig garanti p\u00e5 b\u00e5de material och arbete",
      text:
        "Vi f\u00f6r endast h\u00f6gkvalitativa svenska produkter som \u00e4r h\u00e5llbara. Vi \u00e4r k\u00e4nda f\u00f6r gedigen kvalitet, kort leveranstid och montering till bra priser.",
      cta: "Boka hembes\u00f6k",
      image: "/legacy/site/Persienner-Stockholm-4.jpg",
    },
    about: {
      title: "Specialister p\u00e5 sol- och insynsskydd",
      lead:
        "Vi \u00e4r specialister p\u00e5 solskydd som bland annat persienner och markiser i en m\u00e4ngd utf\u00f6randen.",
      body:
        "M.M Persienner Stockholm har sin bas i \u00c4lvsj\u00f6 men servar kunder i hela Storstockholmsomr\u00e5det. Vi erbjuder gedigen kvalitet, kort leveranstid och montering till bra priser.",
      highlightsTitle: "Varf\u00f6r v\u00e4lja oss",
    },
    highlights: [
      {
        title: "5 \u00e5rs garanti",
        text: "Skriftlig garanti p\u00e5 b\u00e5de material och arbete.",
      },
      {
        title: "Svenska kvalitetsprodukter",
        text: "H\u00e5llbara produkter som klarar nordiskt klimat.",
      },
      {
        title: "Kort leveranstid",
        text: "Snabb leverans och professionell montering.",
      },
    ],
    services: {
      title: "Tj\u00e4nster",
      revealTitle: "Utvalda l\u00f6sningar",
      revealHover: "Se detaljer",
      items: [
        {
          eyebrow: "Utemilj\u00f6",
          title: "Markiser",
          text:
            "Balkong-, f\u00f6nster- och terrassmarkiser i flera utf\u00f6randen.",
          image: "/legacy/site/Markiser-Stockholm-1.jpg",
        },
        {
          eyebrow: "Inomhus",
          title: "Persienner",
          text:
            "Aluminium-, tr\u00e4- och fasadpersienner med m\u00e5ttbest\u00e4llning.",
          image: "/legacy/site/Persienner-Stockholm-8.jpg",
        },
        {
          eyebrow: "Insynsskydd",
          title: "Balkongskydd",
          text:
            "Rullbara balkongskydd som skyddar mot insyn, vind och stark sol.",
          image: "/legacy/site/MM-Persienner-Stockholm.jpg",
        },
        {
          eyebrow: "Textil",
          title: "Gardiner",
          text:
            "Pliss\u00e9gardiner, rullgardiner, lamell- och hissgardiner.",
          image: "/legacy/site/Persienner-Stockholm-1.jpg",
        },
        {
          eyebrow: "Service",
          title: "Reparation",
          text:
            "Reparation och uppgradering av befintliga solskydd.",
          image: "/legacy/site/Persienner-Stockholm-4.jpg",
        },
        {
          eyebrow: "Helhetsl\u00f6sning",
          title: "M\u00e4tning & montering",
          text:
            "Vi m\u00e4ter p\u00e5 plats, ger kostnadsf\u00f6rslag och monterar.",
          image: "/legacy/site/Persienner-Stockholm-5.jpg",
        },
      ],
    },
    productGroups: [
      {
        title: "Markiser",
        items: [
          "Balkongskydd",
          "Vertikalmarkis",
          "Korgmarkis",
          "Markisolette",
          "Balkongmarkis",
          "Sidomarkis",
          "F\u00f6nstermarkis",
          "Terrassmarkis",
        ],
      },
      {
        title: "Gardiner",
        items: [
          "Pliss\u00e9gardiner",
          "Rullgardiner",
          "Lamellgardiner",
          "M\u00f6rkl\u00e4ggande gardiner",
          "Hissgardiner",
        ],
      },
      {
        title: "Persienner",
        items: [
          "Aluminiumpersienner",
          "Tr\u00e4persienner",
          "Fasadpersienner",
        ],
      },
    ],
    gallery: {
      title: "Utvalda projekt",
      items: [
        {
          src: "/legacy/site/Persienner-Stockholm-8.jpg",
          alt: "Persienner Stockholm",
        },
        {
          src: "/legacy/site/Markiser-Stockholm-1.jpg",
          alt: "Markiser Stockholm",
        },
        {
          src: "/legacy/site/MM-Persienner-Stockholm.jpg",
          alt: "MM Persienner Stockholm",
        },
        {
          src: "/legacy/site/Persienner-Stockholm.jpg",
          alt: "Persienner i Stockholm",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-1.jpg",
          alt: "Persienner detalj",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-2.jpg",
          alt: "Persienner hemma",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-4.jpg",
          alt: "Persienner vardagsrum",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-5.jpg",
          alt: "Persienner k\u00f6k",
        },
        {
          src: "/legacy/site/Persienner-stockholm-019.jpg",
          alt: "Specialm\u00e5tt persienner",
        },
        {
          src: "/legacy/site/renew.jpg",
          alt: "H\u00e5llbara svenska produkter",
        },
      ],
    },
    cta: {
      title: "Markiser som f\u00f6rl\u00e4nger s\u00e4songen",
      text:
        "En vacker markis berikar balkong, altan eller terrass och skyddar samtidigt m\u00f6bler och mattor fr\u00e5n solblekning. Vi g\u00f6r hembes\u00f6k, ger kostnadsf\u00f6rslag och tar n\u00f6dv\u00e4ndiga m\u00e5tt.",
      button: "Kontakta oss",
      image: "/legacy/site/Markiser-Stockholm-1.jpg",
    },
    contact: {
      title: "Kontakta oss",
      lead:
        "Vi tar oss an sm\u00e5 som stora objekt. Ring oss s\u00e5 kommer vi och m\u00e4ter och ger prisf\u00f6rslag.",
      addressLabel: "Bes\u00f6ksadress",
      phoneLabel: "Telefon",
      emailLabel: "E-post",
      orgLabel: "Organisationsnummer",
      address: "F\u00f6rlandagr\u00e4nd 44, 125 72 \u00c4lvsj\u00f6",
      phone: "076-415 04 46",
      email: "info@mmpersienner.se",
      orgNumber: "559161-8664",
      formTitle: "Skicka meddelande",
      form: {
        name: "Ditt namn",
        email: "Din e-post",
        phone: "Ditt nummer",
        message: "Ditt meddelande",
        submit: "Skicka",
      },
    },
  },  en: {
    meta: {
      title: "MM Persienner Stockholm",
      description:
        "MM Persienner Stockholm is a dynamic, professional company specializing in sun and privacy protection such as blinds, awnings and balcony screens. You are warmly welcome as a customer.",
    },
    nav: {
      about: "About",
      services: "Services",
      gallery: "Projects",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Sun and privacy protection in Stockholm",
      title: "MM PERSIENNER STOCKHOLM STANDS FOR TASTE AND STYLE INDOORS AND IN CONSERVATORIES",
      subtitle:
        "MM Persienner Stockholm is a dynamic, professional company specializing in sun and privacy protection such as blinds, awnings and balcony screens.",
      cta: "Book a free home visit",
      image: "/legacy/site/Persienner-Stockholm-8.jpg",
    },
    heroSlider: {
      button: "Contact us",
      items: [
        {
          title: "Stockholm blinds",
          image: "/legacy/site/Persienner-Stockholm-8.jpg",
        },
        {
          title: "Stockholm awnings",
          image: "/legacy/site/Markiser-Stockholm-1.jpg",
        },
        {
          title: "Balcony screens",
          image: "/legacy/site/MM-Persienner-Stockholm.jpg",
        },
        {
          title: "Blinds in Stockholm",
          image: "/legacy/site/Persienner-Stockholm.jpg",
        },
        {
          title: "Blinds detail",
          image: "/legacy/site/Persienner-Stockholm-1.jpg",
        },
        {
          title: "Blinds for homes",
          image: "/legacy/site/Persienner-Stockholm-2.jpg",
        },
        {
          title: "Wooden blinds",
          image: "/legacy/site/Persienner-Stockholm-4.jpg",
        },
        {
          title: "Aluminum blinds",
          image: "/legacy/site/Persienner-Stockholm-5.jpg",
        },
        {
          title: "Custom sizes",
          image: "/legacy/site/Persienner-stockholm-019.jpg",
        },
        {
          title: "Durable Swedish products",
          image: "/legacy/site/renew.jpg",
        },
      ],
    },
    heroSecondary: {
      eyebrow: "MM Persienner Stockholm",
      title: "Dynamic, professional and close to the customer",
      text:
        "We are specialists in sun protection such as blinds and awnings in a wide range of designs. Based in \u00c4lvsj\u00f6, we serve customers across Greater Stockholm.",
      cta: "Contact us",
      image: "/legacy/site/MM-Persienner-Stockholm.jpg",
    },
    heroTertiary: {
      eyebrow: "5-year warranty",
      title: "Written warranty on both materials and labor",
      text:
        "We only supply high-quality Swedish products built to last. We are known for solid quality, short lead times and installation at great prices.",
      cta: "Book a visit",
      image: "/legacy/site/Persienner-Stockholm-4.jpg",
    },
    about: {
      title: "Specialists in sun and privacy protection",
      lead:
        "We are specialists in sun protection such as blinds and awnings in many different designs.",
      body:
        "MM Persienner Stockholm is based in \u00c4lvsj\u00f6 and serves customers across Greater Stockholm. We deliver solid quality, short lead times and installation at great prices.",
      highlightsTitle: "Why choose us",
    },
    highlights: [
      {
        title: "5-year warranty",
        text: "Written warranty on both materials and labor.",
      },
      {
        title: "Swedish quality products",
        text: "Durable products built for Nordic conditions.",
      },
      {
        title: "Short lead times",
        text: "Fast delivery and professional installation.",
      },
    ],
    services: {
      title: "Services",
      revealTitle: "Selected solutions",
      revealHover: "See details",
      items: [
        {
          eyebrow: "Outdoor",
          title: "Awnings",
          text:
            "Balcony, window and terrace awnings in several designs.",
          image: "/legacy/site/Markiser-Stockholm-1.jpg",
        },
        {
          eyebrow: "Indoor",
          title: "Blinds",
          text:
            "Aluminum, wooden and facade blinds with custom measurements.",
          image: "/legacy/site/Persienner-Stockholm-8.jpg",
        },
        {
          eyebrow: "Privacy",
          title: "Balcony screens",
          text:
            "Roll-out balcony screens that protect from glare, wind and prying eyes.",
          image: "/legacy/site/MM-Persienner-Stockholm.jpg",
        },
        {
          eyebrow: "Textile",
          title: "Curtains",
          text:
            "Pleated blinds, roller blinds, vertical blinds and roman blinds.",
          image: "/legacy/site/Persienner-Stockholm-1.jpg",
        },
        {
          eyebrow: "Service",
          title: "Repairs",
          text:
            "Repairs and upgrades of existing sun protection.",
          image: "/legacy/site/Persienner-Stockholm-4.jpg",
        },
        {
          eyebrow: "Full service",
          title: "Measurement & installation",
          text:
            "We measure on site, provide quotes and install.",
          image: "/legacy/site/Persienner-Stockholm-5.jpg",
        },
      ],
    },
    productGroups: [
      {
        title: "Awnings",
        items: [
          "Balcony screens",
          "Vertical awnings",
          "Basket awnings",
          "Markisolette",
          "Balcony awnings",
          "Side awnings",
          "Window awnings",
          "Terrace awnings",
        ],
      },
      {
        title: "Curtains",
        items: [
          "Pleated blinds",
          "Roller blinds",
          "Vertical blinds",
          "Blackout curtains",
          "Roman blinds",
        ],
      },
      {
        title: "Blinds",
        items: [
          "Aluminum blinds",
          "Wooden blinds",
          "Facade blinds",
        ],
      },
    ],
    gallery: {
      title: "Selected projects",
      items: [
        {
          src: "/legacy/site/Persienner-Stockholm-8.jpg",
          alt: "Stockholm blinds",
        },
        {
          src: "/legacy/site/Markiser-Stockholm-1.jpg",
          alt: "Stockholm awnings",
        },
        {
          src: "/legacy/site/MM-Persienner-Stockholm.jpg",
          alt: "MM Persienner Stockholm",
        },
        {
          src: "/legacy/site/Persienner-Stockholm.jpg",
          alt: "Blinds in Stockholm",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-1.jpg",
          alt: "Blinds detail",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-2.jpg",
          alt: "Blinds for homes",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-4.jpg",
          alt: "Living room blinds",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-5.jpg",
          alt: "Kitchen blinds",
        },
        {
          src: "/legacy/site/Persienner-stockholm-019.jpg",
          alt: "Custom-size blinds",
        },
        {
          src: "/legacy/site/renew.jpg",
          alt: "Durable Swedish products",
        },
      ],
    },
    cta: {
      title: "Awnings that extend the season",
      text:
        "A beautiful awning enhances your balcony, patio or terrace while protecting furniture and rugs from sun fading. We do home visits, provide quotes and take the necessary measurements.",
      button: "Get in touch",
      image: "/legacy/site/Markiser-Stockholm-1.jpg",
    },
    contact: {
      title: "Contact us",
      lead:
        "We handle both small and large projects. Call us for a site visit and quote.",
      addressLabel: "Visit address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      orgLabel: "Company ID",
      address: "F\u00f6rlandagr\u00e4nd 44, 125 72 \u00c4lvsj\u00f6",
      phone: "076-415 04 46",
      email: "info@mmpersienner.se",
      orgNumber: "559161-8664",
      formTitle: "Send a message",
      form: {
        name: "Your name",
        email: "Your email",
        phone: "Your phone",
        message: "Your message",
        submit: "Send",
      },
    },
  },};




