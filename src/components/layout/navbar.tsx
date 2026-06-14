"use client";

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { AnimatedLogo } from '@/components/ui/animated-logo';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <AnimatedLogo />
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-[hsl(265_70%_60%)] rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button asChild variant="outline" className="h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hidden sm:inline-flex">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecK5qCp2acCYoHP1RxYj0QogPozyVQDAyG8v-ti3fCiFYivg/viewform?usp=header" target="_blank" rel="noopener noreferrer">Join Demo Session</Link>
          </Button>
          <Button asChild className="h-9 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm glow-primary hover:scale-105 transition-all duration-300">
            <Link href="/dsa">DSA Grind Mode⚡</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col space-y-6 p-6">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <SheetDescription className="sr-only">Site navigation links</SheetDescription>
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
                    <Button asChild variant="outline" className="w-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSecK5qCp2acCYoHP1RxYj0QogPozyVQDAyG8v-ti3fCiFYivg/viewform?usp=header" target="_blank" rel="noopener noreferrer">Join Demo Session</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild className="w-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <Link href="/dsa">DSA Grind Mode⚡</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
