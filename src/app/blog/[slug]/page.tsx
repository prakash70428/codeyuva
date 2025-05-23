import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { PLACEHOLDER_ARTICLES } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = PLACEHOLDER_ARTICLES.find(a => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }
  return {
    title: `${article.title} - CodeYuva Blog`,
    description: article.summary,
    openGraph: {
        title: article.title,
        description: article.summary,
        images: [article.image],
        type: 'article',
        publishedTime: new Date(article.date).toISOString(),
        authors: [article.author],
        tags: article.tags,
    },
    twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.summary,
        images: [article.image],
    }
  };
}

export async function generateStaticParams() {
  return PLACEHOLDER_ARTICLES.map(article => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = PLACEHOLDER_ARTICLES.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SectionWrapper className="py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" asChild className="mb-8 group">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Button>

            <article>
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary mb-4">{article.title}</h1>
                <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center"><CalendarDays className="w-4 h-4 mr-1.5" /> Published on {article.date}</span>
                  <span className="flex items-center"><UserCircle className="w-4 h-4 mr-1.5" /> By {article.author}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center">
                        <Tag className="w-3 h-3 mr-1" /> {tag}
                    </span>
                    ))}
                </div>
              </header>

              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                  data-ai-hint={article.dataAiHint}
                />
              </div>
              
              {/* Prose styles for article content */}
              <div 
                className="prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none 
                           prose-headings:text-primary prose-headings:font-semibold
                           prose-a:text-primary hover:prose-a:underline
                           prose-strong:text-foreground
                           prose-blockquote:border-primary prose-blockquote:text-muted-foreground
                           prose-code:bg-muted prose-code:text-foreground prose-code:p-1 prose-code:rounded-sm prose-code:font-mono
                           prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6"
                dangerouslySetInnerHTML={{ __html: article.content || '<p>Content not available.</p>' }} 
              />
            </article>
            
            <Separator className="my-12" />

            {/* Author Bio / Related Articles Teaser */}
            <Card className="bg-card p-6">
              <CardContent className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-primary">About the Author: {article.author}</h3>
                <p className="text-muted-foreground text-sm">
                  {article.author} is a passionate educator at CodeYuva Academy, dedicated to simplifying complex tech concepts.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/#mentors-section">Meet Our Mentors</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
