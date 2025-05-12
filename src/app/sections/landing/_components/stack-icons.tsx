"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiAmazonwebservices,
  SiNodedotjs
} from "@icons-pack/react-simple-icons"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LayoutGrid, Rows } from "lucide-react"

const icons = [
  { icon: <SiReact size={30} />, label: "React", color: "#61DAFB", description: "Frontend Library" },
  { icon: <SiNextdotjs size={30} />, label: "Next.js", color: "#000000", description: "React Framework" },
  { icon: <SiTypescript size={30} />, label: "TypeScript", color: "#3178C6", description: "Type-safe JavaScript" },
  { icon: <SiSpringboot size={30} />, label: "Spring Boot", color: "#6DB33F", description: "Java Framework" },
  { icon: <SiMysql size={40} />, label: "SQL", color: "#4479A1", description: "Database Language" },
  { icon: <SiAmazonwebservices size={40} />, label: "AWS", color: "#FF9900", description: "Cloud Services" },
  { icon: <SiNodedotjs size={40} />, label: "Node.js", color: "#339933", description: "Node.js" },
]

const StackIcons = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.35,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Tabs defaultValue="grid" className="w-auto" onValueChange={(value) => setViewMode(value as "grid" | "list")}>
          <TabsList className="grid w-auto grid-cols-2">
            <TabsTrigger value="grid" className="flex items-center gap-1">
              <LayoutGrid size={16} />
              <span className="hidden sm:inline">Grid</span>
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-1">
              <Rows size={16} />
              <span className="hidden sm:inline">List</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "grid" ? (
          <motion.div
            key="grid"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-0.5 border-border/50 border rounded-lg overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {icons.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center justify-center py-6 px-2 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: hoveredIndex === index ? `${item.color}30` : `${item.color}10`,
                }}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  backgroundColor: `${item.color}30`,
                }}
              >
                <motion.div
                  className="relative z-10"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: hoveredIndex === index ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                  }}
                >
                  <motion.div
                    style={{ color: item.color }}
                    animate={{
                      filter: [
                        "drop-shadow(0 0 0px rgba(255,255,255,0))",
                        "drop-shadow(0 0 3px rgba(255,255,255,0.5))",
                        "drop-shadow(0 0 0px rgba(255,255,255,0))",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>

                <span className="mt-3 text-sm font-medium">{item.label}</span>

                {/* Decorative elements */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 0.15 : 0,
                    background: `radial-gradient(circle at center, ${item.color}80 0%, transparent 70%)`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            className="space-y-0.5 border-border/50 border rounded-lg overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {icons.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 transition-all duration-300"
                style={{
                  backgroundColor: hoveredIndex === index ? `${item.color}30` : `${item.color}10`,
                }}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  x: 5,
                  backgroundColor: `${item.color}30`,
                }}
              >
                <motion.div
                  style={{ color: item.color }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 0px rgba(255,255,255,0))",
                      "drop-shadow(0 0 3px rgba(255,255,255,0.5))",
                      "drop-shadow(0 0 0px rgba(255,255,255,0))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="font-medium">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>

                <motion.div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default StackIcons
