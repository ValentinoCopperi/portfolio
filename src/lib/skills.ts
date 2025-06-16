import { Code2, Server, Database } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Skill {
  id: number
  title: string
  description: string
  icon: LucideIcon
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Expertise in building modern, responsive UIs using React,Next.js, Tailwind CSS, and ShadCN. ",
    icon: Code2,
  },
  {
    id: 2,
    title: "Backend & API Development",
    description: "Experience developing secure and scalable APIs with Nodejs & Nestjs and Java & Spring Boot.",
    icon: Server,
  },
  {
    id: 3,
    title: "Database & State Management",
    description: "Experience handling databases like SQL, PostgreSQL, MongoDB",
    icon: Database,
  },
]