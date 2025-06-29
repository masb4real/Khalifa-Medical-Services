// 'use server';

/**
 * @fileOverview Summarizes medical documents and suggests relevant products/services.
 *
 * - summarizeMedicalDocuments - A function that summarizes medical documents and suggests products/services.
 * - SummarizeMedicalDocumentsInput - The input type for the summarizeMedicalDocuments function.
 * - SummarizeMedicalDocumentsOutput - The return type for the summarizeMedicalDocuments function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMedicalDocumentsInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A medical document (e.g., hearing test results), as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SummarizeMedicalDocumentsInput = z.infer<typeof SummarizeMedicalDocumentsInputSchema>;

const SummarizeMedicalDocumentsOutputSchema = z.object({
  summary: z.string().describe('A summary of the key findings in the medical document.'),
  suggestions: z
    .string()
    .describe(
      'Suggested Med-El products or Khalifa Medical Services relevant to the findings.'
    ),
});
export type SummarizeMedicalDocumentsOutput = z.infer<typeof SummarizeMedicalDocumentsOutputSchema>;

export async function summarizeMedicalDocuments(
  input: SummarizeMedicalDocumentsInput
): Promise<SummarizeMedicalDocumentsOutput> {
  return summarizeMedicalDocumentsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeMedicalDocumentsPrompt',
  input: {schema: SummarizeMedicalDocumentsInputSchema},
  output: {schema: SummarizeMedicalDocumentsOutputSchema},
  prompt: `You are an AI advisor for Khalifa Medical Services. A patient has uploaded a medical document. Summarize the key findings and suggest relevant Med-El products or Khalifa Medical Services.

Document: {{media url=documentDataUri}}`,
});

const summarizeMedicalDocumentsFlow = ai.defineFlow(
  {
    name: 'summarizeMedicalDocumentsFlow',
    inputSchema: SummarizeMedicalDocumentsInputSchema,
    outputSchema: SummarizeMedicalDocumentsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
