"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";

const impacts = [
  {
    title: "Safer mobility",
    description: "Blind users can navigate streets, obstacles, and crowds with confidence.",
    icon: "🛡️",
  },
  {
    title: "Better communication",
    description: "Deaf users understand conversations in real-time with captions on the lens.",
    icon: "💬",
  },
  {
    title: "Increased independence",
    description: "Users gain autonomy in daily activities without constant assistance.",
    icon: "✨",
  },
  {
    title: "Affordable assistive tech",
    description: "Making accessibility technology more accessible to those who need it most.",
    icon: "💰",
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Impact
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            How LifeLens transforms lives for blind and deaf individuals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {impacts.map((impact, i) => (
            <GlassCard key={impact.title} delay={i * 0.1}>
              <span className="text-4xl mb-4 block">{impact.icon}</span>
              <h3 className="font-display text-lg font-bold text-foreground">{impact.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{impact.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
