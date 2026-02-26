import { Button, Card, Chip, CloseButton, Tooltip } from '@heroui/react';
import { _employers, _skillsList } from './static/profileText';
import Image from 'next/image';
import Skills from './_components/Skill';
import { ImageTooltip } from './_components/ImageTooltip';

export default function Index() {
  return (
    // <div>
    //       <img
    //         alt="kristian antrobus profile"
    //         className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
    //         loading="lazy"
    //         src="https://avatars.githubusercontent.com/u/55083528?s=400"
    //       />
    //     </div>
    //     <div className="flex flex-1 flex-col gap-3">
    //       <Card.Header className="gap-1">
    //         <Card.Title className="pr-8">Kristian Antrobus</Card.Title>
    //         <Card.Description>
    //           Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam
    //           dolor sed amet faucibus etiam.
    //         </Card.Description>
    //       </Card.Header>
    //     </div>
    //   </Card>
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
