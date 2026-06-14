"use client";

import Link from 'next/link';
import Image from 'next/image';

interface AnimatedLogoProps {
  className?: string;
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <Link href="/" className={`flex items-center group gap-2 ${className}`}>
      <div className="relative">
        <Image
          src="/images/CYLogo.png"
          className="h-9 w-9 rounded-xl border border-border/50 bg-background/50 p-1 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_12px_hsl(157_69%_50%/0.3)]"
          alt="Code Yuva Logo"
          width={36}
          height={36}
          unoptimized
        />
      </div>
      <span className="text-xl md:text-2xl font-bold text-foreground transition-all duration-300 group-hover:gradient-text">
        Code<span className="text-primary transition-colors duration-300 group-hover:text-foreground">Yuva</span>
      </span>
    </Link>
  );
}
