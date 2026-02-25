import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-md py-12 text-center mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-font-cyan/50 to-transparent shadow-[0_0_15px_rgba(0,243,255,0.8)]" />
      <p className="text-gray-400">
        © {new Date().getFullYear()} Carlos Alvarez. {dict.rights}
      </p>
      <p className="text-gray-600 text-sm mt-2 font-mono">{dict.role}</p>
    </footer>
  );
}
