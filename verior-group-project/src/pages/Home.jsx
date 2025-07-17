import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import GetKnowMe from "../components/GetKnowMe";
import Header from "../components/Header/";
import Hero from "../components/Hero";
import HomeProject from "../components/HomeProject";
function Home() {
  return (
    <div className={`bg-[#fbfbfb] dark:bg-[#131313]`}>
      <Hero />
      <HomeProject />
      <GetKnowMe />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default Home;
