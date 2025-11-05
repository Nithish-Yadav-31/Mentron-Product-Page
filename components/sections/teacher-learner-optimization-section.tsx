"use client"
import type React from "react"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import TeacherWorkloadSpiderChart from "@/components/teacher-workload-spider-chart"
import DonutChart from "@/components/donut-chart"
import { Check } from "lucide-react"

const teacherNeedsData = [
  { name: "Personalization", value: 25, total: 100 },
  { name: "Tech Skills", value: 20, total: 100 },
  { name: "Data Insights", value: 25, total: 100 },
  { name: "Inclusivity", value: 30, total: 100 },
]

const studentNeedsData = [
  { name: "Personalized Learning", value: 30, total: 100 },
  { name: "Engagement", value: 25, total: 100 },
  { name: "Inclusivity", value: 25, total: 100 },
  { name: "Skill Development", value: 20, total: 100 },
]

const teacherColors = ["#1e40af", "#2563eb", "#3b82f6", "#60a5fa"]
const studentColors = ["#1e3a8a", "#1e40af", "#2563eb", "#3b82f6"]

const TeacherLearnerOptimizationSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            Optimizing needs of 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> 21st Century </span>
            Teachers and Learners
          </h1>
        </div>

        {/* Administrative Burden Section */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Administrative</span> Burden
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Reducing time spent on repetitive tasks to focus on core teaching
          </p>
        </div>

        {/* Problem and Solution Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          {/* The Problem */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 text-center leading-tight">The Problem</h3>
            <div className="h-[400px] xs:h-[450px] sm:h-[500px] md:h-[650px]">
              <TeacherWorkloadSpiderChart />
            </div>
          </div>

          {/* The Solution */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 text-center leading-tight">The Solution</h3>
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <CardSpotlight className="rounded-2xl">
                  <div className="text-center p-4 xs:p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm sm:text-base">
                      Grading and Feedback automated
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight">
                          Automated Grading of quiz and assignments
                        </p>
                      </div>
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight">
                          Write comprehensive feedback for each student automatically
                        </p>
                      </div>
                    </div>
                  </div>
                </CardSpotlight>

                <CardSpotlight className="rounded-2xl">
                  <div className="text-center p-4 xs:p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm sm:text-base">
                      Planning and Preparing Optimized
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight">
                          Detailed Teaching plan creation based on class performance on assessments
                        </p>
                      </div>
                      <div className="flex items-start justify-center gap-2">
                        <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight">
                          Help teachers prepare 5x faster with mentron
                        </p>
                      </div>
                    </div>
                  </div>
                </CardSpotlight>
              </div>

              <CardSpotlight className="rounded-2xl">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 text-sm text-center leading-tight">
                    Administrative Tasks Optimized:
                  </h4>
                  <div className="space-y-3 max-w-full">
                    {/* First item - Optimized for mobile */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-tight">
                          Low-Effort Assessment Generation
                        </p>
                      </div>
                      <div className="ml-5 space-y-1">
                        <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                          • Generate Quizzes automatically with any context
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 leading-tight">
                          • Generate Assignments automatically with any context
                        </p>
                      </div>
                    </div>
                    
                    {/* Second item - Optimized for mobile */}
                    <div className="flex items-start gap-2">
                      <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                        Live performance reporting of class on each course to make informed decisions on course planning
                      </p>
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>

        {/* Diverse Teaching and Learning Needs */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
            Diverse 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Teaching and Learning </span>
            Needs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Engaging students with different learning styles and preferences effectively, teachers with lower work
            pressure.
          </p>
        </div>

        {/* Teachers Section */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight">Teachers</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
              <CardSpotlight className="rounded-xl min-w-0">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm xs:text-xs sm:text-sm">Personalization:</h4>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    AI enables tailored instruction and materials
                  </p>
                </div>
              </CardSpotlight>

              <CardSpotlight className="rounded-xl min-w-0">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm xs:text-xs sm:text-sm">Tech skills:</h4>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    Essential for effective use of AI and digital tools
                  </p>
                </div>
              </CardSpotlight>

              <CardSpotlight className="rounded-xl min-w-0">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm xs:text-xs sm:text-sm">Data insights:</h4>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    Real-time data help teachers make informed decisions and monitor student progress
                  </p>
                </div>
              </CardSpotlight>

              <CardSpotlight className="rounded-xl min-w-0">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm xs:text-xs sm:text-sm">Inclusivity:</h4>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    Ensuring all students are supported is a top priority
                  </p>
                </div>
              </CardSpotlight>
            </div>

            <div className="bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 p-2 xs:p-3 sm:p-4">
              <DonutChart data={teacherNeedsData} colors={teacherColors} centerTitle="Teacher Key Needs" />
            </div>
          </div>
        </div>

        {/* Students Section */}
        <div>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight">Students</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-black rounded-2xl border border-gray-200 dark:border-gray-800 p-2 xs:p-3 sm:p-4">
              <DonutChart data={studentNeedsData} colors={studentColors} centerTitle="Student Key Needs" />
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
              <CardSpotlight className="rounded-xl min-w-0">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm xs:text-xs sm:text-sm">Personalization:</h4>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    Directly impacts engagement and achievement; AI customizes content and pace for each student
                  </p>
                </div>
              </CardSpotlight>

              <CardSpotlight className="rounded-xl min-w-0">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm xs:text-xs sm:text-sm">Engagement:</h4>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    Interactive and adaptive experiences increase motivation and participation
                  </p>
                </div>
              </CardSpotlight>

              <CardSpotlight className="rounded-xl min-w-0">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm xs:text-xs sm:text-sm">Skill Development:</h4>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">Helps focus on building relevant skills</p>
                </div>
              </CardSpotlight>

              <CardSpotlight className="rounded-xl min-w-0">
                <div className="p-4 xs:p-3 sm:p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm xs:text-xs sm:text-sm">Inclusivity:</h4>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    Accessibility and support for diverse learning needs ensuring student success
                  </p>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeacherLearnerOptimizationSection 