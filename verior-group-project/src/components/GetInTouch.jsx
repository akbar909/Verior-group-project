import { SendHorizontal } from "lucide-react";

const GetInTouch = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 xl:px-36 2xl:px-64 container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] mx-auto gap-8 md:gap-0">
        <div className="flex-1 flex flex-col items-center gap-2 text-center md:items-start">
          <h2 className="text-[32px] md:text-4xl lg:text-5xl font-bold  text-[#181818] dark:text-white">
            Let’s work together
          </h2>
          <p className="text-[#80808080] text-base lg:text-xl md:text-lg font-normal max-w-md md:max-w-lg md:text-left">
            Want to discuss an opportunity to create something great? I’m ready
            when you are.
          </p>
        </div>
        <div className="w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-[#131313] dark:bg-[#1A1A1A] text-white  rounded-[9px] font-medium text-lg  shadow-md hover:bg-[#23232a] dark:hover:bg-[#e5e5e5] transition-all border border-transparent"
          >
            <SendHorizontal className="w-5 h-5" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
