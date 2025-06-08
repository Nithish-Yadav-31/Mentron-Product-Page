"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const CtaSection = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Educational Experience?</h2>
        <p className="text-black dark:text-white/80 mb-12 max-w-2xl mx-auto">
          Join the AI education revolution and transform how you teach, learn, and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white/40 dark:bg-[#0a223a]/40 rounded-lg p-6 backdrop-blur-lg border border-blue-100 dark:border-blue-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#0077FF] hover:bg-[#e6f0fa]/60 dark:hover:bg-[#112a47]/60 hover:backdrop-blur-2xl hover:ring-2 hover:ring-[#0077FF]/40">
            <h3 className="text-xl font-semibold mb-2">For Institutions</h3>
            <p className="text-black dark:text-white/90 mb-6">
              Partner with Mentron to revolutionize your institution
            </p>
            <Button asChild variant="glow" className="w-full">
              <Link href="/institutional-demo">Request Institutional Demo</Link>
            </Button>
          </div>

          <div className="bg-white/40 dark:bg-[#0a223a]/40 rounded-lg p-6 backdrop-blur-lg border border-blue-100 dark:border-blue-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#0077FF] hover:bg-[#e6f0fa]/60 dark:hover:bg-[#112a47]/60 hover:backdrop-blur-2xl hover:ring-2 hover:ring-[#0077FF]/40">
            <h3 className="text-xl font-semibold mb-2">For Individuals</h3>
            <p className="text-black dark:text-white/90 mb-6">
              Unlock your potential as an educator or student
            </p>
            <Button asChild variant="glow-secondary" className="w-full">
              <Link href="/individual-inquiry">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
