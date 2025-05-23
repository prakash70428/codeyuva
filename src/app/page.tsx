import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { CoursesSection } from '@/components/sections/courses-section';
import { MentorsSection } from '@/components/sections/mentors-section';
import { FaqBlogSection } from '@/components/sections/faq-blog-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CoursesSection />
        <MentorsSection />
        <FaqBlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
