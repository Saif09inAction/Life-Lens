"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const realityImages = [
  {
    src: "/images/problem-blind-group-1.png",
    alt: "Blind men guiding each other across a chaotic city road",
    caption: "When one person without sight leads another, a single mistake can hurt all of them.",
  },
  {
    src: "/images/problem-blind-group-2.png",
    alt: "Group of blind people crossing a busy road with help from others",
    caption: "Every crossing is a negotiation with traffic, noise, and trust in strangers.",
  },
  {
    src: "/images/problem-blind-crossing.png",
    alt: "Blind man with white cane alone at a crossing",
    caption: "Alone at the curb, waiting for a gap in sound that might not be safe.",
  },
  {
    src: "/images/problem-deaf-signing.png",
    alt: "Deaf woman signing intensely during a conversation",
    caption: "For deaf people, even a simple sentence can become hard work to follow in a noisy world.",
  },
  {
    src: "/images/problem-blind-group-3.png",
    alt: "Blind men with white canes navigating traffic together",
    caption: "Side by side with traffic, one missed horn or broken signal can change everything.",
  },
  {
    src: "/images/problem-deaf-school-children.png",
    alt: "Group of deaf school children signing together",
    caption: "In deaf schools, whole classrooms speak in their hands—while the outside world rarely answers in the same language.",
  },
];

export default function StoryRealityStrip() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="reality" className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-black via-zinc-950 to-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(244,63,94,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-sky-300">
            Chapter 2 — The street view
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Instead of slides, here is the news feed of their day.
          </h2>
        </motion.div>

        <div
          className="overflow-hidden -mx-4 sm:mx-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
        >
          <div
            className="flex gap-5 sm:gap-6 w-max animate-reality-slideshow"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...realityImages, ...realityImages].map((img, i) => (
              <motion.div
                key={`${img.caption}-${i}`}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % realityImages.length) * 0.06 }}
                className="relative min-w-[260px] max-w-[260px] sm:min-w-[320px] sm:max-w-[320px] flex-shrink-0 rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_24px_80px_rgba(0,0,0,0.85)] overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 260px, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-xs sm:text-sm text-zinc-100">
                  {img.caption}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

