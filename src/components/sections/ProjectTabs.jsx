"use client";
import { Tabs } from "../ui/tabs";
import { LinkPreview } from "../ui/link-preview";

export function ProjectTabs() {
  const tabs = [
    {
      title: "Editr",
      value: "editr",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <LinkPreview url="https://editr.satyamkumar.me/" className="text-white">Editr</LinkPreview>
          <ProjectImage src="/images/projects/editr.png" />
        </div>
      ),
    },
    {
      title: "Quizzly",
      value: "quizzly",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <LinkPreview url="https://quizzly-beta.vercel.app/" className="text-white">Quizzly</LinkPreview>
          <ProjectImage src="/images/projects/quizzly.png" />
        </div>
      ),
    },
    {
        title: "Campus Cart",
        value: "campus-cart",
        content: (
          <div
            className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <LinkPreview url="https://skumr20-cart.vercel.app/" className="text-white">Campus Cart</LinkPreview>
            <ProjectImage src="/images/projects/campuscart.png" />
          </div>
        ),
      }, 
  ];

  return (
    <div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

// Define common fn - takes in image src as prop
const ProjectImage = ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt}
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };
  
