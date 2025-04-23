import Contact from "./Contact";
import { FlipText } from "../ui/FlipText";
import { ContactBeam } from "./ContactBeam";
import * as motion from "motion/react-client";

const ContactArea = () => {
  return (
    <motion.div
    id="contactArea" 
    initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }} 
     className="flex flex-col md:flex-row justify-between items-center md:items-start p-12 mx-6 md:mx-60 gap-20 md:gap-6">
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
        
    </motion.div>
  )
}

export default ContactArea