import Signature from '../assets/Signature';
import Shape from '../assets/Shape';
import Header from '../components/Header';
import HeaderGradient from "../assets/HeaderGradient.png";
import Footer from '../components/Footer';
const About = () => {
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
    <div className="min-h-screen mt-20 md:mt-32 dark:text-gray-400 text-gray-500 px-8 md:px-24 mb-6 container">
      <div className="max-w-[990px] container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-black">A little bit about me</h1>
        <p className="dark:text-gray-400 text-black font-bold text-lg mb-12">Who I am and what I do.</p>

       
        <div className="relative mb-12">
          <hr className="border-t border-gray-500 border-opacity-25" />
        </div>
          
        <div className="grid md:grid-cols-2 gap-8  ">
        
          <div className="order-1 md:order-2 flex justify-center items-start mt-0 ">
            <Shape />
          </div>

         
          <div className="order-2 md:order-1 space-y-8">
           
            <div>
              <h3 className="text-sm dark:text-gray-500 text-black tracking-widest mb-2 font-bold">WHO I AM</h3>
              <p className="text-lg">
                I'm <span className="font-semibold dark:text-white">Ehab</span> (Pronounced "Ee-hab") a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.
              </p>
            </div>

           
            <div>
              <h3 className="text-sm dark:text-gray-500 text-black tracking-widest  mb-2 font-bold">WHAT I DO</h3>
              <p className="text-lg">
                With two years of invaluable experience in my role at Harmony Technology — a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice.
              </p>
            </div>

          
            <div>
              <h3 className="text-sm  dark:text-gray-500 text-black tracking-widest mb-2 font-bold">WHAT I DID</h3>
              <p className="text-lg">
                Before delving into the realm of front end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles.
              </p>
            </div>

           
            <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <p>
                Feel free to reach out via <a href="mailto:ehab@example.com" className="underline dark:text-white text-black">e-mail</a>, or follow me on <a href="https://twitter.com" className="underline dark:text-white text-black">Twitter</a>. Want to see where I’ve worked? Check out my <a href="#" className="underline dark:text-white text-black">Resume</a>, or connect with me on <a href="https://linkedin.com" className="underline dark:text-white text-black">LinkedIn</a>.
              </p>

              <p className="pt-6 italic text-white">Let’s build something great,</p>
              <p className="text-2xl font-signature"><Signature /></p>
            </div>

           
            <div>
              <button className="mt-2 px-2 py-2 border bg-black text-white border-white rounded-md  transition duration-300">
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

export default About;

