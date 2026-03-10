"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-22 lg:pt-24">
      {/* Dark gradient background - Apple/Stripe style */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(139,92,246,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(6,182,212,0.06),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-20 sm:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 mb-4 sm:mb-6 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">AI-Powered Accessibility</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.15]"
            >
              LifeLens –{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">AI</span>{" "}
              <span className="text-blue-400">Smart Goggles</span>
              <br />
              <span className="text-white">for Accessibility</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed"
            >
              AI-powered smart goggles that help{" "}
              <strong className="text-white/90">blind users navigate safely</strong> and{" "}
              <strong className="text-white/90">deaf users understand conversations</strong> in real time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Link
                href="#solution"
                className="inline-flex items-center justify-center rounded-xl bg-white text-zinc-900 px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold shadow-lg shadow-white/10 transition-all hover:bg-zinc-100 min-h-[48px]"
              >
                View Solution
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-transparent px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-white transition-all hover:bg-white/5 hover:border-zinc-500 min-h-[48px]"
              >
                Explore Technology
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-[4/5] flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-zinc-500/30 bg-zinc-900/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-black/50">
              <div className="relative w-full max-w-[340px] flex-1 flex items-center justify-center">
                <Image
                  src="/images/goggles-mockup.svg"
                  alt="LifeLens AI Smart Goggles - AI-Powered • Real-time Processing"
                  width={400}
                  height={320}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
