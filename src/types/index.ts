export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  syllabusOverview: string[];
  duration: string;
  whoShouldJoin: string[];
  image: string;
  dataAiHint?: string;
}

export interface Mentor {
  id: string;
  name: string;
  experience: string;
  photo: string;
  dataAiHint?: string;
  linkedinUrl: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  image: string;
  dataAiHint?: string;
  content?: string; // Full content for the individual blog post page
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  message: string;
}
