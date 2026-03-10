"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "../GlassCard";

const journeys = [
  {
    id: "blind",
    name: "Ayaan",
    label: "Blind user",
    beforeTitle: "Before LifeLens — counting steps, not memories",
    beforeStory:
      "Ayaan memorises every crack on the pavement. He counts steps from his front door to the bus stop, hoping no bike is parked in his path today. When friends invite him out at night, he often says no — not because he doesn’t want to go, but because dark streets feel like traps.",
    afterTitle: "If LifeLens existed — a city he could trust",
    afterStory:
      "In our concept, with LifeLens on, Ayaan would hear: “Zebra crossing in 3 metres, car approaching from the left, friend Rahul waving ahead.” The goggles would read shop boards, warn him about open manholes, and send his live location to his sister. For the first time, he could walk without rehearsing the route in his head.",
    beforeImage: {
      src: "/images/journey-blind-before.png",
      alt: "Blind person with a white cane hesitating at a noisy road crossing",
      caption: "“I knew the sounds of traffic, but not where the danger really was.”",
    },
    afterImage: {
      src: "/images/journey-blind-after.png",
      alt: "Blind user wearing smart goggles, walking confidently with subtle audio guidance",
      caption: "“With LifeLens describing the scene, the road feels like information, not fear.”",
    },
  },
  {
    id: "deaf",
    name: "Meera",
    label: "Deaf user",
    beforeTitle: "Before LifeLens — always missing half the sentence",
    beforeStory:
      "In classrooms and meetings, Meera watches lips move and guesses the rest. When people laugh suddenly, she smiles too, praying it’s the right moment. Important announcements — train delays, emergency alarms, sudden shouts — often arrive to her late, or not at all.",
    afterTitle: "If LifeLens existed — every word, in front of her eyes",
    afterStory:
      "In our concept, with LifeLens, Meera would see live captions floating on her lens: her teacher’s explanation, her manager’s instructions, her friend saying “I’m proud of you.” When an alarm rings behind her, the goggles would flash: “Fire alarm, please exit.” The world could finally speak a language she can see.",
    beforeImage: {
      src: "/images/journey-deaf-before.png",
      alt: "Deaf student in a classroom, looking at others to follow the conversation",
      caption: "“By the time I understood the joke, the moment had already passed.”",
    },
    afterImage: {
      src: "/images/journey-deaf-after.png",
      alt: "Deaf user wearing AR-style glasses, reading live captions while a friend talks",
      caption: "“Now I see every word as it’s spoken. I’m inside the conversation, not outside it.”",
    },
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-16 sm:py-20 lg:py-24 xl:py-32 bg-zinc-50 dark:bg-zinc-950">
      {/* subtle top gradient to connect with hero */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-zinc-950/90 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Imagined journeys with LifeLens
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            LifeLens is currently in the ideation and concept stage. These stories are imagined day-in-the-life journeys,
            based on real struggles of blind and deaf people that we studied for this hackathon.
          </p>
        </motion.div>

        <div className="space-y-14 sm:space-y-16">
          {journeys.map((journey, index) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-zinc-100 px-3 py-1 text-xs sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>
                    {journey.name}&apos;s view &mdash; {journey.label}
                  </span>
                </div>

                <GlassCard delay={0}>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{journey.beforeTitle}</h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{journey.beforeStory}</p>
                </GlassCard>

                <GlassCard delay={0.1}>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{journey.afterTitle}</h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{journey.afterStory}</p>
                  <p className="mt-4 text-xs sm:text-sm text-accent">
                    This journey shaped features like object detection, audio guidance, live captions, GPS tracking, and SOS alerts in our prototype.
                  </p>
                </GlassCard>
              </div>

              <div className="space-y-6">
                <GlassCard delay={0.05}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                    <Image
                      src={journey.beforeImage.src}
                      alt={journey.beforeImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-xs sm:text-sm font-medium text-white">
                      {journey.beforeImage.caption}
                    </p>
                  </div>
                </GlassCard>

                <GlassCard delay={0.12}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                    <Image
                      src={journey.afterImage.src}
                      alt={journey.afterImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-xs sm:text-sm font-medium text-white">
                      {journey.afterImage.caption}
                    </p>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

