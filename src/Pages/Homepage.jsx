import Navbar from "../Compnents/Navbar";
import Hero from "../Compnents/Hero";
import CardList from "../Compnents/CardList";
import Banner from "../Compnents/Banner";
import Sale from "../Compnents/Sale";
import Fotter from "../Compnents/Fotter";
import NewsLetter from "../Compnents/NewsLetter";
const Homepage = () => {
  return (
    <div>
      <Hero
        className={"text-white bg-black w-36 h-10 rounded-2xl"}
        url={"https://media.timeout.com/images/105672421/image.jpg"}
        showbtn={true}
        btntext={"Explore"}
        showbtn2={true}
        btntext2={"Sale"}
      ></Hero>
      <Banner
        head={"Trending vinyls "}
        par={"check out the latest trending vinyls across all genres"}
      ></Banner>
      <CardList></CardList>
      <Sale></Sale>
    </div>
  );
};

export default Homepage;
