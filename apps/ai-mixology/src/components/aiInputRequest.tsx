'use client';

import { Input, Button } from '@heroui/react';
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
      <Input
        aria-label="mixology-prompt"
        className="w-64 mx-auto"
        placeholder="Ask AI for a recipe"
        id="ai-prompt"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        disabled={isLoading}
      />
      <Button type="submit" onClick={submit} isDisabled={isLoading}>
        Submit
      </Button>
      {cocktailsRes &&
        cocktailsRes.map((cocktail) => <CocktailCard cocktail={cocktail} />)}
    </div>
  );
};
