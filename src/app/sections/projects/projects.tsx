"use client"

import { Project, projects } from '@/lib/projects'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Timeline from './_components/project-functions'
import SideBar from './_components/sidebar'
import Carrousel from './_components/carrousel'

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project>(projects[0])

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 py-6 px-2">
      
      <div className="col-span-1 flex flex-col space-y-2">
        {projects.map((proj,idx) => (
          <SideBar key={idx} project={proj} activeProject={activeProject} setActiveProject={setActiveProject}/>
        ))}
      </div>

      <div className="col-span-1 lg:col-span-2 px-1 overflow-y-auto max-h-[500px]">

        <Carrousel activeProject={activeProject}/>

        <div>
          
          <p className='py-1'>{activeProject.description}</p>

          <div className='flex items-center justify-start space-x-1 py-2 gap-1 flex-wrap'>
            {
              activeProject.technologies.map(tech => (
                <Button key={tech} className='pointer-events-none'>
                  {tech}
                </Button>
              ))
            }
          </div>


          <div className='mt-2'>

            <Timeline functions={activeProject.functions} />

          </div>


        </div>


      </div>
    </div>
  )
}

export default Projects
