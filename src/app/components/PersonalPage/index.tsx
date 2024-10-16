import Image from "next/image";
import Navbar from "../Navbar";

const PersonalPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-full bg-dark text-purple-400 py-10 pt-20"
        id="about"
      >
        {/* Home Page Component */}
        <div className="flex flex-col px-10 w-full h-full gap-10">
          <div className="hero h-1/2 w-full md:w-1/2 border-b border-teal self-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image src="/mekel.png" width={300} height={300} alt="me" />
              <div>
                <h1 className="text-5xl font-bold text-white">
                  Michael Wijaya
                </h1>
                <p className="py-6">
                  I'm a Junior Website Developer. My projects usually use NextJS
                  or ReactJS and Tailwind CSS. I like to add a little animation
                  effect using AnimeJS. Hope you guys like my works.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center self-center w-full md:w-1/2 gap-5 border-b border-teal pb-5">
            <h1 className="text-2xl font-bold md:text-5xl">Skills</h1>
            <div className="flex flex-col flex-wrap items-center md:h-44 gap-3 text-white ">
              <div className="gap-5 self-start">
                <h2>Javascript</h2>
                <progress
                  className="progress progress-secondary w-56 bg-white"
                  value="80"
                  max="100"
                ></progress>
              </div>
              <div className="gap-5 self-start">
                <h2>Typescript</h2>
                <progress
                  className="progress progress-secondary w-56 bg-white"
                  value="65"
                  max="100"
                ></progress>
              </div>
              <div className="gap-5 self-start">
                <h2>ReactJS</h2>
                <progress
                  className="progress progress-secondary w-56 bg-white"
                  value="70"
                  max="100"
                ></progress>
              </div>
              <div className="gap-5 self-start">
                <h2>NextJS</h2>
                <progress
                  className="progress progress-secondary w-56 bg-white"
                  value="65"
                  max="100"
                ></progress>
              </div>
              <div className="gap-5 self-start">
                <h2>TailwindCSS</h2>
                <progress
                  className="progress progress-secondary w-56 bg-white"
                  value="85"
                  max="100"
                ></progress>
              </div>
              <div className="gap-5 self-start">
                <h2>AnimeJS</h2>
                <progress
                  className="progress progress-secondary w-56 bg-white"
                  value="25"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <h1 className="w-full text-center text-5xl text-purple-400 font-semibold">
            Personal Life
          </h1>
          <div className="hero h-1/2 w-full md:w-1/2 border-b border-teal self-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
              {/* <Image src="/mekel.png" width={400} height={400} alt="me" /> */}
              <div>
                <h1 className="text-5xl font-bold text-white">
                  Michael Wijaya
                </h1>
                <p className="py-6">
                  I'm a Junior Website Developer. My projects usually use NextJS
                  or ReactJS and Tailwind CSS. I like to add a little animation
                  effect using AnimeJS. Hope you guys like my works.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* End of Home Page Component */}
      </div>
    </>
  );
};

export default PersonalPage;
