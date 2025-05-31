import { Navbar } from '@/components/layout/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { CoursesSection } from '@/components/sections/courses-section';
import { MentorsSection } from '@/components/sections/mentors-section';
// import { FaqBlogSection } from '@/components/sections/faq-blog-section'; // Commented out blog section
import { TestimonialsSection } from '@/components/sections/testimonials-section'; // Import testimonials section
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
        {/* <FaqBlogSection /> */} {/* Commented out blog section usage */}
        <TestimonialsSection /> {/* Add testimonials section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
