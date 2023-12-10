import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { vinylData } from "./vinyldata";
import Card from "./Card";

const Rec = () => {
  const [recommendedVinyls, setRecommendedVinyls] = useState([]);

  useEffect(() => {
    const getRandomVinyls = (num) => {
      const randomVinyls = [];
      while (randomVinyls.length < num) {
        const randomIndex = Math.floor(Math.random() * vinylData.length);
        const randomVinyl = vinylData[randomIndex];
        if (!randomVinyls.includes(randomVinyl)) {
          randomVinyls.push(randomVinyl);
        }
      }
      return randomVinyls;
    };

    const recommendations = getRandomVinyls(4);
    setRecommendedVinyls(recommendations);
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {recommendedVinyls.map((vinyl) => (
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
      ))}
    </div>
  );
};

export default Rec;
