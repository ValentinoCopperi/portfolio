import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal"


const TerminalAchivements = () => {
    return (
        <Terminal className="w-[80%] mx-auto">
            <TypingAnimation>&gt; display achievements</TypingAnimation>

            <AnimatedSpan delay={1500} className="text-green-500">
                <span>✔ Education</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-blue-500">
                <span>ℹ University Technical Degree in Application Development</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2500} className="text-blue-500">
                <span>ℹ Currently pursuing Systems Engineering</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ Technical Skills</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-blue-500">
                <span>ℹ Completed courses:</span>
                <span className="pl-2">- Next.js</span>
                <span className="pl-2">- NestJS</span>
                <span className="pl-2">- TypeScript</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4000} className="text-green-500">
                <span>✔ Language Proficiency</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4500} className="text-blue-500">
                <span>ℹ First Certificate in English (FCE)</span>
            </AnimatedSpan>

            <TypingAnimation delay={5000} className="text-muted-foreground">
                Achievement display completed.
            </TypingAnimation>

            <TypingAnimation delay={5500} className="text-muted-foreground">
                Impressive qualifications! Keep up the great work.
            </TypingAnimation>
        </Terminal>
    )
}

export default TerminalAchivements