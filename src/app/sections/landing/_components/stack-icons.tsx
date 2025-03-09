"use client"

import { motion } from "framer-motion"
import { SiNextdotjs, SiReact, SiTypescript, SiSpringboot, SiTailwindcss, SiMysql} from "@icons-pack/react-simple-icons"
const icons = [
  { icon: <SiReact size={30} />, label: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs size={30} />, label: "Next.js", color: "#000000" },
  { icon: <SiTypescript size={30} />, label: "TypeScript", color: "#3178C6" },
  { icon: <SiSpringboot size={30} />, label: "Spring Boot", color: "#6DB33F" },
  { icon: <SiMysql size={40} />, label: "SQL", color: "#E0234E" },
  { icon: <SiTailwindcss size={30} />, label: "Tailwind", color: "#38BDF8" },
]

const StackIcons = () => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-border/50 border-t border-b">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center  py-5 transition-all
                       hover:bg-opacity-20 hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: `${item.color}20` }}
            initial={{ opacity: 0, y: -50 }} // Aparece desde arriba
            animate={{ opacity: 1, y: 0 }} // Baja suavemente
            transition={{ duration: 0.5, delay: index * 0.1 }} // Cascada
          >
            <motion.div
              className="text-4xl"
              animate={{
                color: ["#a3a3a3", "#ffffff", "#a3a3a3"], // Oscilación entre text-neutral-400 (gray-400) y text-neutral-200 (gray-200)
              }}
              transition={{
                duration: 2, // Duración del ciclo
                repeat: Infinity, // Animación infinita
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.div>
            <span className="mt-2 text-sm font-medium">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default StackIcons
