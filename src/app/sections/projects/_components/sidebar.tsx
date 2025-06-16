"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Project } from "@/lib/projects"
import { User, Briefcase } from "lucide-react"

interface Props {
  activeTab: "personal" | "professional"
  handleTabChange: (value: string) => void
  currentProjects: Project[]
  activeProject: Project
  setActiveProject: (project: Project) => void
}

const ProjectSidebar = ({ activeTab, handleTabChange, currentProjects, activeProject, setActiveProject }: Props) => {
  return (
    <div className="space-y-4 ">
      {/* Mobile/Sheet Tabs */}
      <div className="lg:hidden p-4">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="professional" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Professional
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Project List */}
      <div className="space-y-2 p-4 lg:p-0">
        <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">
          {activeTab === "personal" ? "Personal" : "Professional"} Projects
        </h2>

        <div className="space-y-2">
          {currentProjects.map((project, idx) => (
            <motion.button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${activeProject.id === project.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "border-border hover:bg-muted/50 hover:border-muted-foreground/20"
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="space-y-2">
                <h3 className="font-medium text-sm leading-tight">{project.title}</h3>
                <p
                  className={`text-xs leading-relaxed line-clamp-2 ${activeProject.id === project.id ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                >
                  {project.short_description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant={activeProject.id === project.id ? "secondary" : "outline"}
                      className="text-xs px-2 py-0 h-5"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant={activeProject.id === project.id ? "secondary" : "outline"} className="text-xs px-2 py-0 h-5">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSidebar
