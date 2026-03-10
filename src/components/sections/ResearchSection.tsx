"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";
import AnimatedCounter from "../AnimatedCounter";

type SourceStat = {
  title: string;
  stat: number | string;
  suffix?: string;
  description: string;
};

const sources: SourceStat[] = [
  {
    title: "WHO World Report on Vision",
    stat: 2.2,
    suffix: "B",
    description: "people have vision impairment or blindness globally",
  },
  {
    title: "WHO Global Report on Hearing",
    stat: 1.5,
    suffix: "B",
    description: "live with hearing loss; 430 million have disabling hearing loss",
  },
  {
    title: "WHO-UNICEF Assistive Technology",
    stat: 1,
    suffix: "B+",
    description: "denied access to assistive products they need",
  },
  {
    title: "UN Convention on Rights",
    stat: "Article 9",
    description: "Accessibility and assistive technology as fundamental human rights",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The scale of the need
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Evidence from WHO, UNICEF, and the UN: the people we&apos;re designing for are not a small niche—they&apos;re a significant part of the world.
          </p>
        </motion.div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {sources.map((source, i) => (
            <GlassCard
              key={source.title}
              delay={i * 0.1}
              className="min-w-[230px] max-w-xs sm:max-w-none snap-center"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{source.title}</h3>
                  {typeof source.stat === "number" ? (
                    <AnimatedCounter
                      value={source.stat}
                      suffix={source.suffix}
                      className="mt-1 text-2xl font-display font-bold text-emerald-300"
                      duration={2.4}
                    />
                  ) : (
                    <p className="mt-1 text-lg font-display font-semibold text-emerald-300">{source.stat}</p>
                  )}
                  <p className="mt-1 text-xs text-zinc-400">{source.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
