"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "../AnimatedCounter";
import GlassCard from "../GlassCard";

const struggleStats = [
  { value: 7, suffix: " in 10", label: "Persons with disabilities are economically inactive", source: "ILO" },
  { value: 90, suffix: "%", label: "Of assistive tech needs go unmet in low-income countries", source: "WHO-UNICEF" },
  { value: 60, suffix: "%", label: "Of blind people in many regions lack a white cane", source: "Accessibility research" },
  { value: 270000, suffix: "+", label: "Pedestrian deaths annually; blind/deaf at higher risk", source: "WHO" },
];

const realStruggles = [
  { icon: "🦯", title: "No white cane", desc: "Many cannot afford or access even basic mobility aids." },
  { icon: "💼", title: "Unemployment", desc: "High joblessness due to mobility and communication barriers." },
  { icon: "⚠️", title: "Robbery & vulnerability", desc: "Blind and deaf individuals are targets for theft and exploitation." },
  { icon: "🕳️", title: "Falls & manholes", desc: "Open manholes, uneven pavements—daily hazards that cause injuries." },
  { icon: "❤️", title: "Family worry", desc: "Loved ones constantly anxious about their safety and whereabouts." },
];

const impactImages = [
  {
    src: "/images/problem-street.png",
    alt: "Busy street - blind and deaf pedestrians face high risk of accidents",
    caption: "Street hazards",
  },
  {
    src: "/images/problem-mobility.png",
    alt: "Blind person with cane - many lack even this basic aid",
    caption: "Lack of mobility aids",
  },
  {
    src: "/images/problem-communication.png",
    alt: "Deaf individuals face communication barriers daily",
    caption: "Communication isolation",
  },
  {
    src: "/images/problem-urban.png",
    alt: "Urban hazards - manholes and obstacles endanger blind pedestrians",
    caption: "Urban danger",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-16 sm:py-20 lg:py-24 xl:py-32 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Real-Life Struggles
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-1">
            Blind and deaf people face daily risks: no stick, unemployment, robbery, falling into manholes—and families live in constant worry. We are here to help.
          </p>
        </motion.div>

        {/* Struggle stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {struggleStats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.1}>
              <div className="text-2xl lg:text-3xl font-display font-bold text-red-500 dark:text-red-400">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.source}</p>
            </GlassCard>
          ))}
        </div>

        {/* Real struggles - no cane, workless, robbed, manholes, family worry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            What blind and deaf people face every day
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {realStruggles.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.05}>
                <span className="text-2xl">{s.icon}</span>
                <h4 className="mt-2 font-semibold text-foreground text-sm">{s.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Impact images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            The reality
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactImages.map((img, i) => (
              <motion.div
                key={img.caption}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 font-semibold text-white text-sm">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* We are here to help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border-2 border-accent/30 bg-accent/5 dark:bg-accent/10 p-6 sm:p-8 lg:p-12 text-center"
        >
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
            We are here to help
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            LifeLens gives blind and deaf people independence, safety, and peace of mind for their families. See how we&apos;re building our own AI to support them.
          </p>
          <a
            href="#solution"
            className="inline-flex mt-5 sm:mt-6 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-semibold text-white hover:bg-accent/90 transition-colors min-h-[48px]"
          >
            See our solution
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
