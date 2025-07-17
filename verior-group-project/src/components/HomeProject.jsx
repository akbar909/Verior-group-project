import subbi from "../assets/Subbi.png"
import react from "../assets/react.png";
import frame from "../assets/Frame2052.png";
import iphone from "../assets/iPhone14.png";
import ipad from "../assets/IpadPro.png"
import StorybookDocs from "../assets/StorybookDocs.png";
import { MoveRight } from 'lucide-react';
const HomeProject = () => {
  const projectData = [
    {
      id: 1,
      icon: subbi,
      title: "Subbi – The free subscriptions manager",
      description: "Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and many more.",
      link: "https://example.com/project-one",
      image: iphone,
    },
    {
      id: 2,
      icon: react,
      title: "React Documentation",
      description: "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documentation, worked with great developers, Improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
      link: "https://example.com/project-two",
      image: ipad,
    },
    {
      id: 3,
      icon: frame,
      title: "Storybook Documentation",
      description: "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
      link: "https://example.com/project-three",
      image: StorybookDocs,
    },
  ];
  return (
    <div className="container mx-auto mt-12">
      <div className="mx-auto py-16 px-4 md:px-8  xl:px-36 2xl:px-64">
        <h2 className="text-[32px] md:text-5xl font-bold mb-8 text-[#181818] dark:text-white">Selected Work</h2>
        <div className="flex flex-col gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="flex flex-row items-center
              md:items-stretch bg-[#EBEBEB] dark:bg-[#1A1A1A] border border-[#23232a]/10 dark:border-[#23232a]/30 rounded-[32px]
              w-full mx-auto  gap-4"
            >
              <div className="flex-1 flex flex-col gap-4 justify-center  lg:max-w-[60%] w-full h-full py-8 px-6 lg:px-14">
                <div className="flex flex-col gap-4">
                  <img src={project.icon} alt="icon" className="w-[70px] h-[70px] rounded-2xl mr-4" />
                  <h3 className="text-xl md:text-[32px] font-extrabold text-[#181818] dark:text-white">{project.title}</h3>
                </div>
                <p className="text-[#808080] text-base md:text-lg font-normal">{project.description}</p>
                <a
                  href={project.link}
                  className="flex items-center gap-2 mt-16 lg:mt-24 xl:mt-28 text-[#181818] dark:text-white font-medium text-[18px]  md:text-lg hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <MoveRight className="w-6 h-6" />
                </a>
              </div>
              <div className="hidden lg:flex w-[457px] h-[565px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain md:rounded-[32px] rounded-[24px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
