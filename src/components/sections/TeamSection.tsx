"use client";

import { motion } from "framer-motion";
import GlassCard from "../GlassCard";

const teamMembers = [
  { name: "Sufyan Khan", initials: "SK" },
  { name: "Arsheel Patel", initials: "AP" },
  { name: "Saif Salmani", initials: "SS" },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-accent font-semibold">Code Paglu&apos;s</p>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Building accessible technology for blind and deaf communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <GlassCard key={member.name} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-violet-500 text-2xl font-bold text-white mb-4"
                >
                  {member.initials}
                </motion.div>
                <h3 className="font-display text-xl font-bold text-foreground">{member.name}</h3>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
