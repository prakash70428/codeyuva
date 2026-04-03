"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface AnimatedLogoProps {
  className?: string;
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      {/* <Sparkles className="h-7 w-7 text-primary mr-2 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" /> */}
      <Image 
        src="/images/CYLogo.png"
        className="h-8 w-8 text-primary mr-2 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 border border-border rounded-lg shadow-sm bg-background p-1"
        alt='Code Yuva Logo'
        width={32}
        height={32}
        unoptimized
      />
      <span className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        Code<span className="text-primary group-hover:text-foreground transition-colors duration-300">Yuva</span>
      </span>
    </Link>
  );
}
