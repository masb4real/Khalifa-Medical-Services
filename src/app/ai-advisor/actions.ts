'use server';

import { generateMedicalAdvice, GenerateMedicalAdviceInput } from '@/ai/flows/generate-medical-advice';
import { summarizeMedicalDocuments, SummarizeMedicalDocumentsInput } from '@/ai/flows/summarize-medical-documents';
import { z } from 'zod';

const generateAdviceSchema = z.object({
  question: z.string().min(10, 'Please enter a more detailed question.'),
});

const summarizeDocumentSchema = z.object({
  documentDataUri: z.string().startsWith('data:'),
});

type AdviceState = {
  advice?: string;
  error?: string;
};

export async function getAIAdvice(
  prevState: AdviceState,
  formData: FormData
): Promise<AdviceState> {
  const validatedFields = generateAdviceSchema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.question?.join(', '),
    };
  }
  
  try {
    const input: GenerateMedicalAdviceInput = { question: validatedFields.data.question };
    const result = await generateMedicalAdvice(input);
    return { advice: result.advice };
  } catch (e) {
    const error = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: `AI service failed: ${error}` };
  }
}

type SummaryState = {
  summary?: string;
  suggestions?: string;
  error?: string;
}

export async function getDocumentSummary(
  prevState: SummaryState,
  formData: FormData
): Promise<SummaryState> {
  const validatedFields = summarizeDocumentSchema.safeParse({
    documentDataUri: formData.get('documentDataUri'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Invalid document data provided.',
    };
  }

  try {
    const input: SummarizeMedicalDocumentsInput = { documentDataUri: validatedFields.data.documentDataUri };
    const result = await summarizeMedicalDocuments(input);
    return { summary: result.summary, suggestions: result.suggestions };
  } catch(e) {
    const error = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: `AI analysis failed: ${error}` };
  }
}
