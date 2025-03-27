import Hero from "@/components/Hero";
import { HomeTimeline } from "@/components/ui/HomeTimeline";
import ContactArea from "@/components/ContactArea";
export default function Home() {
  return (
    <>
      <div >
        <Hero />
        <HomeTimeline />
        <ContactArea />
      </div>
    </>
  );
}
