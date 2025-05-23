import Image from 'next/image';
import type { Course } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Users, ListChecks } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 group bg-card border-border hover:border-primary/50">
      <div className="relative w-full h-48">
        <Image
          src={course.image}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={course.dataAiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">{course.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-12 overflow-hidden">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <ListChecks className="w-4 h-4 mr-2 text-primary" />
          <span>Syllabus: {course.syllabusOverview.slice(0,2).join(', ')}...</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="w-4 h-4 mr-2 text-primary" />
          <span>Duration: {course.duration}</span>
        </div>
        <div className="flex items-start text-sm text-muted-foreground">
          <Users className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0" />
          <span>Ideal for: {course.whoShouldJoin.slice(0,1).join(', ')}...</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full shadow-md hover:shadow-lg transition-shadow">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
}
