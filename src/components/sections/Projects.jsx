import { AuroraText } from "../magicui/aurora-text";
import { ProjectTabs } from "./ProjectTabs";
import * as motion from "motion/react-client";

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    className="flex flex-col justify-center p-8 items-center">
        {/* Title And test */}
        <div className="flex flex-col gap-10 align-center items-center">
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold">
            My <AuroraText>Projects</AuroraText>
          </p>
          <p className="text-md md:text-xl lg:text-2xl font-extralight tracking-wide">
            A curated collection of some of the things I've built.
          </p>
        </div>

        <ProjectTabs />
    </motion.div>
  )
}

export default Projects