import About from "@/components/About";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Social from "@/components/Social";
import { sections } from "@/utils/constants";

export default function page() {
  return (
    <main className="flex flex-col items-center px-6 md:px-4">
      <Navbar />
      <Landing />
      <Section id={sections[0].id} title={sections[0].title} subtitle={sections[0].subtitle}>
        <About />
      </Section>
      <Section id={sections[1].id} title={sections[1].title} subtitle={sections[1].subtitle}>
        <Projects />
      </Section>
      <Section id={sections[2].id} title={sections[2].title} subtitle={sections[2].subtitle}>
        <div>Hello</div>
      </Section>
      <Social />
    </main>
  );
}
