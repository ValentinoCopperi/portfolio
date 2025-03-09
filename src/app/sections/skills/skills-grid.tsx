import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Card, CardContent } from '@/components/ui/card'
import { skills } from '@/lib/skills'
import React from 'react'

const SkillsGrid = () => {
  return (
    <section >
      <div className='text-center py-16 relative border-border/50 border-b border-t'>
        <TextAnimate className="text-3xl md:text-5xl font-bold tracking-tighter text-balance">
                        My Skills
        </TextAnimate>

        <FlickeringGrid
          className="absolute inset-0 z-0 "
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.1}
          flickerChance={0.1}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 py-12 max-w-7xl mx-auto">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="bg-zinc-950 border-zinc-800 hover:border-purple-500/50 transition-colors duration-300"
          >
            <CardContent className="pt-6 px-4 pb-4 flex flex-col items-center text-center h-full">
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <skill.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{skill.title}</h3>
              <p className="text-zinc-400 text-sm mb-4 flex-grow">{skill.description}</p>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default SkillsGrid