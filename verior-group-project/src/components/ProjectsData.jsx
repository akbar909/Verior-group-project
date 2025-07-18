
import Subbi from '../assets/Subbi.png';
import Iphone14 from '../assets/iPhone14.png'
import Arrow from '../assets/ArrowRight.png'
import ReactDoc from '../assets/ReactDocs.png'
import IpadPencil from '../assets/IpadPencil.png'
import StoryIcon from '../assets/StorybookIcon.png'
import Browser from '../assets/browser.png'
import Parrottxt from '../assets/Parrotxt.png'

const ProjectData = [
  {
    title: "Subbi — The free subscriptions manager",
    description:
      "Subbi is a side project that I’ve built to help me keep track of how much I spend on subscriptions and also to prevent the 'accidental bill' after a 14-day trial ends. It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Cards, Bank Cards, and many more.",
    button: "Download App" ,
    Arrow:Arrow,
     image: Subbi,
    img:Iphone14,
    imgAlt: "Subbi App Preview",
  },
  {
    title: "React Documentation",
    description:
      "With the release of the new React website on March 16, there was a need for localization to make the documentation accessible to Arabic-speaking developers. I contributed to translating several documents, worked with great developers, improved my ability to write better PR requests, and as a side effect, I now know more about the Arabic grammar.",
       button: "Visit Site" ,
    Arrow:Arrow,
     image: ReactDoc ,
    img:IpadPencil,
    imgAlt: "react docs Preview",
  },
   {
    title: "StoryBook Documentation",
    description:
      "This was my very first OSS contribution, I contributed to translating the documentation of Storybook into Arabic, enabling a wider audience to access and understand the resources available. I gained valuable experience in working effectively with teams and navigating the pull request process.",
       button: "Visit Site" ,
    Arrow:Arrow,
     image: StoryIcon ,
    img:Browser,
    imgAlt: "story book Preview",
  },
   {
    title: "StoryBook Documentation",
    description:
      "Lorem Ipsum is Not Professional, use Parrotxt to generate real text for your design. This was my first product I launched on Product Hunt",
       button: "Visit Site" ,
    Arrow:Arrow,
     image: Parrottxt ,
    img: "Frames",
    imgAlt: "story book Preview",
  },
];
export default ProjectData;