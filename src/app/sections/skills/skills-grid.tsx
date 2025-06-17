"use client"

import type React from "react"
import type { LucideIcon } from "lucide-react"
import { TextAnimate } from "@/components/magicui/text-animate"
import { skills } from "@/lib/skills"
import { motion } from "motion/react"
import { useState, useRef, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"
import { useMediaQuery } from "./use-media"
import SpotlightCard from "./components/card"
import { AnimatedBeam } from "@/components/magicui/lines"


const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex items-center justify-center rounded-full border-2 bg-background/90 backdrop-blur-md shadow-2xl relative",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

const IconWrapper = ({ Icon, className }: { Icon: LucideIcon; className: string }) => {
  return <Icon className={className} />
}

const SkillsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Refs for AnimatedBeam
  const containerRef = useRef<HTMLDivElement>(null)
  const frontendRef = useRef<HTMLDivElement>(null)
  const backendRef = useRef<HTMLDivElement>(null)
  const databaseRef = useRef<HTMLDivElement>(null)
  const developerRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: isMobile ? 1 : 0,
      y: isMobile ? 0 : 60,
      scale: isMobile ? 1 : 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: isMobile
        ? {}
        : {
            type: "spring",
            stiffness: 120,
            damping: 20,
            duration: 0.8,
          },
    },
  }

  const centerVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8,
        duration: 1,
      },
    },
  }

  return (
    <section className="w-full relative border-t min-h-[700px] lg:min-h-[900px] overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10" ref={containerRef}>
        <div className="pt-12 lg:pt-20 pb-8 lg:pb-12">
          <div className="text-center relative z-20">
            <TextAnimate className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-balance bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
              My Skills
            </TextAnimate>
            <motion.p
              className="mt-4 lg:mt-8 text-balance text-muted-foreground max-w-3xl mx-auto text-base lg:text-lg px-4 relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              A comprehensive full-stack development ecosystem where frontend, backend, and database technologies
              converge to create powerful digital solutions.
            </motion.p>
          </div>
        </div>

        {/* Enhanced Skills Layout */}
        <motion.div
          className="relative max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Row - Frontend and Backend */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-24 mb-12 lg:mb-20">
            {/* Frontend Skill */}
            <motion.div
              variants={cardVariants}
              className="group relative"
              onHoverStart={() => !isMobile && setHoveredCard(1)}
              onHoverEnd={() => !isMobile && setHoveredCard(null)}
              whileHover={isMobile ? {} : { y: -12, scale: 1.02 }}
            >
              {/* Beam Connection Point - Bottom Right Corner */}
              {!isMobile && (
                <div
                  ref={frontendRef}
                  className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-2 h-2 z-0"
                />
              )}

              <SpotlightCard
                className="h-full border-border/60 bg-gradient-to-br from-blue-500/8 via-cyan-500/4 to-teal-500/8 group-hover:border-blue-400/40"
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                <div className="relative z-10 flex flex-col items-center text-center h-full p-6 lg:p-8">
                  <div className="relative mb-4 lg:mb-6">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-2xl lg:rounded-3xl blur-lg lg:blur-xl group-hover:blur-xl lg:group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative h-16 w-16 lg:h-20 lg:w-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl lg:rounded-3xl flex items-center justify-center border border-blue-400/30 group-hover:border-blue-400/50 transition-all duration-500">
                      {skills[0].icon && (
                        <IconWrapper Icon={skills[0].icon} className="h-8 w-8 lg:h-10 lg:w-10 text-blue-400" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-6 text-foreground group-hover:text-blue-400 transition-colors duration-300">
                    {skills[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-sm lg:text-base">
                    {skills[0].description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Backend Skill */}
            <motion.div
              variants={cardVariants}
              className="group relative"
              onHoverStart={() => !isMobile && setHoveredCard(2)}
              onHoverEnd={() => !isMobile && setHoveredCard(null)}
              whileHover={isMobile ? {} : { y: -12, scale: 1.02 }}
            >
              {/* Beam Connection Point - Bottom Left Corner (since it's on the right side) */}
              {!isMobile && (
                <div
                  ref={backendRef}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2  z-0"
                />
              )}

              <SpotlightCard
                className="h-full border-border/60 bg-gradient-to-br from-purple-500/8 via-pink-500/4 to-rose-500/8 group-hover:border-purple-400/40"
                spotlightColor="rgba(168, 85, 247, 0.15)"
              >
                <div className="relative z-10 flex flex-col items-center text-center h-full p-6 lg:p-8">
                  <div className="relative mb-4 lg:mb-6">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-2xl lg:rounded-3xl blur-lg lg:blur-xl group-hover:blur-xl lg:group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative h-16 w-16 lg:h-20 lg:w-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl lg:rounded-3xl flex items-center justify-center border border-purple-400/30 group-hover:border-purple-400/50 transition-all duration-500">
                      {skills[1].icon && (
                        <IconWrapper Icon={skills[1].icon} className="h-8 w-8 lg:h-10 lg:w-10 text-purple-400" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-6 text-foreground group-hover:text-purple-400 transition-colors duration-300">
                    {skills[1].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-sm lg:text-base">
                    {skills[1].description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Enhanced Developer Center - Only show on desktop */}
          {!isMobile && (
            <motion.div variants={centerVariants} className="flex justify-center mb-12 lg:mb-20">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-xl lg:blur-2xl group-hover:blur-2xl lg:group-hover:blur-3xl transition-all duration-500 animate-pulse" />

                <Circle
                  ref={developerRef}
                  className="size-24 lg:size-32 bg-gradient-to-br from-primary/20 via-background to-secondary/20 border-primary/40 shadow-primary/30"
                >
                  <div className="text-center space-y-1 lg:space-y-2">
                    <div className="relative">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-1 lg:mb-2 mx-auto border border-primary/40">
                        <User className="h-4 w-4 lg:h-6 lg:w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs lg:text-sm font-bold text-primary">Valentino</div>
                      <div className="text-xs lg:text-xs text-primary/80 font-medium">Full Stack</div>
                      <div className="text-xs lg:text-xs text-primary/60 hidden lg:block">Developer</div>
                    </div>
                  </div>
                </Circle>
              </div>
            </motion.div>
          )}

          {/* Database Skill - Bottom */}
          <motion.div
            variants={cardVariants}
            className="group relative max-w-sm lg:max-w-lg mx-auto"
            onHoverStart={() => !isMobile && setHoveredCard(3)}
            onHoverEnd={() => !isMobile && setHoveredCard(null)}
            whileHover={isMobile ? {} : { y: -12, scale: 1.02 }}
          >
            {/* Beam Connection Point - Top Center */}
            {!isMobile && (
              <div ref={databaseRef} className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 z-0" />
            )}

            <SpotlightCard
              className="h-full border-border/60 bg-gradient-to-br from-green-500/8 via-emerald-500/4 to-lime-500/8 group-hover:border-green-400/40"
              spotlightColor="rgba(16, 185, 129, 0.15)"
            >
              <div className="relative z-10 flex flex-col items-center text-center h-full p-6 lg:p-8">
                <div className="relative mb-4 lg:mb-6">
                  <div className="absolute inset-0 bg-green-500/20 rounded-2xl lg:rounded-3xl blur-lg lg:blur-xl group-hover:blur-xl lg:group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative h-16 w-16 lg:h-20 lg:w-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl lg:rounded-3xl flex items-center justify-center border border-green-400/30 group-hover:border-green-400/50 transition-all duration-500">
                    {skills[2].icon && (
                      <IconWrapper Icon={skills[2].icon} className="h-8 w-8 lg:h-10 lg:w-10 text-green-400" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-6 text-foreground group-hover:text-green-400 transition-colors duration-300">
                  {skills[2].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow text-sm lg:text-base">
                  {skills[2].description}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Enhanced AnimatedBeams - Only show on desktop */}
        {!isMobile && (
          <>
            {/* Frontend to Developer */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={frontendRef}
              toRef={developerRef}
              duration={4}
              gradientStartColor="#3b82f6"
              gradientStopColor="#06b6d4"
              curvature={-80}
              pathWidth={3}
              pathOpacity={0.3}
            />

            {/* Backend to Developer */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={backendRef}
              toRef={developerRef}
              duration={4.5}
              gradientStartColor="#a855f7"
              gradientStopColor="#ec4899"
              curvature={-80}
              pathWidth={3}
              pathOpacity={0.3}
              reverse={true}
            />

            {/* Database to Developer */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={databaseRef}
              toRef={developerRef}
              duration={3.5}
              gradientStartColor="#10b981"
              gradientStopColor="#84cc16"
              curvature={0}
              pathWidth={3}
              pathOpacity={0.3}
            />
          </>
        )}
      </div>
    </section>
  )
}

export default SkillsGrid
