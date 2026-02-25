"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function GlowingCard({
  children,
  className,
  delay = 0,
  ...props
}: GlowingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        "glass-panel rounded-xl p-6 transition-all duration-300 relative group",
        "hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]",
        className,
      )}
      {...props}
    >
      <div className="absolute -inset-px bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
