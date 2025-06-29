'use server';

/**
 * @fileOverview AI agent that provides medical advice related to hearing solutions and ENT services.
 *
 * - generateMedicalAdvice - A function that takes a user's question and returns medical advice.
 * - GenerateMedicalAdviceInput - The input type for the generateMedicalAdvice function.
 * - GenerateMedicalAdviceOutput - The return type for the generateMedicalAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMedicalAdviceInputSchema = z.object({
  question: z.string().describe('The user s question about hearing solutions or ENT services.'),
});
export type GenerateMedicalAdviceInput = z.infer<typeof GenerateMedicalAdviceInputSchema>;

const GenerateMedicalAdviceOutputSchema = z.object({
  advice: z.string().describe('Helpful and informative medical advice related to the user s question.'),
});
export type GenerateMedicalAdviceOutput = z.infer<typeof GenerateMedicalAdviceOutputSchema>;

export async function generateMedicalAdvice(input: GenerateMedicalAdviceInput): Promise<GenerateMedicalAdviceOutput> {
  return generateMedicalAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMedicalAdvicePrompt',
  input: {schema: GenerateMedicalAdviceInputSchema},
  output: {schema: GenerateMedicalAdviceOutputSchema},
  prompt: `You are a medical advisor specializing in hearing solutions and ENT services. A user will ask a question, and you should provide a helpful and informative response.

Question: {{{question}}}`,
});

const generateMedicalAdviceFlow = ai.defineFlow(
  {
    name: 'generateMedicalAdviceFlow',
    inputSchema: GenerateMedicalAdviceInputSchema,
    outputSchema: GenerateMedicalAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
