export interface IFeaturedContent {
  title: string;
  details: string[];
  img?: any;
  rev?: boolean;
}

export interface ITechnology {
  name: string;
  img: any;
}

export interface IShowcase {
  title: string;
  img: string;
  desc: string[];
  tech: ITechnology[];
  link?: string;
  repo?: string;
  playStore?: string;
  appStore?: string;
}

export interface IExperience {
  employer: string;
  location?: string;
  title: string;
  details: string[];
  duration: string;
}

export interface IEducation {
  qualification: string;
  body: string;
  duration: string;
  details?: string[];
}

export interface ISkills {
  yearCompetency: number;
  skills: string[];
}

export interface IEmployer {
  name: string;
  img: string;
}

export interface ICertification {
  name: string;
  img: any;
}
