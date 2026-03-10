"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl border border-zinc-200/60 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl p-4 sm:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.28)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
