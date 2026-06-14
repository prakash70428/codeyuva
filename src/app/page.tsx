import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { CoursesSection } from '@/components/sections/courses-section';
import { MentorsSection } from '@/components/sections/mentors-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

function SectionDivider() {
  return <div className="section-divider" />;
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen animated-gradient-bg noise-overlay">
      <Navbar />
      <main className="flex-grow relative z-[2]">
        <HeroSection />
        <SectionDivider />
        <CoursesSection />
        <SectionDivider />
        <MentorsSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
