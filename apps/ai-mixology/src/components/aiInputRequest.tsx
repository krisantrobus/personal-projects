'use client';

import { Input } from '@heroui/react';
import { useState } from 'react';
import { runWorkflow } from '../services/ai/mixology';
import { CocktailCard } from './CocktailCard';
import { Cocktail } from '@/types/cocktail';

export const AIInputRequest = () => {
  const [cocktailsRes, setCocktailRes] = useState<Cocktail[]>();
  const [value, setValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submit = async () => {
    if (!value) return;
    setCocktailRes(undefined);
    setIsLoading(true);
    runWorkflow({
      input_as_text: value,
      wf_id: process.env.MIXOLOGY_WF as string,
    })
      .then((res) => {
        setCocktailRes(res.output_parsed.cocktails);
        setValue('');
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="absolute w-screen p-6 max-h-[calc(100vh-80px)] overflow-y-auto">
        <div className="flex gap-8 lg:flex-row flex-col">
          {cocktailsRes &&
            cocktailsRes.map((cocktail) => (
              <CocktailCard key={cocktail.name} cocktail={cocktail} />
            ))}
        </div>
      </div>
      <div className="fixed bottom-0 w-screen flex justify-center">
        <Input
          aria-label="mixology-prompt"
          className="w-80 mb-6"
          placeholder="Ask AI for a recipe"
          id="ai-prompt"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(k) => {
            if (k.code === 'Enter') submit();
          }}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};
