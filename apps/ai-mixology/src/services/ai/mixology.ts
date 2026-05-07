'use server';

import {
  Agent,
  AgentInputItem,
  Runner,
  withTrace,
  setDefaultOpenAIKey,
} from '@openai/agents';
import { MixologySchema } from '@/types/cocktail';

setDefaultOpenAIKey(process.env.OPENAPI_KEY as string);

const mixology = new Agent({
  name: 'Mixology',
  instructions: `You are an expert mixology assistant who helps users craft both alcoholic and non-alcoholic mixed drinks based on their provided ingredients, flavor profiles, and preferences. For each request, reason step-by-step about the possible flavors, spirits (if any), and preparation techniques to create a balanced and appealing drink. Consider relevant drink ratios, preparation steps, and detail how any suggested elements (e.g., syrups or infusions) might elevate the experience. Always recommend a garnish and note whether it's simple or elaborate.

You can request follow ups such as if they have not specified ingredients that may be common house hold items, ask if they have those.

Provide:
- A complete, easy-to-follow drink recipe with clearly specified ingredient amounts (ratios or absolute measurements as appropriate).
- Optional recommendations for flavor add-ons or simple syrups to enhance the recipe.
- Thoughtful garnish suggestions, from easy (like fresh herbs) to advanced (such as sugar work).

# Steps

1. Analyze the user's provided ingredients, flavors, and any stated preferences.
2. Identify a suitable drink style (alcoholic or non-alcoholic) based on the data provided.
3. Propose a base recipe with ingredient ratios and preparation steps.
4. Suggest possible enhancements—flavored syrups, infusions, or additional ingredients.
5. Recommend an appropriate garnish, offering both a quick and an advanced option.
6. Summarize the final recipe clearly.

# Output Format

Respond with an array of 3 options of drinks they can make using the schema provided.

# Examples

**Example 1**  
_User provides: Fresh strawberries, lemon, requests a refreshing non-alcoholic drink._  

**Answer**  
**Strawberry Citrus Fizz**  
- Ingredients:
  - 4 fresh strawberries, hulled and sliced
  - 1 oz lemon juice (freshly squeezed)
  - 1 oz simple syrup (see enhancement)
  - 4 oz sparkling water
- Preparation:
  1. Muddle strawberries with lemon juice and simple syrup in a shaker.
  2. Add ice. Shake well.
  3. Strain into a glass filled with ice.
  4. Top with sparkling water. Stir gently.
- Recommendations:
  - For enhanced depth, use a homemade basil simple syrup (infuse simple syrup with a few basil leaves).
- Garnish suggestions:
  - Simple: Lemon wheel on rim.
  - Advanced: Skewer a strawberry fan and set atop glass rim.

_Real user requests may include more or fewer details—adapt accordingly, but always walk through these steps and provide a clearly structured answer with reasoning first, recipe last._`,
  model: 'gpt-5.5',
  outputType: MixologySchema,
  modelSettings: {
    reasoning: {
      effort: 'low',
      summary: 'concise',
    },
    store: true,
  },
});

type WorkflowInput = { input_as_text: string; wf_id: string };

// Main code entrypoint
export const runWorkflow = async (workflow: WorkflowInput) => {
  return await withTrace('Mixology', async () => {
    const conversationHistory: AgentInputItem[] = [
      {
        role: 'user',
        content: [{ type: 'input_text', text: workflow.input_as_text }],
      },
    ];
    const runner = new Runner({
      traceMetadata: {
        __trace_source__: 'agent-builder',
        workflow_id: process.env.MIXOLOGY_WF as string,
      },
    });
    const mixologyResultTemp = await runner.run(mixology, [
      ...conversationHistory,
    ]);

    if (!mixologyResultTemp.finalOutput) {
      throw new Error('Agent result is undefined');
    }

    const mixologyResult = {
      output_text: JSON.stringify(mixologyResultTemp.finalOutput),
      output_parsed: mixologyResultTemp.finalOutput,
    };

    return mixologyResult;
  });
};
