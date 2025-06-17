"use client"

import { Badge } from "@/components/ui/badge"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import { Globe, ExternalLink, Github } from "lucide-react"

interface Props {
  activeProject: Project
}

const Carrousel = ({ activeProject }: Props) => {

  const repository_link = activeProject.links.repository;

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold group-hover:text-primary transition-colors">
              {activeProject.title}
            </h1>
            <p className="text-muted-foreground text-md">{activeProject.short_description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button asChild className="flex-1 sm:flex-none">
              <Link href={activeProject.links.demo ?? "/"} target="_blank">
                <Globe className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            {activeProject.links.repository && (
              <Button asChild variant="outline" className="flex-1 sm:flex-none">
                <Link href={activeProject.links.repository} target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {activeProject.images.map((img, index) => (
              <CarouselItem key={index} className="max-h-[440px]">
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="relative cursor-pointer group"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted shadow-lg">
                        <Image
                          src={`/projects/${img}`}
                          alt={`${activeProject.title} - Screenshot ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Badge variant="secondary" className="text-xs">
                            Click to expand
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-[90vw] md:max-w-[70vw] max-h-[90vh] p-0 overflow-hidden">
                    <DialogHeader className="p-4 md:p-6 pb-2">
                      <DialogTitle className="flex items-center justify-between">
                        <span>{activeProject.title}</span>
                        {
                          repository_link && (
                            <Link href={repository_link} target="_blank">
                              <Button size="sm" variant="ghost">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </Link>
                          )
                        }
                      </DialogTitle>
                      <DialogDescription>
                        Screenshot {index + 1} of {activeProject.images.length}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full px-4 md:px-6 pb-4 md:pb-6 flex items-center justify-center">
                      <div className="relative w-full max-w-full max-h-[calc(90vh-120px)] overflow-hidden rounded-lg">
                        <Image
                          src={`/projects/${img}`}
                          alt={`${activeProject.title} - Screenshot ${index + 1}`}
                          width={1200}
                          height={800}
                          className="object-contain w-full h-auto max-h-[calc(90vh-120px)]"
                          sizes="(max-width: 768px) 95vw, 80vw"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm" />
          <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm" />
        </Carousel>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {activeProject.images.length} image{activeProject.images.length !== 1 ? "s" : ""}
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Carrousel
