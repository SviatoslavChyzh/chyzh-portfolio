export const HEADER_HEIGHT = 4;

export type JobExperience = {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: { en: Array<string>; de: Array<string> };
  projects?: Array<{
    name: string;
    link?: string;
  }>;
};

export const EDUCATION: Array<JobExperience> = [
  {
    id: '1',
    title: "Master's degree, Engineering Physics/Applied Physics",
    company: 'Ivan Franko National University of Lviv',
    startDate: '01/2004 ',
    endDate: '12/2009',
  },
  {
    id: '2',
    title: 'Cisco Certified Network Associate (CCNA) Routing and Switching',
    company: 'Cisco Academy at Ternopil Ivan Puluj National Technical University',
    startDate: '2009',
    endDate: '2010',
  },
];

export const JOB_EXPERIENCE: Array<JobExperience> = [
  {
    id: '1',
    title: 'Front-End Software Engineer',
    company: 'GfK - NIQ company',
    startDate: 'Oct 2019',
    endDate: 'Present',
    description: {
      en: [
        'Developed components for managing charts on the collections page for gfknewron using React, Express.js, Node.js, and PostgreSQL.',
        'Managed UI state between microfrontends, ensuring seamless integration and improved user experience.',
        'Successfully collaborated as part of data platform for the launch of various projects that involved both front-end applications and back-end servers',
        'Developed 4+ web applications by using responsive UI elements and shadcn/ui components library via React concepts for smooth performance',
        'Build user interfaces of web applications with React.js and JavaScript based on the approved designs',
        'Analyzed user requirements and developed 50+ responsive and functional UI components via React concepts',
        'Work with various teams to setup and conduct Sharable Components Library',
      ],
      de: [
        'Entwickelte Komponenten zur Verwaltung von Diagrammen auf der Sammlungsseite für gfknewron unter Verwendung von React, Express.js, Node.js und PostgreSQL.',
        'Verwalteter UI-Zustand zwischen Microfrontends, um eine nahtlose Integration und eine verbesserte Benutzererfahrung zu gewährleisten.',
        'Erfolgreich als Teil der Datenplattform zusammengearbeitet für den Start verschiedener Projekte, die sowohl Front-End-Anwendungen als auch Back-End-Server umfassten',
        'Entwickelte 4+ Webanwendungen, indem responsive UI-Elemente und shadcn/ui-Komponentenbibliothek über React-Konzepte für eine reibungslose Leistung verwendet wurden',
        'Erstellen Sie Benutzeroberflächen von Webanwendungen mit React.js und JavaScript basierend auf den genehmigten Designs',
        'Analysierte Benutzeranforderungen und entwickelte 50+ responsive und funktionale UI-Komponenten über React-Konzepte',
        'Arbeiten Sie mit verschiedenen Teams zusammen, um eine Sharable Components Library einzurichten und durch zu führen',
      ],
    },
    projects: [
      {
        name: 'gfknewron',
        link: 'https://nielseniq.com/global/en/products/gfknewron/',
      },
      {
        name: 'Data In DIS Admin',
      },
      {
        name: 'Data Platform WebTas',
      },
    ],
  },
  {
    id: '2',
    title: 'Magento Developer',
    company: 'Smile Ukraine',
    startDate: 'Oct 2018',
    endDate: 'Oct 2019',
    description: {
      en: ['Development of e-commerce web shops based on the Magento eCommerce platform.'],
      de: ['Entwicklung von E-Commerce-Webshops auf Basis der Magento eCommerce-Plattform.'],
    },
  },
  {
    id: '3',
    title: 'Engineer–Developer',
    company: 'Region “Ternopiloblenergo”',
    startDate: 'Jan 2017',
    endDate: 'Oct 2018',
    description: {
      en: [
        'Developer. Support of billing software “SunFlower”. Setting up servers, db, developing client and server side. Support of Act of breach of contract accounting and circulation program. Support of Electric counters accounting and circulation program.',
        'Maintenance (both development and administration) of the existing billing system “SunFlower”. Support the system, developing new features, modifying business rules (stored procedures МS SQL). Microsoft Visual Studio 2017, C# has been used to develop user interface.',
        'Development web application PortalTOE for adding data of employees, using ASP.NET Core on backend and HTML, CSS, JQuery, AngularJS on frontend.',
      ],
      de: [
        'Entwickler. Unterstützung der Abrechnungssoftware „SunFlower“. Einrichten von Servern, Datenbanken, Entwicklung von Client- und Serverseite. Unterstützung des Programms zur Erfassung und Abwicklung von Vertragsverletzungen. Unterstützung des Programms zur Erfassung und Abwicklung von Elektrozählern.',
        'Wartung (Entwicklung und Administration) des bestehenden Abrechnungssystems „SunFlower“. Unterstützung des Systems, Entwicklung neuer Funktionen, Änderung von Geschäftsregeln (gespeicherte Prozeduren MS SQL). Microsoft Visual Studio 2017, C# wurde zur Entwicklung der Benutzeroberfläche verwendet.',
        'Entwicklung der Webanwendung PortalTOE zur Erfassung von Mitarbeiterdaten unter Verwendung von ASP.NET Core auf der Backend- und HTML-, CSS-, JQuery-, AngularJS-Technologien auf der Frontend-Seite.',
      ],
    },
  },
  {
    id: '4',
    title: 'System administrator 1С',
    company: 'ТЕRКО Auto Ternopil',
    startDate: 'Jan 2016',
    endDate: 'Jan 2017',
    description: {
      en: [
        'Administration of 1C:Enterprise 8.3. Maintenance of the existing accounting system. Development of new features, modifying business rules (stored procedures MS SQL).',
        'Development of the reports for CarCleaning application connecting to 1C database.',
      ],
      de: [
        'Verwaltung von 1C:Enterprise 8.3. Wartung des bestehenden Rechnungswesensystems. Entwicklung neuer Funktionen, Änderung von Geschäftsregeln (gespeicherte Prozeduren MS SQL).',
        'Entwicklung der Berichte für die CarCleaning-Anwendung, die mit der 1C-Datenbank verbunden sind.',
      ],
    },
  },
  {
    id: '5',
    title: 'Junior developer',
    company: 'REM Zbarazh',
    startDate: 'Sep 2009',
    endDate: 'Jan 2016',
    description: {
      en: [
        'Run and terminated low voltage cable, voice and data structured cabling, fiber and coaxial.',
        'Installed Internet, cable, and telephone inside office rooms.',
        'Analize billing reports',
        'Created and maintained Database clients of the electricity company in 0.4kV networks in MSSQL.',
      ],
      de: [
        'Führen und Beenden von Niederspannungskabeln, Sprach- und Datenverkabelung, Glasfaser- und Koaxialkabel.',
        'Installiertes Internet, Kabel und Telefon in Bürozimmern.',
        'Abrechnungsberichte analysieren',
        'Erstellen und Pflegen von Datenbankkunden des Stromversorgungsunternehmens in 0,4-kV-Netzen in MSSQL.',
      ],
    },
  },
];

export const SKILLS = [
  'React',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'REST API',
  'PostgreSQL',
  'Git',
  'Jest',
  'React Testing Library',
  'Agile',
  'Scrum',
  'Jira',
  'Confluence',
  'GitHub',
  'GitLab',
];
