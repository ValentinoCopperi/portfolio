"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTitleProps {
  text: string
  className?: string
  delay?: number
  highlightIndices?: number[]
}

export default function AnimatedTitle({ text, className, delay = 0, highlightIndices = [] }: AnimatedTitleProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const letters = Array.from(text)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.h1
      className={cn("text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={cn(
            "inline-block relative",
            letter === " " ? "mr-2" : "mx-[1px]",
            highlightIndices.includes(index) ? "text-primary" : "text-white",
          )}
        >
          {letter === " " ? "\u00A0" : letter}

          {/* Decorative underline for some letters */}
          {highlightIndices.includes(index) && (
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
            />
          )}
        </motion.span>
      ))}
    </motion.h1>
  )
}
