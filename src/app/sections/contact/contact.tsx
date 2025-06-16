import React from 'react'
import { ContactForm } from './_components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { TextAnimate } from '@/components/magicui/text-animate'

const Contact = () => {
    return (


        <section className="w-full  relative border-t min-h-[600px]">

            <div className="relative z-10 border-b py-20">
                <FlickeringGrid
                    className="absolute inset-0 -z-10 bg-[#060606]"
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.2}
                    flickerChance={0.1}
                />
                <div className="pt-16 pb-8 text-center">
                    <TextAnimate className="text-3xl md:text-5xl font-bold tracking-tighter text-balance">
                        Contact me
                    </TextAnimate>
                    <p className="mt-6 text-balance text-muted-foreground">
                        If you are interested in collaborating on a project, need help with a technical challenge, or just want to discuss programming, feel free to get in touch. Im always excited to connect with like-minded professionals and explore new opportunities.
                    </p>
                    <p className="mt-4 text-balance text-muted-foreground">
                        <strong>Reach out today</strong>—lets build something great together!
                    </p>
                </div>

            </div>
            <div className="max-w-3xl mx-auto py-8 px-2 relative z-10">
                <Card className='bg-black'>
                    <CardHeader>
                        <CardTitle>
                            <h2 className="text-3xl font-bold mb-4">Lets Work Together</h2>
                        </CardTitle>
                        <CardDescription>
                            <p className="text-muted-foreground mb-4">
                                Im currently available for freelance work and full-time positions.
                            </p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
        </section>

    )
}

export default Contact