import { Briefcase, Home, Mail, Menu, Pencil, User } from "lucide-react";
import { Link } from "react-router-dom";
import FooterGradient from "../assets/FooterGradient.png";
import logo from "../assets/Logo.png";
import logoDark from "../assets/LogoDark.png";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const footerLinks = [
    { label: "About", to: "/about" },
    { label: "Work", to: "/projects" },
    { label: "Tech Stack", to: "/tech-stack" },
    { label: "Contact", to: "/contact" },
  ];
  const elsewhereLinks = [
    { label: "Email", href: "mailto:eihab@example.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Discord", href: "https://discord.com" },
  ];
  return (
    <footer
      className={
        `w-full  border-t border-t-[#0000001A] dark:border-t-[#FFFFFF1A] pt-12 pb-6 py-16 text-[#181818] dark:text-white relative overflow-hidden`
      }
    >
      <div
        className="absolute left-0 right-0 top-0 w-full h-full z-0 bg-no-repeat bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${FooterGradient})` }}
      />
      <div className="relative z-10 px-4 md:px-28 lg:px-8 xl:px-24  container  max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-0">
        <div className="flex flex-col items-start gap-2 flex-1 lg:max-w-[33%]">
          <div className="bg-none">
            {theme === "dark" ? (
              <img src={logoDark} alt="Logo" className="w-[92px] h-[60px]" />
            ) : (
              <>
                <img src={logo} alt="Logo" className="w-[92px] h-[60px]" />
              </>
            )}
          </div>
          <div className="text-sm font-medium mb-2 text-[#0D0D0D] dark:text-[#FFFFFF42]">
            Thanks for stopping by ッ
          </div>
          <div className="text-sm font-normal text-[#0D0D0D] dark:text-[#FFFFFF42] mb-24 lg:mb-0 lg:mt-24">
            © 2023 Eihab Khan. All Rights Reserved.
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-12 flex-1 justify-between lg:justify-center lg:max-w-[33%]">
          <div>
            <div className="font-bold text-base mb-4">Links</div>
            <ul className="space-y-4 ">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:underline font-normal text-base "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold text-base mb-4">Elsewhere</div>
            <ul className="space-y-4">
              {elsewhereLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:underline font-normal  text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-[510px] md:hidden flex justify-center backdrop-blur-sm">
        <div className="flex w-full justify-between items-center bg-[#18181D4D] dark:bg-[#18181D99] rounded-2xl px-3 py-2 shadow-xl backdrop-blur-md border border-[#23232a]/20">
          <a
            href="#home"
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFFFFF1A] text-white"
          >
            <Home className="w-6 h-6" />
          </a>
          <a
            href="#about"
            className="flex items-center justify-center w-12 h-12 rounded-xl text-white"
          >
            <User className="w-6 h-6" />
          </a>
          <a
            href="#work"
            className="flex items-center justify-center w-12 h-12 rounded-xl text-white"
          >
            <Briefcase className="w-6 h-6" />
          </a>
          <a
            href="#notebook"
            className="flex items-center justify-center w-12 h-12 rounded-xl text-white"
          >
            <Pencil className="w-6 h-6" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center w-12 h-12 rounded-xl text-white"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="#menu"
            className="flex items-center justify-center w-12 h-12 rounded-xl text-white"
          >
            <Menu className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
