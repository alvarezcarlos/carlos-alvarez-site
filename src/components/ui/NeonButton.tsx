"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  color?: "cyan" | "purple";
  children: React.ReactNode;
}

export function NeonButton({
  color = "cyan",
  children,
  className,
  ...props
}: NeonButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full group",
        "bg-transparent border transition-all duration-300",
        color === "cyan" &&
          "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 box-glow-cyan text-glow-cyan",
        color === "purple" &&
          "border-neon-purple text-neon-purple hover:bg-neon-purple/10 box-glow-purple text-glow-purple",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
