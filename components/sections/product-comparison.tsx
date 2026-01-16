"use client";

import { Button } from '@/components/ui/button';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { Check, ArrowRight, Building2, User, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';

const ProductComparison = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-4 h-4" />
            Choose Your Path
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
            Choose Your 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Mentron </span>
            Experience
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Unlock AI potential as an institution with our complete LMS platform, or as an individual with our powerful learning tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Complete AI LMS */}
          <CardSpotlight className="h-full" explicitBorderRadius="24px">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mentron LMS</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">The All-In-One Intelligent Platform</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-4 mb-6 border border-blue-100 dark:border-blue-800/50">
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">For Colleges & Universities</p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                Elevate your entire institution with a next-generation Learning Management System. Replace limitations with intelligent automation, including AI-driven grading, personalized student feedback, and learning weakness identification.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Faculty Content Generation Tools (Quiz and Assignment) genrators',
                  'Student Learning Tools (Mindmaps, Knowledge Graphs, Flashcards)',
                  'Automated Grading & Personalized AI Feedback',
                  'Student Weakness Identification & Analytics'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mt-0.5">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <Link href="/institutional-demo">
                  Discover Our Next-Gen AI LMS 
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </CardSpotlight>

          {/* Learning Tools Only */}
          <CardSpotlight className="h-full" explicitBorderRadius="24px">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-lg">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mentron Learning Tools</h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Your Personal AI Advantage</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl p-4 mb-6 border border-indigo-100 dark:border-indigo-800/50">
                <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">For Individual Educators & Students</p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                Boost your understanding and productivity with our suite of standalone AI Learning Tools. Perfect for students and educators looking to harness AI for enhanced learning and teaching.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Next Level Mindmap Generator',
                  'Knowledge Graph Generator',
                  'Chat with Documents & Websites',
                  'Flashcards Generator'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mt-0.5">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <Link href="/individual-inquiry">
                  Explore AI Learning Tools 
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison;