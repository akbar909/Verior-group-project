import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaBehance, FaDribbble } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <h1
          className="font-inter font-bold text-[80px] leading-[1] align-bottom mb-2 text-left text-black"
          style={{ letterSpacing: '0em', color: '#FFFFFF' }}
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
  );
}
