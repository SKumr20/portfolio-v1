import { Badge } from "./badge";
import { FiFramer } from "react-icons/fi";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { BsFiletypeJava } from "react-icons/bs";

const TechPins = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl font-bold">More tech I'm familiar with: </h1>
        <div className="flex justify-center items-center gap-2">
            <Badge className="flex justify-center items-center gap-2">
                <SiCplusplus className="scale-125"/>
                C++
            </Badge>
            <Badge className="flex justify-center items-center gap-2">
                <BsFiletypeJava className="scale-125"/>
                Java
            </Badge>
            <Badge className="flex justify-center items-center gap-2">
                <FaPython className="scale-125"/>
                Python
            </Badge>
            <Badge className="flex justify-center items-center gap-2">
                <FiFramer className="scale-125"/>
                Framer Motion
            </Badge>
        </div>
    </div>
  )
}

export default TechPins