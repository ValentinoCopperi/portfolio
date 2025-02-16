import { Code2, Server, Database } from 'lucide-react'

interface Skill {
  id: number
  title: string
  description: string
  icon: any
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Expertise in building modern, responsive UIs using Next.js, Tailwind CSS, and ShadCN. Implementing dynamic themes, optimized interactions, and seamless user experiences.",
    icon: Code2,
  },
  {
    id: 2,
    title: "Backend & API Development",
    description: "Experience developing secure and scalable APIs with NestJS Framework and Java & Spring Boot. Integration of databases like PostgreSQL, MongoDB, and Convex",
    icon: Server,
  },
  {
    id: 3,
    title: "Database & State Management",
    description: "Experience handling databases like SQL, PostgreSQL, MongoDB. Managing real-time data synchronization and optimizing queries for better performance and scalability.",
    icon: Database,
  },
]