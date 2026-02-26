import { Card } from '@heroui/react';
import { _employers, _skillsList } from './static/profileText';
import Skills from './_components/Skill';
import { ImageTooltip } from './_components/ImageTooltip';

export default function Index() {
  return (
    <div>
      <Card className="my-4">
        <Card.Header className="text-center">Key skills</Card.Header>
        <Skills skills={_skillsList} limit={10} />
      </Card>

      <div className="flex flex-wrap justify-center">
        {_employers.map((e) => (
          <ImageTooltip {...e} />
        ))}
      </div>
    </div>
  );
}
