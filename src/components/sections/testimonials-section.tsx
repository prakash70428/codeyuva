"use client";

import { PLACEHOLDER_TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { MessageSquareQuote } from "lucide-react";

export function TestimonialsSection() {
  const duplicatedTestimonials = [
    ...PLACEHOLDER_TESTIMONIALS,
    ...PLACEHOLDER_TESTIMONIALS,
  ];

  return (
    <section id="testimonials-section" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
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

        {/* Marquee with gradient edge fades */}
        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[380px]"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
