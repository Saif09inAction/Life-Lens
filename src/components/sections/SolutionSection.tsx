"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";

const blindFeatures = [
  "Talk to our AI – it tells you color, object, known people, cars, danger, money",
  "Object detection (obstacles, people, vehicles)",
  "Voice navigation and safety alerts",
  "Fall detection: if you don’t respond, we send last location + image to family and trigger SOS",
];

const deafFeatures = [
  "Real-time speech-to-text captions on the lens",
  "Display notifications and messages",
  "Visual alerts for important sounds",
];

const highlights = [
  {
    title: "Our own AI model",
    desc: "We're building our own AI—optimized for accessibility and real-world use.",
  },
  {
    title: "Family can track anytime",
    desc: "GPS feature lets family see location for peace of mind.",
  },
  {
    title: "Automatic SOS",
    desc: "If the user falls and doesn't respond, we automatically send last location, an image, and call SOS.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="relative py-24 lg:py-32 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Solution – <span className="gradient-text">LifeLens</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Smart goggles with our own AI model. Family can track anytime via GPS. Blind users talk to AI for color, objects, people, cars, danger, money. If they fall and don’t respond—we send last location, image, and SOS.
          </p>
        </motion.div>

        {/* Key highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((h, i) => (
            <GlassCard key={h.title} delay={i * 0.1}>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent text-lg">
                  {i === 0 ? "🤖" : i === 1 ? "📍" : "🆘"}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard delay={0}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Blind User Features</h3>
            </div>
            <ul className="space-y-3">
              {blindFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <svg className="h-5 w-5 shrink-0 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Deaf User Features</h3>
            </div>
            <ul className="space-y-3">
              {deafFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <svg className="h-5 w-5 shrink-0 text-violet-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
