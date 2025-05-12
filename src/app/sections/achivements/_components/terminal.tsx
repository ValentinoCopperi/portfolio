"use client"

import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal"
import { useState } from "react";

const TerminalAchivements = () => {
    const [isRepeating, setIsRepeating] = useState(false);
    return (
        <Terminal className=" w-full md:w-[80%] md:mx-auto">
            <TypingAnimation key={isRepeating ? 'repeat' : 'initial'}>&gt; display achievements</TypingAnimation>

            <AnimatedSpan key={isRepeating ? 'repeat-1' : 'initial-1'} delay={1500} className="text-green-500 text-2xl">
                <span>✔ Education</span>
            </AnimatedSpan>

            <AnimatedSpan key={isRepeating ? 'repeat-2' : 'initial-2'} delay={2000} className="text-blue-500 text-xl">
                <span>ℹ University Technical Degree in Application Development</span>
            </AnimatedSpan>

            <AnimatedSpan key={isRepeating ? 'repeat-3' : 'initial-3'} delay={2500} className="text-blue-500 text-xl">
                <span>ℹ Currently pursuing Systems Engineering</span>
            </AnimatedSpan>

            <AnimatedSpan key={isRepeating ? 'repeat-4' : 'initial-4'} delay={3000} className="text-green-500 text-2xl">
                <span>✔ Technical Skills</span>
            </AnimatedSpan>

            <AnimatedSpan key={isRepeating ? 'repeat-5' : 'initial-5'} delay={3500} className="text-blue-500 text-xl">
                <span>ℹ Completed courses:</span>
                <span className="pl-2">- Next.js</span>
                <span className="pl-2">- Spring Boot - Java</span>
                <span className="pl-2">- TypeScript </span>
            </AnimatedSpan>

            <AnimatedSpan key={isRepeating ? 'repeat-6' : 'initial-6'} delay={4000} className="text-green-500 text-2xl">
                <span>✔ Language Proficiency</span>
            </AnimatedSpan>

            <AnimatedSpan key={isRepeating ? 'repeat-7' : 'initial-7'} delay={4500} className="text-blue-500 text-xl">
                <span>ℹ First Certificate in English (FCE)</span>
            </AnimatedSpan>

            <TypingAnimation key={isRepeating ? 'repeat-8' : 'initial-8'} delay={5000} className="text-muted-foreground">
                Achievement display completed.
            </TypingAnimation>
            <button 
                onClick={() => setIsRepeating(!isRepeating)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Repeat
            </button>
        </Terminal>
    )
}

export default TerminalAchivements