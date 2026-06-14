"use client";

import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CourseCard } from '@/components/ui/course-card';
import { PLACEHOLDER_COURSES } from '@/lib/constants';
import { StaggerContainer, StaggerItem } from '@/components/ui/motion-wrapper';
import { SectionHeader } from '@/components/ui/section-header';
import { GraduationCap } from 'lucide-react';

export function CoursesSection() {
  return (
    <SectionWrapper id="courses-section">
      <SectionHeader
        icon={GraduationCap}
        title="Our Premier Courses"
        subtitle="Explore our curated courses designed to equip you with in-demand tech skills."
      />
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PLACEHOLDER_COURSES.map((course) => (
          <StaggerItem key={course.id}>
            <CourseCard course={course} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
