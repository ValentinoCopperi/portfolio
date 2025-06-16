"use client"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface Function {
  title: string
  description: string
}

interface Props {
  functions: Function[]
}

const Timeline = ({ functions }: Props) => {
  return (
    <div className="space-y-3">
      {functions.map((func, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3 group"
        >
          <div className="flex-shrink-0 mt-0.5">
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">{func.title}</p>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{func.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Timeline
