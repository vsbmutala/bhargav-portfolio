import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Research from "@/components/sections/Research";
import Publications from "@/components/sections/Publications";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Research />
      <Publications />
      <Achievements />
      <Projects />
      <Contact />
    </main>
  );
}
