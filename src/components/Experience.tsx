"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import { motion } from "framer-motion";
import { GlowingCard } from "./ui/GlowingCard";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <SectionHeading title={dict.title} subtitle={dict.subtitle} />

      <div className="max-w-4xl mx-auto mt-16 relative">
        {/* Vertical line timeline */}
        <div className="absolute left-[39px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-30" />

        <div className="space-y-12">
          {dict.items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-[31.5px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 z-10 box-glow-cyan"
                style={{
                  borderColor:
                    exp.color === "cyan"
                      ? "var(--color-neon-cyan)"
                      : "var(--color-neon-purple)",
                  boxShadow:
                    exp.color === "cyan"
                      ? "0 0 10px rgba(0,243,255,0.5)"
                      : "0 0 10px rgba(181,55,242,0.5)",
                }}
              />

              <div className="hidden md:flex flex-1 w-full" />

              <GlowingCard
                className="flex-1 w-full ml-16 md:ml-0 border-l-4"
                style={{
                  borderLeftColor:
                    exp.color === "cyan"
                      ? "var(--color-neon-cyan)"
                      : "var(--color-neon-purple)",
                }}
              >
                <span
                  className="text-sm font-mono mb-2 block"
                  style={{
                    color:
                      exp.color === "cyan"
                        ? "var(--color-neon-cyan)"
                        : "var(--color-neon-purple)",
                  }}
                >
                  {exp.period}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-gray-400 mb-4">
                  {exp.company} • {exp.location}
                </h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-300">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className="mt-1 leading-none"
                        style={{
                          color:
                            exp.color === "cyan"
                              ? "var(--color-neon-cyan)"
                              : "var(--color-neon-purple)",
                        }}
                      >
                        ▹
                      </span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
