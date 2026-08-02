"use client";

import { motion } from "framer-motion";
import { services } from "@/data";
import { SectionHeading, fadeUp } from "./Motion";

const NUM = ["01", "02", "03", "04"];

export default function Services() {
  return (
    <section id="services" className="relative flex min-h-screen items-center px-6 py-28 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading eyebrow="What I do" title="Services & Expertise" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, margin: "-60px" }}
              className="glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-crimson-500/40 hover:shadow-[0_20px_50px_-20px_rgba(225,29,72,0.35)]"
            >
              <span className="font-display text-2xl font-bold text-crimson-900 transition-colors duration-300 group-hover:text-crimson-500">
                {NUM[i]}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {s.description}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-crimson-800/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
