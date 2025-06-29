import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Ear, Stethoscope, Mic, Waves, AudioLines, Pill } from 'lucide-react';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Khalifa Medical Services',
  description: 'Explore our comprehensive hearing solutions and ENT services, from diagnostics to advanced treatments.',
};

const services = [
  {
    icon: Stethoscope,
    title: 'Comprehensive Hearing Tests',
    description: 'We offer a full range of diagnostic tests for adults and children to accurately assess hearing ability and identify any issues.',
  },
  {
    icon: Mic,
    title: 'Hearing Aid Fitting & Programming',
    description: 'Our specialists help you choose the right hearing aid from leading brands and provide expert fitting and programming for optimal performance.',
  },
  {
    icon: Ear,
    title: 'Med-El Cochlear Implants',
    description: 'As certified partners, we provide consultations, surgery, and post-operative support for Med-El cochlear implant candidates.',
  },
  {
    icon: Waves,
    title: 'Tinnitus Management',
    description: 'We offer personalized strategies and therapies to help you manage tinnitus (ringing in the ears) and reduce its impact on your life.',
  },
  {
    icon: AudioLines,
    title: 'Balance & Vestibular Disorders',
    description: 'Our ENT specialists diagnose and treat balance disorders, including vertigo and dizziness, to help you regain your stability.',
  },
  {
    icon: Pill,
    title: 'General ENT Services',
    description: 'Comprehensive care for a wide range of ear, nose, and throat conditions, including sinus issues, voice disorders, and sleep apnea.',
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Our Services</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          We provide a wide array of specialized services to address all your hearing and ENT needs with expertise and care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-center">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
