import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import github from "../assets/Github.png";
import githubDark from "../assets/githubDark.png";
import linkedin from '../assets/Group.png';
import LinkedinDark from '../assets/linked.png';
import logo from '../assets/Logo.png';
import logoDark from '../assets/LogoDark.png';
import xlogo from '../assets/xlogo.png';
import { useTheme } from '../context/ThemeContext';
const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMore = () => setIsMoreOpen(!isMoreOpen);

  const menu = [
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/projects' },
    { label: 'Notebook', href: '/notebook' },
    { label: 'Contact', href: '/contact' },
    {
      label: 'More',
      children: [
        { label: 'Bookshelf', href: '/bookshelf' },
        { label: 'Tech Stack', href: '/tech-stack' },
        { label: 'This UI Kit', href: '/ui-kit' }
      ]
    }
  ];

  return (
    <header className="w-full z-50 sticky top-0 mt-0 md:mt-8">
      <nav
        className="flex items-center justify-between w-full h-auto p-2 md:bg-white/25 md:dark:bg-[#18181d]/30 md:mx-auto mt-8 md:w-[700px] lg:w-[1000px] md:transition-all md:duration-300 md:ease-in-out md:h-[60px] md:rounded-xl md:p-4 md:backdrop-blur-md"
      >
        <div className='flex items-center gap-10'>

        <div className="bg-none">
          {theme === 'dark' ? (
            <img src={logoDark} alt="Logo" className="w-[39.87px] h-[26px]" />
          ) : ( 
            <>
            <img src={logo} alt="Logo" className="w-[39.87px] h-[26px] hidden md:flex" />
            <img src={logoDark} alt="Logo" className="w-[39.87px] h-[26px] md:hidden" />
            </>
          )}
        </div>
        <div className="hidden md:flex items-center space-x-6 font-medium text-[#181818]  dark:text-[#c5c5c5]">
          {menu.map((item) =>
            item.children ? (
              <div className="relative" key={item.label}>
                <button
                  onClick={toggleMore}
                  className="flex items-center text-base transition"
                  type="button"
                >
                  {item.label}
                  <ChevronDown className={`ml-1 mt-1 w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMoreOpen && (
                  <div className="absolute top-full -right-4 mt-[18px] w-[133px] h-[121px] bg-white/25 dark:bg-[#18181d]/30 backdrop-blur-sm shadow-sm rounded-b-lg overflow-hidden z-20">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block text-center px-2 py-2 text-base text-[#23232a] dark:text-[#e5e5e5] transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="text-base font-medium transition"
              >
                {item.label}
              </Link>
            )
          )}
          <Link to="https://linkedin.com" target="_blank" className="">
            {theme === 'dark' ? (
              <img src={LinkedinDark} alt="LinkedIn" className="w-6 h-6" />
            ) : (
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            )}
          </Link>
          <a href="https://x.com" target="_blank" className="">
            <img src={xlogo} alt="x" className="w-6 h-6" />
          </a>
          <a href="https://github.com" target="_blank" className="">
            {theme === 'dark' ? (
              <img src={githubDark} alt="github" className="w-6 h-6" />
            ) : (
              <img src={github} alt="github" className="w-6 h-6 " />
            )}
          </a>
    
          <button onClick={toggleTheme} className=" transition" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
