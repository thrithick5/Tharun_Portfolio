"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data";
import IdBadge from "./IdBadge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
        {/* Left — typography */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-sm font-medium tracking-[0.3em] text-crimson-400 uppercase"
          >
            {portfolio.headline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            {portfolio.name.split(" ")[0]}
            <br />
            <span className="text-gradient-crimson">
              {portfolio.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col items-start gap-6"
          >
            <p className="text-sm font-semibold uppercase tracking-mega text-zinc-300 sm:text-base">
              Full-Stack Developer <span className="text-crimson-500">&amp;</span>{" "}
              AI Enthusiast
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="glow-crimson rounded-full bg-crimson-600 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-500"
              >
                Get in Touch
              </a>
              <a
                href="/Resume_pdf.pdf"
                download="Tharun_Hrithick_SR_Resume.pdf"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson-500 hover:bg-crimson-600/20"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right — floating ID badge */}
        <div className="animate-float-slow">
          <IdBadge />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-crimson-400"
        >
          <span>Scroll</span>
          <svg
            className="animate-scroll-hint"
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <rect x="1.5" y="1.5" width="11" height="17" rx="5.5" />
            <circle cx="7" cy="6" r="1.6" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
