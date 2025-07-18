import HeaderGradient from "../assets/HeaderGradient.png";
import Header from "./Header";
import heroImage from "../assets/heroImage.png";
const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${HeaderGradient})`,
        backgroundPosition: "center",
      }}
      className={`flex-1 flex flex-col items-center justify-center text-gray-900 dark:text-white bg-[center_top] lg:bg-[left_top] bg-no-repeat bg-cover`}
    >
      <div>
        <Header />
      </div>
      <div className="mt-72 md:mt-40 px-4 md:px-8  xl:px-36 2xl:px-64 flex flex-row items-center container">
        <div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#808080] ">
            Hi 👋{" "}
            <span>
              {" "}
              <br />{" "}
            </span>{" "}
            <span>I’m</span>{" "}
            <span className="text-[#181818] dark:text-white">Eihab Khan</span>{" "}
          </h1>
          <p className="leading-5 text-[#808080] font-medium text-[15px] lg:text-2xl">
            I am a front-end engineer and UI/UX designer helping startups turn
            their visions into a digital reality. I specialize in designing and
            building modern mobile and web-based apps.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row item-center gap-4">
          <button className="mt-12 dark:bg-[#1A1A1A] bg-[#131313] text-white rounded-[9px] py-4 px-8 font-medium text-lg w-full sm:w-[196px]">
            See my Resume
          </button>
          <button className="sm:mt-12 dark:bg-[#1A1A1A] bg-[#F3F3F3] text-[#181818] dark:text-[#808080] rounded-[9px] py-4 px-8 font-medium text-lg">
            Get in Touch
          </button>
        </div>
        </div>
        <div>
        <img
          src={heroImage}
          alt="Hero"
          className="rounded-t-full shadow-lg hidden lg:block w-[540px] h-[300px] object-cover"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
