import Image from 'next/image';
import Link from 'next/link';
import type { Mentor } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Briefcase } from 'lucide-react';

interface MentorCardProps {
  mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="perspective group">
      <Card className="relative preserve-3d max-w-sm h-[380px] ml-10 shadow-lg transition-all duration-700 group-hover:rotate-y-180 bg-card border-border hover:border-primary/50">
        {/* Front of the card */}
        <div className="absolute backface-hidden w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-primary shadow-md">
            <Image
              src={mentor.photo}
              alt={mentor.name}
              fill // Replaces layout="fill"
              className='object-conatain'
              data-ai-hint={mentor.dataAiHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          </div>
          <CardTitle className="text-xl font-semibold">{mentor.name}</CardTitle>
          <CardDescription className="text-sm text-primary mt-1 flex flex-row items-start justify-center">
            <Briefcase className="w-4 h-4 mt-1 mr-1.5" />
            {mentor.experience.split('|')[0].trim()}
          </CardDescription>
           <p className="text-xs text-muted-foreground mt-2 italic">Hover for details</p>
        </div>

        {/* Back of the card */}
        <div className="absolute rotate-y-180 backface-hidden w-full h-full flex flex-col justify-between p-6 bg-card rounded-lg overflow-y-auto">
          <div>
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-xl font-semibold text-primary">{mentor.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-sm text-muted-foreground space-y-2">
              <p className="font-medium text-foreground">Experience:</p>
              <ul className="list-disc list-inside text-xs space-y-1">
                {mentor.experience.split('|').map((exp, index) => (
                  <li key={index}>{exp.trim()}</li>
                ))}
              </ul>
            </CardContent>
          </div>
          <CardFooter className="p-0 mt-4">
            <Button asChild variant="outline" className="w-full hover:bg-primary/10 hover:text-white border-primary text-primary">
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
