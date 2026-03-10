"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const journeys = [
  {
    id: "ayaan",
    name: "Ayaan",
    label: "Blind user",
    beforeImage: "/images/journey-blind-before.png",
    afterImage: "/images/journey-blind-after.png",
    beforeLine: "Counting steps, memorising cracks in the pavement, hoping no bike was parked in his path today.",
    momentLine: "One night, the sounds at a crossing blurred together — horns, music, shouting — and he froze on the edge.",
    futureLine: "In our concept, LifeLens whispers: “Zebra crossing in 3 metres, car from the left, your friend Rahul ahead.” The city becomes information, not fear.",
  },
  {
    id: "meera",
    name: "Arjun",
    label: "Deaf user",
    beforeImage: "/images/journey-deaf-before.png",
    afterImage: "/images/journey-deaf-after.png",
    beforeLine: "In class, Arjun watched lips and guessed the missing words, laughing a beat late when everyone else did.",
    momentLine: "When an alarm rang behind him, he only understood when he saw people stand up and run.",
    futureLine:
      "In our concept, captions float on his lens: the teacher’s explanation, the joke, the words “I’m proud of you.” The alarm flashes as text before panic spreads.",
  },
];

export default function StoryJourneys() {
  return (
    <section id="journeys" className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
            Chapter 3 — Two imagined days
          </p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Before and if LifeLens existed.
          </h2>
        </motion.div>

        {journeys.map((journey, idx) => (
          <motion.div
            key={journey.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="grid gap-8 lg:grid-cols-[1.4fr,1.2fr] items-start"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {journey.name}&apos;s view — {journey.label}
              </div>

              <div className="relative pl-4 border-l border-zinc-700/70 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-sm sm:text-base text-zinc-300"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Before</span>
                  <p className="mt-1">{journey.beforeLine}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-sm sm:text-base text-zinc-300"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Turning point</span>
                  <p className="mt-1">{journey.momentLine}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-sm sm:text-base text-emerald-200"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    If LifeLens existed
                  </span>
                  <p className="mt-1">{journey.futureLine}</p>
                </motion.div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[journey.beforeImage, journey.afterImage].map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <p className="absolute bottom-2 left-3 right-3 text-xs text-zinc-100 opacity-80">
                    {i === 0 ? "Before" : "If LifeLens existed"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

