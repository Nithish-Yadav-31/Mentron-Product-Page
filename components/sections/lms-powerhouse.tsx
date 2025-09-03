"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { CheckCircle, FileText, PieChart, MessageCircle, BarChart3, Search, Target, Clock, ArrowRight, Sparkles } from 'lucide-react';

const LmsPowerhouse = () => {
  return null; // Hidden for now
  
  // return (
  //   <>
  //     {/* Evaluation and Feedback Section */}
  //     <section className="py-20 md:py-32 bg-white dark:bg-black overflow-hidden">
  //       <div className="container px-4 md:px-6 mx-auto relative">
  //         <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
  //           <div className="max-w-xl">
  //             <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 mb-8 border border-blue-200 dark:border-blue-800">
  //               <CheckCircle className="w-4 h-4" />
  //               <Sparkles className="w-4 h-4" />
  //               Evaluation and Feedback
  //             </div>
  //             <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">
  //             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Grade </span>
  //                Assessments and Write 
  //               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> feedback </span>
  //               with one click
  //             </h2>
  //             <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
  //               Leverage AI to grade assessments, provide personalized feedback, and gain deep insights into student performance—all at the click of a button.
  //             </p>
  //             <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
  //               <Link href="/features/evaluation">
  //                 Explore Feature
  //                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  //               </Link>
  //             </Button>
  //           </div>
            
  //           <div className="relative lg:ml-8">
  //             {/* Screenshot container with gradient background */}
  //           <div className="relative">
  //               {/* Background gradient focused behind screenshot */}
  //               <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-blue-600/20 rounded-3xl blur-3xl"></div>
                
  //               {/* Main screenshot */}
  //               <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-700">
  //                 <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 px-6 py-4 border-b border-blue-200 dark:border-blue-700">
  //                   <div className="flex items-center gap-2">
  //                     <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
  //                     <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
  //                     <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
  //                     <div className="ml-4 text-sm text-blue-700 dark:text-blue-300 font-medium">Mentron - AI Evaluation</div>
  //                   </div>
  //                 </div>
  //                 <Image
  //                   alt="Mentron Evaluation and Feedback"
  //                   loading="lazy"
  //                   width={800}
  //                   height={600}
  //                   className="w-full h-auto"
  //                   src="/resources/screenshots/mentron-evaluation-and-feedback.png"
  //                 />
  //               </div>
                
  //               {/* Badge overlays */}
  //               <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 xs:p-2 sm:p-3 md:p-4 border border-gray-200 dark:border-gray-700">
  //                 <div className="flex items-center gap-3 xs:gap-2 sm:gap-3">
  //                   <div className="w-10 h-10 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
  //                     <CheckCircle className="w-5 h-5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
  //                   </div>
  //                   <div>
  //                     <div className="text-sm xs:text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">Highest Accuracy</div>
  //                     <div className="text-xs xs:text-xs text-gray-500 dark:text-gray-400">AI Grading</div>
  //                   </div>
  //                 </div>
  //               </div>
                
  //               <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 xs:p-2 sm:p-3 md:p-4 border border-gray-200 dark:border-gray-700">
  //                 <div className="flex items-center gap-3 xs:gap-2 sm:gap-3">
  //                   <div className="w-10 h-10 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
  //                     <Clock className="w-5 h-5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-indigo-600 dark:text-indigo-400" />
  //                   </div>
  //                   <div>
  //                     <div className="text-sm xs:text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">Time saving</div>
  //                     <div className="text-xs xs:text-xs text-gray-500 dark:text-gray-400">No Manual Effort</div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
          
  //         {/* Feature cards with CardSpotlight */}
  //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
  //           {[
  //             { icon: CheckCircle, title: "Automated Grading for Scale", desc: "Rapidly evaluate submissions with AI, ensuring consistency and accuracy across all assignments.", color: "blue" },
  //             { icon: MessageCircle, title: "Insightful AI Feedback", desc: "Generate custom, constructive feedback tailored to each student's responses, fostering targeted improvement.", color: "blue" },
  //             { icon: BarChart3, title: "Comprehensive Student Insights", desc: "Uncover performance patterns, identify knowledge gaps, and understand class-wide strengths and weaknesses.", color: "blue" },
  //             { icon: Clock, title: "Boost Productivity & Focus", desc: "Significantly reduce manual grading time, freeing you to focus on teaching and student engagement.", color: "blue" }
  //           ].map((feature, index) => (
  //             <CardSpotlight key={index} className="rounded-xl">
  //               <div className={`w-14 h-14 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-xl flex items-center justify-center mb-6`}>
  //                 <feature.icon className={`w-7 h-7 text-${feature.color}-600 dark:text-${feature.color}-400`} />
  //               </div>
  //               <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 text-lg">{feature.title}</h3>
  //               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
  //             </CardSpotlight>
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* AI Quiz Builder Section */}
  //     <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden">
  //       <div className="container px-4 md:px-6 mx-auto relative">
  //         <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
  //           <div className="order-2 lg:order-1 relative">
  //             {/* Enhanced screenshot presentation */}
  //             <div className="relative">
  //               {/* Background gradient focused behind screenshot */}
  //               <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-blue-600/20 rounded-3xl blur-3xl"></div>
                
  //               <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-700">
  //                 <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 px-6 py-4">
  //                   <div className="flex items-center justify-end gap-2">
  //                     <div className="text-sm text-blue-700 dark:text-blue-300 font-medium mr-4">Quiz Generator AI</div>
  //                     <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
  //                     <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
  //                     <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
  //             </div>
  //           </div>
  //                 <Image
  //                   alt="Mentron Quiz Generator"
  //                   loading="lazy"
  //                   width={800}
  //                   height={600}
  //                   className="w-full h-auto"
  //                   src="/resources/screenshots/mentron-quiz-generator.png"
  //                 />
  //               </div>
                
  //               {/* Badge overlays - repositioned to avoid hiding title */}
  //               <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 xs:p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-gray-700 rotate-3 hover:rotate-0 transition-transform">
  //                 <div className="text-2xl xs:text-lg sm:text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">30</div>
  //                 <div className="text-sm xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400">Max Questions</div>
  //               </div>
                
  //               <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 xs:p-3 sm:p-4 md:p-6 border border-gray-200 dark:border-gray-700 -rotate-3 hover:rotate-0 transition-transform">
  //                 <div className="text-2xl xs:text-lg sm:text-xl md:text-2xl font-bold text-cyan-600 dark:text-cyan-400">99.8%</div>
  //                 <div className="text-sm xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
  //               </div>
  //             </div>
  //           </div>
            
  //           <div className="order-1 lg:order-2 max-w-xl lg:ml-8">
  //             <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 px-6 py-3 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-8 border border-cyan-200 dark:border-cyan-800">
  //               <FileText className="w-4 h-4" />
  //               <Sparkles className="w-4 h-4" />
  //               AI Quiz Builder
  //         </div>
  //             <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">
  //             <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Automated  </span>
  //               Quiz Generation: From  
  //               <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"> Any Context </span>
  //               to Questions
  //             </h2>
  //             <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
  //               Quickly and accurately generate engaging quizzes from any uploaded material, customizing difficulty, question count, and security settings.
  //             </p>
  //             <Button asChild className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
  //               <Link href="/features/quiz-builder">
  //                 Try Quiz Builder
  //                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  //               </Link>
  //             </Button>
  //           </div>
  //           </div>

  //         {/* Feature cards with CardSpotlight */}
  //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
  //           {[
  //             { icon: FileText, title: "Source Any Content", desc: "Upload PDFs, DOCX, or text to have AI automatically generate relevant questions based on your course materials.", color: "cyan" },
  //             { icon: Target, title: "Diverse Question Formats", desc: "Leverage AI to produce multiple-choice, true/false, or open-ended questions tailored to specified difficulty levels.", color: "cyan" },
  //             { icon: CheckCircle, title: "Robust Assessment Integrity", desc: "Set strict exam conditions with proctoring features, preventing plagiarism and ensuring fair assessments.", color: "cyan" },
  //             { icon: Clock, title: "Save Time, Tailor Perfectly", desc: "Minimize prep time by instantly creating quizzes that perfectly align with your teaching objectives.", color: "cyan" }
  //           ].map((feature, index) => (
  //             <CardSpotlight key={index} className="rounded-xl">
  //               <div className={`w-14 h-14 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-xl flex items-center justify-center mb-6`}>
  //                 <feature.icon className={`w-7 h-7 text-${feature.color}-600 dark:text-${feature.color}-400`} />
  //               </div>
  //               <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 text-lg">{feature.title}</h3>
  //               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
  //             </CardSpotlight>
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* AI Assignment Creator Section */}
  //     <section className="py-20 md:py-32 bg-white dark:bg-black overflow-hidden">
  //       <div className="container px-4 md:px-6 mx-auto relative">
  //         <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
  //           <div className="max-w-xl">
  //             <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-6 py-3 text-sm font-medium text-blue-600 dark:text-blue-400 mb-8 border border-blue-200 dark:border-blue-800">
  //               <PieChart className="w-4 h-4" />
  //               <Sparkles className="w-4 h-4" />
  //               AI Assignment Creator
  //             </div>
  //             <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">
  //               Effortless Assignment 
  //               <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Generation </span>
  //               with AI
  //             </h2>
  //             <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
  //             Create tailored, high-quality assignments in minutes from any text source, perfectly aligning with your course content and assessment goals.
  //         </p>
  //             <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group">
  //               <Link href="/features/assignment-creator">
  //                 Start Creating
  //                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  //           </Link>
  //           </Button>
  //         </div>
            
  //           <div className="relative lg:ml-8">
  //           <div className="relative">
  //               {/* Background gradient focused behind screenshot */}
  //               <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-blue-600/20 rounded-3xl blur-3xl"></div>
                
  //               <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-700">
  //                 <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 px-6 py-4">
  //                   <div className="flex items-center gap-2">
  //                     <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
  //                     <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
  //                     <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
  //                     <div className="ml-4 text-sm text-blue-700 dark:text-blue-300 font-medium">Assignment Builder Pro</div>
  //                   </div>
  //                 </div>
  //                 <Image
  //                   alt="Mentron Assignment Generator"
  //                   loading="lazy"
  //                   width={800}
  //                   height={600}
  //                   className="w-full h-auto"
  //                   src="/resources/screenshots/mentron-assignment-generator.png"
  //                 />
  //               </div>
                
  //               {/* Badge overlays */}
  //               <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 xs:p-2 sm:p-3 md:p-4 border border-gray-200 dark:border-gray-700">
  //                 <div className="flex items-center gap-3 xs:gap-2 sm:gap-3">
  //                   <div className="w-3 h-3 xs:w-2 xs:h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-ping"></div>
  //                   <div className="text-sm xs:text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">Live Generation</div>
  //                 </div>
  //               </div>
                
  //               <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 xs:p-2 sm:p-3 md:p-4 border border-gray-200 dark:border-gray-700">
  //                 <div className="flex items-center gap-3 xs:gap-2 sm:gap-3">
  //                   <div className="w-10 h-10 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
  //                     <Target className="w-5 h-5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-indigo-600 dark:text-indigo-400" />
  //                   </div>
  //                   <div>
  //                     <div className="text-sm xs:text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100">100%</div>
  //                     <div className="text-xs xs:text-xs text-gray-500 dark:text-gray-400">Aligned</div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
          
  //         {/* Feature cards with CardSpotlight */}
  //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
  //           {[
  //             { icon: Search, title: "Content-Aware Questioning", desc: "AI analyzes your uploaded materials to generate questions that test specific concepts and understanding.", color: "blue" },
  //             { icon: Clock, title: "Minimize Preparation Time", desc: "Automate assignment creation, significantly reducing administrative overhead and freeing faculty time for teaching.", color: "blue" },
  //             { icon: Target, title: "Tailored for Learning Outcomes", desc: "Define question patterns, keyword focus, and grading criteria to create assignments that meet your exact needs.", color: "blue" },
  //             { icon: CheckCircle, title: "Secure Assessment Environment", desc: "Ensure academic integrity with configurable security settings, including tab switch limits and full-screen mode.", color: "blue" }
  //           ].map((feature, index) => (
  //             <CardSpotlight key={index} className="rounded-xl">
  //               <div className={`w-14 h-14 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-xl flex items-center justify-center mb-6`}>
  //                 <feature.icon className={`w-7 h-7 text-${feature.color}-600 dark:text-${feature.color}-400`} />
  //               </div>
  //               <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 text-lg">{feature.title}</h3>
  //               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
  //             </CardSpotlight>
  //           ))}
  //       </div>
  //     </div>
  //   </section>
  //   </>
  // );
};

export default LmsPowerhouse;