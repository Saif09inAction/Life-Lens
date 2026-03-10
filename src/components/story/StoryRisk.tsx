"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "../AnimatedCounter";

const steps = [
  {
    id: "pedestrian",
    label: "road deaths every year worldwide",
    value: 270000,
    suffix: "+",
    tag: "Annual deaths",
  },
  {
    id: "vision",
    label: "people living with vision impairment or blindness",
    value: 2.2,
    suffix: "B",
    tag: "Vision",
  },
  {
    id: "hearing",
    label: "people living with hearing loss",
    value: 1.5,
    suffix: "B",
    tag: "Hearing",
  },
];

export default function StoryRisk() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.3]);

  return (
    <section id="risk" className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.22),transparent_55%)]"
      />
      <motion.div
        style={{ opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),transparent_55%)]"
      />

      <div ref={ref} className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-rose-300">
            Chapter 1 — Why this matters
          </p>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Every number here is a street, a family, a life interrupted.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 sm:px-5 sm:py-5 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-sky-500/10 pointer-events-none" />
              <div className="relative flex flex-col gap-2">
                <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-zinc-400">
                  {step.tag}
                </p>
                <AnimatedCounter
                  value={step.value}
                  suffix={step.suffix}
                  className="text-2xl sm:text-3xl font-display font-bold text-emerald-300"
                  duration={2.2}
                />
                <p className="text-xs sm:text-sm text-zinc-200 leading-snug">{step.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

