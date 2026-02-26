import { IFeaturedContent } from "./interfaces";

export const _featuredHomeContent: IFeaturedContent[] = [
  {
    title: "Key Projects",
    details: [
      `One recent project I was involved with was implementing a self-service application to allow internal application teams to stream server and app logs to a central repository. This involved transforming them to an analytics ready object. A web application was created to walk them through the installation and configuration of necessary software.`,
      `I began my career in data management and business intelligence. This included developing ETL processes to copy all application data to a central data warehouse. I also developed a lot of analytical reports to provide critical data in a useful way to the business.`,
    ],
  },
  {
    title: "Ambitions",
    details: [
      `My ambitions are to become a strong full stack developer working predominantly on application development. Preferred languages are Java, JavaScript, Typescript and python using the latest JavaScript frameworks.`,
      `The types of projects that I’d like to be working on are highly responsive web and mobile applications that are platform agnostic. These applications can be internal enhancing core business operations or directly impacting users to deliver powerful solutions.`,
    ],
    // img: require("../assets/images/infographics/architecture.jpeg"),
    rev: true,
  },
];

export const _showcaseFeature: IFeaturedContent = {
  title: "Showcase",
  details: [
    `Below are some examples of previous projects I have worked on, apps I have developed or coding challenges completed for previous employers. These code challenges will have links to the repositories for code review, assessing capabilities.`,
  ],
};
