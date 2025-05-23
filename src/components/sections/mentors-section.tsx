import { SectionWrapper } from '@/components/layout/section-wrapper';
import { MentorCard } from '@/components/ui/mentor-card';
import { PLACEHOLDER_MENTORS } from '@/lib/constants';

export function MentorsSection() {
  return (
    <SectionWrapper id="mentors-section" className="bg-background/90">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Expert Mentors</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn from industry professionals with years of real-world experience and a passion for teaching.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PLACEHOLDER_MENTORS.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </SectionWrapper>
  );
}
