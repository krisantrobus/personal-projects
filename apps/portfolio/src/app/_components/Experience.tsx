import { IExperience } from '../static/interfaces';

export const Experience: React.FC<IExperience> = ({
  details,
  duration,
  employer,
  title,
  location,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <span className="font-light">{duration}</span>
      <p className="mb-0 text-md font-semibold">{employer}</p>
      <p>
        <em className="font-semibold">{title}</em>
        {location && ` , ${location}`}
      </p>

      {details.map((detail: string, i) => {
        return (
          <p key={`exp-${i}`} className="mb-2">
            {detail}
          </p>
        );
      })}
    </div>
  );
};

export default Experience;
