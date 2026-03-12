"use client";

import { motion } from "framer-motion";

export default function StoryConcept() {
  return (
    <section id="concept" className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-indigo-300">
            Chapter 4 — The concept
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            A quiet companion that sees and listens for you.
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-zinc-300">
            LifeLens is currently a concept — a pair of AI-powered smart goggles that integrate computer vision, distance sensing (ultrasonic),
            motion detection (MPU6050), speech recognition and text display, with real-time processing on a Raspberry Pi. The device could detect
            obstacles, read text, caption speech, and keep loved ones informed when something goes wrong.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 20 }}
          className="mt-10 sm:mt-12 relative mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 via-slate-900/80 to-black/90 shadow-[0_40px_120px_rgba(0,0,0,0.9)] px-6 py-6 sm:px-8 sm:py-8"
        >
          <div className="grid gap-6 sm:grid-cols-3 text-xs sm:text-sm text-zinc-100">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-sky-300">Eyes</p>
              <p className="mt-2 font-medium">Camera + AI that spots obstacles, cars, crossings, friends, doors, and text.</p>
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-emerald-300">Ears</p>
              <p className="mt-2 font-medium">Speech-to-text engine that could place live captions on the lens for deaf users.</p>
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-rose-300">Safety net</p>
              <p className="mt-2 font-medium">If someone falls or stops responding, GPS and last image could notify family or helpers.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

