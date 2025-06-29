import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Ear, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Your Partner in Hearing Health
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Khalifa Medical offers state-of-the-art hearing solutions and expert ENT care. Let us guide you on your journey to better hearing.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Stethoscope className="w-10 h-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center">Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center mb-4">
                From comprehensive hearing tests to advanced ENT treatments, our expert team is here to provide personalized care.
              </CardDescription>
              <Button asChild variant="link" className="w-full">
                <Link href="/services">Explore Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Ear className="w-10 h-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center">Med-El Products</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center mb-4">
                Discover our range of cutting-edge Med-El hearing implants and solutions designed to reconnect you with the world of sound.
              </CardDescription>
              <Button asChild variant="link" className="w-full">
                <Link href="/products">View Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Users className="w-10 h-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center">About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center mb-4">
                Learn about our mission, our dedicated team, and our commitment to improving the lives of our patients through better hearing.
              </CardDescription>
              <Button asChild variant="link" className="w-full">
                <Link href="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Get Expert Advice Instantly</h2>
            <p className="text-foreground/80 mb-6">
              Have a question about hearing loss, tinnitus, or our services? Our new AI Advisor provides instant, helpful information based on our extensive medical knowledge base. Get the answers you need, right when you need them.
            </p>
            <Button asChild size="lg">
              <Link href="/ai-advisor">Try the AI Advisor</Link>
            </Button>
          </div>
          <div className="flex justify-center">
             <Image 
                src="/img_4.jpg" 
                alt="AI Advisor"
                data-ai-hint="doctor laptop" 
                width={500} 
                height={350} 
                className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
