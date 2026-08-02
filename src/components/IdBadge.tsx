"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { portfolio } from "@/data";

export default function IdBadge() {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 20 });

  const shadowX = useTransform(smoothRotateY, [-14, 14], ["12px", "-12px"]);
  const shadowY = useTransform(smoothRotateX, [-14, 14], ["18px", "10px"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 28);
    rotateX.set(py * -28);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
      className="relative hidden lg:block"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
          boxShadow: useTransform(
            [shadowX, shadowY],
            ([x, y]) => `${x} ${y} 40px -12px rgba(0,0,0,0.7)`
          ),
        }}
        className="relative h-[440px] w-[320px]"
      >
        {/* Glow */}
        <div className="absolute -inset-6 rounded-[32px] bg-crimson-800/30 blur-3xl" />

        {/* Card body */}
        <div className="glass relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl p-6">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-crimson-950 via-crimson-800 to-crimson-950" />

          {/* Holographic sheen */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_45%)]" />

          {/* Brand row */}
          <div className="flex items-center justify-between">
            <span className="font-display text-[0.62rem] font-bold uppercase tracking-[0.28em] text-crimson-400">
              Tharun Hrithick
            </span>
            <div className="h-6 w-9 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
              <div className="mt-2 h-2 w-full bg-[repeating-linear-gradient(90deg,rgba(120,53,15,0.4)_0_2px,transparent_2px_4px)]" />
            </div>
          </div>

          {/* Photo */}
          <div className="relative mx-auto h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <Image
              src="/photo.jpg"
              alt="Tharun Hrithick SR"
              fill
              sizes="320px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Identity */}
          <div>
            <div className="font-display text-xl font-bold leading-tight text-white">
              {portfolio.name}
            </div>
            <div className="mt-0.5 text-xs font-semibold text-crimson-400">
              {portfolio.role}
            </div>
          </div>

          {/* Meta */}
          <div className="space-y-1.5 border-t border-dashed border-white/10 pt-3">
            <div className="flex items-center justify-between text-[0.68rem]">
              <span className="uppercase tracking-widest text-zinc-500">
                Location
              </span>
              <span className="font-medium text-zinc-300">
                Bengaluru, IN
              </span>
            </div>
            <div className="flex items-center justify-between text-[0.68rem]">
              <span className="uppercase tracking-widest text-zinc-500">
                Status
              </span>
              <span className="flex items-center gap-1.5 font-medium text-crimson-400">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-crimson-500" />
                Open to Work
              </span>
            </div>
          </div>

          {/* Barcode */}
          <div className="flex items-end gap-[3px] opacity-90">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className="h-[26px] w-[3px] rounded-sm bg-zinc-300"
                style={{ height: `${14 + (i % 5) * 3}px` }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
