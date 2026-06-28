import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CodeYuva - Master DSA & Beyond',
  description: 'Join CodeYuva Academy to master Data Structures & Algorithms, Full-Stack Development, and more with expert mentors and interactive courses.',
  keywords: ['CodeYuva', 'DSA', 'Data Structures', 'Algorithms', 'Coding Bootcamp', 'Learn to Code', 'Programming Courses', 'Full-Stack Development'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
