
import ProjectData from '../components/ProjectsData'
import Frames from '../assets/Frames'
import Stars from '../assets/Stars.png'
import HeaderGradient from "../assets/HeaderGradient.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
const Projects = () => {
  return (
    <section 
    style={{
        backgroundImage: `url(${HeaderGradient})`,
        backgroundPosition: "top center",
				 backgroundSize: "100% 600px",
        
      }}
      className={`bg-[#fbfbfb] dark:bg-[#131313] flex-1 flex flex-col items-center justify-center text-gray-900 dark:text-white bg-[center_top] lg:bg-[left_top] bg-no-repeat bg-cover`}
    >
      <div>
        <Header />
      </div>
      <div className="mt-20 md:mt-32 px-4 md:px-8  xl:px-36 2xl:px-64  items-center mb-6 container">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Projects</h2>
        <p className="text-[#80808080] text-lg mb-12">Projects and ideas I’ve worked on</p>
 <div className="relative mb-12">
          <hr className="border-t dark:border-[#FFFFFF1A] border-[#0000001A]  border-opacity-25" />
        </div>
        <div className="space-y-12  ">
          {ProjectData.map((project, idx) => (
            <div
              key={idx}
              className=" dark:border-[#383737] border-[#EBEBEB] border-opacity-40 border-solid border-2 rounded-2xl p-6 md:p-10 flex  flex-col md:flex-row items-center md:items-start gap-8"
            >
              <div className="flex-1 mt-8">
                    <img src={project.image} alt="Subbi Icon" className="w-10 h-10 mb-4" />
                <h3 className="text-3xl  font-bold mb-4">{project.title}</h3>
                <p className="text-[#808080] mb-6">{project.description}</p>
                <button className="text-sm font-medium mt-[150px] max-sm:mt-[60px] dark:text-white text-black border-b flex dark:border-white border-black hover:opacity-80 transition-all">
                  {project.button} <img src={project.Arrow} alt="right arrow" className="ml-2" />
                </button> 
              </div>
              <div className="flex-shrink-0   max-md:hidden w-[400px] ">
                {project.img === "Frames" ? (
                <Frames/>)  :(
                <img 
                  src={project.img}
                  alt={project.imgAlt}
                  className="rounded-xl shadow-md  h-[500px] max-md:h-[100px] max-md:w-auto  "
                />)}
              </div>
            </div> 
          ))}
           <div
              className="dark:bg-[#1A1A1A] bg-[#F6F6F6] dark:border-[#383737] border-[#d4d2d2] border-opacity-25 border-dashed  border-8 rounded-2xl p-6 md:p-10 flex  flex-col md:flex-row items-center md:items-start gap-8"
            >
                  
              <div className="flex-1 mt-8 justify-center items-center flex flex-col">
                <img src={Stars} alt="" className="" />
                 <p className=" text-4xl font-bold">Your Projects Goes Here</p>
                 <p className="mt-5 text-[#808080]">let's turn your idea into a visual reality </p>
                   <div>
              <button className="mt-20 mb-20 px-10 py-2 max-sm:mt-10   border bg-black text-white border-white rounded-md  transition duration-300">
                ➤ Get in touch
              </button>
            </div>
              </div>
             
            </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Projects;
