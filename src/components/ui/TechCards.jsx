import { GlareCard } from "./glare-card";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiTypescript } from "react-icons/si";

const techs = [
  { name: "NextJS", icon: <RiNextjsFill /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Git", icon: <FaGitAlt /> },
]

const TechCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 md:gap-x-10 justify-items-center">
  {techs.map((tech) => (
    <GlareCard
      key={tech.name}
      className="flex flex-col items-center justify-center flex-shrink-0"
    >
      <div className="text-white text-3xl">{tech.icon}</div>
      <p className="text-white font-bold text-lg mt-4">{tech.name}</p>
    </GlareCard>
  ))}
</div>

  )
}

export default TechCards;
