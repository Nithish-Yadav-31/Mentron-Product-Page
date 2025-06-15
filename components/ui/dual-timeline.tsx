"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

interface DualTimelineProps {
  leftData: TimelineEntry[]
  rightData: TimelineEntry[]
  leftTitle: string
  rightTitle: string
  mainTitle?: string
}

export const DualTimeline = ({
  leftData,
  rightData,
  leftTitle,
  rightTitle,
  mainTitle = "How Mentron Learning journey works?",
}: DualTimelineProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileLeftRef = useRef<HTMLDivElement>(null)
  const mobileRightRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [mobileLeftHeight, setMobileLeftHeight] = useState(0)
  const [mobileRightHeight, setMobileRightHeight] = useState(0)

  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setHeight(rect.height)
      }
      if (mobileLeftRef.current) {
        const rect = mobileLeftRef.current.getBoundingClientRect()
        setMobileLeftHeight(rect.height)
      }
      if (mobileRightRef.current) {
        const rect = mobileRightRef.current.getBoundingClientRect()
        setMobileRightHeight(rect.height)
      }
    }

    calculateHeight()
    window.addEventListener("resize", calculateHeight)

    return () => window.removeEventListener("resize", calculateHeight)
  }, [ref, leftData, rightData])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  // Mobile scroll progress for left timeline
  const { scrollYProgress: mobileLeftProgress } = useScroll({
    target: mobileLeftRef,
    offset: ["start 20%", "end 80%"],
  })

  // Mobile scroll progress for right timeline  
  const { scrollYProgress: mobileRightProgress } = useScroll({
    target: mobileRightRef,
    offset: ["start 20%", "end 80%"],
  })

  const mobileLeftHeightTransform = useTransform(mobileLeftProgress, [0, 1], [0, mobileLeftHeight])
  const mobileLeftOpacityTransform = useTransform(mobileLeftProgress, [0, 0.1], [0, 1])

  const mobileRightHeightTransform = useTransform(mobileRightProgress, [0, 1], [0, mobileRightHeight])
  const mobileRightOpacityTransform = useTransform(mobileRightProgress, [0, 0.1], [0, 1])

  // Get the maximum length to ensure both timelines have the same number of items
  const maxLength = Math.max(leftData.length, rightData.length)
  const normalizedLeftData = [...leftData]
  const normalizedRightData = [...rightData]

  // Pad shorter array with empty items
  while (normalizedLeftData.length < maxLength) {
    normalizedLeftData.push({ title: "", content: null })
  }
  while (normalizedRightData.length < maxLength) {
    normalizedRightData.push({ title: "", content: null })
  }

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8 lg:px-10">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-gray-900 dark:text-gray-100 text-center font-bold leading-tight">
          How 
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Mentron Learning </span>
          journey works?
        </h1>

        {/* Column Headers - Better mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center">
            <h2 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{leftTitle}</h2>
          </div>
          <div className="text-center md:mt-0 mt-8">
            <h2 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{rightTitle}</h2>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20">
        {/* Mobile Layout - Single Column */}
        <div className="block md:hidden px-3 sm:px-4">
          {/* Left Timeline Mobile */}
          <div className="mb-12" ref={mobileLeftRef}>
            <h3 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-6 text-center">{leftTitle}</h3>
            <div className="relative">
              {normalizedLeftData.map((item, index) => (
                <div key={`left-mobile-${index}`} className="relative flex justify-start mb-6 sm:mb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-4 sm:top-6 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-white dark:bg-black border-2 border-blue-200 dark:border-blue-700 flex items-center justify-center z-10">
                    <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                  </div>
                  {/* Card content */}
                  <div className="ml-6 sm:ml-10 flex-1">
                    {item.content && (
                      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-900/80">
                        {item.content}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Mobile Timeline Line with Animation */}
              <div className="absolute left-2 sm:left-3 top-4 sm:top-6 w-[1px] sm:w-[2px] bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-700 to-transparent rounded-full"
                   style={{ height: `${normalizedLeftData.filter(item => item.content).length * 120}px` }}>
                <motion.div
                  style={{
                    height: mobileLeftHeightTransform,
                    opacity: mobileLeftOpacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-[1px] sm:w-[2px] bg-gradient-to-b from-blue-500 via-blue-600 to-transparent rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right Timeline Mobile */}
          <div className="mb-12" ref={mobileRightRef}>
            <h3 className="text-base sm:text-lg font-semibold text-purple-600 dark:text-purple-400 mb-6 text-center">{rightTitle}</h3>
            <div className="relative">
              {normalizedRightData.map((item, index) => (
                <div key={`right-mobile-${index}`} className="relative flex justify-start mb-6 sm:mb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-4 sm:top-6 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-white dark:bg-black border-2 border-purple-200 dark:border-purple-700 flex items-center justify-center z-10">
                    <div className="w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                  </div>
                  {/* Card content */}
                  <div className="ml-6 sm:ml-10 flex-1">
                    {item.content && (
                      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-900/80">
                        {item.content}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Mobile Timeline Line with Animation */}
              <div className="absolute left-2 sm:left-3 top-4 sm:top-6 w-[1px] sm:w-[2px] bg-gradient-to-b from-transparent via-purple-200 dark:via-purple-700 to-transparent rounded-full"
                   style={{ height: `${normalizedRightData.filter(item => item.content).length * 120}px` }}>
                <motion.div
                  style={{
                    height: mobileRightHeightTransform,
                    opacity: mobileRightOpacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-[1px] sm:w-[2px] bg-gradient-to-b from-purple-500 via-purple-600 to-transparent rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-10">
          {/* Left Timeline Desktop */}
          <div className="relative">
            {normalizedLeftData.map((item, index) => (
              <div key={`left-${index}`} className="relative flex justify-start mb-8 md:mb-12">
                {/* Timeline dot positioned absolutely */}
                <div className="absolute left-0 top-6 w-6 h-6 rounded-full bg-white dark:bg-black border-2 border-blue-200 dark:border-blue-700 flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                </div>
                {/* Card content with proper margin */}
                <div className="ml-10 flex-1">
                  {item.content && (
                    <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-900/80">
                      {item.content}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Left Timeline Line */}
            <div
              style={{ height: height + "px" }}
              className="absolute left-3 top-6 w-[2px] bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-700 to-transparent"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-blue-500 via-blue-600 to-transparent rounded-full"
              />
            </div>
          </div>

          {/* Right Timeline Desktop */}
          <div className="relative">
            {normalizedRightData.map((item, index) => (
              <div key={`right-${index}`} className="relative flex justify-start mb-8 md:mb-12">
                {/* Timeline dot positioned absolutely */}
                <div className="absolute left-0 top-6 w-6 h-6 rounded-full bg-white dark:bg-black border-2 border-purple-200 dark:border-purple-700 flex items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                </div>
                {/* Card content with proper margin */}
                <div className="ml-10 flex-1">
                  {item.content && (
                    <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-900/80">
                      {item.content}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Right Timeline Line */}
            <div
              style={{ height: height + "px" }}
              className="absolute left-3 top-6 w-[2px] bg-gradient-to-b from-transparent via-purple-200 dark:via-purple-700 to-transparent"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-600 to-transparent rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
