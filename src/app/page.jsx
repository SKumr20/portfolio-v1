import Hero from "@/components/Hero";
import { HomeTimeline } from "@/components/ui/HomeTimeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div >
        <Hero />
        <HomeTimeline />
        <Contact />
      </div>
    </>
  );
}
