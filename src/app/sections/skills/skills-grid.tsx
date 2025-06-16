"use client"

import { TextAnimate } from "@/components/magicui/text-animate"
import { skills } from "@/lib/skills"
import { motion } from "framer-motion"
import { useState } from "react"
import { useMediaQuery } from './use-media';

const SkillsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: isMobile ? 1 : 0,
      y: isMobile ? 0 : 50,
      scale: isMobile ? 1 : 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: isMobile
        ? {}
        : {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6,
          },
    },
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: isMobile ? 1 : 1.2,
      rotate: isMobile ? 0 : 360,
      transition: isMobile
        ? {}
        : {
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
    },
  }

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className="w-full relative border-t min-h-[600px] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="pt-16 pb-8">
          <div className="text-center relative">
            <TextAnimate className="text-3xl md:text-5xl font-bold tracking-tighter text-balance bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
              My Skills
            </TextAnimate>
            <motion.p
              className="mt-6 text-balance text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I have a wide range of skills that I have acquired over the years. I am a full stack developer and I have
              a passion for learning new technologies.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 py-20 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              className="group relative"
              onHoverStart={() => !isMobile && setHoveredCard(skill.id)}
              onHoverEnd={() => !isMobile && setHoveredCard(null)}
              whileHover={isMobile ? {} : { y: -8 }}
            >
              {/* Glow Effect con colores específicos por skill */}
              <motion.div
                className={`absolute -inset-1 rounded-2xl blur-lg ${
                  skill.id === 1
                    ? "bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-teal-500/30"
                    : skill.id === 2
                      ? "bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-rose-500/30"
                      : "bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-lime-500/30"
                }`}
                variants={glowVariants}
                initial="initial"
                animate={!isMobile && hoveredCard === skill.id ? "hover" : "initial"}
              />

              {/* Main Card con background colorido */}
              <div
                className={`relative backdrop-blur-md border border-border/50 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 ${
                  skill.id === 1
                    ? "bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-teal-500/10"
                    : skill.id === 2
                      ? "bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-rose-500/10"
                      : "bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-lime-500/10"
                }`}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-6"
                    variants={iconVariants}
                    initial="initial"
                    animate={hoveredCard === skill.id ? "hover" : "initial"}
                  >
                    {/* Icon Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300" />
                    <div className="relative h-16 w-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                      <skill.icon className="h-8 w-8 text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: hoveredCard === skill.id ? 1 : 0.8 }}
                  >
                    {skill.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-muted-foreground text-sm leading-relaxed flex-grow group-hover:text-foreground/80 transition-colors duration-300"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: hoveredCard === skill.id ? 0.9 : 0.7 }}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Animated Progress Bar */}
                  <motion.div
                    className="w-full mt-6 h-1 bg-muted rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: !isMobile && hoveredCard === skill.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: !isMobile && hoveredCard === skill.id ? "85%" : "0%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.div>
                </div>

                {/* Floating Particles */}
                {!isMobile && hoveredCard === skill.id && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/60 rounded-full"
                        initial={{
                          opacity: 0,
                          x: Math.random() * 200 - 100,
                          y: Math.random() * 200 - 100,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          x: Math.random() * 400 - 200,
                          y: Math.random() * 400 - 200,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default SkillsGrid
