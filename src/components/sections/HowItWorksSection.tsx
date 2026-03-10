"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Camera captures surroundings",
    description: "High-resolution camera captures the environment in real-time",
    icon: "📷",
  },
  {
    number: "2",
    title: "AI detects objects and environment",
    description: "Computer vision AI identifies obstacles, people, text, and context",
    icon: "🤖",
  },
  {
    number: "3",
    title: "Audio guidance for blind users",
    description: "Voice feedback delivers navigation and hazard information",
    icon: "🔊",
  },
  {
    number: "4",
    title: "Text captions for deaf users",
    description: "Speech-to-text displayed on AR lens in real-time",
    icon: "📝",
  },
  {
    number: "5",
    title: "Emergency monitoring & GPS",
    description: "Location tracking and SOS alerts for safety",
    icon: "🛟",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple visual workflow: Camera → AI Processing → User Feedback
          </p>
        </motion.div>

        {/* Workflow diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20 py-8 px-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:via-violet-500/5 dark:to-cyan-500/5"
        >
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-700/50">
            <span className="text-3xl">📷</span>
            <span className="font-semibold">Camera</span>
          </div>
          <svg className="h-8 w-8 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-700/50">
            <span className="text-3xl">🤖</span>
            <span className="font-semibold">AI Processing</span>
          </div>
          <svg className="h-8 w-8 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/50 dark:border-zinc-700/50">
            <span className="text-3xl">👤</span>
            <span className="font-semibold">User Feedback</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6"
            >
              <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold text-sm">
                {step.number}
              </div>
              <span className="text-3xl mb-4 block">{step.icon}</span>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
