import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import TerminalAchivements from "./_components/terminal";


export function Achievements() {
    return (
        <div>

            <div className='text-center py-16 relative border-border/50 border-b border-t'>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-balance">Achievements</h2>
                <p className="mt-6 text-balance text-muted-foreground">
                    Throughout my journey as a developer, Ive had the opportunity to complete numerous projects, acquire valuable skills, and contribute to innovative solutions. Here are some key highlights of my career:
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

            <div className="py-6">
                <TerminalAchivements />
            </div>


        </div>
    );
}
