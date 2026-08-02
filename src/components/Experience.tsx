"use client";

import { workExperience, leadership } from "@/data";
import { Reveal, SectionHeading } from "./Motion";

function TimelineColumn({
  title,
  items,
  index,
}: {
  title: string;
  items: typeof workExperience;
  index: number;
}) {
  return (
    <Reveal index={index} className="glass rounded-3xl p-8">
      <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      <div className="relative mt-8 space-y-10 pl-6 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-crimson-600 before:via-crimson-800/50 before:to-transparent">
        {items.map((item) => (
          <div key={item.role} className="relative">
            <span className="animate-pulse-dot absolute -left-6 top-1.5 h-[9px] w-[9px] rounded-full bg-crimson-500" />
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-crimson-400">
              {item.period}
            </p>
            <h4 className="mt-1.5 font-display text-lg font-semibold text-white">
              {item.role}
            </h4>
            <p className="mt-0.5 text-xs font-semibold text-crimson-500/90">
              {item.company}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Journey" title="Experience & Leadership" />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <TimelineColumn title="Work" items={workExperience} index={0} />
          <TimelineColumn title="Leadership" items={leadership} index={1} />
        </div>
      </div>
    </section>
  );
}
