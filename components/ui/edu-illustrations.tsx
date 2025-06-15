"use client";

import React from 'react';
import { Brain, BookOpen, Users, BarChart3, Shield, Workflow, Database, Cpu, Target, Clock, CheckCircle, Sparkles } from 'lucide-react';

// AI Brain Network Illustration
export const AIBrainNetwork: React.FC = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    <div className="relative">
      {/* Central brain icon */}
      <div className="w-16 h-16 bg-white dark:bg-black rounded-2xl flex items-center justify-center shadow-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg">
        <Brain className="w-8 h-8 text-[#0077FF]" />
      </div>
      
      {/* Orbiting nodes */}
      <div className="absolute -inset-12">
        <div className="relative w-full h-full animate-spin-slow">
          {[
            { icon: BookOpen, angle: 0 },
            { icon: Users, angle: 72 },
            { icon: BarChart3, angle: 144 },
            { icon: Target, angle: 216 },
            { icon: CheckCircle, angle: 288 }
          ].map(({ icon: Icon, angle }, index) => (
            <div
              key={index}
              className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-48px) rotate(-${angle}deg)`,
              }}
            >
              <div className="w-full h-full bg-white dark:bg-black rounded-xl flex items-center justify-center shadow-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 hover:scale-110 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg">
                <Icon className="w-5 h-5 text-[#0077FF]" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Connecting lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 72, 144, 216, 288].map((angle, index) => (
          <div
            key={index}
            className="absolute w-px h-12 bg-gradient-to-t from-[#4DA6FF]/50 to-transparent origin-bottom"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -100%) rotate(${angle}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

// Course Management Stack Illustration
export const CourseStack: React.FC = () => (
  <div className="relative w-full h-40 flex items-center justify-center">
    <div className="relative">
      {/* Stacked cards representing courses */}
      {[
        { title: 'Mathematics', rotation: '-rotate-3', zIndex: 'z-30' },
        { title: 'Physics', rotation: 'rotate-1', zIndex: 'z-20' },
        { title: 'Chemistry', rotation: 'rotate-3', zIndex: 'z-10' }
      ].map((course, index) => (
        <div
          key={index}
          className={`absolute w-32 h-20 bg-white dark:bg-black rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 ${course.rotation} ${course.zIndex} transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg`}
          style={{ top: `${index * 8}px`, left: `${index * 4}px` }}
        >
          <div className="p-3 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0077FF]" />
              <div className="w-2 h-2 bg-[#4DA6FF] rounded-full"></div>
            </div>
            <div className="text-black dark:text-white text-sm font-medium">{course.title}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Analytics Dashboard Preview
export const AnalyticsDashboard: React.FC = () => (
  <div className="relative w-full h-44 bg-white dark:bg-black rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg">
    {/* Header */}
    <div className="bg-gray-100 dark:bg-gray-900 p-3 flex items-center gap-2 border-b border-gray-300 dark:border-gray-700">
      <div className="w-3 h-3 bg-[#4DA6FF] rounded-full"></div>
      <div className="w-3 h-3 bg-[#0077FF] rounded-full"></div>
      <div className="w-3 h-3 bg-[#0077FF] rounded-full"></div>
      <div className="ml-2 text-black dark:text-white text-sm font-medium">Analytics Dashboard</div>
    </div>
    
    {/* Content */}
    <div className="p-4 space-y-3">
      {/* Chart bars */}
      <div className="flex items-end gap-2 h-16">
        {[60, 80, 45, 90, 70, 55].map((height, index) => (
          <div
            key={index}
            className="bg-[#0077FF] rounded-sm w-4 transition-all duration-300 hover:bg-[#4DA6FF]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      
      {/* Stats */}
      <div className="flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#0077FF] rounded-full"></div>
          <span className="text-black dark:text-white text-xs">98% Accuracy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#4DA6FF] rounded-full"></div>
          <span className="text-black dark:text-white text-xs">65 Students</span>
        </div>
      </div>
    </div>
  </div>
);

// Security Shield with Icons
export const SecurityShield: React.FC = () => (
  <div className="relative w-full h-48 flex items-center justify-center">
    <div className="relative">
      {/* Main shield */}
      <div className="w-20 h-24 bg-white dark:bg-black rounded-t-full rounded-b-lg flex items-center justify-center shadow-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg">
        <Shield className="w-10 h-10 text-[#0077FF]" />
      </div>
      
      {/* Security badges around the shield */}
      <div className="absolute -inset-8">
        {[
          { label: 'RSA', position: '-top-2 -left-6' },
          { label: 'SHA256', position: '-top-2 -right-6' },
          { label: 'HMAC', position: '-bottom-2 -left-6' },
          { label: 'SSL', position: '-bottom-2 -right-6' }
        ].map(({ label, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} bg-white dark:bg-black px-2 py-1 rounded-md shadow-md border border-gray-300 dark:border-gray-700 transform hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg`}
          >
            <span className="text-black dark:text-white text-xs font-bold">{label}</span>
          </div>
        ))}
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-t-full rounded-b-lg bg-[#4DA6FF]/20 animate-ping"></div>
    </div>
  </div>
);

// Integration Workflow
export const IntegrationFlow: React.FC = () => (
  <div className="relative w-full h-40 flex items-center justify-center">
    <div className="flex items-center gap-4">
      {/* Service nodes */}
      {[
        { icon: Database, label: 'LMS' },
        { icon: Cpu, label: 'AI' },
        { icon: Users, label: 'Users' },
        { icon: BarChart3, label: 'Analytics' }
      ].map(({ icon: Icon, label }, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white dark:bg-black rounded-xl flex items-center justify-center shadow-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 hover:scale-110 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg">
              <Icon className="w-6 h-6 text-[#0077FF]" />
            </div>
            <span className="text-xs text-black dark:text-white font-medium">{label}</span>
          </div>
          
          {/* Connection arrows */}
          {index < 3 && (
            <div className="flex items-center">
              <div className="w-8 h-px bg-[#4DA6FF]"></div>
              <div className="w-2 h-2 bg-[#4DA6FF] rounded-full transform rotate-45"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// Student Learning Visualization
export const LearningVisualization: React.FC = () => (
  <div className="relative w-full h-44 bg-white dark:bg-black rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-950 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg">
    {/* Header */}
    <div className="bg-gray-100 dark:bg-gray-900 p-3 flex items-center gap-2 border-b border-gray-300 dark:border-gray-700">
      <Sparkles className="w-4 h-4 text-[#0077FF]" />
      <div className="text-black dark:text-white text-sm font-medium">Knowledge Graph</div>
    </div>
    
    {/* Network visualization */}
    <div className="p-4 relative h-32">
      {/* Central concept */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300">
        <div className="w-2 h-2 bg-[#0077FF] rounded-full"></div>
      </div>
      
      {/* Connected nodes */}
      {[
        { x: 20, y: 20, size: 'w-6 h-6' },
        { x: 70, y: 15, size: 'w-5 h-5' },
        { x: 15, y: 70, size: 'w-5 h-5' },
        { x: 75, y: 75, size: 'w-6 h-6' },
        { x: 85, y: 45, size: 'w-4 h-4' }
      ].map((node, index) => (
        <div
          key={index}
          className={`absolute ${node.size} bg-white dark:bg-black rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300`}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
        </div>
      ))}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0077FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4DA6FF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Example connection lines */}
        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#connectionGradient)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="70%" y2="15%" stroke="url(#connectionGradient)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="url(#connectionGradient)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="url(#connectionGradient)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="85%" y2="45%" stroke="url(#connectionGradient)" strokeWidth="1" />
      </svg>
    </div>
  </div>
);

export const DynamicLearningSphere: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4DA6FF]/5 via-[#4DA6FF]/5 to-[#4DA6FF]/5 rounded-3xl blur-2xl"></div>
      
      {/* Main central sphere container */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Central glowing sphere/brain outline */}
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-20 h-20 bg-[#4DA6FF]/20 rounded-full blur-md animate-pulse"></div>
          
          {/* Main sphere */}
          <div className="relative w-16 h-16 bg-white dark:bg-black rounded-full border border-gray-300 dark:border-gray-700 backdrop-blur-sm flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg">
            {/* Inner brain/mind representation */}
            <svg className="w-8 h-8 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* Orbiting elements */}
        {/* Chat bubble icon - top right */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg border border-gray-300 dark:border-gray-700 animate-bounce hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <svg className="w-4 h-4 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>

        {/* Security shield icon - top left */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg border border-gray-300 dark:border-gray-700 animate-bounce hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <svg className="w-4 h-4 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        {/* Feedback star icon - bottom right */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg border border-gray-300 dark:border-gray-700 animate-bounce hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg" style={{ animationDelay: '2s', animationDuration: '3s' }}>
          <svg className="w-4 h-4 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>

        {/* Knowledge connection icon - bottom left */}
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg border border-gray-300 dark:border-gray-700 animate-bounce hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:shadow-[#4DA6FF]/25 hover:shadow-lg" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
          <svg className="w-4 h-4 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        {/* Subtle connecting lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
          <g stroke="url(#gradient)" strokeWidth="1" fill="none" opacity="0.3">
            <path d="M64 48 L80 32" strokeDasharray="2,3" className="animate-pulse" />
            <path d="M64 48 L48 32" strokeDasharray="2,3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M64 80 L80 96" strokeDasharray="2,3" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <path d="M64 80 L48 96" strokeDasharray="2,3" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          </g>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0077FF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#4DA6FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4DA6FF" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute top-4 left-8 w-1 h-1 bg-[#4DA6FF] rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-6 right-12 w-1 h-1 bg-[#4DA6FF] rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-12 right-6 w-1 h-1 bg-[#4DA6FF] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};