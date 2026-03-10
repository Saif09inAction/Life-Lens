"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";

const sources = [
  {
    title: "WHO World Report on Vision",
    stat: "2.2 billion",
    description: "people have vision impairment or blindness globally",
  },
  {
    title: "WHO Global Report on Hearing",
    stat: "1.5 billion",
    description: "live with hearing loss; 430 million have disabling hearing loss",
  },
  {
    title: "WHO-UNICEF Assistive Technology",
    stat: "1 billion+",
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
    <section id="research" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Global Scale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Evidence-based statistics from WHO, UNICEF, and the UN on vision, hearing, and assistive technology access.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sources.map((source, i) => (
            <GlassCard key={source.title} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{source.title}</h3>
                  <p className="mt-1 text-xl font-display font-bold text-accent">{source.stat}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{source.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
