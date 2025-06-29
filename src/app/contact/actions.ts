'use server';

import { z } from 'zod';

export type FormState = {
  status: 'error' | 'success' | 'idle';
  message: string;
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

const contactSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  subject: z.string().min(1, { message: 'Subject is required.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function sendContactMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    firstName: formData.get('first-name'),
    lastName: formData.get('last-name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      message: 'Please fill out all fields correctly.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, subject, message } = validatedFields.data;

  // TODO: Replace this with your actual email sending logic (e.g., using Resend, Nodemailer, etc.)
  // The email should be sent to info@khalifamedicalhearingservices.com
  console.log('--- New Contact Form Submission ---');
  console.log('To: info@khalifamedicalhearingservices.com');
  console.log(`From: ${firstName} ${lastName} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log('-----------------------------------');
  
  return {
    status: 'success',
    message: 'Your message has been sent successfully! We will get back to you shortly.',
  };
}
