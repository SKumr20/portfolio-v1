import { AuroraText } from "../magicui/aurora-text";
import TechCards from "../ui/TechCards";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 gap-12">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            <AuroraText>
                Tech Stack
            </AuroraText>
        </h1>
        <TechCards />
    </div>
  )
}

export default TechStack