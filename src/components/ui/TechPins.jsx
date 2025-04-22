import { Badge } from "./badge";
import { FiFramer } from "react-icons/fi";
import { SiCplusplus, SiAppwrite, SiFirebase, SiVercel } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { BsFiletypeJava } from "react-icons/bs";

const TechPins = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-2">
        <h1 className="text-xl font-bold">More tech I use: </h1>
        <div className="flex justify-center items-center gap-2 flex-wrap">
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
            {/* For bigger names use whitespace-nowrap */}
            <Badge className="flex justify-center items-center gap-2 whitespace-nowrap">
                <FiFramer className="scale-125"/>
                Framer Motion
            </Badge>
            <Badge className="flex justify-center items-center gap-2">
                <SiAppwrite className="scale-125"/>
                Appwrite
            </Badge>
            <Badge className="flex justify-center items-center gap-2">
                <SiFirebase className="scale-125"/>
                Firebase
            </Badge>
            <Badge className="flex justify-center items-center gap-2">
                <SiVercel className="scale-125"/>
                Vercel
            </Badge>
            <Badge className="flex justify-center items-center gap-2">
                <SiFirebase className="scale-125"/>
                Firebase
            </Badge>
        </div>
    </div>
  )
}

export default TechPins;
