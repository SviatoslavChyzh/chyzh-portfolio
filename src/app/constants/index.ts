import type { Localized, Period } from '@/app/types';

export const SITE = {
  name: 'Sviatoslav Chyzh',
  url: 'https://sviatoslavchyzh.dev',
  github: 'https://github.com/SviatoslavChyzh',
  linkedin: 'https://www.linkedin.com/in/sviatoslav-chyzh',
  repository: 'https://github.com/SviatoslavChyzh/chyzh-portfolio',
  resume: '/sviatoslav-chyzh-resume.pdf',
} as const;

/** Ids of the sections on the home page, in the order they appear. */
export const HOME_SECTIONS = [
  'intro',
  'skills',
  'experience',
  'education',
  'projects',
  'contact',
] as const;

export type HomeSection = (typeof HOME_SECTIONS)[number];

/* -------------------------------------------------------------------------- */
/*  Work experience                                                           */
/* -------------------------------------------------------------------------- */

export type JobLink = {
  name: string;
  /** External URL, or a path inside this site when `internal` is set. */
  href?: string;
  internal?: boolean;
};

export type JobExperience = {
  id: string;
  company: string;
  title: Localized;
  period: Period;
  /** One or two sentences of context shown above the bullet points. */
  summary?: Localized;
  highlights: Localized<string[]>;
  stack?: string[];
  projects?: JobLink[];
};

export const JOB_EXPERIENCE: JobExperience[] = [
  {
    id: 'planerio',
    company: 'Planerio',
    title: { en: 'Software Engineer', de: 'Software Engineer' },
    period: { start: '2025-10', end: null },
    summary: {
      en: 'Planerio makes software for shift planning, time tracking and payroll preparation, used by hospitals and other shift-based organisations. I work across the stack on the time-tracking and payroll features.',
      de: 'Planerio entwickelt Software für Dienstplanung, Zeiterfassung und Lohnvorbereitung – im Einsatz in Kliniken und anderen Organisationen mit Schichtbetrieb. Ich arbeite über den gesamten Stack hinweg an den Funktionen für Zeiterfassung und Lohnvorbereitung.',
    },
    highlights: {
      en: [
        'Develop and maintain features of the time-tracking web app in React 19 and TypeScript – time stamps, requests and approvals, break adjustments and the monthly overview – covered by unit and integration tests.',
        'Built the new UI of the bonus configurator: payroll admins create, reorder and validate rules for bonuses and surcharges in schema-driven forms and preview the result against a real timesheet before saving.',
        'Prototyped an AI assistant on Amazon Bedrock that turns a plain-language description of a bonus rule into validated form values, which the admin reviews before saving.',
        'Work full-stack on Java and Spring Boot services: REST endpoints, business rules and API documentation for timesheet and payroll features.',
        'Keep production healthy: review logs and metrics, track down errors and slow queries, and ship the fixes; added OpenTelemetry tracing to frontend apps.',
        'Build AI-assisted developer tooling for the team – Claude Code skills that triage review feedback and CI failures, check changes against our quality gates and draft pull-request descriptions.',
        'Built TimeBox, an internal tool for time-boxing team meetings with real-time planning poker (Next.js, Convex).',
      ],
      de: [
        'Entwicklung und Pflege von Funktionen der Zeiterfassungs-Web-App mit React 19 und TypeScript – Zeitstempel, Anträge und Genehmigungen, Pausenkorrekturen und Monatsübersicht – abgesichert durch Unit- und Integrationstests.',
        'Umsetzung der neuen Oberfläche des Konfigurators für Zulagen und Zuschläge: Lohnverantwortliche erstellen, sortieren und validieren Regeln in schemabasierten Formularen und prüfen das Ergebnis vor dem Speichern an einem echten Stundenzettel.',
        'Prototyp eines KI-Assistenten auf Amazon Bedrock, der die Beschreibung einer Zulagenregel in natürlicher Sprache in validierte Formularwerte übersetzt, die vor dem Speichern geprüft werden.',
        'Full-Stack-Arbeit an Java- und Spring-Boot-Services: REST-Endpunkte, Geschäftsregeln und API-Dokumentation für Stundenzettel- und Lohnfunktionen.',
        'Stabiler Produktivbetrieb: Auswertung von Logs und Metriken, Analyse von Fehlern und langsamen Datenbankabfragen sowie Behebung der Ursachen; Einführung von OpenTelemetry-Tracing in Frontend-Anwendungen.',
        'Aufbau KI-gestützter Entwicklerwerkzeuge für das Team – Claude-Code-Skills, die Review-Feedback und CI-Fehler einordnen, Änderungen gegen unsere Qualitätskriterien prüfen und Pull-Request-Beschreibungen entwerfen.',
        'Entwicklung von TimeBox, einem internen Tool für Timeboxing in Team-Meetings mit Planning Poker in Echtzeit (Next.js, Convex).',
      ],
    },
    stack: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'AWS', 'Amazon Bedrock'],
    projects: [{ name: 'TimeBox', href: '/projects#timebox', internal: true }],
  },
  {
    id: 'gfk',
    company: 'GfK – an NIQ company',
    title: { en: 'Front-End Software Engineer', de: 'Front-End Software Engineer' },
    period: { start: '2019-10', end: '2025-10' },
    highlights: {
      en: [
        'Developed components for managing charts on the collections page of gfknewron using React, Express.js, Node.js and PostgreSQL.',
        'Managed UI state across micro-frontends, ensuring seamless integration and a better user experience.',
        'Contributed, as part of the data platform team, to the launch of several projects spanning front-end applications and back-end servers.',
        'Developed 4+ web applications with responsive UI elements and the shadcn/ui component library, built on React for smooth performance.',
        'Built user interfaces for web applications with React.js and JavaScript based on the approved designs.',
        'Analysed user requirements and developed 50+ responsive, functional UI components with React.',
        'Worked with several teams to set up and maintain a shared component library.',
      ],
      de: [
        'Entwicklung von Komponenten zur Verwaltung von Diagrammen auf der Collections-Seite von gfknewron mit React, Express.js, Node.js und PostgreSQL.',
        'Verwaltung des UI-Zustands über mehrere Micro-Frontends hinweg – für eine nahtlose Integration und ein besseres Nutzererlebnis.',
        'Mitarbeit im Data-Platform-Team an der Einführung mehrerer Projekte mit Frontend-Anwendungen und Backend-Servern.',
        'Entwicklung von mehr als vier Webanwendungen mit responsiven UI-Elementen und der Komponentenbibliothek shadcn/ui auf Basis von React für eine flüssige Performance.',
        'Umsetzung von Benutzeroberflächen für Webanwendungen mit React.js und JavaScript auf Grundlage der abgestimmten Designs.',
        'Analyse von Nutzeranforderungen und Entwicklung von über 50 responsiven, funktionalen UI-Komponenten mit React.',
        'Aufbau und Pflege einer gemeinsamen Komponentenbibliothek in Zusammenarbeit mit mehreren Teams.',
      ],
    },
    stack: ['React', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'shadcn/ui'],
    projects: [
      { name: 'gfknewron', href: 'https://nielseniq.com/global/en/products/gfknewron/' },
      { name: 'Data In DIS Admin' },
      { name: 'Data Platform WebTas' },
    ],
  },
  {
    id: 'smile',
    company: 'Smile Ukraine',
    title: { en: 'Magento Developer', de: 'Magento-Entwickler' },
    period: { start: '2018-10', end: '2019-10' },
    highlights: {
      en: ['Developed e-commerce web shops based on the Magento platform.'],
      de: ['Entwicklung von Onlineshops auf Basis der E-Commerce-Plattform Magento.'],
    },
    stack: ['Magento'],
  },
  {
    id: 'ternopiloblenergo',
    company: 'Region “Ternopiloblenergo”',
    title: { en: 'Engineer–Developer', de: 'Ingenieur und Entwickler' },
    period: { start: '2017-01', end: '2018-10' },
    highlights: {
      en: [
        'Supported the billing software “SunFlower”: set up servers and databases and developed both the client and the server side. Also supported the applications for recording contract-violation reports and for electricity-meter accounting.',
        'Maintained the existing billing system “SunFlower” (development and administration): built new features and modified business rules in MS SQL stored procedures. The user interface was developed in C# with Microsoft Visual Studio 2017.',
        'Developed the web application PortalTOE for managing employee data, using ASP.NET Core on the back end and HTML, CSS, jQuery and AngularJS on the front end.',
      ],
      de: [
        'Betreuung der Abrechnungssoftware „SunFlower“: Einrichtung von Servern und Datenbanken sowie Entwicklung von Client- und Serverseite. Außerdem Betreuung der Programme zur Erfassung von Protokollen über Vertragsverstöße und zur Verwaltung von Stromzählern.',
        'Wartung des bestehenden Abrechnungssystems „SunFlower“ (Entwicklung und Administration): Umsetzung neuer Funktionen und Anpassung von Geschäftsregeln in gespeicherten Prozeduren (MS SQL). Die Benutzeroberfläche wurde mit C# in Microsoft Visual Studio 2017 entwickelt.',
        'Entwicklung der Webanwendung PortalTOE zur Verwaltung von Mitarbeiterdaten – mit ASP.NET Core im Backend sowie HTML, CSS, jQuery und AngularJS im Frontend.',
      ],
    },
    stack: ['C#', 'ASP.NET Core', 'MS SQL', 'AngularJS', 'jQuery'],
  },
  {
    id: 'terko',
    company: 'TERKO Auto Ternopil',
    title: { en: 'System Administrator (1C)', de: 'Systemadministrator (1C)' },
    period: { start: '2016-01', end: '2017-01' },
    highlights: {
      en: [
        'Administered 1C:Enterprise 8.3 and maintained the existing accounting system: developed new features and modified business rules (MS SQL stored procedures).',
        'Developed reports for the CarCleaning application connected to the 1C database.',
      ],
      de: [
        'Administration von 1C:Enterprise 8.3 und Wartung des bestehenden Buchhaltungssystems: Entwicklung neuer Funktionen und Anpassung von Geschäftsregeln (gespeicherte Prozeduren in MS SQL).',
        'Entwicklung von Berichten für die Anwendung CarCleaning mit Anbindung an die 1C-Datenbank.',
      ],
    },
    stack: ['1C:Enterprise', 'MS SQL'],
  },
  {
    id: 'rem-zbarazh',
    company: 'REM Zbarazh',
    title: { en: 'Junior Developer', de: 'Junior-Entwickler' },
    period: { start: '2009-09', end: '2016-01' },
    highlights: {
      en: [
        'Ran and terminated low-voltage cabling: structured voice and data cabling, fibre and coaxial.',
        'Installed internet, cable and telephone connections in offices.',
        'Analysed billing reports.',
        'Created and maintained the customer database of the electricity company for 0.4 kV networks in MS SQL.',
      ],
      de: [
        'Verlegung und Anschluss von Niederspannungskabeln: strukturierte Sprach- und Datenverkabelung, Glasfaser und Koaxialkabel.',
        'Installation von Internet-, Kabel- und Telefonanschlüssen in Büroräumen.',
        'Auswertung von Abrechnungsberichten.',
        'Aufbau und Pflege der Kundendatenbank des Stromversorgers für 0,4-kV-Netze in MS SQL.',
      ],
    },
    stack: ['MS SQL'],
  },
];

/* -------------------------------------------------------------------------- */
/*  Education                                                                 */
/* -------------------------------------------------------------------------- */

export type EducationItem = {
  id: string;
  kind: 'degree' | 'certificate';
  title: Localized;
  institution: Localized;
  period: Period;
};

export const EDUCATION: EducationItem[] = [
  {
    id: 'lviv-university',
    kind: 'degree',
    title: {
      en: 'Master’s degree, Engineering Physics / Applied Physics',
      de: 'Master-Abschluss in Technischer Physik / Angewandter Physik',
    },
    institution: {
      en: 'Ivan Franko National University of Lviv',
      de: 'Nationale Iwan-Franko-Universität Lwiw',
    },
    period: { start: '2004-01', end: '2009-12' },
  },
  {
    id: 'ccna',
    kind: 'certificate',
    title: {
      en: 'Cisco Certified Network Associate (CCNA) Routing and Switching',
      de: 'Cisco Certified Network Associate (CCNA) Routing and Switching',
    },
    institution: {
      en: 'Cisco Academy at Ternopil Ivan Puluj National Technical University',
      de: 'Cisco Academy an der Nationalen Technischen Iwan-Puluj-Universität Ternopil',
    },
    period: { start: '2009', end: '2010' },
  },
];

/* -------------------------------------------------------------------------- */
/*  Skills                                                                    */
/* -------------------------------------------------------------------------- */

export type SkillGroupId = 'frontend' | 'backend' | 'tools';

export type SkillGroup = {
  id: SkillGroupId;
  skills: Array<{ name: string; level: number }>;
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML', level: 98 },
      { name: 'CSS', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    id: 'backend',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    id: 'tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Testing', level: 80 },
      { name: 'Agile', level: 85 },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

export type Project = {
  /** Used as the element id on the projects page, so `/projects#slug` links work. */
  slug: string;
  name: Localized;
  url: string;
  /** Host name shown next to the link. */
  displayUrl: string;
  /** 16:10 screenshot in `public/projects`. */
  image: string;
  year: string;
  kind: Localized;
  description: Localized;
  highlights: Localized<string[]>;
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'ugkk-nuernberg',
    name: { en: 'UGKK Nürnberg', de: 'UGKK Nürnberg' },
    url: 'https://ugkk-nuernberg.com/',
    displayUrl: 'ugkk-nuernberg.com',
    image: '/projects/ugkk-nuernberg.jpg',
    year: '2026',
    kind: { en: 'Parish website with admin dashboard', de: 'Gemeinde-Website mit Admin-Bereich' },
    description: {
      en: 'Website of the Ukrainian Greek Catholic parish of St. Nicholas in Nuremberg. Parishioners in Nuremberg, Erlangen, Fürth and Bamberg find service times, news and contacts, and the parish team maintains all content itself in an admin dashboard.',
      de: 'Website der ukrainischen griechisch-katholischen Personalpfarrei St. Nikolaus in Nürnberg. Gemeindemitglieder in Nürnberg, Erlangen, Fürth und Bamberg finden Gottesdienstzeiten, Neuigkeiten und Kontakte, und das Gemeindeteam pflegt alle Inhalte selbst im Admin-Bereich.',
    },
    highlights: {
      en: [
        'Monthly service schedule per city, with holidays, notes and events',
        'News articles, a parish directory and photo uploads via Convex file storage',
        'Admin dashboard with role-based access for articles, schedules, parishes and users',
        'Ukrainian and German, with hreflang, JSON-LD and Open Graph metadata',
      ],
      de: [
        'Monatlicher Gottesdienstplan pro Stadt mit Feiertagen, Hinweisen und Veranstaltungen',
        'News-Artikel, Gemeindeverzeichnis und Foto-Uploads über den Convex-Dateispeicher',
        'Admin-Bereich mit rollenbasiertem Zugriff für Artikel, Pläne, Gemeinden und Benutzer',
        'Ukrainisch und Deutsch, inklusive hreflang, JSON-LD und Open-Graph-Metadaten',
      ],
    },
    stack: ['TanStack Start', 'Convex', 'React 19', 'TanStack Query', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    slug: 'leather-lab',
    name: { en: 'Leather Lab', de: 'Leather Lab' },
    url: 'https://leatherlabusa.com/',
    displayUrl: 'leatherlabusa.com',
    image: '/projects/leather-lab.jpg',
    year: '2026',
    kind: { en: 'Business website', de: 'Unternehmenswebsite' },
    description: {
      en: 'Marketing site for Leather Lab, a mobile furniture, leather and vinyl repair service in Greater St. Louis, Missouri. It is built to be found: every service has its own prerendered page, and a service-areas page covers more than 45 cities.',
      de: 'Marketing-Website für Leather Lab, einen mobilen Reparaturservice für Möbel, Leder und Vinyl im Großraum St. Louis, Missouri. Sie ist auf Auffindbarkeit ausgelegt: Jede Leistung hat eine eigene vorgerenderte Seite, und eine Übersicht der Einsatzgebiete deckt mehr als 45 Städte ab.',
    },
    highlights: {
      en: [
        'Service pages plus a service-areas page covering 45+ cities',
        'Photo gallery with lightbox and before/after comparisons',
        'SEO groundwork: prerendering, sitemap and JSON-LD structured data',
        'Light and dark theme, error monitoring with Sentry and analytics with PostHog',
      ],
      de: [
        'Leistungsseiten und eine Übersicht der Einsatzgebiete mit über 45 Städten',
        'Fotogalerie mit Lightbox und Vorher-nachher-Vergleichen',
        'SEO-Grundlagen: Prerendering, Sitemap und strukturierte Daten (JSON-LD)',
        'Helles und dunkles Design, Fehlerüberwachung mit Sentry und Analyse mit PostHog',
      ],
    },
    stack: ['TanStack Start', 'React 19', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Turborepo'],
  },
  {
    slug: 'keylab',
    name: { en: 'Keylab', de: 'Keylab' },
    url: 'https://keylabusa.com/',
    displayUrl: 'keylabusa.com',
    image: '/projects/keylab.jpg',
    year: '2026',
    kind: { en: 'Business website', de: 'Unternehmenswebsite' },
    description: {
      en: 'Website for Keylab, a mobile locksmith offering car key replacement and lockout service in Lincoln County, Missouri. It is designed for people in a hurry: services, prices and a tap-to-call button are never more than a scroll away.',
      de: 'Website für Keylab, einen mobilen Schlüsseldienst für Autoschlüssel-Ersatz und Türöffnungen in Lincoln County, Missouri. Sie ist für Menschen in Eile gemacht: Leistungen, Preise und ein Anruf-Button sind immer nur einen Scroll entfernt.',
    },
    highlights: {
      en: [
        'Services and pricing sections with a clear step-by-step process',
        'Tap-to-call and text actions throughout the page',
        'Gallery with lightbox, FAQ accordion and a service-areas page',
        'Shares its UI package with Leather Lab in one monorepo',
      ],
      de: [
        'Leistungs- und Preisübersicht mit klar erklärtem Ablauf',
        'Anruf- und SMS-Aktionen auf der gesamten Seite',
        'Galerie mit Lightbox, FAQ-Akkordeon und Seite zu den Einsatzgebieten',
        'Teilt sich ein UI-Paket mit Leather Lab im selben Monorepo',
      ],
    },
    stack: ['TanStack Start', 'React 19', 'Tailwind CSS', 'shadcn/ui', 'Turborepo'],
  },
  {
    slug: 'timebox',
    name: { en: 'TimeBox', de: 'TimeBox' },
    url: 'https://team-timer-theta.vercel.app/',
    displayUrl: 'team-timer-theta.vercel.app',
    image: '/projects/timebox.jpg',
    year: '2026',
    kind: { en: 'Internal team tool', de: 'Internes Team-Tool' },
    description: {
      en: 'A time-box timer for team meetings and sprint refinements, built as an internal tool for my team at Planerio. It splits the meeting time across stories and runs planning poker in real time – no accounts needed, a shared link is enough.',
      de: 'Ein Timeboxing-Timer für Team-Meetings und Sprint-Refinements, entstanden als internes Tool für mein Team bei Planerio. Er verteilt die Meetingzeit auf Storys und ermöglicht Planning Poker in Echtzeit – ohne Konto, ein geteilter Link genügt.',
    },
    highlights: {
      en: [
        'Countdown timer with presets, a completion sound and a floating Picture-in-Picture window',
        'Plan sessions that rebalance the remaining time as each story closes',
        'Real-time planning-poker rooms with Fibonacci, number and T-shirt decks',
        'Four colour themes, each in light and dark mode',
      ],
      de: [
        'Countdown-Timer mit Voreinstellungen, Signalton und schwebendem Bild-im-Bild-Fenster',
        'Planungssitzungen, die die Restzeit nach jeder abgeschlossenen Story neu verteilen',
        'Planning-Poker-Räume in Echtzeit mit Fibonacci-, Zahlen- und T-Shirt-Decks',
        'Vier Farbthemen, jeweils im hellen und dunklen Modus',
      ],
    },
    stack: ['Next.js 16', 'Convex', 'React 19', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    slug: 'bodnar',
    name: { en: 'Attorney Ihor Bodnar', de: 'Rechtsanwalt Ihor Bodnar' },
    url: 'https://bodnar.in.ua/',
    displayUrl: 'bodnar.in.ua',
    image: '/projects/bodnar.jpg',
    year: '2026',
    kind: { en: 'One-page website', de: 'Onepager' },
    description: {
      en: 'One-page website for attorney Ihor Bodnar in Zbarazh, Ukraine. It presents his practice areas – family, pension, labour, civil, land and administrative law – and makes it easy to get in touch by phone or messenger.',
      de: 'Onepager für Rechtsanwalt Ihor Bodnar in Sbarasch, Ukraine. Die Seite stellt seine Schwerpunkte vor – Familien-, Renten-, Arbeits-, Zivil-, Boden- und Verwaltungsrecht – und macht die Kontaktaufnahme per Telefon oder Messenger einfach.',
    },
    highlights: {
      en: [
        'One-tap call, WhatsApp and Viber buttons in the hero',
        'Ukrainian and English with next-intl and a language switcher',
        'Structured data for attorneys, a sitemap and Open Graph images per language',
        'Light and dark theme with subtle Framer Motion animations',
      ],
      de: [
        'Anruf-, WhatsApp- und Viber-Buttons direkt im Hero-Bereich',
        'Ukrainisch und Englisch mit next-intl und Sprachumschalter',
        'Strukturierte Daten für Anwälte, Sitemap und Open-Graph-Bilder pro Sprache',
        'Helles und dunkles Design mit dezenten Framer-Motion-Animationen',
      ],
    },
    stack: ['Next.js 16', 'React 19', 'next-intl', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
];

/** Projects shown in the teaser on the home page. */
export const FEATURED_PROJECT_SLUGS = ['leather-lab', 'timebox', 'keylab'];
