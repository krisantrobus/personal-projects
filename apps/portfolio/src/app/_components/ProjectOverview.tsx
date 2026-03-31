import { IProjectOverview } from '../static/interfaces';
import Skills from './Skill';

export const ProjectOverview: React.FC<IProjectOverview> = ({
  description,
  tech,
  title,
  company,
}) => {
  return (
    <div>
      <h3 className="text-md font-semibold mb-4">{title}</h3>
      {description?.map((d) => (
        <p className="mb-4">{d}</p>
      ))}
      <div className="flex justify-start">
        <span>Knowledge: </span>
        <div className="-mt-1 ms-2">
          <Skills align="start" skills={tech} />
        </div>
      </div>
    </div>
  );
};
