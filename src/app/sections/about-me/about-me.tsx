import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { TextAnimate } from '@/components/magicui/text-animate'
import React from 'react'

const AboutMe = () => {
    return (
        <section id='projects-section'>
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
                            About me
                        </TextAnimate>
                        <p className="mt-6 text-balance text-muted-foreground">
                            I am a passionate <strong>Software Developer</strong> with knowledge in both <strong>backend</strong> and <strong>frontend</strong> development, as well as experience with <strong>AWS</strong>. I have developed software as a <strong>freelancer</strong> and I am currently studying to become a <strong>Systems Engineer</strong>. Always eager to learn and grow.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutMe