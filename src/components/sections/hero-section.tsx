"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import { m } from 'framer-motion';

export function HeroSection() {
  return (
    <SectionWrapper className="relative overflow-hidden pt-24 md:pt-36 lg:pt-44">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-[pulse-glow_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[hsl(265_70%_60%/0.12)] rounded-full blur-[130px] animate-[pulse-glow_10s_ease-in-out_infinite_3s]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-[hsl(200_60%_50%/0.04)] rounded-full blur-[180px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(157 69% 50%) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <m.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-8 text-center lg:text-left"
        >
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>India&apos;s Next-Gen Coding Academy</span>
          </m.div>

          <h1 className="gradient-text font-extrabold tracking-tight leading-[1.1]">
            Unlock Your Coding Potential
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join CodeYuva and transform your career with our expert-led courses in Data Structures & Algorithms, Full-Stack Development, and Machine Learning — built for the future of tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" asChild className="relative overflow-hidden shadow-lg glow-primary hover:scale-105 transition-all duration-300">
              <Link href="#courses-section">
                Get Started Today
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300">
              <Link href="/dsa">Try DSA Platform →</Link>
            </Button>
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground pt-4"
          >
            {["Expert Mentors", "Hands-on Projects", "Career Support"].map((item, i) => (
              <m.span
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-1.5"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                {item}
              </m.span>
            ))}
          </m.div>
        </m.div>

        <m.div
          initial={{ opacity: 0, x: 50, rotateY: -5 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative animate-float perspective"
        >
          <Card className="card-premium border-primary/10 shadow-2xl shadow-primary/5">
            <CardContent className="p-0">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">main.js</span>
              </div>
              <div className="p-5 font-mono text-sm text-green-300/90 h-72 overflow-y-auto">
                <p className="text-muted-foreground/50"><span>{'// DSA Example: Binary Search'}</span></p>
                <p><span className="text-purple-400">function</span> <span className="text-yellow-300">binarySearch</span>(<span className="text-blue-300">arr</span>, <span className="text-blue-300">target</span>) {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">let</span> left = <span className="text-orange-400">0</span>;</p>
                <p className="pl-4"><span className="text-purple-400">let</span> right = arr.<span className="text-yellow-300">length</span> - <span className="text-orange-400">1</span>;</p>
                <p className="pl-4"><span className="text-purple-400">while</span> (left {'<='} right) {'{'}</p>
                <p className="pl-8"><span className="text-purple-400">const</span> mid = Math.<span className="text-yellow-300">floor</span>((left + right) / <span className="text-orange-400">2</span>);</p>
                <p className="pl-8"><span className="text-purple-400">if</span> (arr[mid] === target) <span className="text-purple-400">return</span> mid;</p>
                <p className="pl-8"><span className="text-purple-400">if</span> (arr[mid] {'<'} target) left = mid + <span className="text-orange-400">1</span>;</p>
                <p className="pl-8"><span className="text-purple-400">else</span> right = mid - <span className="text-orange-400">1</span>;</p>
                <p className="pl-4">{'}'}</p>
                <p className="pl-4"><span className="text-purple-400">return</span> -<span className="text-orange-400">1</span>;</p>
                <p>{'}'}</p>
                <br />
                <p className="text-muted-foreground/50"><span>{'// O(log n) time complexity ✨'}</span></p>
                <p><span className="text-purple-400">const</span> result = <span className="text-yellow-300">binarySearch</span>([<span className="text-orange-400">1,3,5,7,9</span>], <span className="text-orange-400">7</span>);</p>
                <p><span className="text-yellow-300">console</span>.<span className="text-blue-300">log</span>(result); <span className="text-muted-foreground/50">{'// 3'}</span></p>
              </div>
            </CardContent>
          </Card>
          {/* Floating glow orbs */}
          <div className="absolute -top-10 -left-10 w-28 h-28 bg-primary/20 rounded-full blur-3xl animate-[pulse-glow_4s_ease-in-out_infinite]" />
          <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[hsl(265_70%_60%/0.15)] rounded-full blur-3xl animate-[pulse-glow_5s_ease-in-out_infinite_1.5s]" />
        </m.div>
      </div>
    </SectionWrapper>
  );
}
