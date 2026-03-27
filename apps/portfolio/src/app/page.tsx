import { Button, Card } from '@heroui/react';
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
import Image from 'next/image';
import Experience from './_components/Experience';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="lg:grid grid-cols-3 gap-4 h-100 block">
      <div className="animate-hero-fade-y">
        <div
          className="rounded-xl overflow-hidden lg:w-[80%] w-75 my-4 mx-auto h-[500px]"
          style={{ position: 'relative' }}
        >
          <Image
            fill
            src="/images/self/featured-self.png"
            alt="developer profile photo"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <Card className="text-left lg:-mt-60 -mt-35 mb-8 xl:ms-16 mx-4 xl:mx-0">
          <Card.Header className="text-left">
            Kristian Antrobus | Fullstack Developer
          </Card.Header>
          <div className="text-sm font-light">
            {_personalMeta.Email}
            <br />
            {_personalMeta.Location}
          </div>
          <p>{_profileSummary[0]}</p>
          <p>{_profileSummary[1]}</p>
        </Card>
      </div>
      <div className="col-span-2 p-4 lg:h-dvh lg:-overflow-y-auto overflow-x-hidden">
        <div className="lg:animate-hero-fade animate-hero-fade-y">
          <div className="mb-16">
            <p className="mb-4">
              Over a 10-year career, I have developed a broad and well-rounded
              expertise across multiple areas of software development and
              technologies. Below is a summary of my core strengths and most
              recent experiences
            </p>
            <Skills skills={_topSkills} align="center" />
          </div>
          <h2 className="text-lg font-semibold mb-4">Employers</h2>
          <Card className="bg-white mb-16">
            <div className="flex justify-center gap-4">
              {_employers.map((e) => (
                <ImageTooltip {...e} key={`employer-${e.name}`} />
              ))}
            </div>
          </Card>
          <h2 className="text-lg font-semibold mb-4">What have I worked on?</h2>
          <h2>Most recent experience</h2>
          <Experience
            {..._experienceList[0]}
            key={`${_experienceList[0].title}`}
          />
          <div className="flex justify-center my-8">
            <Link href="/cv">
              <Button variant="secondary">View resume</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
