"use client";

import { motion } from "framer-motion";

export default function StoryClosing() {
  return (
    <section id="closing" className="relative py-20 sm:py-24 lg:py-28 bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),transparent_55%)]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
        >
          LifeLens is still an idea. But the lives it could touch are very real.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto"
        >
          This site is our way of telling their story for the hackathon — connecting real struggles to a concept that could one day help blind and deaf
          people move through the world with more confidence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xs sm:text-sm text-zinc-400 uppercase tracking-[0.25em]"
        >
          Built by Code Paglu&apos;s
        </motion.p>
      </div>
    </section>
  );
}

