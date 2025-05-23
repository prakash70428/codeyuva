import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background to-background/90 pt-20 md:pt-32 lg:pt-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-left-12 duration-1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-green-400">
            Unlock Your Coding Potential
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Join CodeYuva Academy and transform your career with our expert-led courses in Data Structures, Algorithms, and Full-Stack Development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild className="shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              <Link href="#courses-section">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
              <Link href="/blog">Explore Blog</Link>
            </Button>
          </div>
           <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1.5 text-primary" /> Expert Mentors</span>
            <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1.5 text-primary" /> Hands-on Projects</span>
            <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1.5 text-primary" /> Career Support</span>
          </div>
        </div>
        <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 animate-float">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30 shadow-2xl shadow-primary/20 overflow-hidden">
            <CardContent className="p-6">
              <div className="bg-gray-900/70 rounded-md p-4 font-mono text-sm text-green-300 h-72 overflow-y-auto shadow-inner">
                <p className="text-gray-500">// Animated Code Snippet Example</p>
                <p><span className="text-purple-400">function</span> <span className="text-yellow-300">greet</span>(<span className="text-blue-400">name</span>) {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-orange-400">{`Hello, ${"$"}{name}! Welcome to CodeYuva.`}</span>;</p>
                <p>{'}'}</p>
                <br />
                <p className="text-gray-500">// DSA Example: Binary Search</p>
                <p><span className="text-purple-400">function</span> <span className="text-yellow-300">binarySearch</span>(<span className="text-blue-400">arr</span>, <span className="text-blue-400">target</span>) {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">let</span> left = <span className="text-red-400">0</span>;</p>
                <p className="pl-4"><span className="text-purple-400">let</span> right = arr.<span className="text-yellow-300">length</span> - <span className="text-red-400">1</span>;</p>
                <p className="pl-4"><span className="text-purple-400">while</span> (left {'<='} right) {'{'}</p>
                <p className="pl-8"><span className="text-purple-400">const</span> mid = Math.<span className="text-yellow-300">floor</span>((left + right) / <span className="text-red-400">2</span>);</p>
                <p className="pl-8"><span className="text-purple-400">if</span> (arr[mid] === target) <span className="text-purple-400">return</span> mid;</p>
                <p className="pl-8"><span className="text-purple-400">if</span> (arr[mid] {'<'} target) left = mid + <span className="text-red-400">1</span>;</p>
                <p className="pl-8"><span className="text-purple-400">else</span> right = mid - <span className="text-red-400">1</span>;</p>
                <p className="pl-4">{'}'}</p>
                <p className="pl-4"><span className="text-purple-400">return</span> -<span className="text-red-400">1</span>; <span className="text-gray-500">// Not found</span></p>
                <p>{'}'}</p>
              </div>
            </CardContent>
          </Card>
           <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
           <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}
