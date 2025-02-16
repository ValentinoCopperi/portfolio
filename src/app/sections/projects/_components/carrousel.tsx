import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { DialogHeader } from '@/components/ui/dialog'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Project } from '@/lib/projects'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'

interface Props {
    activeProject : Project,
}

const Carrousel = ({activeProject}:Props) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <div className='flex items-end space-x-4 py-2'>
                    <Link href={activeProject.links.demo} target='_blank'>
                        <h1 className='font-bold text-2xl'>{activeProject.title}</h1>
                    </Link>
                    <Link
                        href={activeProject.links.demo}
                        target='_blank'
                        className='underline font-light'
                    >
                       <Button>
                            <Globe/>
                            Website
                       </Button>
                    </Link>
                </div>
                <Carousel className="relative">
                    <CarouselContent>
                        {activeProject.images.map((img, index) => (
                            <CarouselItem key={index}>
                                <Dialog>
                                    <DialogTrigger>
                                        <motion.div
                                            className="relative "
                                        >
                                            <Image
                                                src={`/projects/${img}`}
                                                alt={`Project image ${index + 1}`}
                                                width={1899}
                                                height={900}
                                                className="rounded-lg border border-border"
                                            />
                                        </motion.div>
                                    </DialogTrigger>
                                    <DialogContent className="w-full md:max-w-[70vw] max-h-[90vh] ">
                                        <DialogHeader>
                                            <DialogTitle>
                                                <Link href={activeProject.links.demo} target='_blank'>
                                                    <h1 className='font-bold text-2xl'>{activeProject.title}</h1>
                                                </Link>
                                            </DialogTitle>
                                            <DialogDescription>
                                                <Link
                                                    href={activeProject.links.demo}
                                                    target='_blank'
                                                    className='underline font-light'
                                                >
                                                    Visit website here
                                                </Link>
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={`/projects/${img}`}
                                                alt={`Project image ${index + 1}`}
                                                layout="responsive"
                                                width={1899}
                                                height={900}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute p-5 left-2 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-2 p-5 top-1/2 -translate-y-1/2 z-10" />
                </Carousel>
            </motion.div>
        </AnimatePresence>
    )
}

export default Carrousel