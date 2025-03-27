import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";
import { links } from "@/data/links";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center p-12 mx-6 md:mx-60 gap-6 mb-20">
      {/* Hero Content div */}
      <div className="flex flex-col text-center gap-y-2 md:text-start">
            <h1 className="text-4xl font-bold">Satyam Kumar</h1>
            {/* Title And Location */}
            <div className="mb-4 flex flex-col md:flex-row text-center gap-y-2 items-center gap-2">
              <h2 className="text-lg font-medium">Full Stack Engineer</h2>
              <Badge className="gap-1">
                <MapPin size={18} />
                Chennai, IN
              </Badge>
            </div>

            <p className="font-light mb-4">
              Hi! I'm a Pre-final year Engineering Grad, passionate about web design, and creating user-friendly apps.
            </p>
            {/* Buttons */}
            <div className="flex justify-center md:justify-start">
              <Link href={links.socials.resume} target="_blank" rel="noopener noreferrer"
              >
                <button className="flex gap-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                  Resume
                </button>
              </Link>
            </div>
            {/* Socials */}
            <div className="mt-6 flex justify-center space-x-5 md:justify-start">
            <a href={links.socials.github} target="_blank">
              <FaGithub size="24px" className="opacity-60 hover:opacity-100" />
            </a>
            <a href={links.socials.linkedin} target="_blank">
              <FaLinkedin
                size="24px"
                className="opacity-60 hover:opacity-100"
              />
            </a>
            </div>
      </div>
      {/* Image div */}
      <div>
        <Image 
          src="/images/Hero.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
