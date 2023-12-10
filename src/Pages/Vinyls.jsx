import React, { useState } from "react";
import { Link } from "react-router-dom";
import { vinylData } from "../Compnents/vinyldata";
import Card from "../Compnents/Card";
import Hero from "../Compnents/Hero";
import Search from "../Compnents/Search";
import { Element } from "react-scroll";
const Vinyls = () => {
  const [filteredVinyls, setFilteredVinyls] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleFilteredResults = (filteredResults) => {
    setFilteredVinyls(filteredResults);
    setSearched(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        className="text-white bg-black w-52 h-16 rounded-3xl"
        showbtn3={true}
        btntext3={"Check Top Trending Vinyls"}
        url={
          "https://www.christiesrealestate.com/blog/wp-content/uploads/2022/09/RESIZED-BANNER-2-ALAMY-HGXH7Y.jpg"
        }
      ></Hero>
      <Element name="vinyls">
        <Search onFilter={handleFilteredResults} />
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {searched && filteredVinyls.length > 0 ? (
            filteredVinyls.map((vinyl) => (
              <Link to={`/albumdetails/${vinyl.id}`} key={vinyl.id}>
                <div>
                  <Card
                    src={vinyl.src}
                    artist={vinyl.artist}
                    album={vinyl.album}
                    price={vinyl.price}
                    id={vinyl.id}
                  />
                </div>
              </Link>
            ))
          ) : searched && filteredVinyls.length === 0 ? (
            <p className="h-screen">No results found</p>
          ) : null}
        </div>
      </Element>
    </div>
  );
};

export default Vinyls;
