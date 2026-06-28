import React from 'react';
import type { Testimonial } from '@/types';
import { m } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <m.div // Change div to m.div
      className="bg-black rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col justify-between h-full" // Changed background to black, removed hover:shadow-primary/30
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 15px -3px rgba(74, 255, 207, 0.5), 0 4px 6px -2px rgba(98, 252, 206, 0.05)" // Custom hover box shadow with #62FCCE
      }}
      transition={{ duration: 0.2 }} // Add a smooth transition
    >
      <div>
        <p className="text-white italic mb-4">&ldquo;{testimonial.message}&rdquo;</p>
        <p className="font-semibold" style={{ color: '#50FFD1' }}>{testimonial.name}</p>
        <p className="text-sm text-gray-400">{testimonial.company}</p>
      </div>
    </m.div>
  );
}