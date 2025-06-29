import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Khalifa Medical Services',
  description: 'Learn about our mission, our history, and the dedicated team at Khalifa Medical Services.',
};

const teamMembers = [
  { name: 'Dr. Aisha Khalifa', role: 'Founder & Chief Audiologist', image: 'https://placehold.co/128x128.png', hint: 'woman professional' },
  { name: 'Dr. Omar Hassan', role: 'Head of ENT Department', image: 'https://placehold.co/128x128.png', hint: 'man professional' },
  { name: 'Fatima Ahmed', role: 'Senior Hearing Aid Specialist', image: 'https://placehold.co/128x128.png', hint: 'woman friendly' },
  { name: 'Yusuf Ibrahim', role: 'Patient Care Coordinator', image: 'https://placehold.co/128x128.png', hint: 'man friendly' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">About Khalifa Medical Services</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Dedicated to enhancing lives through comprehensive and compassionate hearing healthcare.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-foreground/80 mb-4">
            Our mission is to provide the highest standard of patient-centered ear, nose, and throat care. We are committed to offering the latest in medical technology, including advanced Med-El hearing solutions, to ensure the best possible outcomes for our patients.
          </p>
          <p className="text-foreground/80">
            We believe in a holistic approach to healthcare, where we not only treat conditions but also educate and support our patients and their families throughout their journey to better health and hearing.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Clinic interior"
            data-ai-hint="clinic reception"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
           <Image
            src="https://placehold.co/600x400.png"
            alt="Founder portrait"
            data-ai-hint="doctor smiling"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-foreground/80 mb-4">
            Founded in 2010 by Dr. Aisha Khalifa, Khalifa Medical Services began with a simple vision: to create a center of excellence for hearing and ENT care in the region. Dr. Khalifa, a renowned audiologist, saw a need for a clinic that combined cutting-edge technology with a deeply personal approach to patient care.
          </p>
          <p className="text-foreground/80">
            Over the past decade, we have grown into a leading provider, helping thousands of patients reconnect with the world through improved hearing and resolving complex ENT issues. Our partnership with Med-El allows us to offer world-class hearing implant solutions, solidifying our position at the forefront of audiological medicine.
          </p>
        </div>
      </div>


      <section className="text-center bg-secondary py-16 rounded-lg">
        <h2 className="text-3xl font-bold text-primary mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mb-4 border-4 border-primary/20">
                <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint}/>
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg text-primary">{member.name}</h3>
              <p className="text-sm text-foreground/70">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
