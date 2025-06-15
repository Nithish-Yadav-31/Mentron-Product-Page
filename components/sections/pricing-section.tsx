"use client"
import { useState } from "react"
import { Check, Zap, Star, Users, Shield, BarChart3, Headphones, Rocket, TrendingUp, Settings } from "lucide-react"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true)

  const monthlyFeatures = [
    { icon: Users, text: "Full access to AI-Powered Faculty Suite" },
    { icon: BarChart3, text: "Comprehensive Student Success Navigator" },
    { icon: Settings, text: "Robust Course Management" },
    { icon: TrendingUp, text: "Advanced Educational Insights" },
    { icon: Shield, text: "Enterprise-Grade Security foundation" },
    { icon: Headphones, text: "Standard Email Support (Mon-Fri)" },
    { icon: Zap, text: "Standard AI Processing Limits" },
  ]

  const yearlyFeatures = [
    { icon: Users, text: "Full access to AI-Powered Faculty Suite" },
    { icon: BarChart3, text: "Comprehensive Student Success Navigator" },
    { icon: Settings, text: "Robust Course Management" },
    { icon: TrendingUp, text: "Advanced Educational Insights" },
    { icon: Shield, text: "Enterprise-Grade Security foundation" },
    { icon: Headphones, text: "Priority 24/7 Email & Chat Support", highlight: true },
    { icon: Star, text: "Dedicated Onboarding & Training Workshops", highlight: true },
    { icon: Zap, text: "Expanded AI Generation Capacity", highlight: true },
    { icon: BarChart3, text: "Annual Data Trends Report & Analytics", highlight: true },
    { icon: Rocket, text: "Early Access to Beta Features", highlight: true },
    { icon: Settings, text: "Flexible Billing & Invoice Options", highlight: true },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-black dark:via-gray-950 dark:to-blue-950/30 overflow-hidden">
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
            Pricing
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-gray-100 leading-tight">
            Mentron Plans: Power Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Education</span>, Your Way
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose the plan that best fits your institution's needs and scale. Both plans offer Mentron's complete
            AI-powered faculty and student tools, with the Annual plan unlocking exclusive benefits for deeper
            integration and priority support.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 relative z-10">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-1 rounded-xl flex items-center border border-gray-200 dark:border-gray-700 shadow-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 xs:px-3 sm:px-4 md:px-6 py-3 xs:py-2 sm:py-3 rounded-lg text-sm xs:text-xs sm:text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 xs:px-3 sm:px-4 md:px-6 py-3 xs:py-2 sm:py-3 rounded-lg text-sm xs:text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <Zap className="w-4 h-4 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-blue-600" />
              Yearly Billing
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs xs:text-xs px-2 xs:px-1 py-1 rounded-full hidden xs:inline">Most Popular! Save 37.5%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 xs:gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
          {/* Monthly Plan */}
          <div
            className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border-2 p-8 xs:p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-300 ${
              !isYearly ? "border-blue-600 scale-105 shadow-blue-500/20" : "border-gray-200 dark:border-gray-700"
            }`}
          >
            <div className="mb-6 xs:mb-4 sm:mb-6">
              <div className="inline-flex items-center px-4 xs:px-3 sm:px-4 py-2 xs:py-1 sm:py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm xs:text-xs sm:text-sm font-medium mb-4 xs:mb-3 sm:mb-4">
                Monthly
              </div>
              <h3 className="text-2xl xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Mentron Monthly</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 xs:mb-4 sm:mb-6 text-sm xs:text-xs sm:text-sm">Flexibility to start, adapt, and scale.</p>
              <div className="mb-6 xs:mb-4 sm:mb-6">
                <span className="text-4xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">$20</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm xs:text-xs sm:text-sm">/month</span>
                <p className="text-sm xs:text-xs text-gray-500 dark:text-gray-500 mt-1">Billed monthly</p>
              </div>
            </div>

            <div className="space-y-4 xs:space-y-2 sm:space-y-3 md:space-y-4 mb-8 xs:mb-4 sm:mb-6 md:mb-8">
              {monthlyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 xs:gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 xs:w-2 xs:h-2 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm xs:text-xs sm:text-sm leading-tight">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button asChild className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-6 xs:py-4 sm:py-5 md:py-6 text-lg xs:text-sm sm:text-base md:text-lg rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              <Link href="/institutional-demo">
                Get Started Monthly
              </Link>
            </Button>
            <p className="text-center text-sm xs:text-xs text-gray-500 dark:text-gray-500 mt-3 xs:mt-2 sm:mt-3">Begin your transformation.</p>
          </div>

          {/* Yearly Plan */}
          <div
            className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border-2 p-8 xs:p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-300 ${
              isYearly ? "border-blue-600 scale-105 shadow-blue-500/20" : "border-gray-200 dark:border-gray-700"
            }`}
          >
            {isYearly && (
              <div className="absolute -top-4 xs:-top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 xs:px-3 sm:px-4 py-2 xs:py-1 sm:py-2 rounded-full text-sm xs:text-xs sm:text-sm font-medium flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                  Most Popular
                </div>
              </div>
            )}

            <div className="mb-6 xs:mb-4 sm:mb-6">
              <div className="inline-flex items-center px-4 xs:px-3 sm:px-4 py-2 xs:py-1 sm:py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm xs:text-xs sm:text-sm font-medium mb-4 xs:mb-3 sm:mb-4 border border-blue-200 dark:border-blue-800">
                Annual
              </div>
              <h3 className="text-2xl xs:text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Mentron Annual</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 xs:mb-4 sm:mb-6 text-sm xs:text-xs sm:text-sm">
                Unlock maximum value, support, and institutional growth.
              </p>
              <div className="mb-6 xs:mb-4 sm:mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">$150</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm xs:text-xs sm:text-sm">/year</span>
                </div>
                <p className="text-lg xs:text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold">Only $12.50/month</p>
                <p className="text-sm xs:text-xs text-gray-500 dark:text-gray-500">(billed annually)</p>
                <div className="bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 px-4 xs:px-3 sm:px-4 py-3 xs:py-2 sm:py-3 rounded-xl mt-3 xs:mt-2 sm:mt-3 border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                    <span className="font-semibold text-sm xs:text-xs sm:text-sm">Save 37.5% annually (equal to $90)!</span>
                  </div>
                  <p className="text-sm xs:text-xs mt-1">*Billed $150 upfront for the year</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 xs:space-y-2 sm:space-y-3 md:space-y-4 mb-8 xs:mb-4 sm:mb-6 md:mb-8">
              {yearlyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 xs:gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 xs:w-2 xs:h-2 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span
                    className={`text-sm xs:text-xs sm:text-sm leading-tight ${
                      feature.highlight ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 xs:py-4 sm:py-5 md:py-6 text-lg xs:text-sm sm:text-base md:text-lg rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
              <Link href="/institutional-demo">
                Commit Annually & Save More
              </Link>
            </Button>
            <p className="text-center text-sm xs:text-xs text-gray-500 dark:text-gray-500 mt-3 xs:mt-2 sm:mt-3">
              Elevate your educational platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection 