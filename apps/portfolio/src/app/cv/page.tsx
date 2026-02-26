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

const Education: React.FC<IEducation> = ({
  duration,
  body,
  qualification,
  details,
}) => {
  return (
    <div className="d-flex flex-column mb-2">
      <span className="small">{duration}</span>
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
    <div className="grid grid-cols-12">
      <div className="flex flex-col px-2 col-span-12">
        <h2 className="w-100 mb-2">Kristian Antrobus</h2>
        <h4 className="w-100 cv-header">Full Stack Developer</h4>
        <h4>Profile</h4>
        {_profileSummary.map((p, i) => {
          return <p key={`summary-${i}`}>{p}</p>;
        })}
        <h4 className="w-100 cv-header"></h4>
      </div>
      <div className="px-2 md:col-span-4 sm:col-span-12">
        <h4 className="mb-4">Contact</h4>
        {Object.keys(_personalMeta).map((key, i) => {
          return (
            <p key={`personal-${i}`}>
              <strong>{key}</strong>: {_personalMeta[key]}
            </p>
          );
        })}

        <h4 className="my-2">Skills</h4>
        {_cvSkills.map((skill, i) => (
          <div className="mb-4" key={`skills-${i}`}>
            <p className="mb-0">{skill.yearCompetency}+ Yrs</p>
            <Skills skills={skill.skills} align="start" />
          </div>
        ))}

        <h4 className="my-2">Education</h4>
        {_educationList.map((ed) => {
          return <Education {...ed} key={ed.qualification} />;
        })}

        <h4 className="my-2">Interests</h4>
        {_interest.map((interest, index) => {
          return <p key={`interest-${index}`}>{interest}</p>;
        })}
      </div>
      <div className="md:col-span-8 sm:col-span-12">
        <h4 className="mb-4">Experience</h4>
        {_experienceList.map((exp, i) => {
          return <Experience {...exp} key={`${exp.title}${i}`} />;
        })}
      </div>
    </div>
  );
}
