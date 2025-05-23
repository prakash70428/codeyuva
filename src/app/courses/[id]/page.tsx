
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { PLACEHOLDER_COURSES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CalendarDays, Users, ListChecks, CheckCircle, AlertTriangle } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import type { Course } from '@/types';

interface CoursePageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = PLACEHOLDER_COURSES.find(c => c.id === params.id);
  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }
  return {
    title: `${course.title} - CodeYuva Academy`,
    description: course.description,
    openGraph: {
        title: course.title,
        description: course.description,
        images: [course.image],
        type: 'article', // Using 'article' type as it's a detailed content page
    },
    twitter: {
        card: 'summary_large_image',
        title: course.title,
        description: course.description,
        images: [course.image],
    }
  };
}

export async function generateStaticParams() {
  return PLACEHOLDER_COURSES.map(course => ({
    id: course.id,
  }));
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = PLACEHOLDER_COURSES.find(c => c.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SectionWrapper className="py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" asChild className="mb-8 group">
              <Link href="/#courses-section">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Courses
              </Link>
            </Button>

            <Card className="overflow-hidden shadow-xl bg-card border-border">
              <div className="relative w-full aspect-[16/7] md:aspect-[16/6]">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                  data-ai-hint={course.dataAiHint || 'course education'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 shadow-lg">{course.title}</h1>
                </div>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <CardDescription className="text-base md:text-lg text-muted-foreground mb-6">
                  {course.description}
                </CardDescription>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-primary flex items-center"><CalendarDays className="w-5 h-5 mr-2" /> Duration</h3>
                        <p className="text-muted-foreground">{course.duration}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-primary flex items-center"><Users className="w-5 h-5 mr-2" /> Who Should Join</h3>
                        <ul className="list-none space-y-1 text-muted-foreground">
                        {course.whoShouldJoin.map((target, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500 shrink-0" /> 
                                <span>{target}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                
                <Separator className="my-8" />

                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center"><ListChecks className="w-6 h-6 mr-2" /> Syllabus Overview</h3>
                  <ul className="space-y-3">
                    {course.syllabusOverview.map((item, index) => (
                      <li key={index} className="p-4 bg-muted/50 rounded-md shadow-sm">
                        <p className="font-medium text-foreground">{item}</p>
                        {/* Future: Could add more detail per syllabus item here */}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="my-8" />

                <div className="text-center">
                    <Button size="lg" className="w-full md:w-auto shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
                        Enroll in {course.title}
                    </Button>
                     <p className="text-xs text-muted-foreground mt-3">
                        Limited seats available. Secure your spot today!
                    </p>
                </div>

              </CardContent>
            </Card>

            {/* Example of an alert - could be used for prerequisites or important notes */}
            <Card className="mt-8 bg-card border-primary/30">
                <CardHeader className="flex flex-row items-center space-x-3">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                    <CardTitle className="text-primary text-xl">Important Note</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Basic programming knowledge is recommended for this course. While we cover fundamentals, a prior understanding of coding concepts will enhance your learning experience. Contact us if you have questions about prerequisites.
                    </p>
                </CardContent>
            </Card>

          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

