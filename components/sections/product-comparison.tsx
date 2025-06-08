"use client";

import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const ProductComparison = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Choose Your Mentron Experience</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Unlock AI potential as an institution with our complete LMS platform, or as an individual with our powerful learning tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Complete AI LMS */}
          <div className="backdrop-blur-lg bg-white/40 dark:bg-[#0a223a]/40 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-[#0077FF] hover:bg-[#e6f0fa]/60 dark:hover:bg-[#112a47]/60 hover:backdrop-blur-2xl hover:ring-2 hover:ring-[#0077FF]/40">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-2 rounded">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mentron LMS: The All-In-One Intelligent Platform</h3>
                <p className="text-sm text-muted-foreground">For Colleges & Universities</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Elevate your entire institution with a next-generation Learning Management System. Replace limitations with intelligent automation, including AI-driven grading, personalized student feedback, and learning weakness identification.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                'Faculty Content Generation Tools (Quiz, Assignment, QP Gen)',
                'Student Learning Tools (Mindmaps, Knowledge Graphs, Chat)',
                'Automated Grading & Personalized AI Feedback',
                'Student Weakness Identification & Analytics'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild className={`w-full bg-primary hover:bg-primary/90 ${resolvedTheme === 'dark' ? 'text-white' : 'text-primary-foreground'}`}>
              <Link href="/institutional-demo">
                Discover Our Next-Gen AI LMS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Learning Tools Only */}
          <div className="backdrop-blur-lg bg-white/40 dark:bg-[#0a223a]/40 border border-blue-100 dark:border-blue-900 shadow-xl rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-[#0077FF] hover:bg-[#e6f0fa]/60 dark:hover:bg-[#112a47]/60 hover:backdrop-blur-2xl hover:ring-2 hover:ring-[#0077FF]/40">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/20 p-2 rounded">
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3C16.4183 3 20 6.58172 20 11C20 15.4183 16.4183 19 12 19C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 15V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 7H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mentron Learning Tools: Your Personal AI Advantage</h3>
                <p className="text-sm text-muted-foreground">For Individual Educators & Students</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Boost your understanding and productivity with our suite of standalone AI Learning Tools. Perfect for students and educators looking to harness AI for enhanced learning and teaching.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                'AI Mindmap Generator (98% validation)',
                'Knowledge Graph Explorer (93% accuracy)',
                'Chat with Documents & Websites',
                'Visual Explainer for Complex Concepts'
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild className={`w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 ${resolvedTheme === 'dark' ? 'text-white' : 'text-primary-foreground'}`}>
              <Link href="/individual-inquiry">
                Explore AI Learning Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;
