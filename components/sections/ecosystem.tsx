"use client";

import React from 'react';
import EduCard from '@/components/ui/edu-card';
import { 
  AIBrainNetwork, 
  CourseStack, 
  AnalyticsDashboard, 
  SecurityShield, 
  IntegrationFlow, 
  DynamicLearningSphere
} from '@/components/ui/edu-illustrations';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Ecosystem = () => {
  return (
    <section id="why" className="w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-black dark:via-gray-950 dark:to-blue-950/30 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 mb-8 border border-blue-200 dark:border-blue-800">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Complete Educational Ecosystem
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">
            The <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">All-In-One</span> Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Say goodbye to siloed solutions. Mentron consolidates every essential educational function into a single, intuitive platform that empowers both educators and students.
        </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* AI-Powered Faculty Suite - Large Card */}
            <EduCard
              eyebrow="AI-Powered Faculty Suite"
              title="Intelligent Content Generation with Unmatched Reliability"
              description="Quiz Generator (99.8% reliability), Assignment Generator, and Question Paper Generator (99% structural adherence) – all built-in, not bolted-on. Create engaging assessments in minutes, not hours."
              learnMoreLink="/features/ai-suite"
              dataSize="lg"
              className="row-span-2"
            >
              <AIBrainNetwork />
            </EduCard>

            {/* Course Management */}
            <EduCard
              eyebrow="Robust Course Management"
              title="Modern Course Administration Made Simple"
              description="Syllabus management, content delivery, announcements, scheduling – all the standards you need, but designed with modern UX principles."
              learnMoreLink="/features/course-management"
            >
              <CourseStack />
            </EduCard>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Student Success Navigator */}
            <EduCard
              eyebrow="Student Success Navigator"
              title="Empowering Every Learner with Adaptive Tools & Intelligent Feedback"
              description="Experience secure, full-screen assessments and receive instant, detailed AI feedback that pinpoints areas for improvement, transforming challenges into learning opportunities. Access Mindmaps (98% validation accuracy), Knowledge Graphs, AI Chatbots, and Interactive Explainers – all within your personalized learning environment."
              learnMoreLink="/features/student-hub"
              dataAlign="end"
            >
              <DynamicLearningSphere />
            </EduCard>

            {/* Bottom Row - Two Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Advanced Analytics */}
              <EduCard
                eyebrow="Advanced Analytics"
                title="Data-Driven Educational Insights"
                description="Deep insights for faculty and administration with predictive capabilities. Track student progress, identify at-risk learners, and optimize course effectiveness."
                learnMoreLink="/features/analytics"
              >
                <AnalyticsDashboard />
              </EduCard>

              {/* Secure Infrastructure */}
              <EduCard
                eyebrow="Secure Infrastructure"
                title="Enterprise-Grade Security Foundation"
                description="RSA encryption, HMAC integrity, SHA256 authentication, and SSL/TLS – comprehensive security underpinning everything you do."
                learnMoreLink="/features/security"
              >
                <SecurityShield />
              </EduCard>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action */}
        <div className="text-center mt-20 relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Transform Your Educational Experience?
            </h3>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of educators who have already streamlined their workflow with Mentron's comprehensive platform.
            </p>
            <div className="flex justify-center">
              <Link href="/institutional-demo" className="bg-white text-blue-600 px-12 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl group inline-flex items-center gap-3">
                Schedule Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
