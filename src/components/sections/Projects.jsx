import { AuroraText } from "../magicui/aurora-text";
import { ProjectTabs } from "./ProjectTabs";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center p-8 items-center">
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
    </div>
  )
}

export default Projects