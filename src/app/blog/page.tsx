import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { PLACEHOLDER_ARTICLES } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, UserCircle, Search, Tag } from 'lucide-react';
import type { Article } from '@/types';

export const metadata: Metadata = {
  title: 'Blog - CodeYuva Academy',
  description: 'Explore articles, tutorials, and insights on DSA, coding, and software development from CodeYuva Academy experts.',
};

function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="flex flex-col md:flex-row h-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 group bg-card border-border hover:border-primary/50">
      <Link href={`/blog/${article.slug}`} className="block md:w-1/3 relative">
        <div className="relative w-full h-48 md:h-full">
          <Image
            src={article.image}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={article.dataAiHint}
          />
        </div>
      </Link>
      <div className="flex flex-col md:w-2/3">
        <CardHeader>
          <Link href={`/blog/${article.slug}`} className="block">
            <CardTitle className="text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors line-clamp-2">{article.title}</CardTitle>
          </Link>
          <CardDescription className="text-xs text-muted-foreground flex items-center space-x-3 pt-1">
              <span className="flex items-center"><CalendarDays className="w-3.5 h-3.5 mr-1" /> {article.date}</span>
              <span className="flex items-center"><UserCircle className="w-3.5 h-3.5 mr-1" /> {article.author}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3 md:line-clamp-4">{article.summary}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center">
                <Tag className="w-3 h-3 mr-1" /> {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="link" asChild className="text-primary p-0 hover:underline">
            <Link href={`/blog/${article.slug}`}>
              Read More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default function BlogPage() {
  // TODO: Implement search and filter functionality if needed
  const articles = PLACEHOLDER_ARTICLES;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SectionWrapper>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">CodeYuva Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Your source for insights on DSA, programming best practices, and career advice in tech.
            </p>
          </div>

          {/* Search and Filter Bar - Basic structure */}
          <div className="mb-10 flex flex-col sm:flex-row gap-4 items-center p-4 bg-card rounded-lg shadow">
            <div className="relative flex-grow w-full sm:w-auto">
              <Input type="search" placeholder="Search articles..." className="pl-10 bg-input" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            {/* <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-input">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="dsa">DSA</SelectItem>
                <SelectItem value="web-dev">Web Development</SelectItem>
                <SelectItem value="career">Career Advice</SelectItem>
              </SelectContent>
            </Select> */}
            <Button variant="outline" className="w-full sm:w-auto">Filter (Coming Soon)</Button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Pagination - Basic structure */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>

        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
