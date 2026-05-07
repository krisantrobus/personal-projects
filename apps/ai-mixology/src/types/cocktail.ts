import { z } from 'zod';

export const CocktailSchema = z.object({
  name: z.string(),
  flavor_notes: z.array(z.string()),
  is_alcoholic: z.boolean(),
  ingredients: z.array(
    z.object({ ingredient: z.string(), amount: z.string() }),
  ),
  steps: z.array(z.string()),
  garnish: z.array(
    z.object({ complexity: z.string(), description: z.string() }),
  ),
});

export const MixologySchema = z.object({
  cocktails: z.array(CocktailSchema),
});

export type Cocktail = z.infer<typeof CocktailSchema>;
export type MixologyOutput = z.infer<typeof MixologySchema>;
