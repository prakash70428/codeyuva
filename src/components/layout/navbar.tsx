
"use client";

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { AnimatedLogo } from '@/components/ui/animated-logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent border-b border-transparent'
      } relative`} // Added relative for positioning the gradient
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <AnimatedLogo />
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="#courses-section">Join Demo Session</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col space-y-6 p-6">
                <AnimatedLogo />
                <nav className="flex flex-col space-y-4">
                  {NAV_LINKS.map((link) => (
                     <SheetClose asChild key={link.label}>
                        <Link
                        href={link.href}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                        {link.label}
                        </Link>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                    <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                        <Link href="#courses-section">Enroll Now</Link>
                    </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-200/20 via-gray-200/10 to-transparent pointer-events-none transition-opacity duration-300 ease-in-out ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </header>
  );
}
