"use client";

import type { Dictionary } from "@/i18n/dictionaries";
import { motion } from "framer-motion";
import { FileText, Linkedin, Mail } from "lucide-react";

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-neon-cyan text-xl md:text-2xl font-mono tracking-wider uppercase mb-4">
            {dict.hello}
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
            Carlos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow-cyan">
              Alvarez
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light mt-6 max-w-3xl mx-auto leading-relaxed">
            {dict.role1} <br className="hidden md:block" />
            <span className="text-white font-medium">{dict.role2}</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          {dict.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-8"
        >
          <motion.a
            href="/CV Carlos Alvarez.pdf"
            download="Carlos_Alvarez_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-full bg-transparent border transition-all duration-300 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 box-glow-cyan text-glow-cyan gap-2 text-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {dict.downloadCv}
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6 pt-12"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-neon-cyan transition-colors"
          >
            <Linkedin className="w-8 h-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:lcdo.alvarezcarlos@gmail.com"
            className="text-gray-400 hover:text-neon-purple transition-colors"
          >
            <Mail className="w-8 h-8" />
            <span className="sr-only">Email</span>
          </a>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-500 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 bg-neon-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
