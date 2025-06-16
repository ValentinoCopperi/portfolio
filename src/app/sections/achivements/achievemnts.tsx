import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import TerminalAchivements from "./_components/terminal";
import { TextAnimate } from "@/components/magicui/text-animate";

export function Achievements() {
    return (
        <section className="w-full relative border-t min-h-[600px]">

            <div className="relative z-10 py-20 border-b">
                <div className="pt-16 pb-8">
                    <FlickeringGrid
                        className="absolute inset-0 -z-10 bg-[#060606]"
                        squareSize={4}
                        gridGap={6}
                        color="#6B7280"
                        maxOpacity={0.2}
                        flickerChance={0.1}
                    />
                    <div className='text-center relative'>
                        <TextAnimate className="text-3xl md:text-5xl font-bold tracking-tighter text-balance">
                            Achievements
                        </TextAnimate>
                        <p className="mt-6 text-balance text-muted-foreground">
                            Throughout my journey as a developer, Ive had the opportunity to complete numerous projects, acquire valuable skills, and contribute to innovative solutions. Here are some key highlights of my career:
                        </p>
                    </div>
                </div>

            </div>
                <div className="py-6 text-wrap overflow-y-auto max-w-[300px] mx-auto md:max-w-[100%] ">
                    <TerminalAchivements />
                </div>
        </section>
    );
}
