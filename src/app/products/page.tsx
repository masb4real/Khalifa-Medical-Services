import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Med-El Products | Khalifa Medical Services',
  description: 'Browse our range of advanced Med-El hearing implants and audio processors.',
};

const products = [
  {
    name: 'SYNCHRONY 2 Cochlear Implant',
    description: 'The softest, most flexible electrode array for atraumatic insertion and complete cochlear coverage. Provides the closest to natural hearing.',
    image: '/synchrony 2 cochlear implant.jpeg',
    hint: 'medical implant',
  },
  {
    name: 'SONNET 2 Audio Processor',
    description: 'A lightweight and water-resistant audio processor with dual-microphone technology for better hearing in noisy environments.',
    image: '/SONNET 2 Audio Processor.jpeg',
    hint: 'audio processor',
  },
  {
    name: 'RONDO 3 Audio Processor',
    description: 'An all-in-one audio processor that is worn off the ear. Simple to use, wireless charging, and enhanced streaming capabilities.',
    image: '/RONDO 3 Audio Processor.jpeg',
    hint: 'wireless processor',
  },
  {
    name: 'BONEBRIDGE Bone Conduction Implant',
    description: 'An active bone conduction implant for conductive or mixed hearing loss. The implant is placed completely under the skin.',
    image: '/BONEBRIDGE Bone Conduction Implant.jpeg',
    hint: 'bone implant',
  },
  {
    name: 'ADHEAR Bone Conduction System',
    description: 'A revolutionary non-surgical hearing system. The adhesive adapter is simply stuck on the skin behind the ear.',
    image: '/ADHEAR Bone Conduction System.jpeg',
    hint: 'hearing system',
  },
  {
    name: 'AudioLink',
    description: 'A versatile connectivity device that allows you to stream sound from your phone, tablet, and other devices directly to your audio processor.',
    image: '/AudioLink.jpeg',
    hint: 'connectivity device',
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2">Our Med-El Products</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Discover cutting-edge hearing technology designed to bring the world of sound to you with unparalleled clarity and comfort.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.name} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300" data-ai-hint={product.hint}>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-cover"
                data-ai-hint={product.hint}
              />
            </div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
