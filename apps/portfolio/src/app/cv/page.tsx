import Link from 'next/link';
import Experience from '../_components/Experience';
import Skills from '../_components/Skill';
import { IEducation } from '../static/interfaces';
import {
  _certifications,
  _cvSkills,
  _educationList,
  _experienceList,
  _interest,
  _personalMeta,
  _profileSummary,
} from '../static/profileText';
import { Button } from '@heroui/react';

const Education: React.FC<IEducation> = ({
  duration,
  body,
  qualification,
  details,
}) => {
  return (
    <div className="d-flex flex-column mb-4">
      <span className="font-light text-sm">{duration}</span>
      <p style={{ marginBottom: 0 }}>
        <strong>{qualification}</strong>
      </p>
      <p>
        <span className="font-italic">{body}</span>
      </p>
      {details?.map((detail) => {
        return <p key={detail}>{detail}</p>;
      })}
    </div>
  );
};

export default function Index() {
  return (
    <div className="grid grid-cols-12 animate-hero-fade-y">
      <div className="flex flex-col px-4 col-span-12">
        <div className="my-4 flex justify-between items-center ">
          <div>
            <h1 className="mb-2 text-lg font-bold">Kristian Antrobus</h1>
            <h2 className="text-lg font-semibold">Software Engineer</h2>
          </div>
          <Link href="/">
            <Button variant="secondary">Home</Button>
          </Link>
        </div>
        <div className="my-4 border-y-4 py-8">
          <h4 className="mb-4 text-lg font-semibold">Profile</h4>
          {_profileSummary.map((p, i) => {
            return <p key={`summary-${i}`}>{p}</p>;
          })}
        </div>
      </div>
      <div className="px-4 md:col-span-4 col-span-12 lg:border-r-4 ">
        <h4 className="mb-4 text-lg font-semibold">Contact</h4>
        {Object.entries(_personalMeta).map(([key, value], index) => {
          return (
            <p key={`personal-${index}`}>
              <strong>{key}</strong>: {value}
            </p>
          );
        })}

        <h4 className="mb-2 mt-6 text-lg font-semibold">Skills</h4>
        {_cvSkills.map((skill, i) => (
          <div className="mb-4" key={`skills-${i}`}>
            <p className="mb-0">{skill.yearCompetency}+ Yrs</p>
            <Skills skills={skill.skills} align="start" />
          </div>
        ))}

        <h4 className="mb-2 mt-6 text-lg font-semibold">Education</h4>
        {_educationList.map((ed) => {
          return <Education {...ed} key={ed.qualification} />;
        })}

        <h4 className="mb-2 mt-6 text-lg font-semibold">Interests</h4>
        {_interest.map((interest, index) => {
          return (
            <p className="mb-4" key={`interest-${index}`}>
              {interest}
            </p>
          );
        })}
      </div>
      <div className="md:col-span-8 col-span-12 px-4 mt-8 md:mt-0">
        <h4 className="mb-4 text-lg font-semibold">Experience</h4>
        {_experienceList.map((exp, i) => {
          return <Experience {...exp} key={`${exp.title}${i}`} />;
        })}
      </div>
    </div>
  );
}
