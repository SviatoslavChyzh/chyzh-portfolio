export const HEADER_HEIGHT = 4;

export type JobExperience = {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: string[];
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
    description: [
      'Developed components for managing charts on the collections page for gfknewron using React, Express.js, Node.js, and PostgreSQL.',
      'Managed UI state between microfrontends, ensuring seamless integration and improved user experience.',
      'Successfully collaborated as part of data platform for the launch of various projects that involved both front-end applications and back-end servers',
      'Developed 4+ web applications by using responsive UI elements and shadcn/ui components library via React concepts for smooth performance',
      'Build user interfaces of web applications with React.js and JavaScript based on the approved designs',
      'Analyzed user requirements and developed 50+ responsive and functional UI components via React concepts',
      'Work with various teams to setup and conduct Sharable Components Library',
    ],
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
    description: ['Development of e-commerce web shops based on the Magento eCommerce platform.'],
  },
  {
    id: '3',
    title: 'Engineer–Developer',
    company: 'Region “Ternopiloblenergo”',
    startDate: 'Jan 2017',
    endDate: 'Oct 2018',
    description: [
      'Developer. Support of billing software “SunFlower”. Setting up servers, db, developing client and server side. Support of Act of breach of contract accounting and circulation program. Support of Electric counters accounting and circulation program.',
      'Maintenance (both development and administration) of the existing billing system “SunFlower”. Support the system, developing new features, modifying business rules (stored procedures МS SQL). Microsoft Visual Studio 2017, C# has been used to develop user interface.',
      'Development web application PortalTOE for adding data of employees, using ASP.NET Core on backend and HTML, CSS, JQuery, AngularJS on frontend.',
    ],
  },
  {
    id: '4',
    title: 'System administrator 1С',
    company: 'ТЕRКО Auto Ternopil',
    startDate: 'Jan 2016',
    endDate: 'Jan 2017',
    description: [
      'Administration of 1C:Enterprise 8.3. Maintenance of the existing accounting system. Development of new features, modifying business rules (stored procedures MS SQL).',
      'Development of the reports for CarCleaning application connecting to 1C database.',
    ],
  },
  {
    id: '5',
    title: 'Junior developer',
    company: 'REM Zbarazh',
    startDate: 'Sep 2009',
    endDate: 'Jan 2016',
    description: [
      'Run and terminated low voltage cable, voice and data structured cabling, fiber and coaxial.',
      'Installed Internet, cable, and telephone inside office rooms.',
      'Analize billing reports',
      'Created and maintained Database clients of the electricity company in 0.4kV networks in\n' +
        'MSSQL.',
    ],
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
