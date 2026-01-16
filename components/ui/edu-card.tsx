"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface EduCardProps {
  eyebrow?: string; // Optional smaller heading above the title
  title: string; // Main title of the card
  description: string; // Paragraph text content
  learnMoreLink?: string; // Optional URL for the "Learn more" link
  children?: React.ReactNode; // Visual elements inside the card
  dataSize?: 'lg' | 'default'; // Controls the height/size of the box
  dataAlign?: 'start' | 'end'; // Controls vertical alignment of content
  className?: string; // Additional custom classes
}

const EduCard: React.FC<EduCardProps> = ({
  eyebrow,
  title,
  description,
  learnMoreLink,
  children,
  dataSize = 'default',
  dataAlign = 'start',
  className = '',
}) => {
  // Construct dynamic class names based on props
  const baseClasses = `
    group relative bg-white dark:bg-black 
    border border-gray-200 dark:border-gray-800 rounded-2xl p-8 
    hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden
    hover:shadow-[#4DA6FF]/25 hover:border-[#4DA6FF]/50
    ${dataSize === 'lg' ? 'row-span-2 min-h-[400px]' : 'min-h-[300px]'}
    ${dataAlign === 'end' ? 'flex flex-col justify-end' : 'flex flex-col justify-start'}
    ${className}
  `.trim();

  return (
    <div className={baseClasses}>
      {/* Background gradient for visual appeal */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[#4DA6FF]/10 via-[#4DA6FF]/5 to-[#4DA6FF]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-900 px-4 py-2 text-sm font-medium text-black dark:text-white border border-gray-300 dark:border-gray-700 mb-6 w-fit hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300">
            {eyebrow}
          </div>
        )}
        
        <h3 className="text-2xl font-bold mb-4 text-black dark:text-white leading-tight">
          {title}
        </h3>
        
        <p className="text-black dark:text-white mb-6 leading-relaxed flex-grow opacity-80">
          {description}
        </p>
        
        {/* Visual elements container */}
        {children && (
          <div className="mb-6 flex-shrink-0">
            {children}
          </div>
        )}
        
        {learnMoreLink && (
          <Link 
            href={learnMoreLink}
            className="inline-flex items-center gap-2 text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 font-medium group/link transition-all duration-300 hover:shadow-[#4DA6FF]/25"
          >
            Learn more
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-[#0077FF]" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default EduCard; 