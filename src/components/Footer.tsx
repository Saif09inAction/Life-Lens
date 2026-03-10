"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-foreground">LifeLens</span>
            <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-white">
              AI
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </Link>
            <Link href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </Link>
            <Link href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} LifeLens by Code Paglu&apos;s</p>
          <p className="mt-1">Sufyan Khan • Arsheel Patel • Saif Salmani</p>
        </motion.div>
      </div>
    </footer>
  );
}
