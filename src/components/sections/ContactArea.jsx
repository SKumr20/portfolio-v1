import Contact from "./Contact";
import { FlipText } from "../ui/FlipText";
import { ContactBeam } from "./ContactBeam";

const ContactArea = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-12 mx-6 md:mx-60 gap-20 md:gap-6">
        <div className="flex flex-shrink-0 flex-col justify-center gap-10 h-full">
          <div className="flex flex-col gap-2 mb-10 md:mb-20">
            <FlipText />
            <p>Geek out about tech, contact for collaborations, and more!</p>
          </div>
          <ContactBeam />
        </div>
        <div className="flex-shrink-0">
          <Contact />
        </div>
        
    </div>
  )
}

export default ContactArea