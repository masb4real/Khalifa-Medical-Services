import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Khalifa Medical Services',
  description: 'Get in touch with Khalifa Medical Services. Find our address, phone number, and a contact form to send us a message.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          We're here to help. Reach out to us with any questions or to schedule an appointment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our Location</h2>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Khalifa Medical Services</p>
                <p className="text-foreground/80">123 Health St, Medical City</p>
                <p className="text-foreground/80">Capital City, 12345</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Contact Details</h2>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <p className="text-foreground/80">(123) 456-7890</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <p className="text-foreground/80">contact@khalifamedical.com</p>
            </div>
          </div>
           <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Opening Hours</h2>
            <p className="text-foreground/80">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
            <p className="text-foreground/80">Friday - Saturday: Closed</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Question about services" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
