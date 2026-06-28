"use client";

import { useState, useEffect } from "react";
import { PLACEHOLDER_TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { m } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { MessageSquareQuote } from "lucide-react";

export function TestimonialsSection() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) return;
    const resume = () => setPaused(false);
    document.addEventListener("click", resume, { once: true });
    document.addEventListener("touchend", resume, { once: true });
    return () => {
      document.removeEventListener("click", resume);
      document.removeEventListener("touchend", resume);
    };
  }, [paused]);

  const duplicatedTestimonials = [
    ...PLACEHOLDER_TESTIMONIALS,
    ...PLACEHOLDER_TESTIMONIALS,
  ];

  return (
    <section id="testimonials-section" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[hsl(265_70%_60%/0.04)] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4">
        <SectionHeader
          icon={MessageSquareQuote}
          iconColor="text-[hsl(40_80%_60%)]"
          title="Student Testimonials"
          subtitle="Hear from students who transformed their careers with CodeYuva."
        />

        <div
          className="relative overflow-hidden py-8 cursor-pointer"
          onClick={() => setPaused(true)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {paused && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-primary/10 border border-primary/30 text-primary text-xs px-3 py-1 rounded-full pointer-events-none">
              Tap anywhere to resume
            </div>
          )}

          <div className={`marquee-track flex gap-6 md:gap-8 w-max ${paused ? "paused" : ""}`}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[280px] md:w-[380px]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
