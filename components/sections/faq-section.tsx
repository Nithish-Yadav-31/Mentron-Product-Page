"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does Mentron's AI differ from other educational platforms?",
    answer: "Mentron uses advanced machine learning algorithms that adapt in real-time to each learner's behavior, pace, and preferences. Unlike static systems, our AI continuously learns and optimizes the educational experience, resulting in 40% better retention rates and personalized learning paths that evolve with each student."
  },
  {
    question: "What kind of support and training do you provide?",
    answer: "We provide comprehensive onboarding with dedicated success managers, live training sessions, extensive documentation, video tutorials, and 24/7 customer support. Our team works closely with institutions to ensure successful implementation and maximum adoption across all user levels."
  },
  {
    question: "Is Mentron suitable for both K-12 and higher education?",
    answer: "Yes! Mentron is designed to scale across all educational levels. We serve K-12 schools, universities, corporate training programs, and professional development organizations. Our platform adapts to different pedagogical approaches and compliance requirements for each educational sector."
  },
  {
    question: "How do you ensure data privacy and security?",
    answer: "We take data security seriously with enterprise-grade encryption, GDPR compliance, FERPA compliance, and SOC 2 Type II certification. All data is encrypted in transit and at rest, and we provide detailed audit logs and granular access controls to ensure student and institutional data remains protected."
  },
  {
    question: "What's the typical implementation timeline?",
    answer: "Most institutions are up and running within 2-4 weeks. Our implementation process includes data migration, user training, customization, and testing. We work with your timeline and can accommodate faster deployments for urgent needs or more gradual rollouts for large institutions."
  },
  {
    question: "What analytics and reporting capabilities does Mentron provide?",
    answer: "Mentron provides comprehensive real-time analytics including student engagement metrics, learning progress tracking, performance predictions, completion rates, and detailed assessment analytics. You can generate custom reports, set up automated alerts, and access actionable insights to improve educational outcomes."
  }
];

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <span className="inline-block">❓</span> Frequently Asked Questions
            </div>
          </div>
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Got Questions? We've Got <span className="text-blue-600 dark:text-blue-400">Answers</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Everything you need to know about Mentron's AI-powered educational platform. Can't find what you're looking for? Contact our team for personalized assistance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-xl"
                >
                  <span className="text-lg font-semibold text-black dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6">
              Our team is here to help you find the perfect solution for your educational needs.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 