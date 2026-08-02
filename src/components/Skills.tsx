"use client";

import { skills } from "@/data";
import { Reveal, SectionHeading } from "./Motion";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Arsenal" title="Skills & Technologies" />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              index={i}
              className="glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-crimson-500/35"
            >
              <h3 className="font-display text-base font-semibold uppercase tracking-wider text-crimson-400">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-crimson-500/50 hover:bg-crimson-600/15 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
