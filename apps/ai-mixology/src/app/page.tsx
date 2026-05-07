import { Button, Card } from '@heroui/react';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="lg:grid grid-cols-3 gap-4 h-100 block">
      <div className="animate-hero-fade-y">
        <div
          className="rounded-xl overflow-hidden lg:w-[80%] w-75 max-w-[400px] lg:min-h-[600px]  my-4 mx-auto h-[500px] bg-accent-foreground ring-2 ring-accent/10"
          style={{ position: 'relative' }}
        >
          <Card className="text-left lg:-mt-60 -mt-35 mb-8 xl:ms-16 mx-4 xl:mx-0">
            <Card.Header className="text-left">
              Kristian Antrobus | Software Engineer
            </Card.Header>
            <div className="text-sm font-light">TEST for content</div>
          </Card>
        </div>
        <div className="col-span-2 p-4 lg:h-dvh lg:-overflow-y-auto overflow-x-hidden">
          <div className="lg:animate-hero-fade-x sm:animate-hero-fade-y">
            <div className="mb-16">
              <h2 className="text-lg font-semibold mb-4">Welcome,</h2>

              <p className="mb-4">
                Over a 10-year career, I have developed a broad and well-rounded
                expertise across multiple areas of software development and
                technologies. Below is a summary of my core strengths and most
                recent experiences
              </p>
            </div>
            <h2 className="text-lg font-semibold mb-4">Employers</h2>
            <Card className="bg-white mb-16"></Card>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold mb-4">
                What have I worked on?
              </h2>

              <Link href="/cv">
                <Button variant="secondary">View resume</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
