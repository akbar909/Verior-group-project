import React from 'react';
import HeaderGradient from "../assets/HeaderGradient.png";
import Header from '../components/Header';
import Footer from '../components/Footer';
const techStack = [
  { name: 'Figma', icon: '/src/assets/tech/figma.png', label: 'Design' },
  { name: 'Next.js', icon: '/src/assets/tech/nextjs.jpg', label: 'Web Framework' },
  { name: 'TailwindCSS', icon: '/src/assets/tech/tailwind.png', label: 'CSS' },
  { name: 'GitHub', icon: '/src/assets/tech/github.png', label: 'Version Control' },
  { name: 'Warp', icon: '/src/assets/tech/warp.png', label: 'Terminal' },
  { name: 'Vercel', icon: '/src/assets/tech/vercel.png', label: 'Deployment' },
  { name: 'VSCode', icon: '/src/assets/tech/vscode.png', label: 'Editor' },
  { name: 'Framer Motion', icon: '/src/assets/tech/framer.png', label: 'Animation' },
  { name: 'TypeScript', icon: '/src/assets/tech/typescript.png', label: 'Language' },
  { name: 'React Hook Form', icon: '/src/assets/tech/reacthook.png', label: 'Library' },
  { name: 'React Query', icon: '/src/assets/tech/reactquery.png', label: 'Server State' },
  { name: 'Zustand', icon: '/src/assets/tech/zustand.png', label: 'Global State' },
  { name: 'Zod', icon: '/src/assets/tech/zod.jpg', label: 'Validation' },
  { name: 'Expo', icon: '/src/assets/tech/expo.png', label: 'Mobile Framework' },
  { name: 'Sanity', icon: '/src/assets/tech/sanity.png', label: 'Headless CMS' },
];

const appsStack = [
  { name: 'Raycast', icon: '/src/assets/tech/raycast.png', label: 'Launcher' },
  { name: 'Todoist', icon: '/src/assets/tech/todoist.png', label: 'Productivity' },
  { name: 'Notion', icon: '/src/assets/tech/notion.png', label: 'Notes' },
  { name: 'Amie', icon: '/src/assets/tech/amie.avif', label: 'Calendar' },
  { name: 'ChatGPT', icon: '/src/assets/tech/chatgpt.png', label: 'Productivity' },
  { name: 'Discord', icon: '/src/assets/tech/discord.png', label: 'Communication' },
  { name: 'Duolingo', icon: '/src/assets/tech/duolingo.png', label: 'Education' },
  { name: 'Books', icon: '/src/assets/tech/books.jpg', label: 'Education' },
  { name: 'Chrome', icon: '/src/assets/tech/chrome.jpg', label: 'Browser' },
  { name: 'Spark', icon: '/src/assets/tech/spark.jpg', label: 'Email' },
  { name: 'Spotify', icon: '/src/assets/tech/spotify.png', label: 'Music' },
  { name: 'Slack', icon: '/src/assets/tech/slack.png', label: 'Communication' },
  { name: 'Twitch', icon: '/src/assets/tech/twitch.png', label: 'Entertainment' },
  { name: 'Pocketcasts', icon: '/src/assets/tech/pocketcasts.jpg', label: 'Podcast' },
  { name: 'Subbi', icon: '/src/assets/tech/subbi.jpg', label: 'Utility' },
];

const hardwareStack = [
  { name: 'MacBook Pro 2017', icon: '/src/assets/tech/macbookpro2017.jpg' },
  { name: 'Logitech MX Master 2S', icon: '/src/assets/tech/logitech.jpg' },
  { name: 'MSI G24-C4', icon: '/src/assets/tech/msi.jpg' },
  { name: 'Ajazz AK33', icon: '/src/assets/tech/ajazz.webp' },
  { name: 'iPhone X', icon: '/src/assets/tech/applex.jpg' },
  { name: 'AirPods 3', icon: '/src/assets/tech/airpods.jpg' },
  { name: 'Xbox One X', icon: '/src/assets/tech/xbox.jpg' },
  { name: 'Ikea LAGKAPTEN / OLOV', icon: '/src/assets/tech/lagkapten.jpg' },
  { name: 'Ikea Marcus', icon: '/src/assets/tech/markus.jpg' },
];

const gamesStack = [
  { name: 'Elden Ring', icon: '/src/assets/tech/eldenring.jpg' },
  { name: 'Sekiro: Shadows Die Twice', icon: '/src/assets/tech/sekiro.jpg' },
  { name: 'Stardew Valley', icon: '/src/assets/tech/stardew.jpg' },
  { name: 'Forza Horizon 5', icon: '/src/assets/tech/forza.jpg' },
  { name: 'GTA Online', icon: '/src/assets/tech/gta.jpg' },
  { name: 'The Witcher 3', icon: '/src/assets/tech/witcher.jpg' },
  { name: 'CoD Modern Warfare', icon: '/src/assets/tech/modern.jpg' },
  { name: 'Brawl Stars', icon: '/src/assets/tech/brawl.png' },
  { name: 'Skyrim', icon: '/src/assets/tech/skyrim.jpg' },
  { name: 'Gears of War', icon: '/src/assets/tech/gears.jpg' },
  { name: 'AC Origins', icon: '/src/assets/tech/acorigins.jpg' },
  { name: 'RDR 2', icon: '/src/assets/tech/RDR.jpg' },
];

const CardGrid = ({ title, items }) => (
  <>
    <h2
  className="text-2xl md:text-3xl font-bold mb-6 mt-16 px-4 md:px-16 text-[#C5C5C5] dark:text-[#808080]"
>
  {title}
</h2>


    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="w-[358px] h-[86px] md:w-[330px] md:h-[300px] rounded-2xl p-4 md:p-6 hover:scale-105  flex flex-row md:flex-col items-center md:justify-between
            bg-[#F3F3F3] border border-[#EBEBEB] dark:bg-[#181818] dark:border-[#383737]"
        >
          <div className="flex-shrink-0 md:flex-1 flex items-center justify-center md:justify-center">
            <img
              src={item.icon}
              alt={item.name}
              className="w-[73.68px] h-[73.68px] md:w-[96px] md:h-[96px] object-contain rounded-md"
            />
          </div>
          <div className="ml-4 md:ml-0 mt-0 md:mt-6 flex flex-row items-center justify-between w-full gap-2">
            <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
            {(title === 'Dev & Design' || title === 'Apps') && item.label && (
              <span className="text-xs bg-[#ffffff]/70 border border-[#ffffff]/70 text-[#808080] px-3 py-1 rounded-full dark:text-[#808080] dark:bg-[#181818] dark:border-[#272525]">
                {item.label}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </>
);

const TechStack = () => {
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
    <div className="min-h-screen  text-black  dark:text-white px-4 py-12 md:px-12 mb-6 ">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 mt-20 md:mt-32 px-4 md:px-16 ">Tech Stack</h1>
        <p className="text-lg px-4 md:px-16 mb-12 text-[#808080]/50 dark:text-[#808080]/50">
          The dev tools, apps, devices, and games I use and play.
        </p>

        <CardGrid title="Dev & Design" items={techStack} />
        <CardGrid title="Apps" items={appsStack} />
        <CardGrid title="Hardware" items={hardwareStack} />
        <CardGrid title="Games" items={gamesStack} />
      </div>
    </div>
    <Footer />
    </section>
  );
};

export default TechStack;
