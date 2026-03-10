"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-22 lg:pt-24">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_10%_-10%,rgba(59,130,246,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(139,92,246,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_90%,rgba(6,182,212,0.12),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-10 lg:pt-16 pb-16 sm:pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* On mobile, show image first, then text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-4 sm:mb-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] flex flex-col items-center justify-center rounded-3xl border border-zinc-500/40 bg-gradient-to-b from-zinc-900/90 via-zinc-900/80 to-zinc-950/95 backdrop-blur-2xl p-4 sm:p-6 shadow-[0_40px_120px_rgba(0,0,0,0.9)]">
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />
              <div className="relative w-full max-w-[360px] flex-1 flex items-center justify-center">
                <Image
                  src="/images/hero-blind-user-street.png"
                  alt="A blind user wearing smart goggles, guided safely through a crowded street"
                  width={400}
                  height={320}
                  className="w-full h-auto object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-300 text-center px-1">
                “Before, every crossing felt like a calculation of risk. With LifeLens quietly describing the world to me, I feel like the city finally
                wants me here.” — imagined story from a blind user we designed for.
              </div>
            </div>
          </motion.div>

          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 mb-4 sm:mb-6 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white/90">A day in the life with LifeLens</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.15]"
            >
              Walk through the world,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                even when you cannot see or hear it.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 sm:mt-5 text-sm sm:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Close your eyes for ten seconds and try to cross a busy road—or imagine everyone&apos;s lips moving, but no sound reaching you.
              LifeLens is our concept for AI-powered smart goggles that could become a second pair of eyes and ears for blind and deaf people,
              turning fear into confidence.
            </motion.p>
          </div>
        </div>
        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-zinc-400"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll to see their journey</span>
          <span className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
