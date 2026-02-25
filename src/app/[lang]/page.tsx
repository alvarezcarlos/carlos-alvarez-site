import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home(props: {
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const dict = getDictionary(params.lang);

  return (
    <main className="min-h-screen">
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Experience dict={dict.experience} />
      <Skills dict={dict.skills} />
      <Education dict={dict.education} />
      <Footer dict={dict.footer} />
    </main>
  );
}
