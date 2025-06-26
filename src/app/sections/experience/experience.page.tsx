

import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { TextAnimate } from '@/components/magicui/text-animate'
import React from 'react'
import { Experience } from './experience'

const ExperiencePage = () => {
    return (
        <section className="w-full relative border-t min-h-[600px] overflow-hidden">
            <div className="relative z-10 py-20 border-b">
                <div className="pt-16 pb-8">
                    <FlickeringGrid
                        className="absolute inset-0 -z-10 bg-[#060606]"
                        squareSize={4}
                        gridGap={6}
                        color="#6B7280"
                        maxOpacity={0.2}
                        flickerChance={0.1}
                    />
                    <div className="text-center relative w-[70%] mx-auto">
                        <TextAnimate className="text-3xl md:text-5xl font-bold tracking-tighter text-balance">
                            Experience
                        </TextAnimate>
                        <p className="mt-6 text-balance text-muted-foreground">Professional Experience</p>
                    </div>
                </div>

            </div>
            <div className="pt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <Experience />

            </div>
        </section>
    )
}

export default ExperiencePage