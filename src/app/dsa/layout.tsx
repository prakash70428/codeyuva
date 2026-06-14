import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DSA Grind Mode - CodeYuva',
  description: 'Master Data Structures & Algorithms with interactive problem solving',
};

export default function DSALayout({ children }: { children: React.ReactNode }) {
  return children;
}
