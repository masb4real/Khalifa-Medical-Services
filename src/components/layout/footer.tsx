import Link from 'next/link';
import { Ear, Twitter, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Ear className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">
                Khalifa Medical
              </span>
            </Link>
            <p className="text-foreground/60 text-center md:text-left">
              Providing excellence in hearing care.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-lg mb-4 text-primary">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Khalifa Medical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
