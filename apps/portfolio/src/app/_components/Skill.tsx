import { Chip } from '@heroui/react';

interface SkillComp {
  skills: string[];
  limit?: number;
  small?: boolean;
  align?: string;
  reverse?: boolean;
}

export const Skills = ({
  skills = [],
  limit,
  small = true,
  align = 'center',
  reverse = false,
}: SkillComp) => {
  const skillsArr: string[] = limit ? [...skills].splice(0, limit) : skills;
  return (
    <div className={`flex flex-wrap mx-auto justify-${align}`}>
      {skillsArr.map((skill, i) => (
        <Chip color="accent" key={`skill=${skill}-${i}`} className="m-1">
          {skill}
        </Chip>
      ))}
    </div>
  );
};

export default Skills;
