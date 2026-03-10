"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PrototypeSection() {
  return (
    <section id="prototype" className="relative py-24 lg:py-32 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Prototype
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hardware prototypes for blind navigation and deaf communication use cases.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Blind user prototype */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl overflow-hidden shadow-xl"
          >
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Blind Navigation</h3>
                  <p className="text-sm text-muted-foreground">Smart goggles for safe mobility</p>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col items-center bg-zinc-50 dark:bg-zinc-900/50">
              <div className="flex items-center justify-center min-h-[340px] w-full">
                <Image
                  src="/images/prototype-blind.png"
                  alt="LifeLens Blind Version: Camera, Raspberry Pi Zero W2, Speaker, Microphone, GPS Module, Battery"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain max-h-[320px]"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium">
                  Camera
                </span>
                <span className="px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-medium">
                  Raspberry Pi Zero W2
                </span>
                <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
                  Speaker
                </span>
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  GPS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Deaf user prototype */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl overflow-hidden shadow-xl"
          >
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Deaf Communication</h3>
                  <p className="text-sm text-muted-foreground">Display-based real-time captions</p>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col items-center bg-zinc-50 dark:bg-zinc-900/50">
              <div className="flex items-center justify-center min-h-[340px] w-full">
                <Image
                  src="/images/prototype-deaf.png"
                  alt="LifeLens Deaf Version: Transparent Display, Mic-1, Mic-2, Raspberry Pi Zero W2, GPS Module, Battery"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain max-h-[320px]"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-medium">
                  Transparent Display
                </span>
                <span className="px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium">
                  Mic-1 & Mic-2
                </span>
                <span className="px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-medium">
                  Raspberry Pi Zero W2
                </span>
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  GPS Module
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
