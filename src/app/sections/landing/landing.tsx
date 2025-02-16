
import { Badge } from '@/components/ui/badge'
import { Github, Sparkles } from 'lucide-react'
import React from 'react'
import Animation from './_components/animation'
import ButtonAnimatedGradient from '@/components/ui/button-animated'
import ButtonBackgroundShine from '@/components/ui/button-animated-shine'
import { AuroraText } from '@/components/magicui/aurora-text'
import { TextAnimate } from '@/components/magicui/text-animate'
import ButtonTalk from './_components/button-talk'


const Landing = () => {
    return (
        <div>

            <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-20 md:px-6 xl:px-20 gap-10">
                <div className="flex flex-col space-y-6 max-w-2xl">
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-secondary/20">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Available for work
                        </Badge>
                        <ButtonTalk />
                    </div>

                    
                    <AuroraText className="text-4xl lg:text-7xl font-bold">
                        <TextAnimate animation="blurInUp" by="character" once>
                            Full Stack
                        </TextAnimate>
                    </AuroraText>

                    <AuroraText className="text-4xl lg:text-7xl font-bold">
                        <TextAnimate animation="blurInUp" by="character" once>
                            Developer
                        </TextAnimate>
                    </AuroraText>



                    <p className="text-md lg:text-lg text-muted-foreground">
                        Creating powerful web applications with modern technologies. Specialized in systems engineering and developing professional websites.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <ButtonAnimatedGradient>
                            Projects
                        </ButtonAnimatedGradient>
                        <ButtonBackgroundShine>
                            <a href="https://github.com/ValentinoCopperi" className='flex items-center' target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-5 w-5" />
                                GitHub
                            </a>
                        </ButtonBackgroundShine>
                    </div>
                </div>

                <div className="hidden lg:block relative w-full max-w-xl aspect-square">
                    <div className="w-full h-full">
                        <Animation />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Landing