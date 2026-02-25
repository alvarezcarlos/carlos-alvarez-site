import { getDictionary } from "@/i18n/dictionaries";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const dict = getDictionary(params.lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: "https://carlosalvarez.dev",
      siteName: "Carlos Alvarez",
      locale: params.lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
  };
}

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const { children } = props;

  return (
    <html lang={params.lang} className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased relative`}>
        <LanguageSwitcher />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
