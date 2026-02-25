"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills({ dict }: { dict: Dictionary["skills"] }) {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <SectionHeading title={dict.title} subtitle={dict.subtitle} />

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {dict.categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-xl border border-white/5 relative overflow-hidden group"
          >
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color === "cyan" ? "from-neon-cyan to-transparent" : "from-neon-purple to-transparent"}`}
            />

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${category.color === "cyan" ? "bg-neon-cyan box-glow-cyan" : "bg-neon-purple box-glow-purple"}`}
              />
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-default ${
                    category.color === "cyan"
                      ? "bg-neon-cyan/5 text-gray-300 hover:text-neon-cyan border border-neon-cyan/20 hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                      : "bg-neon-purple/5 text-gray-300 hover:text-neon-purple border border-neon-purple/20 hover:border-neon-purple hover:shadow-[0_0_10px_rgba(181,55,242,0.2)]"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
