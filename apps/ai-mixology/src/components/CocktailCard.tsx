'use client';

import { useState } from 'react';
import { Card, CardHeader, Chip, Separator } from '@heroui/react';
import type { Cocktail } from '@/types/cocktail';

type Props = { cocktail: Cocktail };

export const CocktailCard = ({ cocktail }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="w-full max-w-lg">
      <CardHeader
        className="flex items-center justify-between cursor-pointer gap-3 px-5 py-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold">{cocktail.name}</p>
          <div className="flex flex-wrap gap-1">
            {cocktail.flavor_notes.map((note) => (
              <Chip key={note} size="sm" color="success">
                {note}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Chip size="sm" color={cocktail.is_alcoholic ? 'warning' : 'default'}>
            {cocktail.is_alcoholic ? 'Alcoholic' : 'Non-alcoholic'}
          </Chip>
          <span className="text-muted text-lg select-none">
            {open ? '▲' : '▼'}
          </span>
        </div>
      </CardHeader>

      {open && (
        <>
          <Card.Content className="flex flex-col gap-5 px-5 py-4">
            <section>
              <p className="text-sm font-semibold mb-2">Ingredients</p>
              <ul className="flex flex-col gap-1">
                {cocktail.ingredients.map(({ ingredient, amount }) => (
                  <li key={ingredient} className="flex justify-between text-sm">
                    <span>{ingredient}</span>
                    <span className="text-muted">{amount}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Separator />

            <section>
              <p className="text-sm font-semibold mb-2">Steps</p>
              <ol className="flex flex-col gap-2 list-decimal list-inside">
                {cocktail.steps.map((step, i) => (
                  <li key={i} className="text-sm">
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <Separator />

            <section>
              <p className="text-sm font-semibold mb-2">Garnish</p>
              <div className="flex flex-col gap-2">
                {cocktail.garnish.map(({ complexity, description }) => (
                  <div key={complexity} className="flex gap-2 text-sm">
                    <Chip size="sm" className="shrink-0 capitalize">
                      {complexity}
                    </Chip>
                    <span>{description}</span>
                  </div>
                ))}
              </div>
            </section>
          </Card.Content>
        </>
      )}
    </Card>
  );
};
