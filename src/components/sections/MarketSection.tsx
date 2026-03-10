"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";

const revenueStreams = [
  {
    title: "Hardware sales",
    description: "Smart goggles as primary product revenue.",
    icon: "🛒",
  },
  {
    title: "AI software upgrades",
    description: "Premium models and subscription features.",
    icon: "⬆️",
  },
  {
    title: "Partnerships",
    description: "Collaborations with accessibility organizations and governments.",
    icon: "🤝",
  },
];

export default function MarketSection() {
  return (
    <section id="market" className="relative py-16 sm:py-20 lg:py-24 xl:py-32 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Market & Business Model
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Sustainable revenue streams for LifeLens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {revenueStreams.map((stream, i) => (
            <GlassCard key={stream.title} delay={i * 0.1}>
              <span className="text-4xl mb-4 block">{stream.icon}</span>
              <h3 className="font-display text-xl font-bold text-foreground">{stream.title}</h3>
              <p className="mt-2 text-muted-foreground">{stream.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
