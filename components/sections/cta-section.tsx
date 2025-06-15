"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-white dark:bg-black overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center relative z-10">
          {/* Enhanced background gradient */}
          <div className="absolute -inset-12 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-blue-600/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl border border-white/30 dark:border-gray-800/50 shadow-2xl p-12 md:p-16 lg:p-20 max-w-5xl mx-auto">
            {/* Enhanced badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 mb-8 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4" />
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Transform Your Education
            </div>

            {/* Enhanced main heading */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">
              Ready to 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Transform </span>
              Your Educational Experience?
            </h2>

            {/* Enhanced description */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Join thousands of educators who have already streamlined their workflow with Mentron's comprehensive platform.
            </p>

            {/* Single CTA Button */}
            <div className="flex justify-center mb-8">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <Link href="/institutional-demo">
                  Schedule Demo
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Enhanced additional info */}
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                See how Mentron can revolutionize your institution's educational approach
              </p>
              <div className="flex items-center justify-center gap-6 text-xs text-gray-400 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  No setup fees
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Enterprise security
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  24/7 support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
