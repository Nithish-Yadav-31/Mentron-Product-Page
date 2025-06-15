"use client"

import { useMotionValue, motion, useMotionTemplate } from "motion/react"
import React, { MouseEvent as ReactMouseEvent, useState, useEffect } from "react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { cn } from "@/lib/utils"

export const CardSpotlight = ({
  children,
  radius = 350,
  color,
  className,
  explicitBorderRadius = "48px", // New prop, default to 48px for larger cards from image
  ...props
}: {
  radius?: number
  color?: string
  children: React.ReactNode
  className?: string
  explicitBorderRadius?: string // Make it optional for flexibility
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Detect dark mode when the component mounts and listen for changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }
    checkDarkMode() // Initial check

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  // Use theme-appropriate colors - very light blue for light theme
  const spotlightColor = color || (isDarkMode ? "#262626" : "rgba(219, 234, 254, 0.6)")
  
  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)
  
  return (
    <div
      className={cn(
        "group/spotlight p-6 relative border transition-all duration-300",
        "border-gray-200 bg-white dark:border-neutral-800 dark:bg-black",
        "overflow-hidden", // Keep overflow-hidden for proper clipping of internal elements
        className // Allow other utility classes (like h-full, flex-1) to be passed
      )}
      style={{
        borderRadius: explicitBorderRadius, // Apply the specific border-radius here
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute z-0 -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100",
          className // Also pass the original className to the motion.div
        )}
        style={{
          backgroundColor: spotlightColor,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
          borderRadius: explicitBorderRadius, // Apply to motion.div for correct masking effect clipping
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={
              isDarkMode 
                ? [[59, 130, 246], [139, 92, 246]]
                : [[96, 165, 250], [147, 197, 253]]
            }
            dotSize={3}
            showGradient={false}
          />
        )}
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}