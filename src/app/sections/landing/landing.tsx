"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Github, ArrowDown, Code, Briefcase, User } from "lucide-react"
import Animation from "./_components/animation"
import ButtonAnimatedGradient from "@/components/ui/button-animated"
import ButtonBackgroundShine from "@/components/ui/button-animated-shine"
import { AuroraText } from "@/components/magicui/aurora-text"
import ButtonTalk from "./_components/button-talk"
import { AnimatedShinyTextDemo } from "./_components/animated-badge"
import { motion } from "framer-motion"
import { TextAnimate } from "@/components/magicui/text-animate"
import { VideoText } from "@/components/magicui/video-text"

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Delay the animation to sync with the loading animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2600) // 2.6 seconds delay

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const backgroundCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  const navItems = [
    { icon: <Code size={18} />, label: "Projects" },
    { icon: <Briefcase size={18} />, label: "Experience" },
    { icon: <User size={18} />, label: "About" },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={backgroundCircleVariants}
      />

      <motion.div
        className="absolute -bottom-50 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/20 blur-3xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={backgroundCircleVariants}
        transition={{ delay: 0.3 }}
      />

      <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-10 md:px-6 xl:px-20 min-h-[calc(100vh-250px)]">
        <motion.div
          className="flex flex-col space-y-8 max-w-2xl z-10"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="flex items-center gap-3 flex-wrap" variants={itemVariants}>
            <AnimatedShinyTextDemo />
            <ButtonTalk />

            {/* <motion.div className="hidden md:flex items-center gap-2 ml-auto" variants={containerVariants}>
              {navItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Badge
                    variant="outline"
                    className="px-3 py-1.5 cursor-pointer hover:bg-secondary/10 transition-all duration-300 flex items-center gap-1.5"
                  >
                    {item.icon}
                    {item.label}
                  </Badge>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
          <div className="hidden lg:block">
            <div className=" h-[95px] ">
              <VideoText src="/video-9.mp4" fontSize={"80"}>
                FULL STACK
              </VideoText>
            </div>
            <div className=" h-[85px]">
              <VideoText src="/video-9.mp4" fontSize={"80"}>
                DEVELOPER
              </VideoText>
            </div>
          </div>
          <div className="block md:hidden">
            <div className=" h-[95px] ">
              <VideoText src="/video-9.mp4" fontSize={"50"} fontWeight={"bold"}>
                FULL STACK
              </VideoText>
            </div>
            <div className=" h-[85px]">
              <VideoText src="/video-9.mp4" fontSize={"50"}>
                DEVELOPER
              </VideoText>
            </div>
          </div>

          <motion.p className="text-md text-center  lg:text-lg text-white/75" variants={itemVariants}>
            Creating powerful web applications with modern technologies. Specialized in systems engineering and
            developing professional websites with a focus on performance and user experience.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4 justify-center " variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonAnimatedGradient>Projects</ButtonAnimatedGradient>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ButtonBackgroundShine>
                <a
                  href="https://github.com/ValentinoCopperi"
                  className="flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </ButtonBackgroundShine>
            </motion.div>
          </motion.div>

     
        </motion.div>

        <motion.div
          className="hidden lg:block relative w-full max-w-xl aspect-square"
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <div className="w-full h-full">
            <Animation />
          </div>

          {/* Decorative elements around the animation */}
          <motion.div
            className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-xl"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-primary/20 rounded-full -z-10"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          />
        </motion.div>
      </section>
    </div>
  )
}

export default Landing
