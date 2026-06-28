"use client";

import Link from 'next/link';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import { AnimatedLogo } from '@/components/ui/animated-logo';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, LinkedinIcon as Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border/30">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[hsl(265_70%_60%/0.3)] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <AnimatedLogo />
            <p className="text-sm text-muted-foreground">
              We help students go from confused to confident — with real skills, real projects, and mentors who&apos;ve been where you are.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(1, 5).map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a href="mailto:codeyuva2025@gmail.com" className="hover:text-primary transition-colors duration-300">codeyuva2025@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+918368624572" className="hover:text-primary transition-colors duration-300">+918368624572</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0" />
                <span>House no. 17-A/A, Block-A, Patel Garden, Dwarka Mor, New Delhi-110078</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground mb-4 md:mb-0">
            {currentYear} CodeYuva &trade;. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = iconMap[link.label];
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-primary hover:scale-110 inline-block transition-all duration-300"
                  aria-label={link.label}
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
