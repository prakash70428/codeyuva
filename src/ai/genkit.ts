import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [googleAI() as any],
  model: 'googleai/gemini-2.0-flash',
});
