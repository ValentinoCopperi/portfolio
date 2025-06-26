"use client"

import { FlickeringGrid } from "@/components/magicui/flickering-grid"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Building2, Code, Laptop, Users } from "lucide-react"


import { useEffect, useRef, useState } from "react"
const experiences = [
    {
        id: 1,
        title: "Software Engineer (TypeScript)",
        company: "Quantia",
        location: "Madrid, Spain",
        date: "June 2025 - Present",
        description:
            "Development of full stack applications focused on user experience, scalability, and maintainability.",
        achievements: [
            "Frontend built using React, TailwindCSS, and advanced animations to enhance UX",
            "Backend implemented with NestJS using Prisma and TypeORM for efficient management of relational databases",
            "Database modeling and management with PostgreSQL and MongoDB according to system requirements",
            "Azure DevOps for CI/CD pipelines",
            "Implemented scalable architectures with modern testing and integration practices",
        ],
        icon: <Code className="w-6 h-6" />,
        iconBg: "bg-blue-500",
        backgroundPattern:
            "bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10",
        decorativePattern:
            "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)] before:rounded-xl",
    },
    {
        id: 2,
        title: "Freelance Full Stack Developer",
        company: "Self-employed",
        location: "Remote",
        date: "June 2024 - Present",
        description:
            "Design and development of complete web applications, prioritizing performance, security, and usability.",
        achievements: [
            "Developed RESTful APIs using Java and Spring Boot with secure authentication via JWT and OAuth2",
            "Designed and implemented relational and non-relational databases (PostgreSQL and MongoDB), optimizing integrity and scalability",
            "Built modern interfaces with React and Next.js, focusing on accessibility and user experience",
            "Implemented key features such as: subscription system with MercadoPago, real-time chat, image uploading to S3, and custom analytics dashboards",
            "Applied Docker in local and production environments to streamline deployment and testing",
        ],
        icon: <Laptop className="w-6 h-6" />,
        iconBg: "bg-green-500",
        backgroundPattern:
            "bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/20 dark:to-emerald-950/10",
        decorativePattern:
            "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1),transparent_50%)] before:rounded-xl",
    },
];


export function Experience() {
    const [visibleItems, setVisibleItems] = useState<number[]>([])
    const [scrollProgress, setScrollProgress] = useState(0)
    const observerRef = useRef<IntersectionObserver | null>(null)
    const sectionRef = useRef<HTMLElement>(null)

    // Enhanced scroll progress tracking
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect()
                const sectionHeight = rect.height
                const windowHeight = window.innerHeight
                const scrolled = Math.max(0, windowHeight - rect.top)
                const progress = Math.min(scrolled / (sectionHeight + windowHeight), 1)
                setScrollProgress(progress)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Enhanced intersection observer with staggered animations
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
                        // Staggered animation delay
                        setTimeout(() => {
                            setVisibleItems((prev) => [...new Set([...prev, index])])
                        }, index * 150) // 150ms delay between each item
                    }
                })
            },
            { threshold: 0.1, rootMargin: "50px" },
        )

        return () => observerRef.current?.disconnect()
    }, [])

    useEffect(() => {
        const elements = document.querySelectorAll("[data-index]")
        elements.forEach((el) => observerRef.current?.observe(el))

        return () => {
            elements.forEach((el) => observerRef.current?.unobserve(el))
        }
    }, [])

    return (
        <>

            <div className="pt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef as React.RefObject<HTMLDivElement>}>
                <div className="relative max-w-none">
                    {/* Enhanced Timeline line with scroll progress */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-muted to-muted/20 sm:left-8 lg:left-1/2 lg:-translate-x-0.5">
                        <div
                            className="w-full bg-gradient-to-b from-primary to-primary/60 transition-all duration-300 ease-out"
                            style={{ height: `${scrollProgress * 100}%` }}
                        />
                    </div>

                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            data-index={index}
                            className={`relative flex items-start mb-16 transition-all duration-1000 ease-out ${visibleItems.includes(index)
                                    ? "opacity-100 translate-y-0 translate-x-0"
                                    : `opacity-0 ${index % 2 === 0 ? "translate-x-8" : "-translate-x-8"} translate-y-12`
                                } ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                            style={{
                                transitionDelay: visibleItems.includes(index) ? `${index * 100}ms` : "0ms",
                            }}
                        >
                            {/* Enhanced Timeline dot with glow effect */}
                            <div
                                className={`absolute left-4 w-6 h-6 rounded-full border-4 border-background z-20 transition-all duration-500 sm:left-6 lg:left-1/2 lg:-translate-x-1/2 ${experience.iconBg} ${visibleItems.includes(index) ? "animate-pulse shadow-lg scale-110" : "scale-75 opacity-50"
                                    }`}
                                style={{
                                    boxShadow: visibleItems.includes(index)
                                        ? `0 0 20px ${experience.iconBg.includes("blue")
                                            ? "#3b82f6"
                                            : experience.iconBg.includes("green")
                                                ? "#22c55e"
                                                : experience.iconBg.includes("purple")
                                                    ? "#9333ea"
                                                    : "#f97316"
                                        }40`
                                        : "none",
                                }}
                            >
                                {/* Ripple effect */}
                                <div
                                    className={`absolute inset-0 rounded-full ${experience.iconBg} animate-ping ${visibleItems.includes(index) ? "opacity-20" : "opacity-0"
                                        }`}
                                    style={{ animationDuration: "2s" }}
                                />
                            </div>

                            {/* Enhanced Content with custom backgrounds */}
                            <div className={`ml-12 sm:ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                                <div
                                    className={`relative overflow-hidden border rounded-xl p-6 sm:p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 group ${experience.backgroundPattern} ${experience.decorativePattern}`}
                                    style={{
                                        transform: visibleItems.includes(index)
                                            ? "translateY(0) rotateX(0)"
                                            : "translateY(20px) rotateX(5deg)",
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* Animated background overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                                    {/* Floating particles effect */}
                                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`absolute w-1 h-1 ${experience.iconBg} rounded-full opacity-20 animate-float`}
                                                style={{
                                                    left: `${20 + i * 30}%`,
                                                    top: `${10 + i * 20}%`,
                                                    animationDelay: `${i * 0.5}s`,
                                                    animationDuration: `${3 + i}s`,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Content with enhanced animations */}
                                    <div className="relative z-10">
                                        {/* Enhanced Icon with multiple hover effects */}
                                        <div
                                            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-white mb-6 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 ${experience.iconBg}`}
                                            style={{
                                                transform: visibleItems.includes(index)
                                                    ? "translateY(0) rotateY(0)"
                                                    : "translateY(-10px) rotateY(15deg)",
                                                transitionDelay: `${index * 100 + 200}ms`,
                                            }}
                                        >
                                            {experience.icon}
                                            {/* Icon glow effect */}
                                            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>

                                        {/* Enhanced Date badge */}
                                        <div
                                            className={`inline-block px-4 py-2 bg-primary/10 text-primary text-sm rounded-full mb-4 transition-all duration-500 hover:bg-primary/20 hover:scale-105 ${visibleItems.includes(index) ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                                                }`}
                                            style={{ transitionDelay: `${index * 100 + 300}ms` }}
                                        >
                                            {experience.date}
                                        </div>

                                        {/* Enhanced Title with typing effect simulation */}
                                        <h3
                                            className={`text-xl sm:text-2xl font-bold mb-2 hover:text-primary transition-all duration-300 ${visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                                                }`}
                                            style={{ transitionDelay: `${index * 100 + 400}ms` }}
                                        >
                                            {experience.title}
                                        </h3>

                                        <p
                                            className={`text-lg text-muted-foreground mb-2 font-medium transition-all duration-500 ${visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                                                }`}
                                            style={{ transitionDelay: `${index * 100 + 500}ms` }}
                                        >
                                            {experience.company}
                                        </p>

                                        {/* Enhanced Location */}
                                        <p
                                            className={`text-sm text-muted-foreground mb-4 flex items-center gap-2 transition-all duration-500 ${visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                                                }`}
                                            style={{ transitionDelay: `${index * 100 + 600}ms` }}
                                        >
                                            <span className={`w-2 h-2 ${experience.iconBg} rounded-full animate-pulse`}></span>
                                            {experience.location}
                                        </p>

                                        {/* Enhanced Description */}
                                        <p
                                            className={`text-sm leading-relaxed mb-6 text-muted-foreground transition-all duration-500 ${visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                                                }`}
                                            style={{ transitionDelay: `${index * 100 + 700}ms` }}
                                        >
                                            {experience.description}
                                        </p>

                                        {/* Enhanced Achievements with staggered animation */}
                                        <div
                                            className={`space-y-3 transition-all duration-500 ${visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                                }`}
                                            style={{ transitionDelay: `${index * 100 + 800}ms` }}
                                        >
                                            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <span className={`w-1 h-4 ${experience.iconBg} rounded-full`}></span>
                                                Key Achievements:
                                            </h4>
                                            <ul className="space-y-3">
                                                {experience.achievements.map((achievement, achievementIndex) => (
                                                    <li
                                                        key={achievementIndex}
                                                        className={`flex items-start gap-3 text-sm leading-relaxed hover:text-foreground transition-all duration-300 hover:translate-x-1 ${visibleItems.includes(index) ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                                                            }`}
                                                        style={{
                                                            transitionDelay: `${index * 100 + 900 + achievementIndex * 100}ms`,
                                                        }}
                                                    >
                                                        <span
                                                            className={`w-1.5 h-1.5 ${experience.iconBg} rounded-full mt-2 flex-shrink-0 transition-all duration-300 hover:scale-150`}
                                                        ></span>
                                                        <span className="hover:font-medium transition-all duration-200">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </>
    )
}
