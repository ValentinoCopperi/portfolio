import { motion } from 'framer-motion'
import React from 'react'
import { Project } from '@/lib/projects';


interface Props {
    project: Project,
    activeProject : Project,
    setActiveProject: React.Dispatch<React.SetStateAction<Project>>
}

const SideBar = ({ project,activeProject,setActiveProject }: Props) => {
    return (
            <motion.button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`flex-shrink-0 w-full text-left p-4 rounded border ${activeProject.id === project.id ? 'bg-primary text-primary-foreground' : 'border-border hover:bg-muted/50'
                    }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <h3 className="font-medium tracking-tight">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.short_description}</p>
            </motion.button>
    )
}

export default SideBar