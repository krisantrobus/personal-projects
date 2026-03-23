import { Card } from '@heroui/react';
import {
  _employers,
  _skillsList,
  _personalMeta,
  _profileSummary,
  _cvSkills,
  _experienceList,
  _topSkills,
} from './static/profileText';
import Skills from './_components/Skill';
import { ImageTooltip } from './_components/ImageTooltip';
import SelfImage from './images/self/featured-self.png';
import Image from 'next/image';
import Experience from './_components/Experience';

export default function Index() {
  return (
    <div className="lg:grid grid-cols-3 gap-4 h-100 block">
      <div>
        <div className="rounded-xl overflow-hidden lg:w-[80%] w-75 my-4 mx-auto">
          <Image
            src={SelfImage}
            alt="developer profile photo"
            objectFit="cover"
          />
        </div>
        <Card className="text-left lg:-mt-60 -mt-35 mb-8 xl:ms-16 mx-4 xl:mx-0">
          <Card.Header className="text-left">
            Kristian Antrobus | Fullstack
          </Card.Header>
          <h1 className="font-semibold -my-2">Fullstack Developer</h1>
          <div className="text-sm font-light">
            {_personalMeta.Email} | {_personalMeta.Location}
          </div>
          <p>{_profileSummary[0]}</p>
          <p>{_profileSummary[1]}</p>
        </Card>
      </div>
      <div className="col-span-2 p-4 lg:h-dvh lg:-overflow-y-auto">
        <h2>Most recent experience</h2>
        <Experience
          {..._experienceList[0]}
          key={`${_experienceList[0].title}`}
        />
        <Card className="bg-white">
          <div className="flex justify-center">
            {_employers.map((e) => (
              <ImageTooltip {...e} />
            ))}
          </div>
        </Card>
        <div className="my-16">
          <p className="mb-4">
            Over a 10-year career, I have developed a broad and well-rounded
            expertise across multiple areas of software development and
            technologies. Below is a summary of my core strengths and most
            recent experiences
          </p>
          <Skills skills={_topSkills} align="center" />
        </div>
      </div>
    </div>
  );
}
