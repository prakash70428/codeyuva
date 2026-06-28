"use client";

import { m } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor?: string;
}

export function SectionHeader({ title, subtitle, icon: Icon, iconColor = "text-primary" }: SectionHeaderProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="text-center mb-16"
    >
      <m.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 200 }}
        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
      >
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </m.div>
      <h2 className="section-heading">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      <div className="section-accent-line" />
    </m.div>
  );
}
