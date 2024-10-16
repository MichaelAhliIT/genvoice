import Image from "next/image";
import Navbar from "../Navbar";
import InfoCard from "../InfoCard";

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
            Recent Projects
          </h1>
          <div className="hero h-1/2 w-full md:w-1/2 self-center">
            <div className="flex flex-col gap-2">
              <InfoCard
                title="Past Projects"
                desc="During my bachelor's degree, I completed two significant projects: my thesis and an internship. For my thesis, I developed a text classification system using Support Vector Machines (SVM). During my internship, I worked on developing a chatbot for automating customer service tasks. Besides that, I just created some personal website for my portfolio. I use React when I intern and i use NextJS for my thesis. at first, i don't know backend at all, even the very simple one. but my thesis requires me to make some backend and i learn about expressjs and next api. my first database is mongodb because it is very easy to use and a non-relational database. after that, i learn about another database such as Redis and Amazon DynamoDB."
              />
              <InfoCard
                title="Thesis Project"
                desc="I did my thesis project with one of my friends, where I developed a text classifier to score the leads score and my friend do the chatbot for answering questions. The leads score determines how likely a user is to be converted into a sale. I analyzed several classification algorithms, including Linear Regression, K-Nearest Neighbors, Random Forest, SVM, and Naive Bayes. I used the scikit-learn library, adjusting the hyperparameters accordingly. The main challenge was that my dataset was quite small (around 1,000 entries). However, the results showed that SVM performed the best, with an average accuracy of over 80%."
              />
              <InfoCard
                title="My Interest"
                desc="I have a strong preference for frontend development, enjoying the creativity and user interaction involved in building engaging interfaces. However, I’m also comfortable handling backend tasks when necessary. During my thesis, I developed a keen interest in AI, particularly chatbots, finding the experience both fun and rewarding. It sparked my curiosity about AI's potential to automate tasks and enhance user experiences."
              />
            </div>
          </div>
        </div>

        {/* End of Home Page Component */}
      </div>
    </>
  );
};

export default PersonalPage;
