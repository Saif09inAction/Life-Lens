"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const riskItems = [
  {
    id: "pedestrian",
    label: "pedestrian deaths every year on roads worldwide",
    value: 270000,
    suffix: "+",
    accent: "bg-red-500/20 text-red-400",
  },
  {
    id: "vision",
    label: "people living with vision impairment or blindness",
    value: 2.2,
    suffix: "B",
    accent: "bg-blue-500/20 text-blue-400",
  },
  {
    id: "hearing",
    label: "people living with hearing loss",
    value: 1.5,
    suffix: "B",
    accent: "bg-violet-500/20 text-violet-400",
  },
];

export default function RiskStatsSection() {
  return (
    <section
      id="risk"
      className="relative min-h-[80vh] sm:min-h-screen flex items-center bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.22),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.26),_transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center"
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs sm:text-sm font-medium text-zinc-200 border border-white/10 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
              Real-world risk snapshot
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight">
              Every crossing, every missed sound,{" "}
              <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-500 bg-clip-text text-transparent">
                can be a matter of life and death.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-xl">
              When a blind person steps off the pavement or a deaf person can&apos;t hear an oncoming bike, the margin for error is tiny.
              These numbers are the backdrop for why we started LifeLens.
            </p>

            <div className="mt-6 h-1 rounded-full bg-gradient-to-r from-red-500/60 via-amber-300/70 to-blue-500/70 shadow-[0_0_40px_rgba(248,113,113,0.75)]" />
          </div>

          <div className="flex flex-col gap-4">
            {riskItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl px-4 py-3 sm:px-5 sm:py-4"
              >
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/40 to-transparent" />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.18em] text-zinc-400">
                      {item.id === "pedestrian" ? "Annual deaths" : "People at risk"}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-200">{item.label}</p>
                  </div>
                  <div className="shrink-0 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 flex flex-col items-end justify-center bg-black/40 border border-white/10">
                    <AnimatedCounter
                      value={item.value}
                      suffix={item.suffix}
                      className={`text-xl sm:text-2xl font-display font-bold tabular-nums ${item.accent.split(" ")[1]}`}
                    />
                    <span className="mt-0.5 text-[0.65rem] sm:text-[0.7rem] text-zinc-400">
                      {item.id === "pedestrian" ? "road deaths / year" : "people worldwide"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* subtle scroll hint, OSOS-style */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400 text-[0.65rem] tracking-[0.2em] uppercase"
      >
        <span>Scroll • Stories</span>
        <span className="h-6 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}

