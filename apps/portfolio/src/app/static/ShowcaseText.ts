import { IShowcase, ITechnology } from './interfaces';

const ANGULAR_SHOWCASE_REPO =
  'https://bitbucket.org/krisantrobus/angular-showcase-web/src/master/';

export const technologies: { [key: string]: ITechnology } = {
  angular: {
    name: 'Angular',
    img: require('../../assets/images/tech/angular.png'),
  },
  react: {
    name: 'React',
    img: require('../../assets/images/tech/react.png'),
  },
  jquery: {
    name: 'jQuery',
    img: null,
  },
  java: {
    name: 'Java',
    img: require('../../assets/images/tech/java.jpg'),
  },
  ngrx: {
    name: 'NgRx',
    img: require('../../assets/images/tech/ngrx.jpg'),
  },
  angularjs: {
    name: 'AngularJs',
    img: null,
  },
  nodejs: {
    name: 'NodeJs',
    img: require('../../assets/images/tech/nodejs.png'),
  },
  spring: {
    name: 'Spring',
    img: require('../../assets/images/tech/spring.png'),
  },
  mongo: {
    name: 'MongoDB',
    img: require('../../assets/images/tech/mongodb.jpg'),
  },
  python: {
    name: 'Python',
    img: require('../../assets/images/tech/python.jpg'),
  },
  d3js: {
    name: 'D3.js',
    img: null,
  },
  firebase: {
    name: 'Firebase',
    img: require('../../assets/images/tech/firebase.jpg'),
  },
  firestore: {
    name: 'Firestore',
    img: require('../../assets/images/tech/firebase.jpg'),
  },
  bootstrap: {
    name: 'Bootstrap',
    img: require('../../assets/images/tech/bootstrap.png'),
  },
  redux: {
    name: 'Redux',
    img: require('../../assets/images/tech/redux.jpg'),
  },
  reactnative: {
    name: 'React Native',
    img: require('../../assets/images/tech/react.png'),
  },
  typescript: {
    name: 'Typescript',
    img: require('../../assets/images/tech/typescript.png'),
  },
  expo: {
    name: 'Expo',
    img: require('../../assets/images/tech/expo.png'),
  },
};

export const _angularProjects: IShowcase[] = [
  {
    title: 'Finance Tracker',
    img: require('../../assets/images/showcase/finance-tracker.png'),
    desc: [
      `This is a pet project of mine, the concept was my final year project at university written in native android. I used this on a regular basis to track my finances so decided to rewrite it using a newer tech stack.`,
      `This is written in react native using Firestore as the cloud storage. Security rules are implemented to only allow authenticated users to access their own data using a nested document structure.`,
      `React native was used as I wanted to experiment with a newer framework but also because it would work across mobile platforms, android and IOS. This app is currently released on the play store and will be released to IOS in the near future pending developer licence.`,
    ],
    tech: [
      technologies.reactnative,
      technologies.redux,
      technologies.firestore,
      technologies.typescript,
      technologies.expo,
    ],
    playStore:
      'https://play.google.com/store/apps/details?id=financetracker.krisantrobus.dev',
    appStore: 'https://apps.apple.com/us/app/finance-tracker-kad/id1550448996',
  },
  {
    title: 'Radiology Question Bank',
    // link: "https://kantrobus.dev/freelance/hospital",
    img: require('../../assets/images/showcase/boardcrusher.png'),
    desc: [
      `This was a freelance project for a radiology resident of a hospital in North Carolina. The brief was to create a multiple choice quiz to help current and future radiologists prepare for their boards.`,
      `As the client will be taking ownership of the final application a simple tech stack was selected. This was an angular front end and a reliable, scalable cloud database, Google’s Firestore. Firestore was selected as the client already had a firebase account and was familiar with this enabling them to make minor changes in the future. It would also result in a smoother deployment. My developer firebase account was used in the development and the credentials were managed via environments to easily swap credentials to deploy to a different instance.`,
      `Key requirements for this application was to implement role based access to grant the client privileged access to other parts of the application. The main purpose of this was to provide an admin console section to manage the categories and questions of the application. Users should be able to track their progress on all categories and retake the quizzes with historical data captured to display improvement to the users.`,
      `Some technical highlights for this application was a custom image viewer written with Javascript to allow the users to view a bigger version of the image, pan, zoom and invert the color to help them identify the issue. Another challenge was to implement a verification step to only allow users with a specific email account to access the application and require them to verify their address before granting access. Multiple Firestore indexes were also created to query the databse in a performant manner.`,
      `The client gave permission to use the development instance of this application on my portfolio. It can be accessed via the link below. There is no authentication stage and you will have admin access to explore all features. As this is a production app the code repository is not shared.`,
    ],
    tech: [
      technologies.angular,
      technologies.bootstrap,
      technologies.firestore,
    ],
  },
  {
    title: 'Crypto Currency',
    link: 'https://kantrobus.com/angular-challenges/currency',
    img: require('../../assets/images/showcase/crypto-currency.png'),
    desc: [
      `This application was part of a tech challenge for a FinTech employer. The brief was to use an open api to develop an app to allow users to view a select number of crypto currencies with their names and value in USD. They should also be able to search for other cryptocurrencies and include them in the view. By selecting a currency the user should be redirected to another page to view more details such as the volume and quantity purchased per x amount of USD.`,
      `The brief allowed for the usage of libraries for UI components so bootstrap was used for both the positioning of elements in a grid system. The icons for this app were retrieved from another library which used the cryptocurrency codes from the api to determine the correct icon.`,
      `As this is a tech challenge there will be links provided to the original repository. For ease of deployment and management all tech challenges with the same technology are held in the same repository. The code can be found under the modules directory where they are then split into the challenges.`,
    ],
    tech: [
      technologies.angular,
      technologies.bootstrap,
      technologies.typescript,
    ],
    repo: ANGULAR_SHOWCASE_REPO,
  },
  {
    title: 'Weather App',
    link: 'https://kantrobus.com/angular-challenges/weather/all',
    img: require('../../assets/images/showcase/weather-cards.PNG'),
    desc: [
      `This application was part of a tech challenge for a potential employer. The brief was to use an open api to develop an app to allow users to view the current weather in 5 specific cities along with the changes over the upcoming hours. Additional metrics were also pulled such as humidity and wind speed that would need to be displayed in a user friendly way.`,
      `The brief allowed for the usage of libraries for UI components so bootstrap was used for both the positioning of elements in a grid system and also to display dialog data. The icons for this app were retrieved from another library which used the weather codes from the api to determine the correct icon.`,
      `As this is a tech challenge there will be links provided to the original repository. For ease of deployment and management all tech challenges with the same technology are held in the same repository. The code can be found under the modules directory where they are then split into the challenges.`,
    ],
    tech: [
      technologies.angular,
      technologies.bootstrap,
      technologies.typescript,
    ],
    repo: ANGULAR_SHOWCASE_REPO,
  },
  {
    title: 'Weather Map',
    link: `https://kantrobus.com/angular-challenges/weather/map`,
    img: require('../../assets/images/showcase/weather-map.PNG'),
    desc: [
      `This was an extension to the weather app also documented in the showcase. The brief did not ask for this however, as I had implemented this feature in previous projects I saw an opportunity to enhance the UI and to provide evidence of a new skill to the potential employer.`,
      `As this is a tech challenge there will be links provided to the original repository. For ease of deployment and management all tech challenges with the same technology are held in the same repository. The code can be found under the modules directory where they are then split into the challenges.`,
    ],
    tech: [
      technologies.angular,
      technologies.bootstrap,
      technologies.typescript,
    ],
    repo: ANGULAR_SHOWCASE_REPO,
  },
  {
    title: 'Current Movies',
    link: `https://kantrobus.com/angular-challenges/movies`,
    img: require('../../assets/images/showcase/movie-cards.PNG'),
    desc: [
      `This application was part of a tech challenge for a potential employer. The brief was to use an open api to retrieve the latest movies and display them to the user providing additional details when selected.`,
      `There was a specification to not use libraries to create UI components such as cards and dialogs. I did however use bootstrap for the positional aspect.`,
      `As this is a tech challenge there will be links provided to the original repository. For ease of deployment and management all tech challenges with the same technology are held in the same repository. The code can be found under the modules directory where they are then split into the challenges.`,
    ],
    tech: [
      technologies.angular,
      technologies.bootstrap,
      technologies.typescript,
    ],
    repo: ANGULAR_SHOWCASE_REPO,
  },
];
