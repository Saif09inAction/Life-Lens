"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StoryHero() {
  const headlineWords = ["Walk", "through", "the", "world,"];
  const sublineWords = ["even", "when", "you", "cannot", "see", "or", "hear", "it."];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_0%_0%,rgba(56,189,248,0.3),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(129,140,248,0.35),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_100%,rgba(244,63,94,0.18),transparent)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        {/* Text */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.7rem] sm:text-xs text-zinc-200 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Concept story • LifeLens
          </motion.div>

          <div className="mt-5 sm:mt-6 space-y-2">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } },
              }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white"
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={word + index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {sublineWords.map((word, index) => (
                <motion.span
                  key={word + index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`inline-block mr-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-pink-400`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-zinc-300"
            >
              Close your eyes for ten seconds and try to cross a busy road. This is the starting point of LifeLens — a concept for AI-powered goggles
              that could quietly describe the world and caption voices in real time.
            </motion.p>
          </div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 flex flex-1 items-center justify-center lg:mt-0"
        >
          <motion.div
            className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-zinc-950/80 shadow-[0_40px_120px_rgba(0,0,0,0.85)] overflow-hidden"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%)]" />
            <div className="relative m-4 h-[70%] overflow-hidden rounded-2xl">
              <Image
                src="/images/hero-blind-user-street.png"
                alt="A blind user wearing smart goggles, guided safely through a crowded street"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative mx-4 mb-4 rounded-2xl bg-black/60 px-4 py-3 text-xs sm:text-sm text-zinc-100">
              “Before, every crossing felt like a calculation of risk. With LifeLens quietly describing the world to me, I feel like the city finally
              wants me here.” <span className="text-zinc-400">— imagined blind user</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[0.65rem] tracking-[0.25em] uppercase text-zinc-400"
      >
        <span>Scroll to begin the story</span>
        <span className="h-7 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  );
}

