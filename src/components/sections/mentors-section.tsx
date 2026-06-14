"use client";

import { SectionWrapper } from '@/components/layout/section-wrapper';
import { MentorCard } from '@/components/ui/mentor-card';
import { PLACEHOLDER_MENTORS } from '@/lib/constants';
import { StaggerContainer, StaggerItem } from '@/components/ui/motion-wrapper';
import { SectionHeader } from '@/components/ui/section-header';
import { Users } from 'lucide-react';

export function MentorsSection() {
  return (
    <SectionWrapper id="mentors-section">
      <SectionHeader
        icon={Users}
        iconColor="text-[hsl(265_70%_65%)]"
        title="Meet Our Expert Mentors"
        subtitle="Learn from industry professionals with years of real-world experience and a passion for teaching."
      />
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PLACEHOLDER_MENTORS.map((mentor) => (
          <StaggerItem key={mentor.id}>
            <MentorCard mentor={mentor} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
