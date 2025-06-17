"use client"

import type React from "react"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string
  spotlightColor?: string
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef<HTMLDivElement>(null)

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    divRef.current.style.setProperty("--mouse-x", `${x}px`)
    divRef.current.style.setProperty("--mouse-y", `${y}px`)
    divRef.current.style.setProperty("--spotlight-color", spotlightColor)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:transition-opacity after:duration-500",
        "after:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),var(--spotlight-color),transparent_40%)]",
        "hover:after:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default SpotlightCard
