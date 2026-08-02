"use client";

import Image from "next/image";
import { portfolio, galleryItems } from "@/data";
import { Reveal, SectionHeading } from "./Motion";

const socials = [
  {
    label: "LinkedIn",
    handle: "/in/tharun-hrithick-sr",
    href: portfolio.contact.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "@thrithick5",
    href: portfolio.contact.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "tharunhrithick5@gmail.com",
    href: `mailto:${portfolio.contact.email}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Connect() {
  return (
    <section id="contact" className="relative px-6 py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Let's connect" title="Connect & Gallery" />

        {/* Wide horizontal social links */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {socials.map((s, i) => (
            <Reveal index={i} key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-crimson-500/40 hover:shadow-[0_20px_50px_-25px_rgba(225,29,72,0.5)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-all duration-300 group-hover:border-crimson-500/50 group-hover:bg-crimson-600/20 group-hover:text-crimson-400">
                  {s.icon}
                </span>
                <span>
                  <span className="block font-display text-base font-semibold text-white">
                    {s.label}
                  </span>
                  <span className="block text-xs text-zinc-500">
                    {s.handle}
                  </span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-auto h-4 w-4 text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-crimson-400"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>

        {/* 3-column gallery */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {galleryItems.map((g, i) => (
            <Reveal index={i} key={g.label}>
              <figure className="group relative h-72 cursor-pointer overflow-hidden rounded-xl">
                <div className="absolute inset-0">
                  <div
                    className="relative h-full w-full grayscale transition-all duration-700 group-hover:scale-[1.06] group-hover:grayscale-0"
                    style={{ background: g.background }}
                  >
                    {g.image && (
                      <Image
                        src={g.image}
                        alt={g.label}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-80 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-sm font-semibold text-white">
                    {g.label}
                  </p>
                  <p className="text-xs text-zinc-400">{g.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
