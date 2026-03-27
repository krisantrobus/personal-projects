import { Popover } from '@heroui/react';
import Image from 'next/image';
import { ITechnology } from '../static/interfaces';

export const ImageTooltip: React.FC<ITechnology> = (detials: ITechnology) => {
  return (
    <Popover>
      <Popover.Trigger>
        <div
          className={`h-[40px]`}
          style={{ position: 'relative', width: detials.width }}
        >
          <Image
            fill
            src={detials.img}
            className="my-1"
            alt={`image of employer ${detials.name}`}
          />
        </div>
      </Popover.Trigger>
      <Popover.Content placement="top">
        <Popover.Dialog>
          <Popover.Arrow />
          <Popover.Heading>{detials.name}</Popover.Heading>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
};
