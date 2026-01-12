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
    about: { title: string; lead: string; body: string; highlightsTitle: string };
    highlights: { title: string; text: string }[];
    services: {
      title: string;
      revealTitle: string;
      revealHover: string;
      items: { eyebrow: string; title: string; text: string; image: string }[];
    };
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
        "Sol- och insynsskydd i Storstockholm. Persienner, markiser och balkongskydd med snabb leverans och professionell montering.",
    },
    nav: {
      about: "Om oss",
      services: "Tjänster",
      gallery: "Projekt",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Sol- och insynsskydd i Storstockholm",
      title: "MM Persienner Stockholm står för stil inne och ute",
      subtitle:
        "Vi är ett dynamiskt, professionellt företag specialiserat på persienner, markiser och balkongskydd.",
      cta: "Boka kostnadsfritt hembesök",
      image: "/legacy/site/mmpersienner-2.jpg",
    },
    heroSlider: {
      button: "Kontakta oss",
      items: [
        {
          title: "MM Persienner Stockholm",
          image: "/legacy/site/MM-Persienner-Stockholm.jpg",
        },
        {
          title: "Markiser och Solskydd",
          image: "/legacy/site/Markiser-Stockholm-1.jpg",
        },
        {
          title: "Persienner for Uterum",
          image: "/legacy/site/Persienner-Stockholm-8.jpg",
        },
        {
          title: "Balkongskydd och Inne",
          image: "/legacy/site/mmpersienner-2.jpg",
        },
      ],
    },
    about: {
      title: "Specialister på persienner och markiser",
      lead:
        "Vi hjälper privatpersoner och företag med måttbeställda solskydd, snabb leverans och professionell montering.",
      body:
        "MM Persienner Stockholm har sin bas i Älvsjö men servar kunder i hela Storstockholm. Med lång erfarenhet, god kommunikation och välutbildade montörer levererar vi hållbara lösningar till rätt pris.",
      highlightsTitle: "Varför välja oss",
    },
    highlights: [
      {
        title: "5 års garanti",
        text: "Skriftlig garanti på både material och arbete.",
      },
      {
        title: "Svenska kvalitetsprodukter",
        text: "Hållbara produkter som klarar nordiskt klimat.",
      },
      {
        title: "Snabb leverans och montering",
        text: "Punktlig leverans och professionell installation.",
      },
    ],
    services: {
      title: "Tjänster",
      revealTitle: "Utvalda lösningar",
      revealHover: "Se detaljer",
      items: [
        {
          eyebrow: "Solskydd",
          title: "Persienner",
          text:
            "Måttbeställda persienner i aluminium och trä för hem och kontor.",
          image: "/legacy/site/Persienner-Stockholm-2.jpg",
        },
        {
          eyebrow: "Utemiljö",
          title: "Markiser",
          text:
            "Fönster-, balkong- och terrassmarkiser med manuell styrning eller motor.",
          image: "/legacy/site/markiser-stockholm-5.jpg",
        },
        {
          eyebrow: "Insynsskydd",
          title: "Balkongskydd",
          text:
            "Rullbara balkongskydd som skyddar mot insyn, vind och stark sol.",
          image: "/legacy/site/MM-Persienner-Stockholm.jpg",
        },
        {
          eyebrow: "Inredning",
          title: "Plissegardiner",
          text:
            "Elegant och flexibel ljusreglering som passar alla fönsterformer.",
          image: "/legacy/site/Persienner-Stockholm-3.jpg",
        },
      ],
    },
    gallery: {
      title: "Utvalda projekt",
      items: [
        {
          src: "/legacy/site/MM-Persienner-Stockholm.jpg",
          alt: "MM Persienner Stockholm",
        },
        {
          src: "/legacy/site/Markiser-Stockholm-1.jpg",
          alt: "Markiser Stockholm",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-8.jpg",
          alt: "Persienner uterum",
        },
        {
          src: "/legacy/site/mmpersienner-2.jpg",
          alt: "Balkongskydd och inne",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-1.jpg",
          alt: "Persienner i Stockholm",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-2.jpg",
          alt: "Måttbeställda persienner",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-3.jpg",
          alt: "Persienner för hem",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-4.jpg",
          alt: "Persienner i vardagsrum",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-5.jpg",
          alt: "Solskydd i kök",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-6.jpg",
          alt: "Persienner detalj",
        },
        {
          src: "/legacy/site/Markiser-Stockholm.jpg",
          alt: "Markiser i Stockholm",
        },
        {
          src: "/legacy/site/Markiser-Stockholm-1.jpg",
          alt: "Terrassmarkiser",
        },
        {
          src: "/legacy/site/markiser-stockholm-4.jpg",
          alt: "Balkongmarkiser",
        },
        {
          src: "/legacy/site/markiser-stockholm-7.jpg",
          alt: "Solskydd för fasad",
        },
        {
          src: "/legacy/site/Persienner-stockholm-021.jpg",
          alt: "Persienner i sovrum",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-023.jpg",
          alt: "Specialmått persienner",
        },
      ],
    },
    cta: {
      title:
        "Har du funderat på att installera markiser i Stockholm för uteplats eller fönster?",
      text:
        "Vi ger kostnadsförslag, gör mätningar på plats och erbjuder skräddarsydda lösningar.",
      button: "Kontakta oss",
      image: "/legacy/site/markiser-stockholm-10.jpg",
    },
    contact: {
      title: "Kontakta oss",
      lead:
        "Vi tar oss an små som stora objekt. Ring oss så kommer vi och mäter och ger prisförslag.",
      addressLabel: "Besöksadress",
      phoneLabel: "Telefon",
      emailLabel: "E-post",
      orgLabel: "Organisationsnummer",
      address: "Färlandagränd 44, 125 72 Älvsjö",
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
  },
  en: {
    meta: {
      title: "MM Persienner Stockholm",
      description:
        "Sun and privacy protection in Greater Stockholm. Blinds, awnings and balcony screens with fast delivery and professional installation.",
    },
    nav: {
      about: "About",
      services: "Services",
      gallery: "Projects",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Sun and privacy protection in Stockholm",
      title: "MM Persienner Stockholm stands for style indoors and outdoors",
      subtitle:
        "We are a professional team specializing in blinds, awnings and balcony screens.",
      cta: "Book a free home visit",
      image: "/legacy/site/mmpersienner-2.jpg",
    },
    heroSlider: {
      button: "Contact us",
      items: [
        {
          title: "MM Persienner Stockholm",
          image: "/legacy/site/MM-Persienner-Stockholm.jpg",
        },
        {
          title: "Awnings and Sun Protection",
          image: "/legacy/site/Markiser-Stockholm-1.jpg",
        },
        {
          title: "Blinds for Conservatories",
          image: "/legacy/site/Persienner-Stockholm-8.jpg",
        },
        {
          title: "Balcony Screens Indoors",
          image: "/legacy/site/mmpersienner-2.jpg",
        },
      ],
    },
    about: {
      title: "Specialists in blinds and awnings",
      lead:
        "We help homeowners and businesses with custom sun protection, fast delivery and professional installation.",
      body:
        "Based in Älvsjö, we serve customers across Greater Stockholm. With long experience, clear communication and skilled installers, we deliver durable solutions at the right price.",
      highlightsTitle: "Why choose us",
    },
    highlights: [
      {
        title: "5-year warranty",
        text: "Written warranty for both materials and labor.",
      },
      {
        title: "Swedish quality products",
        text: "Durable products built for Nordic conditions.",
      },
      {
        title: "Fast delivery and installation",
        text: "On-time delivery and professional installation.",
      },
    ],
    services: {
      title: "Services",
      revealTitle: "Selected solutions",
      revealHover: "See details",
      items: [
        {
          eyebrow: "Sun protection",
          title: "Blinds",
          text:
            "Custom blinds in aluminum and wood for homes and offices.",
          image: "/legacy/site/Persienner-Stockholm-2.jpg",
        },
        {
          eyebrow: "Outdoor",
          title: "Awnings",
          text:
            "Window, balcony and terrace awnings with manual control or motor.",
          image: "/legacy/site/markiser-stockholm-5.jpg",
        },
        {
          eyebrow: "Privacy",
          title: "Balcony screens",
          text:
            "Roll-out balcony screens that protect from glare, wind and prying eyes.",
          image: "/legacy/site/MM-Persienner-Stockholm.jpg",
        },
        {
          eyebrow: "Interior",
          title: "Pleated blinds",
          text:
            "Elegant and flexible light control that fits any window shape.",
          image: "/legacy/site/Persienner-Stockholm-3.jpg",
        },
      ],
    },
    gallery: {
      title: "Selected projects",
      items: [
        {
          src: "/legacy/site/MM-Persienner-Stockholm.jpg",
          alt: "MM Persienner Stockholm",
        },
        {
          src: "/legacy/site/Markiser-Stockholm-1.jpg",
          alt: "Awnings in Stockholm",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-8.jpg",
          alt: "Blinds for conservatories",
        },
        {
          src: "/legacy/site/mmpersienner-2.jpg",
          alt: "Balcony screens",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-1.jpg",
          alt: "Blinds in Stockholm",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-2.jpg",
          alt: "Custom blinds",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-3.jpg",
          alt: "Blinds for homes",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-4.jpg",
          alt: "Living room blinds",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-5.jpg",
          alt: "Kitchen sun protection",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-6.jpg",
          alt: "Blinds detail",
        },
        {
          src: "/legacy/site/Markiser-Stockholm.jpg",
          alt: "Awnings in Stockholm",
        },
        {
          src: "/legacy/site/Markiser-Stockholm-1.jpg",
          alt: "Terrace awnings",
        },
        {
          src: "/legacy/site/markiser-stockholm-4.jpg",
          alt: "Balcony awnings",
        },
        {
          src: "/legacy/site/markiser-stockholm-7.jpg",
          alt: "Facade sun protection",
        },
        {
          src: "/legacy/site/Persienner-stockholm-021.jpg",
          alt: "Bedroom blinds",
        },
        {
          src: "/legacy/site/Persienner-Stockholm-023.jpg",
          alt: "Custom-size blinds",
        },
      ],
    },
    cta: {
      title:
        "Thinking about installing awnings in Stockholm for your patio or windows?",
      text:
        "We provide free quotes, on-site measurements and tailored solutions.",
      button: "Get in touch",
      image: "/legacy/site/markiser-stockholm-10.jpg",
    },
    contact: {
      title: "Contact us",
      lead:
        "We handle both small and large projects. Call us for a site visit and quote.",
      addressLabel: "Visit address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      orgLabel: "Company ID",
      address: "Färlandagränd 44, 125 72 Älvsjö",
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
  },
};
