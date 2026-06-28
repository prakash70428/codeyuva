
"use client";

import Image from 'next/image';
import type { Course } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle as CardTitleComponent } from '@/components/ui/card'; // Renamed CardTitle to avoid conflict
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CalendarDays, Users, ListChecks, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Dialog>
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 group bg-card border-border hover:border-primary/50">
        <div className="relative w-full h-48 cursor-pointer">
          <DialogTrigger asChild>
            <Image
              src={course.image}
              alt={course.title}
              fill // Replaces layout="fill"
              className="transition-transform duration-500 group-hover:scale-105 object-cover"
              data-ai-hint={course.dataAiHint}
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          </DialogTrigger>
        </div>
        <CardHeader>
          <DialogTrigger asChild>
            <CardTitleComponent className="text-xl font-semibold group-hover:text-primary transition-colors cursor-pointer">{course.title}</CardTitleComponent>
          </DialogTrigger>
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
          <DialogTrigger asChild>
            <Button className="w-full shadow-md hover:shadow-lg transition-shadow">
              Explore Course
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] p-0 max-h-[90vh] overflow-y-auto bg-card border-border">
        <div className="relative w-full aspect-[16/6] md:aspect-[16/5]">
          <DialogDescription className="sr-only">{course.description}</DialogDescription>
          <Image
            src={course.image}
            alt={course.title}
            fill // Replaces layout="fill"
            priority
            data-ai-hint={course.dataAiHint || 'course education'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
           {/* Use DialogHeader and DialogTitle for accessibility, maintaining visual style */}
          <DialogHeader className="absolute bottom-0 left-0 p-4 md:p-6 !space-y-0 bg-transparent w-full">
            <DialogTitle className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white shadow-lg !m-0 !p-0 text-left">
                {course.title}
            </DialogTitle>
          </DialogHeader>
        </div>
        
        <div className="p-6 md:p-8 space-y-6">
          {/* Fees Section */}
          {/* Apply fade-in animation and emphasize limited time offer */}
          {course.originalFee && course.discountedFee && course.discountPercentage && (
            <>
              {/* Added animate-fadeIn class for a subtle fade-in */}
              <div className="flex items-center text-xl font-semibold text-foreground animate-fadeIn">
                <span role="img" aria-label="course fee" className="mr-2">🎓</span> Course Fee:
                <span className="line-through text-gray-400 ml-4 mr-2">₹{course.originalFee.toLocaleString('en-IN')}</span>
                <span className="text-[#FF9A40] font-bold">₹{course.discountedFee.toLocaleString('en-IN')}</span>
                <span className="text-sm text-green-500 ml-2">({course.discountPercentage}% OFF)</span>
                <span className="text-xs text-yellow-600 ml-4 font-medium">Limited-Time Offer!</span> {/* Added urgency text */}
              </div>
              <Separator className="my-6" />
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                  <h3 className="text-md font-semibold text-primary flex items-center"><CalendarDays className="w-5 h-5 mr-2" /> Duration</h3>
                  <p className="text-muted-foreground">{course.duration}</p>
              </div>
              <div className="space-y-2">
                  <h3 className="text-md font-semibold text-primary flex items-center"><Users className="w-5 h-5 mr-2" /> Who Should Join</h3>
                  <ul className="list-none space-y-1 text-muted-foreground text-sm">
                  {course.whoShouldJoin.map((target, index) => (
                      <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary shrink-0" /> 
                          <span>{target}</span>
                      </li>
                  ))}
                  </ul>
              </div>
          </div>
          
          <Separator className="my-6" />

          <div>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><ListChecks className="w-6 h-6 mr-2" /> Syllabus Overview</h3>
            <ul className="space-y-3">
              {course.syllabusOverview.map((item, index) => (
                <li key={index} className="p-3 bg-muted/50 rounded-md shadow-sm text-sm">
                  <p className="font-medium text-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="my-6" />

          <div className="text-center space-y-3">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <p className="text-base font-semibold text-foreground mb-1">🎯 Book a FREE 1-Hour Demo Class</p>
              <p className="text-sm text-muted-foreground mb-4">
                Attend a live session with our mentor — see the teaching style, ask questions, and decide if this course is right for you. No pressure, no hidden charges.
              </p>
              <Button
                size="lg"
                className="w-full md:w-auto shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSecK5qCp2acCYoHP1RxYj0QogPozyVQDAyG8v-ti3fCiFYivg/viewform?usp=header', '_blank')}
              >
                Reserve My Free Demo Spot
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                ⚡ Limited seats per batch — if you love the session, you can enroll and lock your seat on the spot.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

