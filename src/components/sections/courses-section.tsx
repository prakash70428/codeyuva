import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CourseCard } from '@/components/ui/course-card';
import { PLACEHOLDER_COURSES } from '@/lib/constants';

export function CoursesSection() {
  return (
    <SectionWrapper id="courses-section" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Premier Courses</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our curated courses designed to equip you with in-demand tech skills.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PLACEHOLDER_COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </SectionWrapper>
  );
}
