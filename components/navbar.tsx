"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b' : 'bg-background'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative flex items-center justify-center">
            <Image
              src="/resources/logo/mentron_geo_logo_blue.png"
              alt="Mentron Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="h-10 relative flex items-center">
            <Image
              src="/resources/logo/mentron_main.png"
              alt="Mentron"
              width={160}
              height={40}
              className="object-contain"
              style={{ height: '20px', width: 'auto' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#why" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Why Mentron
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
        </div>

        {/* CTA Buttons and Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="outline" className="rounded-md border-primary/20 hover:bg-primary/5">
            <Link href="/institutional-demo">Institutional Demo</Link>
          </Button>
          <Button asChild variant="default" className="rounded-md bg-primary hover:bg-primary/90 text-primary-foreground dark:text-white transition-all duration-300 shadow-[0_0_20px_4px_rgba(0,119,255,0.4)] hover:shadow-[0_0_25px_6px_rgba(0,119,255,0.6)] ring-2 ring-blue-400/30 hover:ring-blue-400/50">
            <Link href="/individual-inquiry">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md border-b p-4 flex flex-col gap-4">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors">
            About
          </Link>
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors">
            Features
          </Link>
          <Link href="#why" className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors">
            Why Mentron
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-primary py-2 transition-colors">
            Terms
          </Link>
          <div className="flex flex-col gap-3 pt-2">
            <Button asChild variant="outline" className="w-full justify-center">
              <Link href="/institutional-demo">Institutional Demo</Link>
            </Button>
            <Button asChild variant="default" className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground dark:text-white transition-all duration-300 shadow-[0_0_20px_4px_rgba(0,119,255,0.4)] hover:shadow-[0_0_25px_6px_rgba(0,119,255,0.6)] ring-2 ring-blue-400/30 hover:ring-blue-400/50">
              <Link href="/individual-inquiry">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
