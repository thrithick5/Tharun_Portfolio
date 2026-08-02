"use client";

import Image from "next/image";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/photo.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-55 contrast-[1.08] brightness-[0.45] saturate-[1.15]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/65 to-ink" />
      <div className="hero-bg absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(5,5,5,0.92)_100%)]" />
    </div>
  );
}
