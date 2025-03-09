import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between p-12 mx-12 md:mx-60 gap-10">
      {/* Hero Content div */}
      <div className="mb-6 flex flex-col gap-y-2 text-center md:text-start">
            <h1 className="text-4xl font-bold">Satyam Kumar</h1>
            <h2 className="text-lg font-medium">Full Stack Engineer</h2>
            <p>
              Hi! I'm a Pre-final year Engineering Grad
            </p>
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
