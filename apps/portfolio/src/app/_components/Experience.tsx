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
      <span className="small">{duration}</span>
      <p className="mb-0">
        <strong>{employer}</strong>
      </p>
      <p>
        <strong>
          <em>{title}</em>
        </strong>
        {location && ` , ${location}`}
      </p>

      {details.map((detail: string, i) => {
        return <p key={`exp-${i}`}>{detail}</p>;
      })}
    </div>
  );
};

export default Experience;
