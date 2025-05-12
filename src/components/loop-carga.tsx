"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function LoopCarga() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // If not loading, don't render anything
  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer circle */}
        <motion.div
          className="w-24 h-24 rounded-full border-2 border-primary/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Spinning arc */}
        <motion.div
          className="absolute top-0 left-0 w-24 h-24"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: 2, ease: "linear" }}
        >
          <div className="w-24 h-24 rounded-full border-t-2 border-r-2 border-primary" />
        </motion.div>

        {/* Initial letter animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-xl font-bold text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          VC
        </motion.div>
      </div>
    </div>
  )
}
