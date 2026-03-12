"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "input", label: "Input", items: ["Camera", "Microphone", "Ultrasonic (HC-SR04)", "MPU6050"], icon: "📥" },
  { id: "edge", label: "Raspberry Pi Zero 2 W", sub: "Edge Processing Unit", icon: "🖥️" },
  { id: "ai", label: "AI Processing", items: ["Object Detection", "OCR Text Recognition", "Speech Recognition"], icon: "🤖" },
  { id: "decision", label: "Decision & Output Engine", sub: "Synthesizes data, routes output", icon: "⚙️" },
  { id: "output", label: "Output", items: ["Real-Time Captions (Deaf)", "Audio Guidance (Blind)", "Mobile App (GPS, SOS)"], icon: "📤" },
];

const hardware = [
  { name: "Raspberry Pi Zero 2 W", role: "Edge processing" },
  { name: "12MP Camera", role: "Object/obstacle detection" },
  { name: "Microphone", role: "Speech capture" },
  { name: "GPS Module", role: "Location & SOS" },
  { name: "Transparent OLED", role: "Captions for deaf users" },
  { name: "Speaker", role: "Audio for blind users" },
  { name: "Ultrasonic Sensor (HC-SR04)", role: "Distance to obstacles for navigation" },
  { name: "MPU6050 (Accelerometer + Gyroscope)", role: "Fall detection, emergency alerts" },
  { name: "Battery", role: "Power" },
];

const software = [
  "Python • OpenCV",
  "TensorFlow / YOLO",
  "Whisper / Google Speech API",
  "gTTS / Coqui TTS",
  "Google Maps API • Firebase",
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            System Architecture
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The camera captures the surrounding environment in real time; the AI model processes the video feed to detect objects, obstacles, and faces. The ultrasonic sensor measures distance to nearby obstacles for navigation accuracy. The Raspberry Pi processes all sensor data and determines the appropriate response. For blind users, audio guidance is delivered through the speaker; for deaf users, the microphone captures speech and converts it to text on the transparent display. The MPU6050 motion sensor monitors body movement and detects falls, enabling emergency alerts. The GPS module tracks location and sends SOS alerts with live location to family when needed.
          </p>
        </motion.div>

        {/* Digital workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/50 p-4 sm:p-6 lg:p-10 mb-12 sm:mb-16 overflow-x-auto -mx-1 sm:mx-0"
        >
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-3 sm:gap-4 lg:gap-2 lg:min-w-[600px]">
            {nodes.map((node, i) => (
              <div key={node.id} className="flex items-center gap-2 lg:flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex-1 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-white dark:bg-zinc-800/80 p-4 text-center shadow-sm"
                >
                  <span className="text-2xl mb-2 block">{node.icon}</span>
                  <h4 className="font-display font-bold text-foreground text-sm lg:text-base">{node.label}</h4>
                  {node.sub && <p className="text-xs text-muted-foreground mt-0.5">{node.sub}</p>}
                  {node.items && (
                    <ul className="mt-3 space-y-1 text-xs text-muted-foreground text-left">
                      {node.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
                {i < nodes.length - 1 && (
                  <>
                    <svg className="hidden lg:block h-6 w-6 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <svg className="lg:hidden h-5 w-5 text-accent shrink-0 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hardware & Software */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 p-6"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Hardware</h3>
            <ul className="space-y-2">
              {hardware.map((h, i) => (
                <li key={h.name} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 text-sm">
                  <span className="font-medium text-foreground">{h.name}</span>
                  <span className="text-muted-foreground text-xs sm:text-sm">{h.role}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 p-6"
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Software</h3>
            <ul className="space-y-2">
              {software.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
