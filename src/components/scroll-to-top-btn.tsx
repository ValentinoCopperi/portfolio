"use client"

import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTopBtn = () => {
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (

        <AnimatePresence>
            {isScrolling && (
                <motion.div
                    className="absolute -bottom-10 left-[45%] transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <Badge
                        onClick={scrollToTop}
                        className="cursor-pointer hover:bg-primary/90 transition-colors flex items-center gap-1"
                    >
                        <ChevronUp className="w-4 h-4" />
                        <span>Go to top</span>
                    </Badge>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ScrollToTopBtn