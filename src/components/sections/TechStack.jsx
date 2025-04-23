import { AuroraText } from "../magicui/aurora-text";
import TechCards from "../ui/TechCards";
import TechPins from "../ui/TechPins";
import * as motion from "motion/react-client";

const TechStack = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }} 
    className="flex flex-col items-center justify-center p-12 gap-12">
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
            Tech <AuroraText>Stack</AuroraText>
        </h1>
        <TechCards />
        <TechPins />
    </motion.div>
  )
}

export default TechStack