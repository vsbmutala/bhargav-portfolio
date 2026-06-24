import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Research />
      <Achievements />
      <Contact />
    </main>
  );
}
