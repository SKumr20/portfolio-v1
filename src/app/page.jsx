import Hero from "@/components/sections/Hero";
import ContactArea from "@/components/sections/ContactArea";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
export default function Home() {
  return (
    <>
      <div >
        <Hero />
        <Projects />
        <TechStack />
        <ContactArea />
      </div>
    </>
  );
}
