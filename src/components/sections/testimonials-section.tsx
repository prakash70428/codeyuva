"use client";

import { PLACEHOLDER_TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Adjust stagger delay as needed
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state (hidden below and faded)
  visible: {
    opacity: 1,
    y: 0, // Animated state (visible at original position)
  },
};

export function TestimonialsSection() {
  // Duplicate testimonials to create a seamless loop effect
  const duplicatedTestimonials = [
    ...PLACEHOLDER_TESTIMONIALS,
    ...PLACEHOLDER_TESTIMONIALS,
  ];

  return (
    <section id="testimonials-section" className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container text-center mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn from industry professionals with years of real-world experience and a passion for teaching.
        </p>
        {/* Outer container to hide overflow and manage staggered animation */}
        <motion.div
          className="overflow-hidden py-12" // Hide the overflow for the horizontal scroll
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex gap-8" // Use flexbox for horizontal layout and gap
            
            // framer-motion animation for continuous horizontal scroll
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Adjust duration for desired speed
                ease: "linear", // Linear ease for constant speed
              },
            }}
            // Initial and animated state to create the loop
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }} // Translate by 50% to loop through duplicated content
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              // Use a unique key for each duplicated testimonial
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px]"
                variants={itemVariants} // Apply item variants for staggered animation
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
        