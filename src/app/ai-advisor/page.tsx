'use client';

import { useFormStatus } from 'react-dom';
import { useActionState, useEffect, useState } from 'react';
import { getAIAdvice, getDocumentSummary } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, FileText, Loader2, Sparkles, AlertTriangle, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { type Metadata } from 'next';


function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </Button>
  );
}

function AdviceForm() {
  const initialState = { advice: '', error: '' };
  const [state, formAction] = useActionState(getAIAdvice, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ask a Question</CardTitle>
        <CardDescription>
          Get helpful and informative medical advice related to hearing solutions and ENT services.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question">Your Question</Label>
            <Textarea
              id="question"
              name="question"
              placeholder="e.g., What are the common signs of hearing loss?"
              rows={4}
              required
            />
          </div>
          <SubmitButton>
            <Bot className="mr-2 h-4 w-4" /> Get Advice
          </SubmitButton>
        </form>
        {state.advice && (
          <Card className="mt-6 bg-secondary">
            <CardHeader className="flex flex-row items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">AI Generated Advice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{state.advice}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}

function SummaryForm() {
  const initialState = { summary: '', suggestions: '', error: '' };
  const [state, formAction] = useActionState(getDocumentSummary, initialState);
  const { toast } = useToast();
  const [fileName, setFileName] = useState('');
  const [fileDataUri, setFileDataUri] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileDataUri(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName('');
      setFileDataUri('');
    }
  };

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analyze Medical Document</CardTitle>
        <CardDescription>
          Upload a medical document (e.g., hearing test results) for a summary and product/service suggestions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="document">Upload Document</Label>
            <Input id="document" type="file" onChange={handleFileChange} accept="application/pdf,image/*" />
            {fileName && <p className="text-sm text-muted-foreground">Selected: {fileName}</p>}
          </div>
          <input type="hidden" name="documentDataUri" value={fileDataUri} />
          <SubmitButton>
            <Upload className="mr-2 h-4 w-4" /> Analyze Document
          </SubmitButton>
        </form>
        {(state.summary || state.suggestions) && (
          <div className="mt-6 space-y-4">
            {state.summary && (
              <Card className="bg-secondary">
                <CardHeader className="flex flex-row items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Document Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{state.summary}</p>
                </CardContent>
              </Card>
            )}
            {state.suggestions && (
              <Card className="bg-secondary">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">AI Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{state.suggestions}</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function AiAdvisorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">AI Advisor</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Your personal assistant for hearing health. Get instant advice or a summary of your medical documents.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="advice" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="advice">
              <Bot className="mr-2 h-4 w-4" />
              Get Advice
            </TabsTrigger>
            <TabsTrigger value="summary">
              <FileText className="mr-2 h-4 w-4" />
              Analyze Document
            </TabsTrigger>
          </TabsList>
          <TabsContent value="advice">
            <AdviceForm />
          </TabsContent>
          <TabsContent value="summary">
            <SummaryForm />
          </TabsContent>
        </Tabs>
      </div>

      <Card className="mt-12 bg-destructive/10 border-destructive/20">
        <CardHeader className="flex flex-row items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          <CardTitle className="text-destructive">Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="text-destructive/80">
          <p>The AI Advisor is for informational purposes only and does not constitute medical advice. It is not a substitute for professional consultation with a qualified healthcare provider. Please consult a doctor for any health concerns or before making any decisions related to your health or treatment.</p>
        </CardContent>
      </Card>
    </div>
  );
}
