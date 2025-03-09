import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { TextAnimate } from '@/components/magicui/text-animate'
import React from 'react'

const AboutMe = () => {
    return (
        <section id='projects-section'>
            <div className='text-center py-16 relative border-border/50 border-b'>
                <TextAnimate className="text-3xl md:text-5xl font-bold tracking-tighter text-balance">
                    About Me
                </TextAnimate>
                <p className="mt-6 text-balance text-muted-foreground w-[70%] mx-auto">
                    I am a passionate <strong>Systems Engineering student</strong> with hands-on experience in both <strong>backend</strong> and <strong>frontend</strong> development. Ive participated in various projects that allowed me to apply my skills and collaborate with like-minded individuals.
                    Always eager to learn and grow.
                </p>
                <FlickeringGrid
                    className="absolute inset-0 z-0 "
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.1}
                    flickerChance={0.1}
                />
            </div>

        </section>
    )
}

export default AboutMe