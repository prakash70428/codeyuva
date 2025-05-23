import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('w-full py-12 md:py-20 lg:py-28', className)}
      {...props}
    >
      <div className="container px-4 md:px-6 mx-auto">
        {children}
      </div>
    </section>
  );
}
