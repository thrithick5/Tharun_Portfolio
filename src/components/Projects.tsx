"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";
import { SectionHeading, fadeUp } from "./Motion";
import DashboardMock from "./DashboardMock";

type Project = (typeof projects)[number];

const cardBase =
  "group relative flex overflow-hidden rounded-3xl border border-white/5 bg-black/50 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson-500/35 hover:shadow-[0_30px_70px_-30px_rgba(225,29,72,0.4)] sm:p-7";

function Glow({ accent, className = "" }: { accent: string; className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-55 ${className}`}
      style={{ background: `radial-gradient(ellipse, ${accent}, transparent 70%)` }}
    />
  );
}

function GhostNumber({ number }: { number: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute right-5 bottom-3 select-none font-display text-[5.5rem] leading-none font-bold text-transparent [-webkit-text-stroke:1.5px_rgba(225,29,72,0.3)]"
    >
      {number}
    </span>
  );
}

function Arrow() {
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-300 group-hover:border-crimson-500/50 group-hover:bg-crimson-600/20 group-hover:text-crimson-400">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 -translate-x-px transition-transform duration-300 group-hover:translate-x-0.5"
      >
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>
    </span>
  );
}

/* 01 — Tall featured card (left column, spans two rows) */
function FeaturedCard({ p }: { p: Project }) {
  const isLink = !!p.link;
  const content = (
    <>
      <Glow accent={p.accent} className="-top-20 -left-16 h-64 w-64" />
      <GhostNumber number={p.number} />

      <div className="relative">
        <DashboardMock accent={p.accent} />
      </div>

      <div className="relative mt-6 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-crimson-400">
            {p.title}
          </h3>
          <Arrow />
        </div>
        <p className="mt-2.5 text-sm font-medium tracking-wide text-zinc-500">
          {p.stack}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {p.description}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-6">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-crimson-500/80">
            Flagship
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-crimson-800/60 to-transparent" />
        </div>
      </div>
    </>
  );

  if (isLink) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="contents"
      >
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className={`${cardBase} flex-col lg:row-span-2 lg:col-span-1 cursor-pointer`}
        >
          {content}
        </motion.article>
      </a>
    );
  }

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`${cardBase} flex-col lg:row-span-2 lg:col-span-1`}
    >
      {content}
    </motion.article>
  );
}

/* 02 & 03 — Horizontal split cards, alternating mock side */
function SplitCard({ p, reverse }: { p: Project; reverse?: boolean }) {
  const isLink = !!p.link;
  const content = (
    <>
      <Glow accent={p.accent} className="top-1/2 -left-10 h-56 w-56 -translate-y-1/2" />

      <div className="relative shrink-0 lg:w-1/2">
        <DashboardMock accent={p.accent} compact />
      </div>

      <div className="relative flex-1 lg:p-1">
        <span className="font-display text-sm font-bold text-crimson-500">
          {p.number}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-crimson-400">
          {p.title}
        </h3>
        <p className="mt-2 text-sm font-medium tracking-wide text-zinc-500">
          {p.stack}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {p.description}
        </p>
        <div className="mt-5">
          <Arrow />
        </div>
      </div>
    </>
  );

  if (isLink) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="contents"
      >
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className={`${cardBase} flex-col lg:col-span-2 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:items-center cursor-pointer`}
        >
          {content}
        </motion.article>
      </a>
    );
  }

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`${cardBase} flex-col lg:col-span-2 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-6 lg:items-center`}
    >
      {content}
    </motion.article>
  );
}

/* 04 — Full-width wide card */
function WideCard({ p }: { p: Project }) {
  const isLink = !!p.link;
  const content = (
    <>
      <Glow accent={p.accent} className="-bottom-24 left-1/3 h-72 w-72" />

      <div className="relative shrink-0 lg:w-2/5">
        <DashboardMock accent={p.accent} />
      </div>

      <div className="relative mt-6 flex-1 lg:mt-0">
        <span className="font-display text-lg font-bold text-crimson-500">
          {p.number}
        </span>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-crimson-400 sm:text-3xl">
          {p.title}
        </h3>
        <p className="mt-2.5 text-sm font-medium tracking-wide text-zinc-500">
          {p.stack}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
          {p.description}
        </p>
        <div className="mt-6 flex items-center gap-6">
          <Arrow />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-zinc-500 transition-colors group-hover:text-crimson-400">
            Full case study
          </span>
        </div>
      </div>
    </>
  );

  if (isLink) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="contents"
      >
        <motion.article
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className={`${cardBase} flex-col lg:col-span-3 lg:flex-row lg:items-center lg:gap-10 cursor-pointer`}
        >
          {content}
        </motion.article>
      </a>
    );
  }

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`${cardBase} flex-col lg:col-span-3 lg:flex-row lg:items-center lg:gap-10`}
    >
      {content}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Selected work" title="Featured Projects" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:auto-rows-fr">
          {projects.map((p, i) => {
            if (i === 0) return <FeaturedCard key={p.number} p={p} />;
            if (i >= 3) return <WideCard key={p.number} p={p} />;
            return <SplitCard key={p.number} p={p} reverse={i === 2} />;
          })}
        </div>
      </div>
    </section>
  );
}
