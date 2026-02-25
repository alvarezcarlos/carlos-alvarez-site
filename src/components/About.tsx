import type { Dictionary } from "@/i18n/dictionaries";
import { GlowingCard } from "./ui/GlowingCard";
import { SectionHeading } from "./ui/SectionHeading";

export function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={dict.title} subtitle={dict.subtitle} />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <GlowingCard
            delay={0.1}
            className="flex flex-col justify-center border-neon-cyan/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              {dict.fs_title}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">{dict.fs_p1}</p>
            <p className="text-gray-300 leading-relaxed">{dict.fs_p2}</p>
          </GlowingCard>

          <GlowingCard
            delay={0.3}
            className="flex flex-col justify-center border-neon-purple/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              {dict.ai_title}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">{dict.ai_p1}</p>
            <p className="text-gray-300 leading-relaxed">{dict.ai_p2}</p>
          </GlowingCard>
        </div>
      </div>
    </section>
  );
}
