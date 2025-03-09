import React from 'react'
import { ContactForm } from './_components/contact-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import { TextAnimate } from '@/components/magicui/text-animate'

const Contact = () => {
    return (
        <section id="contact-section" className="bg-card border-t border-border/50">
            <div className='text-center py-12 relative border-border/50 border-b'>
                <TextAnimate className="text-3xl md:text-5xl font-bold tracking-tighter text-balance">
                    Contact me
                </TextAnimate>
                <p className="mt-6 text-balance text-muted-foreground">
                    If you are interested in collaborating on a project, need help with a technical challenge, or just want to discuss programming, feel free to get in touch. Im always excited to connect with like-minded professionals and explore new opportunities.
                </p>
                <p className="mt-4 text-balance text-muted-foreground">
                    <strong>Reach out today</strong>—lets build something great together!
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


            <div className="max-w-3xl mx-auto py-8 px-2">
                <Card>
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