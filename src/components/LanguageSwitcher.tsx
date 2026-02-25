"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();

  // Extract current locale from pathname: e.g., /en/about -> en
  const segments = pathname ? pathname.split("/") : [];
  const currentLocale = segments[1] || "en";

  // Create URL for specific locale switch
  const getTargetUrl = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const newSegments = [...segments];
    newSegments[1] = locale;
    return newSegments.join("/") || `/${locale}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 shadow-xl"
    >
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex items-center gap-1 text-sm font-medium">
        <Link
          href={getTargetUrl("en")}
          className={`px-2 py-1 rounded-md transition-all ${
            currentLocale === "en"
              ? "bg-neon-cyan/20 text-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.3)]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          EN
        </Link>
        <span className="text-gray-600">|</span>
        <Link
          href={getTargetUrl("es")}
          className={`px-2 py-1 rounded-md transition-all ${
            currentLocale === "es"
              ? "bg-neon-purple/20 text-neon-purple shadow-[0_0_10px_rgba(181,55,242,0.3)]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          ES
        </Link>
      </div>
    </motion.div>
  );
}
