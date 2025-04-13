import { GlareCard } from "./glare-card";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiAppwrite, SiFirebase } from "react-icons/si";

const techs = [
  { name: "NextJS", icon: <RiNextjsFill /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Appwrite", icon: <SiAppwrite /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git", icon: <FaGitAlt /> },
]

const TechCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
