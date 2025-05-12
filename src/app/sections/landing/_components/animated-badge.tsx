import { ArrowRightIcon } from "@radix-ui/react-icons";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex h-5 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-black/40 text-base text-white transition-all ease-in  ",
        )}
      >
        <h1 className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Available for work</span>
        </h1>
      </div>
    </div>
  );
}
