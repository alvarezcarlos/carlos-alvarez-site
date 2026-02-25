"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import { GlowingCard } from "./ui/GlowingCard";
import { SectionHeading } from "./ui/SectionHeading";

export function Education({ dict }: { dict: Dictionary["education"] }) {
  return (
    <section id="education" className="py-20 px-4 relative">
      <SectionHeading title={dict.title} subtitle={dict.subtitle} />

      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-cyan box-glow-cyan" />
            {dict.academicTitle}
          </h3>
          {dict.eduItems.map((edu, index) => (
            <GlowingCard key={index} delay={index * 0.1}>
              <h4 className="text-xl font-bold text-white mb-2">
                {edu.degree}
              </h4>
              <p className="text-neon-cyan font-medium mb-1">
                {edu.institution}
              </p>
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>{edu.location}</span>
                <span>{edu.period}</span>
              </div>
              {edu.description && (
                <p className="text-gray-300 text-sm mt-3">{edu.description}</p>
              )}
            </GlowingCard>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-purple box-glow-purple" />
            {dict.langTitle}
          </h3>
          <div className="grid gap-4">
            {dict.languages.map((l, index) => (
              <GlowingCard
                key={index}
                delay={0.2 + index * 0.1}
                className="flex flex-row justify-between items-center p-6 border-neon-purple/20"
              >
                <span className="text-xl font-bold text-white">{l.lang}</span>
                <span className="px-3 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/30 text-sm font-medium">
                  {l.level}
                </span>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
