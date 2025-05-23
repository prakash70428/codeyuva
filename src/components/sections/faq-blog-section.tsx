import Link from 'next/link';
import Image from 'next/image';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { PLACEHOLDER_ARTICLES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import type { Article } from '@/types';

function BlogPreviewCard({ article }: { article: Article }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 group bg-card border-border hover:border-primary/50">
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative w-full h-48">
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
      <CardHeader>
        <Link href={`/blog/${article.slug}`} className="block">
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">{article.title}</CardTitle>
        </Link>
        <CardDescription className="text-xs text-muted-foreground flex items-center space-x-3 pt-1">
            <span className="flex items-center"><CalendarDays className="w-3.5 h-3.5 mr-1" /> {article.date}</span>
            <span className="flex items-center"><UserCircle className="w-3.5 h-3.5 mr-1" /> {article.author}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{article.summary}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-primary p-0 hover:underline">
          <Link href={`/blog/${article.slug}`}>
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}


export function FaqBlogSection() {
  const featuredArticles = PLACEHOLDER_ARTICLES.slice(0, 3);

  return (
    <SectionWrapper id="faq-blog-section" className="bg-background/90">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Insights & Articles</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore common questions, challenges, and insights in DSA and software development from our experts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredArticles.map((article) => (
          <BlogPreviewCard key={article.slug} article={article} />
        ))}
      </div>
      <div className="text-center">
        <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
          <Link href="/blog">
            Visit Our Blog <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
