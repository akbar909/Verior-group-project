import Header from "../components/Header/";
import Hero from "../components/Hero";
import HomeProject from "../components/HomeProject";
function Home() {
  return (
    <div className={`bg-[#fbfbfb] dark:bg-[#131313]`}>
      <Hero />
      <HomeProject />
    </div>
  );
}

export default Home;
