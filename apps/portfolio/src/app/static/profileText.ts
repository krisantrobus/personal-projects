import {
  ISkills,
  ICertification,
  IEmployer,
  IEducation,
  IExperience,
} from './interfaces';

export const _profileSummary: string[] = [
  `A motivated and passionate developer looking to progress a career within web and mobile development as a full stack engineer. Driven by delivering simplified solutions to empower users. Works well as a team, transferring knowledge and skills, providing support and contributing to key decisions.`,
  `Proficient in many of the latest JS frameworks such as React and Angular. Open to independent, contract and full time opportunities.`,
];

export const _email: string = 'krisantrobus@gmail.com';
export const _roleTitle: string = 'Software Engineer Specialist';

export const _personalMeta: any = {
  Born: '11-Dec-1995',
  Location: 'Bloomington, MN, 55438',
  Email: 'krisantrobus@gmail.com',
  Webiste: 'https://kantrobus.com',
  // Nationality: "British",
  Languages: 'English',
};

export const _experienceList: IExperience[] = [
  {
    employer: 'Independent Projects',
    title: 'Full Stack Developer',
    duration: 'Ongoing',
    details: [
      `I have a passion for developing my own applications. I use these projects to challenge myself in new areas and learn new languages, almost always being full stack projects. Examples include a web chat that uses a Java Spring boot backend and an angular front end learning how to implement web sockets. Another being a task tracker to enhance python knowledge with Django and an Angular Ionic front end. This project is deployed on AWS to gain a greater insight to the cloud provider and its services. `,
    ],
  },
  {
    employer: 'Twilio',
    location: 'Remote, USA',
    title: 'Full Stack Developer',
    duration: 'July 2022 - December 2025',
    details: [
      `During the tenure at Twilio I was part of multiple teams as a full stack developer. The first was under Programmable Messaging where we integrated UI features to enable customers to control and manage new features released as part of the core product. This role also required us to maintain and extend a BFF layer written in Typescript to interact with downstream internal services and relate this abc to the UI. Some key areas that were outside of the standard front end programming was a heavy emphasis on data visualisation allowing customers to monitor and proactively alert users of activity on their accounts with their API usage.`,
      `Another team where I worked was focused on building the design system for the frontend of Twilio web applications. It was an open source system called Paste built on top of Emotion and Reakit libraries to create highly accessible UI components that can be consumed by developers to build consistent experiences for our customers. These were highly customized components for Twilio use cases. This involved working very closely with designers and overcoming challenges with accessibility and responsiveness to give all users the best experiences.`,
    ],
  },
  {
    employer: 'Salesforce',
    location: 'Remote, USA',
    title: 'Technical Consultant',
    duration: 'August 2021 - July 2022',
    details: [
      `Working as a technical consultant provided the experience of working closely with an external client, the US’ largest non profit, delivering solutions in an agile way. The role for this client was as a post production full stack developer.`,
      `These responsibilities ranged from developing new interactions between external services, enhancing existing solutions as well as refactoring old processes. Alongside all of these development tasks I was also required to investigate data issues from quality to unexpected process results. Classes were written in order to target and clean these data sets along with resolving any bugs identified along the way.`,
    ],
  },
  {
    employer: 'American Credit Acceptance',
    location: 'Remote, UK',
    title: 'UI Developer',
    duration: 'March 2020 - August 2020',
    details: [
      `I worked across multiple Angular projects during my time here. Being the sole developer on 2 projects developing from use cases to MVPs and into production.`,
      `Closely working with an internal developer we produced a starter repository. The requirement was to produce a template application with highly reusable presentational and container components such as authentication services. To achieve the goal of being easily customised to fit the needs of new teams object orientation was implemented via typescript.`,
    ],
  },
  {
    employer: 'Freelance - Wake Forest Health',
    location: 'Remote, UK',
    title: 'Full Stack Engineer',
    duration: 'January 2020 - March 2020',
    details: [
      `A requirement from a resident at Wake Forest brought me to become the sole developer on this project. The work entailed building a website that would allow all residents at that hospital to practice for their boards, a final exam before moving into fellowship. The tech stack was Angular with the backend using Firestore as both a document data and image store. A simplified demo version can be found via my portfolio website.`,
    ],
  },
  {
    employer: 'ACT',
    location: 'Cardiff, Wales, UK',
    title: 'Full Stack Engineer',
    duration: 'September 2019 - December 2019',
    details: [
      `During my full stack role I implemented new endpoints built with Java Swagger and Dropwizard interacting with other Java services as part of a loosely coupled microservice architecture. I brought previous knowledge of front end design into the team by demonstrating and implementing component driven architecture in the front-end using both angularJS and Angular, documenting the theory to share with other members of the team.`,
      `With the goal of containerization set on the teams I worked closely with the lead UI developer to Dockerize the Angular frontend, bringing previous knowledge of the process. Integration with the Jenkins pipeline followed.`,
    ],
  },
  {
    employer: 'BT',
    location: 'Cardiff, Wales, UK',
    title: 'Full Stack Developer',
    duration: 'September 2018 - September 2019',
    details: [
      `Becoming a part of and R&D team in its early stages provided new and exciting challenges. These included managing our own infrastructure via Ansible and investigating and implementing new technologies such as Docker. `,
      `Our initial task was to create a service for the company to easily ingest, transform and store log files from servers to provide near real time analytics on applications and infrastructure. Having technical freedom of implementation we chose ELK, Docker, Angular, Kafka, Ansible and Python Flask to name a few. `,
    ],
  },
  {
    employer: 'BT',
    location: 'Cardiff, Wales, UK',
    title: 'DSS Higher Apprentice Software Engineer',
    duration: 'October 2015 - September 2018',
    details: [
      `I started my career as an Apprentice software developer working 75% on the job in the company and the remaining 25% studying for my degree. During this time I was exposed to many different software aspects database management, API creation, Business intelligence, Architecture, Security and ETL. All while learning industry best practices and standards.`,
      `Being part of so many areas I gained experience with a variety of languages such as Java, Python, Javascript, Bash, SQL, PL/SQL, MapReduce and Kafka.`,
    ],
  },
];

export const _educationList: IEducation[] = [
  {
    qualification: 'FdSc Information and Communication Technology',
    body: 'Staffordshire University',
    duration: '2015 - 2018',
    // [
    //   `I graduated in July 2018 with a distinction. This course covered various programming concepts in both Java and Android. It included data management principles and a module for Business.`,
    // ]
  },
  {
    qualification: 'Level 4 NVQ  IT',
    body: 'BT UK',
    duration: '2015 - 2018',
    // [
    //   `This NVQ covers the key skills required when working with IT. Included working with basic applications such as email and word processing. It also covered more technical aspects such as handling fault diagnosis and delivering technical advice and guidance.`,
    // ]
  },
];

export const _cvSkills: ISkills[] = [
  {
    yearCompetency: 8,
    skills: [
      'Typescript',
      'Javascript',
      'HTML5',
      'SASS',
      'CSS3',
      'React',
      'Angular',
      'Node.js',
      'Git',
      'Bootstrap',
      'DevOPS',
      'Agile',
      'jest',
      'Redux',
      'relational and non-relational DBs',
    ],
  },
  {
    yearCompetency: 5,
    skills: ['AWS', 'Java', 'Python', 'Docker'],
  },
  {
    yearCompetency: 3,
    skills: [
      'Next.JS',
      'Highcharts',
      'Jenkins',
      'NgRx',
      'React Native',
      'MongoDB',
      'Spring Boot',
      'D3.js',
      'SQL',
      'Django',
    ],
  },
];

export const _skillsList: string[] = [
  `Node.js`,
  `Next.js`,
  `Tailwind`,
  `React`,
  `Angular`,
  `React Native`,
  `Redux`,
  `TypeScript`,
  `JavaScript`,
  `Highcharts`,
  `Vite`,
  `Git`,
  `Docker`,
  `Jest`,
  `Chromatic`,
  `Bootstrap`,
  `HTML5`,
  `CSS3`,
  `SASS`,
  `Java`,
  `Spring boot`,
  `JQuery`,
  `ELK`,
  `MongoDB`,
  `Python`,
  `D3.js`,
  `Leaflet.js`,
  `SQL`,
];

export const _interest: string[] = [
  `I would describe myself as a creative person. I enjoy both digital and traditional art producing my own assets for my independent projects. `,
  `During the past year I have taken up the challenge of teaching myself piano and picking guitar back up.`,
  `My personal ambitions are to travel the world, visit unique places and experience new cultures.`,
];

export const _employers: IEmployer[] = [
  { name: 'Twilio', img: require('../images/employers/twilio.png') },
  { name: 'Salesforce', img: require('../images/employers/salesforce.png') },
  { name: 'OrangeBees', img: require('../images/employers/orangebees.png') },
  {
    name: 'American Credit Acceptance',
    img: require('../images/employers/aca.png'),
  },
  {
    name: 'Advanced Card Technologies',
    img: require('../images/employers/act.png'),
  },
  { name: 'British Telecomms', img: require('../images/employers/bt.png') },
];

export const _certifications: ICertification[] = [
  {
    name: 'AWS Cloud Practitioner 1',
    img: require('../images/certifications/AWS-CloudPractitioner-2020.png'),
  },
  {
    name: 'Platform Developer 1',
    img: require('../images/certifications/pd1.jpg'),
  },
];
