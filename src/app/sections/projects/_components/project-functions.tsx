"use client"

import React from "react"

interface FunctionItem {
  title: string
  description: string
}

interface TimelineProps {
  functions: FunctionItem[]
}

const TimelineItem: React.FC<FunctionItem> = React.memo(({ title, description }) => (
  <article>
    <div className="flex gap-x-3 relative group rounded-lg">
      <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700 dark:group-hover:after:bg-neutral-600">
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-neutral-800 dark:border-neutral-600 dark:group-hover:border-neutral-600"></div>
        </div>
      </div>

      <div className="grow p-2 pb-2">
        <h3 className="flex gap-x-1.5 font-bold">{title}</h3>
        <div className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs flex-wrap rounded-lg border border-transparent text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400">
          <p>{description}</p>
        </div>
      </div>
    </div>
  </article>
))

TimelineItem.displayName = "TimelineItem"

const Timeline: React.FC<TimelineProps> = ({ functions }) => (
  <div className="border-border/50 border-t mt-2">
    {functions.map((item, idx) => (
      <TimelineItem key={idx} {...item} />
    ))}
  </div>
)

export default Timeline

