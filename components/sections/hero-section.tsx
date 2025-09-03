"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { WavyBackground } from '@/components/ui/wavy-background';
import { useTheme } from 'next-themes'; // Import useTheme
import { useEffect, useState } from 'react'; // Import useEffect and useState

const HeroSection = () => {
  const { theme, resolvedTheme } = useTheme(); // Get both theme and resolvedTheme
  const [mounted, setMounted] = useState(false); // Track if component is mounted

  // Ensure theme is properly initialized
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the background color based on the current theme
  // These HSL values correspond to --background in globals.css for light and dark modes
  const heroBackgroundFill = resolvedTheme === 'dark' ? 'hsl(220 25% 8%)' : 'hsl(0 0% 100%)';

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
          <div className="flex justify-center mb-4 lg:mb-8">
            <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary flex items-center gap-1.5">
              <span className="inline-block">🚀</span> The Future of Education is Here
            </div>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-4xl mx-auto text-gray-900">
          The End of One-Size-Fits-All <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Education.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Mentron personalizes learning for every student, freeing brilliant minds from old teaching. We empower educators and modernize institutions to truly unlock potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16">
            <Button asChild className="bg-primary hover:bg-primary/90 font-medium px-6 py-3 rounded-md transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(0,215,255,0.6)] text-primary-foreground">
              <Link href="/institutional-demo">
                Transform Your Institution <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary/20 hover:bg-primary/5 font-medium px-6 py-3 rounded-md transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(0,215,255,0.6)]">
              <Link href="https://app.mentron.in" target="_blank" rel="noopener noreferrer">
                Try Beta Now (invite only)<ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* WavyBackground as the absolute background */}
      <WavyBackground
        backgroundFill={heroBackgroundFill} // Pass the theme-dependent background color
        waveOpacity={0.2} // Adjust opacity for a subtle effect
        className="absolute inset-0 z-0" // Position absolutely to cover the section
        containerClassName="!h-full !w-full !flex-none" // Override WavyBackground's default height and centering
        // The 'colors' prop is intentionally omitted here, so WavyBackground uses its default constant waveColors
      />
      
      {/* Original HeroSection content, positioned above the wavy background */}
      <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
        <div className="flex justify-center mb-4 lg:mb-8">
          <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary flex items-center gap-1.5">
            <span className="inline-block">🚀</span> The Future of Education is Here
          </div>
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
        The End of One-Size-Fits-All <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Education.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Mentron personalizes learning for every student, freeing brilliant minds from old teaching. We empower educators and modernize institutions to truly unlock potential.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16">
          <Button asChild className={`bg-primary hover:bg-primary/90 font-medium px-6 py-3 rounded-md transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(0,215,255,0.6)] ${resolvedTheme === 'dark' ? 'text-white' : 'text-primary-foreground'}`}>
            <Link href="/institutional-demo">
              Transform Your Institution <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className={`border-primary/20 hover:bg-primary/5 font-medium px-6 py-3 rounded-md transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(0,215,255,0.6)] ${resolvedTheme === 'dark' ? 'text-white' : ''}`}>
            <Link href="https://app.mentron.in" target="_blank" rel="noopener noreferrer">
              Try Beta Now (invite only)<ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
