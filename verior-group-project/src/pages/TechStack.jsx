import HeaderGradient from "../assets/HeaderGradient.png";
import Footer from '../components/Footer';
import Header from '../components/Header';
import acorigins from '../assets/tech/acorigins.jpg';
import airpods from '../assets/tech/airpods.jpg';
import ajazz from '../assets/tech/ajazz.webp';
import amie from '../assets/tech/amie.avif';
import applex from '../assets/tech/applex.jpg';
import books from '../assets/tech/books.jpg';
import brawl from '../assets/tech/brawl.png';
import chatgpt from '../assets/tech/chatgpt.png';
import chrome from '../assets/tech/chrome.jpg';
import discord from '../assets/tech/discord.png';
import duolingo from '../assets/tech/duolingo.png';
import eldenring from '../assets/tech/eldenring.jpg';
import expo from '../assets/tech/expo.png';
import figma from '../assets/tech/figma.png';
import forza from '../assets/tech/forza.jpg';
import framer from '../assets/tech/framer.png';
import gears from '../assets/tech/gears.jpg';
import github from '../assets/tech/github.png';
import gta from '../assets/tech/gta.jpg';
import lagkapten from '../assets/tech/lagkapten.jpg';
import logitech from '../assets/tech/logitech.jpg';
import macbookpro2017 from '../assets/tech/macbookpro2017.jpg';
import markus from '../assets/tech/markus.jpg';
import modern from '../assets/tech/modern.jpg';
import msi from '../assets/tech/msi.jpg';
import nextjs from '../assets/tech/nextjs.jpg';
import notion from '../assets/tech/notion.png';
import pocketcasts from '../assets/tech/pocketcasts.jpg';
import raycast from '../assets/tech/raycast.png';
import rdr from '../assets/tech/RDR.jpg';
import reacthook from '../assets/tech/reacthook.png';
import reactquery from '../assets/tech/reactquery.png';
import sanity from '../assets/tech/sanity.png';
import sekiro from '../assets/tech/sekiro.jpg';
import skyrim from '../assets/tech/skyrim.jpg';
import slack from '../assets/tech/slack.png';
import spark from '../assets/tech/spark.jpg';
import spotify from '../assets/tech/spotify.png';
import stardew from '../assets/tech/stardew.jpg';
import subbi from '../assets/tech/subbi.jpg';
import tailwind from '../assets/tech/tailwind.png';
import todoist from '../assets/tech/todoist.png';
import twitch from '../assets/tech/twitch.png';
import typescript from '../assets/tech/typescript.png';
import vercel from '../assets/tech/vercel.png';
import vscode from '../assets/tech/vscode.png';
import warp from '../assets/tech/warp.png';
import witcher from '../assets/tech/witcher.jpg';
import xbox from '../assets/tech/xbox.jpg';
import zod from '../assets/tech/zod.jpg';
import zustand from '../assets/tech/zustand.png';

const techStack = [
  { name: 'Figma', icon: figma, label: 'Design' },
  { name: 'Next.js', icon: nextjs, label: 'Web Framework' },
  { name: 'TailwindCSS', icon: tailwind, label: 'CSS' },
  { name: 'GitHub', icon: github, label: 'Version Control' },
  { name: 'Warp', icon: warp, label: 'Terminal' },
  { name: 'Vercel', icon: vercel, label: 'Deployment' },
  { name: 'VSCode', icon: vscode, label: 'Editor' },
  { name: 'Framer Motion', icon: framer, label: 'Animation' },
  { name: 'TypeScript', icon: typescript, label: 'Language' },
  { name: 'React Hook Form', icon: reacthook, label: 'Library' },
  { name: 'React Query', icon: reactquery, label: 'Server State' },
  { name: 'Zustand', icon: zustand, label: 'Global State' },
  { name: 'Zod', icon: zod, label: 'Validation' },
  { name: 'Expo', icon: expo, label: 'Mobile Framework' },
  { name: 'Sanity', icon: sanity, label: 'Headless CMS' },
];

const appsStack = [
  { name: 'Raycast', icon: raycast, label: 'Launcher' },
  { name: 'Todoist', icon: todoist, label: 'Productivity' },
  { name: 'Notion', icon: notion, label: 'Notes' },
  { name: 'Amie', icon: amie, label: 'Calendar' },
  { name: 'ChatGPT', icon: chatgpt, label: 'Productivity' },
  { name: 'Discord', icon: discord, label: 'Communication' },
  { name: 'Duolingo', icon: duolingo, label: 'Education' },
  { name: 'Books', icon: books, label: 'Education' },
  { name: 'Chrome', icon: chrome, label: 'Browser' },
  { name: 'Spark', icon: spark, label: 'Email' },
  { name: 'Spotify', icon: spotify, label: 'Music' },
  { name: 'Slack', icon: slack, label: 'Communication' },
  { name: 'Twitch', icon: twitch, label: 'Entertainment' },
  { name: 'Pocketcasts', icon: pocketcasts, label: 'Podcast' },
  { name: 'Subbi', icon: subbi, label: 'Utility' },
];

const hardwareStack = [
  { name: 'MacBook Pro 2017', icon: macbookpro2017 },
  { name: 'Logitech MX Master 2S', icon: logitech },
  { name: 'MSI G24-C4', icon: msi },
  { name: 'Ajazz AK33', icon: ajazz },
  { name: 'iPhone X', icon: applex },
  { name: 'AirPods 3', icon: airpods },
  { name: 'Xbox One X', icon: xbox },
  { name: 'Ikea LAGKAPTEN / OLOV', icon: lagkapten },
  { name: 'Ikea Marcus', icon: markus },
];

const gamesStack = [
  { name: 'Elden Ring', icon: eldenring },
  { name: 'Sekiro: Shadows Die Twice', icon: sekiro },
  { name: 'Stardew Valley', icon: stardew },
  { name: 'Forza Horizon 5', icon: forza },
  { name: 'GTA Online', icon: gta },
  { name: 'The Witcher 3', icon: witcher },
  { name: 'CoD Modern Warfare', icon: modern },
  { name: 'Brawl Stars', icon: brawl },
  { name: 'Skyrim', icon: skyrim },
  { name: 'Gears of War', icon: gears },
  { name: 'AC Origins', icon: acorigins },
  { name: 'RDR 2', icon: rdr },
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
    <div className="min-h-screen  text-black  dark:text-white px-4 md:px-12 mb-6 ">
      <div className="max-w-6xl mx-auto ">
        <h1 className="lg:text-[80px] text-5xl font-bold mb-2 mt-20 md:mt-32 px-4 md:px-16">Tech Stack</h1>
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
