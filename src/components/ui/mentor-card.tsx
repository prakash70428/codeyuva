"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Mentor } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Briefcase } from 'lucide-react';

interface MentorCardProps {
  mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective group h-[400px]"
      onClick={() => setFlipped(prev => !prev)}
    >
      <Card
        className={`relative preserve-3d w-full h-full shadow-lg transition-all duration-700 bg-card border-border/50 hover:border-primary/30 hover:shadow-primary/10 hover:shadow-xl md:group-hover:[transform:rotateY(180deg)] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front */}
        <div className="absolute backface-hidden w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="relative w-36 h-36 rounded-full overflow-hidden mb-5 border-2 border-primary/50 shadow-lg shadow-primary/10">
            <Image
              src={mentor.photo}
              alt={mentor.name}
              fill
              className="object-cover"
              sizes="144px"
              unoptimized
            />
          </div>
          <CardTitle className="text-xl font-semibold">{mentor.name}</CardTitle>
          <CardDescription className="text-sm text-primary mt-2 flex items-start justify-center">
            <Briefcase className="w-4 h-4 mt-0.5 mr-1.5 shrink-0" />
            {mentor.experience.split('|')[0].trim()}
          </CardDescription>
          <p className="text-xs text-muted-foreground mt-3 italic opacity-60 md:hidden">Tap for details</p>
          <p className="text-xs text-muted-foreground mt-3 italic opacity-60 hidden md:block">Hover for details</p>
        </div>

        {/* Back */}
        <div className="absolute [transform:rotateY(180deg)] backface-hidden w-full h-full flex flex-col justify-between p-6 bg-card rounded-xl overflow-y-auto">
          <div>
            <CardHeader className="p-0 mb-3">
              <CardTitle className="text-lg font-semibold gradient-text">{mentor.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground text-xs uppercase tracking-wider">Experience:</p>
              <ul className="list-disc list-inside text-xs space-y-1.5 leading-relaxed">
                {mentor.experience.split('|').map((exp, index) => (
                  <li key={index}>{exp.trim()}</li>
                ))}
              </ul>
            </CardContent>
          </div>
          <CardFooter className="p-0 mt-4">
            <Button
              asChild
              variant="outline"
              className="w-full hover:bg-primary/10 hover:border-primary border-border text-primary"
              onClick={e => e.stopPropagation()}
            >
              <Link href={mentor.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" /> Connect on LinkedIn
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
