import { AuroraText } from "../magicui/aurora-text";
import TechCards from "../ui/TechCards";
import TechPins from "../ui/TechPins";

const TechStack = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 gap-12">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            Tech <AuroraText>Stack</AuroraText>
        </h1>
        <TechCards />
        <TechPins />
    </div>
  )
}

export default TechStack