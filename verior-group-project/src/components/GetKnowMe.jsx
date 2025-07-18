import { Link } from "react-router-dom";
import face from "../assets/Aboutme.png";
import book from "../assets/Notebook.png";
import bookshelf from "../assets/bookshelf.png";
import tech from "../assets/techstack.png";
const GetKnowMe = () => {
  const pagesData = [
    {
      id: 1,
      title: "About Me",
      description: "Who I am and what I do",
      link: "/about",
      image: face,
    },
    {
      id: 2,
      title: "Notebook",
      description: "My thoughts, insights, and reflections",
      link: "/notebook",
      image: book,
    },
    {
      id: 3,
      title: "Bookshelf",
      description: "Books and pieces of wisdom I’ve enjoyed reading",
      link: "/bookshelf",
      image: bookshelf,
    },
    {
      id: 4,
      title: "Tech Stack",
      description: "The dev tools, apps, devices, and games I use and play.",
      link: "/tech-stack",
      image: tech,
    },
  ];
  return (
    <div className=" container mx-auto py-16 px-4 md:px-8 xl:px-36 2xl:px-64 text-[#181818] dark:text-white">
      <h1 className="font-bold text-4xl md:text-5xl mb-8 md:mb-10">
        Get to know me
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
        {pagesData.map((page) => (
          <Link
            key={page.id}
            to={page.link}
            className="flex flex-col items-center justify-between bg-[#EBEBEB] dark:bg-[#1A1A1A] border border-[#23232a]/10 dark:border-[#23232a]/30 rounded-[32px] shadow-sm transition-all w-full h-auto"
            tabIndex={0}
          >
            <div className="w-full flex flex-col items-center gap-2 pt-8 px-4 md:pt-12 md:px-8">
              <h2 className="text-xl md:text-2xl font-bold text-center mb-1">
                {page.title}
              </h2>
              <p className="text-[#808080] text-center text-base md:text-lg font-normal">
                {page.description}
              </p>
            </div>
            <div className="flex items-end justify-center flex-1 w-full">
              <img
                src={page.image}
                alt={page.title}
                className="object-contain overflow-hidden mx-auto w-full max-w-[504px] h-auto aspect-[4/3] rounded-b-[32px]"
              />
            </div>
          </Link>

        ))}
      </div>
    </div>
  );
};

export default GetKnowMe;
