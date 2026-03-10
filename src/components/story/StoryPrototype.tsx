"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StoryPrototype() {
  return (
    <section id="prototype" className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Chapter 5 — Our early sketches
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Hardware concepts for blind and deaf users.
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-zinc-300">
            These are not finished products — they are prototype ideas we explored while thinking about how LifeLens could live on a real pair of
            goggles.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            {
              id: "blind",
              title: "Blind version",
              src: "/images/prototype-blind-version.png",
              description: "Camera, speaker, microphone, GPS and battery arranged to prioritise obstacle detection and audio guidance.",
            },
            {
              id: "deaf",
              title: "Deaf version",
              src: "/images/prototype-deaf-version.png",
              description: "Dual microphones, transparent display and GPS to focus on live captions and safety alerts.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-zinc-950">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain p-6 sm:p-8"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="px-5 sm:px-6 py-4 sm:py-5">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

