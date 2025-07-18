import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaBehance, FaDribbble } from 'react-icons/fa';
import HeaderGradient from "../assets/HeaderGradient.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function ContactPage() {
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

    <section className="min-h-screen w-full flex flex-col items-center justify-center mt-24 md:mt-40 px-4 md:px-12 xl:px-36 2xl:px-64 mb-6">
      <div className="w-full max-w-[990px]">
        <h1
          className="font-inter font-bold text-[80px] leading-[1] align-bottom mb-2 text-left text-black dark:text-white"
          
        >
          Get in touch
        </h1>
        <p
          className="font-inter font-normal text-[24px] leading-[1] mb-8 text-left"
          style={{ letterSpacing: '-0.019em', color: '#80808078' }}
        >
          Let's build something awesome.
        </p>
        <div className="w-full  flex justify-center">
          <hr className="w-full" style={{ border: '1px solid #FFFFFF0F', opacity: 1, margin: '24px 0' }} />
        </div>
        <ContactForm />
        <div className="flex justify-center gap-8 mt-12 mb-4">
          <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl transition"><FaEnvelope /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl transition"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl transition"><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl transition"><FaTwitter /></a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl transition"><FaDiscord /></a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl transition"><FaBehance /></a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl transition"><FaDribbble /></a>
        </div>
      </div>
    </section>
    <Footer />
    </section>
  );
}
