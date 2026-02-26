'use client';

import { Tooltip } from '@heroui/react';
import Image from 'next/image';
import { ITechnology } from '../static/interfaces';

export const ImageTooltip: React.FC<ITechnology> = (detials: ITechnology) => {
  return (
    <Tooltip delay={0}>
      <Tooltip.Trigger>
        <Image
          height={40}
          src={detials.img}
          className="my-1 mx-4"
          alt={`image of employer ${detials.name}`}
        />
      </Tooltip.Trigger>

      <Tooltip.Content showArrow>
        <Tooltip.Arrow />
        {detials.name}
      </Tooltip.Content>
    </Tooltip>
  );
};
