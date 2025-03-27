import Contact from "./Contact";
import { FlipText } from "../ui/FlipText";

const ContactArea = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-12 mx-6 md:mx-60 gap-6">
        <div className="flex flex-col justify-center gap-2" >
            <FlipText />
            <p>Geek out about tech, contact for collaborations, and more!</p>
        </div>
        <Contact />
    </div>
  )
}

export default ContactArea