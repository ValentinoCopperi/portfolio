"use client"

import { type Project, projects } from "@/lib/projects"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Timeline from "./_components/project-functions"
import Carrousel from "./_components/carrousel"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Briefcase, User, FolderOpen, Github } from "lucide-react"
import ProjectSidebar from "./_components/sidebar"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import ButtonBackgroundShine from "@/components/ui/button-animated-shine"

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project>(projects[0])
  const [activeTab, setActiveTab] = useState<"personal" | "professional">("professional")

  const personalProjects = projects.filter((project) => project.projectType === "personal")
  const professionalProjects = projects.filter((project) => project.projectType === "professional")

  const currentProjects = activeTab === "personal" ? personalProjects : professionalProjects

  const handleTabChange = (value: string) => {
    const newTab = value as "personal" | "professional"
    setActiveTab(newTab)
    const newProjects = newTab === "personal" ? personalProjects : professionalProjects
    if (newProjects.length > 0) {
      setActiveProject(newProjects[0])
    }
  }

  return (
    <div className="">
      {/* Header */}
      <div className="border-b  backdrop-blur   top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <FolderOpen className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-bold">Projects</h1>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {currentProjects.length} project{currentProjects.length !== 1 ? "s" : ""}
                </Badge>
              </div>
              {/* Desktop Tabs */}
              <div className="hidden lg:block">
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="professional" className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Professional
                    </TabsTrigger>
                    <TabsTrigger value="personal" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Personal
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <div className="p-4 border-b">
                    <h2 className="font-semibold text-lg">Select Project</h2>
                  </div>
                  <ProjectSidebar
                    activeTab={activeTab}
                    handleTabChange={handleTabChange}
                    currentProjects={currentProjects}
                    activeProject={activeProject}
                    setActiveProject={setActiveProject}
                  />
                </SheetContent>
              </Sheet>
            </div>


          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <ProjectSidebar
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                currentProjects={currentProjects}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 lg:border-l">
            <div className="max-h-[700px] overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 p-4"
                >
                  {/* Mobile Tab Selector */}
                  <div className="lg:hidden">
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

                  <Carrousel activeProject={activeProject} />

                  <div className="space-y-6">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground leading-relaxed text-base">{activeProject.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech) => (
                          <Badge key={tech} className="text-sm px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                        Key Features
                      </h3>
                      <Timeline functions={activeProject.functions} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-3xl py-4 border-t">
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
      </div>
    </div>
  )
}

export default Projects
