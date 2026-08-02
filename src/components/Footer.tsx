"use client";

import { portfolio } from "@/data";

const dockLinks = [
  {
    label: "LinkedIn",
    href: portfolio.contact.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: portfolio.contact.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${portfolio.contact.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: `tel:${portfolio.contact.phone}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 pb-10 pt-16 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        {/* macOS-style dock */}
        <div className="glass-strong flex items-end gap-3 rounded-[26px] px-5 py-3.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)]">
          {dockLinks.map((d) => (
            <a
              key={d.label}
              href={d.href}
              target={d.href.startsWith("http") ? "_blank" : undefined}
              rel={d.href.startsWith("http") ? "noreferrer" : undefined}
              title={d.label}
              className="dock-item group"
            >
              <span className="dock-icon flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-zinc-300 transition-colors duration-300 hover:border-crimson-500/50 hover:bg-crimson-600/20 hover:text-crimson-400">
                {d.icon}
              </span>
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-black/90 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {d.label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs tracking-wide text-zinc-500">
          &copy; {new Date().getFullYear()} {portfolio.name}. Crafted with React,
          Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
