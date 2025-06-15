"use client";

import React from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

// Import the embed components
import FlashcardsEmbed from '@/components/FlashcardsEmbed';
import KGEmbed from '@/components/KGEmbed';
import MindmapEmbed from '@/components/MindmapEmbed';

const StudentLearningTools = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 dark:from-black dark:via-gray-950 dark:to-indigo-950/30 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-6 py-3 text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-200 dark:border-indigo-800">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Interactive Learning Experience
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">
            Unlock Your Potential with Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI-Powered</span> Learning Tools
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dive deep into complex subjects, visualize intricate connections, and master key concepts with interactive tools designed for modern learners.
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Row 1: Long card (Flashcards) + Small card (Flashcards description) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Example: Machine Learning Flashcards - Long Card */}
            <div className="lg:col-span-2 group relative bg-white dark:bg-black rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden min-h-[500px] flex flex-col">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Example: Machine Learning Flashcards</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  Access interactive flashcards to test your knowledge on machine learning fundamentals, complete with spaced repetition and instant feedback.
                </p>
                <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
                  {/* Interactive Tag */}
                  <div className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Click Card</div>
                    </div>
                  </div>
                  <FlashcardsEmbed />
                </div>
              </div>
            </div>

            {/* Flashcards - Small Card with Spotlight */}
            <CardSpotlight className="lg:col-span-1 rounded-2xl">
              <div className="flex flex-col justify-center h-full">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h2a1 1 0 011 1v1m10-1h-2M7 4h10M7 4H5a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2m-8 8h8m-8 4h8" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Flashcards</h5>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Efficiently reinforce memory and speed up recall of facts through quick visual repetition and adaptive learning techniques.
                </p>
              </div>
            </CardSpotlight>
          </div>

          {/* Row 2: Small card (Knowledge Graphs) + Long card (Knowledge Graph) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Knowledge Graphs - Small Card with Spotlight */}
            <CardSpotlight className="lg:col-span-1 rounded-2xl">
              <div className="flex flex-col justify-center h-full">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Knowledge Graphs</h5>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Map complex, interconnected concepts to reveal relationships and support personalized learning paths through intelligent connections.
                </p>
              </div>
            </CardSpotlight>

            {/* Machine Learning Knowledge Graph - Long Card */}
            <div className="lg:col-span-2 group relative bg-white dark:bg-black rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden min-h-[500px] flex flex-col">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Machine Learning Knowledge Graph</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  Explore an interactive knowledge graph to understand complex ML concepts and their interconnected relationships visually.
                </p>
                <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
                  {/* Interactive Tags */}
                  <div className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Zoom In</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Click Node</div>
                    </div>
                  </div>
                  <KGEmbed />
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Long card (Mindmap) + Small card (Mind Maps) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Machine Learning Mindmap - Long Card */}
            <div className="lg:col-span-2 group relative bg-white dark:bg-black rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden min-h-[500px] flex flex-col">
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Machine Learning Mindmap</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  Visualize the entire landscape of machine learning in a hierarchical and interconnected mindmap for holistic understanding.
                </p>
                <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
                  {/* Interactive Tag */}
                  <div className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Click Node</div>
                    </div>
                  </div>
                  <MindmapEmbed />
                </div>
              </div>
            </div>

            {/* Mind Maps - Small Card with Spotlight */}
            <CardSpotlight className="lg:col-span-1 rounded-2xl">
              <div className="flex flex-col justify-center h-full">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Mind Maps</h5>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Visually organize and connect ideas around a central theme for better understanding and recall. Transform complex topics into interconnected visual networks.
                </p>
              </div>
            </CardSpotlight>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudentLearningTools; 